import Navigation from "@/components/navigation";
import SolarCalculator from "@/components/solar-calculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CloudSun, 
  Battery, 
  Cpu, 
  HardHat, 
  Globe, 
  Truck, 
  TrendingUp,
  CheckCircle,
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Languages,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const countries = [
    { flag: "🇦🇪", name: "UAE" },
    { flag: "🇸🇦", name: "Saudi Arabia" },
    { flag: "🇵🇰", name: "Pakistan" },
    { flag: "🇮🇳", name: "India" },
    { flag: "🇪🇬", name: "Egypt" },
    { flag: "🇵🇭", name: "Philippines" },
    { flag: "🇩🇪", name: "Germany" },
    { flag: "🇿🇦", name: "South Africa" },
    { flag: "🇹🇷", name: "Turkey" },
    { flag: "🇧🇷", name: "Brazil" },
    { flag: "🇰🇪", name: "Kenya" },
    { flag: "🇲🇾", name: "Malaysia" }
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-green-600">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Main Hero Content */}
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Powering a <span className="text-yellow-300">Greener</span> World
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Leading the renewable energy revolution with innovative solar solutions and sustainable technologies since 2007
            </p>
            
            {/* Action Buttons in Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl hover:bg-white/15 transition-all duration-300 group">
                <CloudSun className="w-12 h-12 text-yellow-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <Button 
                  size="lg" 
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-xl shadow-lg"
                  onClick={() => scrollToSection('calculator')}
                  data-testid="button-solar-quote"
                >
                  Get Solar Quote
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl hover:bg-white/15 transition-all duration-300 group">
                <Battery className="w-12 h-12 text-green-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <Button 
                  size="lg" 
                  className="w-full bg-green-500 hover:bg-green-400 text-white font-semibold py-3 rounded-xl shadow-lg"
                  onClick={() => scrollToSection('solar')}
                  data-testid="button-solar-products"
                >
                  Solar Products
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl hover:bg-white/15 transition-all duration-300 group">
                <Globe className="w-12 h-12 text-blue-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <Button 
                  size="lg" 
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 rounded-xl shadow-lg"
                  onClick={() => scrollToSection('services')}
                  data-testid="button-our-services"
                >
                  Our Services
                </Button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2" data-testid="text-countries-count">30+</div>
                <div className="text-blue-100">Countries Served</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-300 mb-2" data-testid="text-experience-years">15+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-orange-300 mb-2" data-testid="text-projects-count">1000+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Solar Panel Image */}
        <div className="absolute bottom-8 right-8 hidden lg:block">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Modern solar panels installation" 
              className="rounded-xl shadow-2xl w-80 h-60 object-cover border-2 border-white/20 animate-float"
              data-testid="img-hero-solar"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Shengze Group</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established in 2007, we are a diversified enterprise with primary focus on solar energy and renewable technologies, backed by over a decade of industry expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Solar energy engineering team" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-engineering-team"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6">
                We are driven by the mission to empower communities and industries with clean, efficient, and sustainable energy solutions. Through trusted partnerships and global presence, we continue to contribute to a greener, smarter planet.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 h-6 w-6" />
                  <span className="text-gray-700">Quality & Reliability Focused</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 h-6 w-6" />
                  <span className="text-gray-700">International Certification Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 h-6 w-6" />
                  <span className="text-gray-700">Global Logistics Network</span>
                </div>
              </div>
            </div>
          </div>

          {/* Global Reach */}
          <Card className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Global Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
                {countries.map((country) => (
                  <div key={country.name} className="p-4">
                    <div className="text-2xl mb-2">{country.flag}</div>
                    <div className="text-sm text-gray-600">{country.name}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solar Energy Section */}
      <section id="solar" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solar & Renewable Energy Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our main business focuses on manufacturing, sourcing, and global export of high-performance solar panels and renewable energy equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover shadow-xl border-0 bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <CloudSun className="text-white h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-blue-700">Solar Panels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Leading brands including Jinko, LONGi, and JA Solar for residential, commercial, and industrial use.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• High-efficiency photovoltaic modules</li>
                  <li>• TÜV, CE, IEC, UL certified</li>
                  <li>• 25-year performance warranty</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover shadow-xl border-0 bg-gradient-to-br from-white to-green-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Battery className="text-white h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-green-700">Energy Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Complete battery storage solutions for residential and commercial applications.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Lithium-ion battery systems</li>
                  <li>• Smart energy management</li>
                  <li>• Grid-tie and off-grid solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover shadow-xl border-0 bg-gradient-to-br from-white to-orange-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Cpu className="text-white h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-orange-700">Inverters & Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">High-efficiency inverters and complete renewable energy systems with smart monitoring.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• String and micro inverters</li>
                  <li>• Remote monitoring systems</li>
                  <li>• Weather-resistant design</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Featured Brands */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Trusted Solar Brands</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                {['JinkoSolar', 'LONGi', 'JA Solar', 'Certified'].map((brand) => (
                  <div key={brand} className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="font-bold text-blue-600 text-sm">{brand}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond solar energy, we offer diverse business solutions spanning engineering, international trade, and global logistics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <HardHat className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Engineering & Construction</h3>
              <p className="text-gray-600">Infrastructure and real estate development including housing, hotels, roads, and bridges.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">International Trade</h3>
              <p className="text-gray-600">Diverse portfolio including EVs, building materials, electronics, and consumer goods.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Freight Forwarding</h3>
              <p className="text-gray-600">National Class-A certified logistics services via sea, land, and air across major ports.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Investment Solutions</h3>
              <p className="text-gray-600">Hong Kong-based investment arm for global financing and market expansion activities.</p>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Why Choose Shengze Group?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-white h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Global Certification</h4>
                      <p className="text-gray-600">All products meet international standards including TÜV, CE, IEC, and UL certifications.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-white h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Complete Solutions</h4>
                      <p className="text-gray-600">From manufacturing to installation support, we provide end-to-end renewable energy solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-white h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Worldwide Network</h4>
                      <p className="text-gray-600">Established presence in 30+ countries with reliable logistics and support infrastructure.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Sustainable business operations" 
                  className="rounded-xl shadow-lg w-full h-auto"
                  data-testid="img-sustainable-operations"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Calculator Section */}
      <section id="calculator" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solar Impact Calculator</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover your potential savings and environmental impact with our interactive solar calculator.
            </p>
          </div>

          <SolarCalculator />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl inline-block shadow-lg">Get in Touch</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium bg-white/70 backdrop-blur-sm px-6 py-4 rounded-xl shadow-md">
              Ready to start your renewable energy journey? Contact our experts for personalized solutions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-8 text-gray-900 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl inline-block shadow-md">Contact Information</h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <MapPin className="text-white h-8 w-8" />
                    </div>
                    <h4 className="font-bold mb-3 text-gray-900 text-lg">Headquarters</h4>
                    <p className="text-gray-700 leading-relaxed">Bao'an District<br />Shenzhen, Guangdong Province<br />China</p>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg">
                    <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Mail className="text-white h-8 w-8" />
                    </div>
                    <h4 className="font-bold mb-3 text-gray-900 text-lg">Email</h4>
                    <p className="text-gray-700 leading-relaxed">info@shengzegroup.com<br />sales@shengzegroup.com</p>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg">
                    <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Phone className="text-white h-8 w-8" />
                    </div>
                    <h4 className="font-bold mb-3 text-gray-900 text-lg">Phone</h4>
                    <p className="text-gray-700 leading-relaxed">+86 400 123 4567<br />+86 755 8888 9999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours & Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold mb-3 text-gray-900 text-lg">Business Hours</h4>
              <p className="text-gray-700 leading-relaxed">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 3:00 PM</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg">
              <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold mb-3 text-gray-900 text-lg">Response Time</h4>
              <p className="text-gray-700 leading-relaxed">We typically respond within<br />24 hours on business days</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg">
              <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Languages className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold mb-3 text-gray-900 text-lg">Languages</h4>
              <p className="text-gray-700 leading-relaxed">English, Chinese (Mandarin)<br />Arabic, Spanish</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <CloudSun className="h-8 w-8 text-green-500" />
                <span className="text-xl font-bold">Shengze Group</span>
              </div>
              <p className="text-gray-400 mb-4">Powering a greener world through innovative solar solutions and renewable technologies since 2007.</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-green-500" data-testid="link-linkedin">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-green-500" data-testid="link-twitter">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-green-500" data-testid="link-facebook">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('solar')} className="text-left hover:text-white transition-colors">Solar Solutions</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-left hover:text-white transition-colors">Engineering</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-left hover:text-white transition-colors">International Trade</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-left hover:text-white transition-colors">Logistics</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="text-left hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-left hover:text-white transition-colors">Contact</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('calculator')} className="text-left hover:text-white transition-colors">Solar Calculator</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Downloads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shengze Group. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
