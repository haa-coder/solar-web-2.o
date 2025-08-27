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
      <section id="home" className="pt-16 gradient-bg text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 drop-shadow-lg">
                Powering a <span className="text-green-600">Greener</span> World
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-800 font-medium drop-shadow-md">
                Leading the renewable energy revolution with innovative solar solutions and sustainable technologies since 2007.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-yellow-50 hover:text-blue-700 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
                  onClick={() => scrollToSection('calculator')}
                  data-testid="button-solar-quote"
                >
                  Get Solar Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white bg-white text-gray-900 hover:bg-white/20 hover:border-yellow-400 hover:text-yellow-400 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
                  onClick={() => scrollToSection('about')}
                  data-testid="button-learn-more"
                >
                  Learn More
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600" data-testid="text-countries-count">30+</div>
                  <div className="text-gray-700 font-medium">Countries Served</div>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-3xl font-bold text-green-600" data-testid="text-experience-years">15+</div>
                  <div className="text-gray-700 font-medium">Years Experience</div>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600" data-testid="text-projects-count">1000+</div>
                  <div className="text-gray-700 font-medium">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="animate-float">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern solar panels installation" 
                className="rounded-2xl w-full h-auto"
                data-testid="img-hero-solar"
              />
            </div>
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
                className="rounded-xl w-full h-auto"
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
            <Card className="card-hover border-0 bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-xl overflow-hidden bg-blue-100">
                  <img 
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&h=600" 
                    alt="Modern solar panel array installation" 
                    className="w-full h-full object-cover"
                    data-testid="img-solar-panels"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center"><span class="text-blue-800 font-semibold">Solar Panels</span></div>';
                      }
                    }}
                  />
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center mb-4">
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

            <Card className="card-hover border-0 bg-gradient-to-br from-white to-green-50">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-xl overflow-hidden bg-green-100">
                  <img 
                    src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&h=600" 
                    alt="Solar battery energy storage system" 
                    className="w-full h-full object-cover"
                    data-testid="img-energy-storage"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center"><span class="text-green-800 font-semibold">Energy Storage</span></div>';
                      }
                    }}
                  />
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
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

            <Card className="card-hover border-0 bg-gradient-to-br from-white to-orange-50">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-xl overflow-hidden bg-orange-100">
                  <img 
                    src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&h=600" 
                    alt="Solar inverter and monitoring systems" 
                    className="w-full h-full object-cover"
                    data-testid="img-inverters-systems"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center"><span class="text-orange-800 font-semibold">Inverters & Systems</span></div>';
                      }
                    }}
                  />
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
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
          <Card className="">
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
                  className="rounded-xl w-full h-auto"
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900 drop-shadow-lg">Get in Touch</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium drop-shadow-md">
              Ready to start your renewable energy journey? Contact our experts for personalized solutions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-8 text-gray-900 drop-shadow-lg">Contact Information</h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[240px] flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MapPin className="text-white h-8 w-8" />
                    </div>
                    <h4 className="font-bold mb-3 text-gray-900 text-lg text-center">Headquarters</h4>
                    <p className="text-gray-700 leading-relaxed text-center text-sm">Bao'an District<br />Shenzhen, Guangdong Province<br />China</p>
                  </div>
                  
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[240px] flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Mail className="text-white h-8 w-8" />
                    </div>
                    <h4 className="font-bold mb-3 text-gray-900 text-lg text-center">Email</h4>
                    <div className="text-gray-700 leading-relaxed text-center text-sm break-words">
                      <p>info@shengzegroup.com</p>
                      <p>sales@shengzegroup.com</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[240px] flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Phone className="text-white h-8 w-8" />
                    </div>
                    <h4 className="font-bold mb-3 text-gray-900 text-lg text-center">Phone</h4>
                    <p className="text-gray-700 leading-relaxed text-center text-sm">+86 400 123 4567<br />+86 755 8888 9999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours & Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[240px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold mb-3 text-gray-900 text-lg">Business Hours</h4>
              <p className="text-gray-700 leading-relaxed text-sm">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 3:00 PM</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[240px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold mb-3 text-gray-900 text-lg">Response Time</h4>
              <p className="text-gray-700 leading-relaxed text-sm">We typically respond within<br />24 hours on business days</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[240px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Languages className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold mb-3 text-gray-900 text-lg">Languages</h4>
              <p className="text-gray-700 leading-relaxed text-sm">English, Chinese (Mandarin)<br />Arabic, Spanish</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <CloudSun className="h-8 w-8 text-green-500" />
                <span className="text-xl font-bold">Shengze Group</span>
              </div>
              <p className="text-gray-400 mb-4">Powering a greener world through innovative solar solutions and renewable technologies since 2007.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="text-left hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('solar')} className="text-left hover:text-white transition-colors">Solar Solutions</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-left hover:text-white transition-colors">Our Services</button></li>
                <li><button onClick={() => scrollToSection('calculator')} className="text-left hover:text-white transition-colors">Solar Calculator</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-left hover:text-white transition-colors">Contact Us</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shengze Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
