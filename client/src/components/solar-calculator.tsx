import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calculator, DollarSign, Leaf, Zap, TreePine } from "lucide-react";

interface CalculationResults {
  systemSize: number;
  panelCount: number;
  energyGeneration: number;
  monthlySavings: number;
  annualSavings: number;
  twentyYearSavings: number;
  co2Reduction: number;
  treesEquivalent: number;
}

export default function SolarCalculator() {
  const [roofSize, setRoofSize] = useState(1000);
  const [location, setLocation] = useState("medium");
  const [electricBill, setElectricBill] = useState(150);
  const [results, setResults] = useState<CalculationResults | null>(null);

  const calculateSolar = () => {
    // Solar efficiency factors by location
    const efficiencyFactors = {
      'high': 1.4,    // High sun areas
      'medium': 1.2,  // Medium sun areas  
      'low': 1.0      // Lower sun areas
    };
    
    const efficiency = efficiencyFactors[location as keyof typeof efficiencyFactors] || 1.2;
    
    // Calculate system specifications
    const systemSize = Math.round((roofSize * 0.01) * efficiency * 10) / 10; // kW
    const panelCount = Math.ceil(systemSize / 0.32); // Assuming 320W panels
    const annualGeneration = Math.round(systemSize * 1200 * efficiency); // kWh per year
    
    // Calculate financial savings (assuming $0.12 per kWh average)
    const kwhRate = 0.12;
    const annualSavings = Math.round(annualGeneration * kwhRate);
    const monthlySavings = Math.round(annualSavings / 12);
    const twentyYearSavings = annualSavings * 20;
    
    // Calculate environmental impact
    const co2ReductionPerYear = Math.round((annualGeneration * 0.0007) * 10) / 10; // tons CO2 per year
    const treesEquivalent = Math.round(co2ReductionPerYear * 25); // trees equivalent

    setResults({
      systemSize,
      panelCount,
      energyGeneration: annualGeneration,
      monthlySavings,
      annualSavings,
      twentyYearSavings,
      co2Reduction: co2ReductionPerYear,
      treesEquivalent
    });
  };

  useEffect(() => {
    calculateSolar();
  }, [roofSize, location, electricBill]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Calculator Input */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Calculator className="h-6 w-6 text-blue-600" />
              Calculate Your Solar Potential
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="roof-size" className="text-sm font-medium text-gray-700">
                Roof Size (sq ft)
              </Label>
              <Input
                id="roof-size"
                type="number"
                value={roofSize}
                onChange={(e) => setRoofSize(Number(e.target.value))}
                placeholder="e.g., 1000"
                className="mt-2"
                data-testid="input-roof-size"
              />
            </div>
            
            <div>
              <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                Location
              </Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="mt-2" data-testid="select-location">
                  <SelectValue placeholder="Select your location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High Sun Area (Southwest US, Australia)</SelectItem>
                  <SelectItem value="medium">Medium Sun Area (Most US States)</SelectItem>
                  <SelectItem value="low">Lower Sun Area (Northern States)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="electric-bill" className="text-sm font-medium text-gray-700">
                Monthly Electric Bill ($)
              </Label>
              <Input
                id="electric-bill"
                type="number"
                value={electricBill}
                onChange={(e) => setElectricBill(Number(e.target.value))}
                placeholder="e.g., 150"
                className="mt-2"
                data-testid="input-electric-bill"
              />
            </div>
            
            <Button 
              onClick={calculateSolar} 
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
              data-testid="button-calculate"
            >
              Calculate Solar Impact
            </Button>
          </CardContent>
        </Card>

        {/* Results Display */}
        {results && (
          <div className="space-y-6">
            {/* Cost Savings */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-green-600">
                  <DollarSign className="h-5 w-5" />
                  Financial Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600" data-testid="text-monthly-savings">
                      ${results.monthlySavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Monthly Savings</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600" data-testid="text-annual-savings">
                      ${results.annualSavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                  <div className="text-3xl font-bold text-green-700" data-testid="text-twenty-year-savings">
                    ${results.twentyYearSavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">20-Year Savings</div>
                </div>
              </CardContent>
            </Card>

            {/* Environmental Impact */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-green-600">
                  <Leaf className="h-5 w-5" />
                  Environmental Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Leaf className="text-green-500 text-xl" />
                    <span className="font-medium">CO₂ Reduction (Annual)</span>
                  </div>
                  <span className="text-xl font-bold text-green-600" data-testid="text-co2-reduction">
                    {results.co2Reduction} tons
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TreePine className="text-green-500 text-xl" />
                    <span className="font-medium">Trees Equivalent</span>
                  </div>
                  <span className="text-xl font-bold text-green-600" data-testid="text-trees-equivalent">
                    {results.treesEquivalent} trees
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Zap className="text-blue-500 text-xl" />
                    <span className="font-medium">Energy Generation</span>
                  </div>
                  <span className="text-xl font-bold text-blue-600" data-testid="text-energy-generation">
                    {results.energyGeneration.toLocaleString()} kWh
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* System Size */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-blue-600">
                  <Zap className="h-5 w-5" />
                  System Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600" data-testid="text-system-size">
                      {results.systemSize} kW
                    </div>
                    <div className="text-sm text-gray-600">System Size</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600" data-testid="text-panel-count">
                      {results.panelCount} panels
                    </div>
                    <div className="text-sm text-gray-600">Solar Panels</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
