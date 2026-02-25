import { useEffect, useState } from 'react';
import { 
  Leaf, Sun, Sprout, TreePine, Droplets,
  ArrowRight, CheckCircle2, Menu, X, ChevronRight,
  Flower2, Recycle, Heart, Mail,
  Facebook, Instagram, Twitter, BookOpen, CloudRain,
  Shield, Wheat, Filter, MessageCircle, HelpCircle, Lightbulb
} from 'lucide-react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeArticle, setActiveArticle] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
      setActiveArticle(null);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'guides', label: 'Start Your Garden' },
    { id: 'articles', label: 'Explore Articles' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Ask a Question' },
  ];

  const articles = [
    {
      id: 'companion-planting',
      icon: Flower2,
      title: 'Companion Planting Guide',
      category: 'Gardening Basics',
      excerpt: 'Learn which plants grow best together to maximize your garden yield naturally.',
      content: `
        <h3>What is Companion Planting?</h3>
        <p>Companion planting is the practice of growing different plants together for mutual benefit. This age-old technique helps deter pests, improve pollination, and increase crop productivity.</p>
        
        <h3>Best Companion Plant Combinations</h3>
        <ul>
          <li><strong>Tomatoes + Basil:</strong> Basil repels flies and mosquitoes, and may improve tomato flavor</li>
          <li><strong>Carrots + Onions:</strong> Onions deter carrot flies</li>
          <li><strong>Corn + Beans + Squash (Three Sisters):</strong> Classic Native American combination where corn provides support, beans fix nitrogen, and squash suppresses weeds</li>
          <li><strong>Lettuce + Radishes:</strong> Radishes grow quickly and loosen soil for lettuce roots</li>
          <li><strong>Marigolds + Everything:</strong> Marigolds repel many common garden pests</li>
        </ul>
        
        <h3>Plants to Keep Apart</h3>
        <ul>
          <li>Tomatoes and potatoes (disease sharing)</li>
          <li>Beans and onions (growth inhibition)</li>
          <li>Cabbage and strawberries (competing nutrients)</li>
        </ul>
      `
    },
    {
      id: 'rainwater-harvesting',
      icon: CloudRain,
      title: 'Rainwater Harvesting Systems',
      category: 'Water Conservation',
      excerpt: 'Build your own rainwater collection system for sustainable garden irrigation.',
      content: `
        <h3>Why Harvest Rainwater?</h3>
        <p>Rainwater is free, naturally soft, and better for plants than treated tap water. A 1,000 square foot roof can collect approximately 600 gallons of water per inch of rainfall.</p>
        
        <h3>Basic DIY Rain Barrel System</h3>
        <h4>Materials Needed:</h4>
        <ul>
          <li>55-gallon food-grade barrel</li>
          <li>Downspout diverter kit</li>
          <li>Spigot with bulkhead fitting</li>
          <li>Mesh screen for debris filtering</li>
          <li>Concrete blocks for elevation</li>
        </ul>
        
        <h4>Setup Steps:</h4>
        <ol>
          <li>Place barrel on elevated platform (gravity flow)</li>
          <li>Install downspout diverter to direct water into barrel</li>
          <li>Add mesh screen to prevent debris and mosquitoes</li>
          <li>Install spigot near bottom for hose attachment</li>
          <li>Add overflow outlet near top</li>
        </ol>
        
        <h3>Water Quality Tips</h3>
        <ul>
          <li>Let first flush of rain run off (cleans roof)</li>
          <li>Use within 1 week or treat to prevent algae</li>
          <li>Don't drink without proper filtration</li>
          <li>Avoid collecting from roofs with asbestos or lead</li>
        </ul>
      `
    },
    {
      id: 'water-filtration',
      icon: Filter,
      title: 'DIY Water Filtration Methods',
      category: 'Survival Skills',
      excerpt: 'Essential techniques for purifying water in emergency situations.',
      content: `
        <h3>Why Water Filtration Matters</h3>
        <p>Clean water is essential for survival. In emergency situations, knowing how to filter and purify water can save your life. Here are proven methods you can use.</p>
        
        <h3>Method 1: Bio-Sand Filter</h3>
        <h4>Materials:</h4>
        <ul>
          <li>Large plastic container (5-gallon bucket)</li>
          <li>Gravel (bottom layer)</li>
          <li>Coarse sand (middle layer)</li>
          <li>Fine sand (top layer)</li>
          <li>Activated charcoal (optional, for chemical removal)</li>
        </ul>
        <h4>How it works:</h4>
        <p>Water passes through layers, with each layer removing smaller particles. The biological layer that forms on top helps break down organic matter.</p>
        
        <h3>Method 2: Solar Disinfection (SODIS)</h3>
        <ul>
          <li>Fill clear plastic bottles with water</li>
          <li>Leave in direct sunlight for 6+ hours</li>
          <li>UV rays kill pathogens</li>
          <li>Best for clear water with low turbidity</li>
        </ul>
        
        <h3>Method 3: Boiling</h3>
        <ul>
          <li>Bring water to rolling boil for at least 1 minute</li>
          <li>3 minutes at high altitudes</li>
          <li>Kills bacteria, viruses, and parasites</li>
          <li>Doesn't remove chemicals or heavy metals</li>
        </ul>
        
        <h3>Emergency Filter (Cloth Method)</h3>
        <p>In desperate situations, filtering water through clean cloth (like a t-shirt) can remove large particles and some contaminants. Always boil afterward if possible.</p>
      `
    },
    {
      id: 'food-preservation',
      icon: Wheat,
      title: 'Food Preservation Techniques',
      category: 'Self-Sufficiency',
      excerpt: 'Learn canning, dehydrating, and fermenting to preserve your harvest.',
      content: `
        <h3>Why Preserve Food?</h3>
        <p>Food preservation extends your harvest, reduces waste, and ensures you have nutritious food year-round. It's an essential skill for self-sufficiency.</p>
        
        <h3>Canning Basics</h3>
        <h4>Water Bath Canning (High-acid foods):</h4>
        <ul>
          <li>Tomatoes, fruits, pickles, jams</li>
          <li>Requires jars, lids, rings, and large pot</li>
          <li>Process time varies by food type</li>
          <li>Store in cool, dark place</li>
        </ul>
        
        <h4>Pressure Canning (Low-acid foods):</h4>
        <ul>
          <li>Vegetables, meats, soups, stews</li>
          <li>Required for foods with pH > 4.6</li>
          <li>Higher temperatures kill botulism spores</li>
          <li>Follow recipes exactly for safety</li>
        </ul>
        
        <h3>Dehydrating</h3>
        <ul>
          <li><strong>Sun drying:</strong> Best for fruits, requires hot, dry weather</li>
          <li><strong>Oven drying:</strong> Lowest setting with door propped open</li>
          <li><strong>Electric dehydrator:</strong> Most consistent results</li>
          <li>Store in airtight containers</li>
        </ul>
        
        <h3>Fermentation</h3>
        <ul>
          <li>Sauerkraut: Shredded cabbage + salt</li>
          <li>Pickles: Cucumbers in brine</li>
          <li>Kimchi: Korean fermented vegetables</li>
          <li>Natural probiotics support gut health</li>
        </ul>
        
        <h3>Root Cellar Storage</h3>
        <p>Store root vegetables (potatoes, carrots, beets) in cool, humid, dark conditions. Ideal: 32-40°F with 85-95% humidity.</p>
      `
    },
    {
      id: 'composting',
      icon: Recycle,
      title: 'Composting 101',
      category: 'Sustainable Living',
      excerpt: 'Turn kitchen scraps and yard waste into nutrient-rich soil.',
      content: `
        <h3>Why Compost?</h3>
        <p>Composting reduces landfill waste, enriches soil, and creates a closed-loop system in your garden. It's nature's way of recycling!</p>
        
        <h3>Green vs. Brown Materials</h3>
        <h4>Greens (Nitrogen-rich):</h4>
        <ul>
          <li>Kitchen scraps (fruit/vegetable peels)</li>
          <li>Coffee grounds and tea bags</li>
          <li>Fresh grass clippings</li>
          <li>Plant trimmings</li>
        </ul>
        
        <h4>Browns (Carbon-rich):</h4>
        <ul>
          <li>Dried leaves</li>
          <li>Straw and hay</li>
          <li>Cardboard and paper</li>
          <li>Wood chips</li>
        </ul>
        
        <h3>Ideal Ratio: 3 Browns to 1 Green</h3>
        
        <h3>What NOT to Compost</h3>
        <ul>
          <li>Meat, fish, or dairy</li>
          <li>Oils or greasy foods</li>
          <li>Pet waste</li>
          <li>Diseased plants</li>
          <li>Treated wood or sawdust</li>
        </ul>
        
        <h3>Composting Methods</h3>
        <ul>
          <li><strong>Bin/Pile:</strong> Traditional method, turn every 2-3 weeks</li>
          <li><strong>Tumbler:</strong> Faster, easier to turn</li>
          <li><strong>Vermicomposting:</strong> Worms do the work indoors</li>
          <li><strong>Bokashi:</strong> Fermentation method for small spaces</li>
        </ul>
        
        <h3>Troubleshooting</h3>
        <ul>
          <li><strong>Smelly?</strong> Add more browns, turn more often</li>
          <li><strong>Not breaking down?</strong> Add more greens, ensure moisture</li>
          <li><strong>Too wet?</strong> Add dry browns</li>
          <li><strong>Too dry?</strong> Water lightly</li>
        </ul>
      `
    },
    {
      id: 'seed-starting',
      icon: Sprout,
      title: 'Starting Seeds Indoors',
      category: 'Gardening Basics',
      excerpt: 'Get a head start on the growing season with indoor seed starting.',
      content: `
        <h3>Why Start Seeds Indoors?</h3>
        <p>Starting seeds indoors extends your growing season, saves money, and gives you access to more varieties than buying seedlings at the store.</p>
        
        <h3>What You Need</h3>
        <ul>
          <li>Seed starting mix (not potting soil)</li>
          <li>Containers with drainage holes</li>
          <li>Seeds of your choice</li>
          <li>Water mister</li>
          <li>Warm location or heat mat</li>
          <li>Grow lights or sunny window</li>
        </ul>
        
        <h3>Timeline by Plant</h3>
        <ul>
          <li><strong>10-12 weeks before last frost:</strong> Peppers, eggplants, onions</li>
          <li><strong>6-8 weeks before:</strong> Tomatoes, broccoli, cabbage</li>
          <li><strong>4-6 weeks before:</strong> Lettuce, kale, herbs</li>
          <li><strong>Direct sow:</strong> Beans, corn, squash, carrots</li>
        </ul>
        
        <h3>Step-by-Step Process</h3>
        <ol>
          <li>Fill containers with damp seed starting mix</li>
          <li>Plant seeds at depth recommended on packet (usually 2-3x seed diameter)</li>
          <li>Water gently with mister</li>
          <li>Cover with plastic dome or wrap to retain moisture</li>
          <li>Place in warm location (65-75°F)</li>
          <li>Remove cover when seeds sprout</li>
          <li>Move to bright light (14-16 hours daily)</li>
          <li>Thin seedlings to strongest one per cell</li>
        </ol>
        
        <h3>Hardening Off</h3>
        <p>Before transplanting outdoors, gradually expose seedlings to outdoor conditions over 7-10 days. Start with 1-2 hours of shade, gradually increasing time and sun exposure.</p>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 bg-[#2d5016] rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#d2f2c3]" />
              </div>
              <span className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-[#2d5016]' : 'text-white'
              }`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Socorta Tree
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-[#2d5016] ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  } ${activeSection === link.id ? 'text-[#2d5016]' : ''}`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-sm py-2.5 px-6"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-gray-700 hover:text-[#2d5016] font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Beautiful garden"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Floating Leaves Animation */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <Leaf
              key={i}
              className={`absolute text-[#d2f2c3]/20 animate-float`}
              style={{
                width: `${30 + i * 10}px`,
                height: `${30 + i * 10}px`,
                left: `${10 + i * 20}%`,
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sprout className="w-5 h-5 text-[#d2f2c3]" />
              <span className="text-white/90 text-sm font-medium">A Green Lifestyle Blog</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Grow Wild.<br />
              <span className="text-[#d2f2c3]">Grow Wise.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              DIYs, plant care tips, and eco hacks for sustainable living. 
              Learn self-sufficiency and reconnect with the earth beneath your feet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('guides')}
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <span>Start Your Garden</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('articles')}
                className="btn-secondary border-white text-white hover:bg-white hover:text-[#2d5016] flex items-center justify-center"
              >
                Explore Articles
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              {[
                { value: '50+', label: 'DIY Guides' },
                { value: '100+', label: 'Articles' },
                { value: '10K+', label: 'Readers' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-[#d2f2c3]">{stat.value}</div>
                  <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/about-image.jpg"
                  alt="Gardeners at work"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d2f2c3] rounded-full opacity-60" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#2d5016] rounded-full opacity-20" />
              
              {/* Tagline Badge */}
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
                <p className="text-[#2d5016] font-serif italic text-lg">"Rooted in creativity. Growing with intention."</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center space-x-2 text-[#2d5016] mb-4">
                <TreePine className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">About SocortaTree</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dig In. Get Messy.<br />
                <span className="text-[#2d5016]">Grow What Matters.</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our content blends practical advice with poetic storytelling. From plant care tips 
                and DIY garden hacks to reflections on sustainable living, everything we share is 
                rooted in curiosity and self-expression.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We believe gardening isn't just about plants—it's about people. It's about slowing 
                down, tuning in, and reconnecting with the earth beneath our feet. It's about finding 
                joy in the process, not just the bloom.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Eco-friendly practices',
                  'Self-sufficiency guides',
                  'Water conservation methods',
                  'Food preservation techniques',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2d5016] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollToSection('articles')}
                className="btn-primary"
              >
                Explore Our Content
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Garden Guides Section */}
      <section id="guides" className="section-padding bg-[#f5f5f0]">
        <div className="container-custom mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-[#2d5016] mb-4">
              <Sprout className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Start Your Garden</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Beginner <span className="text-[#2d5016]">Gardening Guides</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know to start growing your own food and creating 
              a sustainable garden sanctuary.
            </p>
          </div>

          {/* Guides Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Flower2,
                title: 'Companion Planting',
                description: 'Learn which plants grow best together for maximum yield.',
                link: 'companion-planting'
              },
              {
                icon: Sprout,
                title: 'Seed Starting',
                description: 'Get a head start on the season with indoor seed starting.',
                link: 'seed-starting'
              },
              {
                icon: Recycle,
                title: 'Composting 101',
                description: 'Turn kitchen scraps into nutrient-rich garden gold.',
                link: 'composting'
              },
              {
                icon: Droplets,
                title: 'Watering Wisdom',
                description: 'Master the art of proper irrigation and water conservation.',
                link: null
              },
              {
                icon: Sun,
                title: 'Sunlight Guide',
                description: 'Understand light requirements for different plants.',
                link: null
              },
              {
                icon: Shield,
                title: 'Pest Control',
                description: 'Natural methods to protect your garden without chemicals.',
                link: null
              },
            ].map((guide, index) => (
              <div
                key={index}
                onClick={() => guide.link && setActiveArticle(guide.link)}
                className={`group bg-white rounded-2xl p-8 shadow-lg card-hover ${guide.link ? 'cursor-pointer' : ''}`}
              >
                <div className="w-14 h-14 bg-[#d2f2c3] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2d5016] transition-colors">
                  <guide.icon className="w-7 h-7 text-[#2d5016] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                {guide.link && (
                  <span className="inline-flex items-center text-[#2d5016] font-medium text-sm">
                    Read Guide <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Banner 1 */}
      <div className="bg-[#f5f5f0] py-8">
        <div className="container-custom mx-auto px-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 text-center mb-2">Advertisement</p>
            <ins className="adsbygoogle"
                 style={{ display: 'block', height: '90px' }}
                 data-ad-client="ca-pub-1488198154973567"
                 data-ad-slot="1234567890"
                 data-ad-format="horizontal"
                 data-full-width-responsive="true">
            </ins>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <section id="articles" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-[#2d5016] mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Explore Articles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Self-Sufficiency & <span className="text-[#2d5016]">Survival Skills</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Learn essential skills for sustainable living, water independence, 
              and food security. Be prepared, be self-reliant.
            </p>
          </div>

          {/* Article Viewer */}
          {activeArticle ? (
            <div className="bg-[#f5f5f0] rounded-3xl p-8 md:p-12">
              <button 
                onClick={() => setActiveArticle(null)}
                className="mb-6 text-[#2d5016] font-medium flex items-center hover:underline"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Articles
              </button>
              {articles.filter(a => a.id === activeArticle).map(article => (
                <div key={article.id}>
                  <div className="flex items-center space-x-2 text-[#2d5016] mb-4">
                    <article.icon className="w-6 h-6" />
                    <span className="text-sm font-semibold">{article.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{article.title}</h3>
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-[#2d5016]"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </div>
              ))}
            </div>
          ) : (
            /* Articles Grid */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div
                  key={index}
                  onClick={() => setActiveArticle(article.id)}
                  className="group bg-[#f5f5f0] rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-[#2d5016] uppercase tracking-wider bg-[#d2f2c3] px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <article.icon className="w-6 h-6 text-[#2d5016]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2d5016] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
                    <div className="mt-6 flex items-center text-[#2d5016] font-medium text-sm">
                      <span>Read Article</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-[#f5f5f0]">
        <div className="container-custom mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-[#2d5016] mb-4">
              <Flower2 className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Gallery</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Garden <span className="text-[#2d5016]">Inspiration</span>
            </h2>
            <p className="text-gray-600 text-lg">
              A sneak peek into our vibrant photo gallery of beautiful gardens and outdoor spaces.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/gallery-1.jpg', alt: 'Planting seedlings', span: 'col-span-2 row-span-2' },
              { src: '/gallery-2.jpg', alt: 'Flower garden', span: '' },
              { src: '/gallery-3.jpg', alt: 'Vegetable harvest', span: '' },
              { src: '/gallery-4.jpg', alt: 'Garden pond', span: '' },
              { src: '/gallery-5.jpg', alt: 'Garden pathway', span: 'col-span-2' },
              { src: '/gallery-6.jpg', alt: 'Herb garden', span: '' },
            ].map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl ${image.span}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Banner 2 */}
      <div className="bg-white py-8">
        <div className="container-custom mx-auto px-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 text-center mb-2">Advertisement</p>
            <ins className="adsbygoogle"
                 style={{ display: 'block', height: '250px' }}
                 data-ad-client="ca-pub-1488198154973567"
                 data-ad-slot="1234567891"
                 data-ad-format="rectangle"
                 data-full-width-responsive="true">
            </ins>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="section-padding bg-[#f5f5f0]">
        <div className="container-custom mx-auto">
          <div className="bg-[#2d5016] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full" />
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <Mail className="w-12 h-12 text-[#d2f2c3] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-white/80 mb-8">
                Get gardening tips, seasonal guides, and exclusive content delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d2f2c3]"
                />
                <button type="submit" className="bg-[#d2f2c3] text-[#2d5016] px-8 py-4 rounded-lg font-medium hover:bg-white transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Ask a Question Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <div className="inline-flex items-center space-x-2 text-[#2d5016] mb-4">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Ask a Question</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Got a <span className="text-[#2d5016]">Question?</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-8">
                Have a gardening question? Need a tip? Want to share your own wisdom? 
                We'd love to hear from you! Drop us a message and we'll get back to you.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { 
                    icon: HelpCircle, 
                    title: 'Ask Questions', 
                    description: 'Stuck on a gardening problem? Ask us anything!' 
                  },
                  { 
                    icon: Lightbulb, 
                    title: 'Share Tips', 
                    description: 'Have a gardening hack to share? Send it our way!' 
                  },
                  { 
                    icon: Heart, 
                    title: 'Connect', 
                    description: 'Join our community of green thumbs worldwide.' 
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#d2f2c3] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#2d5016]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <div className="text-sm text-gray-500 mb-4">Follow Us</div>
                <div className="flex space-x-4">
                  {[Facebook, Instagram, Twitter].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-[#f5f5f0] rounded-lg flex items-center justify-center hover:bg-[#2d5016] hover:text-white transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#f5f5f0] rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2d5016] focus:ring-2 focus:ring-[#2d5016]/20 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2d5016] focus:ring-2 focus:ring-[#2d5016]/20 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2d5016] focus:ring-2 focus:ring-[#2d5016]/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2d5016] focus:ring-2 focus:ring-[#2d5016]/20 outline-none transition-all">
                    <option>General Question</option>
                    <option>Gardening Tip</option>
                    <option>Article Suggestion</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2d5016] focus:ring-2 focus:ring-[#2d5016]/20 outline-none transition-all resize-none"
                    placeholder="What's on your mind? Ask a question, share a tip, or just say hello!"
                  />
                </div>
                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Banner 3 */}
      <div className="bg-[#f5f5f0] py-8">
        <div className="container-custom mx-auto px-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 text-center mb-2">Advertisement</p>
            <ins className="adsbygoogle"
                 style={{ display: 'block', height: '90px' }}
                 data-ad-client="ca-pub-1488198154973567"
                 data-ad-slot="1234567892"
                 data-ad-format="horizontal"
                 data-full-width-responsive="true">
            </ins>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a3009] text-white py-16">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-[#d2f2c3] rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-[#2d5016]" />
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Socorta Tree
                </span>
              </div>
              <p className="text-white/70 mb-6">
                A green lifestyle blog with DIYs, plant care, and eco hacks. 
                Rooted in creativity. Growing with intention.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#d2f2c3] hover:text-[#2d5016] transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.slice(0, -1).map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-white/70 hover:text-[#d2f2c3] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guides */}
            <div>
              <h4 className="font-bold text-lg mb-6">Popular Guides</h4>
              <ul className="space-y-3">
                {['Companion Planting', 'Rainwater Harvesting', 'Water Filtration', 'Food Preservation', 'Composting'].map((guide) => (
                  <li key={guide}>
                    <a href="#" className="text-white/70 hover:text-[#d2f2c3] transition-colors">
                      {guide}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
              <p className="text-white/70 mb-4">
                Subscribe for gardening tips and seasonal guides.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#d2f2c3]"
                />
                <button type="submit" className="w-full bg-[#d2f2c3] text-[#2d5016] py-3 rounded-lg font-medium hover:bg-white transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              © 2024 Socorta Tree. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/50">
              <a href="#" className="hover:text-[#d2f2c3] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#d2f2c3] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
