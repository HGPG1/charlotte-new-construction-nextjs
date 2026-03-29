'use client'

import { useState, useRef, useEffect } from 'react'
import {
  Home, MapPin, Building2, Calculator, ChevronRight, ChevronDown,
  Star, DollarSign, Clock, Shield, CheckCircle2, ArrowRight,
  Phone, Mail, Menu, X, TrendingUp, Users, Hammer, TreePine,
  Award, Lightbulb, Target, Sparkles, HelpCircle
} from 'lucide-react'

// âââ DATA âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

const neighborhoods = [
  {
    name: 'South Charlotte',
    area: 'Ballantyne / Ardrey Kell / Rea Farms',
    priceRange: '$450K â $1.2M',
    schools: 'Ardrey Kell HS, Marvin Ridge HS',
    highlights: ['Top-rated schools', 'Proximity to Ballantyne', 'Established amenities', 'Resort-style pools'],
    builders: ['Toll Brothers', 'Shea Homes', 'Taylor Morrison'],
    description: 'South Charlotte offers the perfect blend of suburban tranquility and urban convenience. With top-rated schools and proximity to Ballantyne\'s shopping and dining, this area consistently ranks among the most desirable in the metro.',
    growth: '+12% YoY',
  },
  {
    name: 'Fort Mill, SC',
    area: 'Tega Cay / Baxter / Riverwalk',
    priceRange: '$380K â $900K',
    schools: 'Fort Mill HS, Nation Ford HS',
    highlights: ['No state income tax (SC)', 'Anne Springs Greenway', 'Walkable town center', 'Lake Wylie access'],
    builders: ['Meritage Homes', 'Lennar', 'M/I Homes'],
    description: 'Fort Mill combines small-town charm with big-city access. Just minutes from Charlotte, SC residents enjoy no state income tax and award-winning Fort Mill schools. Baxter Village and Riverwalk are among the most sought-after communities.',
    growth: '+15% YoY',
  },
  {
    name: 'Indian Land, SC',
    area: 'Sun City / Bridgemill / Creekside',
    priceRange: '$320K â $750K',
    schools: 'Indian Land HS, Buford HS',
    highlights: ['Best value per sq ft', 'Active adult communities', '485 access to Charlotte', 'Rapid development'],
    builders: ['DR Horton', 'Pulte Homes', 'Lennar'],
    description: 'Indian Land is one of the fastest-growing areas in the Charlotte metro. With competitive pricing, excellent highway access, and master-planned communities like Sun City, it\'s perfect for families and active adults alike.',
    growth: '+18% YoY',
  },
  {
    name: 'Waxhaw, NC',
    area: 'Cureton / Millbridge / The Stables',
    priceRange: '$400K â $1M',
    schools: 'Weddington HS, Marvin Ridge HS',
    highlights: ['Historic downtown', 'Large homesites', 'Equestrian community', 'Top Union County schools'],
    builders: ['Taylor Morrison', 'Toll Brothers', 'Shea Homes'],
    description: 'Waxhaw delivers the best of rural elegance with modern conveniences. Known for its charming downtown, large lot sizes, and equestrian-friendly communities, Waxhaw attracts buyers who want space without sacrificing quality.',
    growth: '+10% YoY',
  },
  {
    name: 'Lake Norman',
    area: 'Mooresville / Davidson / Cornelius',
    priceRange: '$450K â $1.5M',
    schools: 'Mooresville HS, Hough HS',
    highlights: ['Lakefront living', 'Boat access', 'I-77 corridor', 'Growing restaurant scene'],
    builders: ['Toll Brothers', 'M/I Homes', 'Shea Homes'],
    description: 'Lake Norman is Charlotte\'s premier waterfront destination. From luxury lakefront estates to charming downtown Davidson, this area offers unmatched lifestyle amenities with easy access to Uptown Charlotte.',
    growth: '+9% YoY',
  },
]

const builders = [
  {
    name: 'Toll Brothers',
    tagline: 'Luxury New Home Builder',
    priceRange: '$550K â $1.5M+',
    rating: 4.5,
    incentive: 'Up to $25,000 in design center credits',
    incentiveExpiry: 'Q2 2026',
    communities: 12,
    features: ['Premium standard finishes', 'Extensive customization', 'Luxury amenities', 'Energy Star certified'],
    specialties: ['Luxury single-family', 'Townhomes', 'Active adult'],
  },
  {
    name: 'Meritage Homes',
    tagline: 'Energy-Efficient Living',
    priceRange: '$380K â $700K',
    rating: 4.3,
    incentive: 'Up to $15,000 closing cost assistance + rate buydown',
    incentiveExpiry: 'Limited time',
    communities: 8,
    features: ['ENERGY STAR certified', 'Solar-ready', 'Spray foam insulation', 'Smart home tech'],
    specialties: ['Single-family', 'First-time buyer programs'],
  },
  {
    name: 'Lennar',
    tagline: 'Everything\'s Included',
    priceRange: '$350K â $650K',
    rating: 4.2,
    incentive: '3.99% fixed rate with Lennar Mortgage + $10K flex cash',
    incentiveExpiry: 'Q2 2026',
    communities: 15,
    features: ['Everything\'s IncludedÂ® program', 'Smart home features', 'Wi-Fi CERTIFIEDâ¢', 'Multi-gen living options'],
    specialties: ['Single-family', 'Townhomes', 'Next GenÂ® suites'],
  },
  {
    name: 'Taylor Morrison',
    tagline: 'America\'s Most Trusted Builder',
    priceRange: '$420K â $900K',
    rating: 4.4,
    incentive: 'Up to $20,000 in closing costs with TM Mortgage',
    incentiveExpiry: 'Ongoing',
    communities: 6,
    features: ['Livability design philosophy', 'Exceptional craftsmanship', 'Energy efficiency', 'Connected home'],
    specialties: ['Single-family', 'Premium communities'],
  },
  {
    name: 'DR Horton',
    tagline: 'America\'s Builder',
    priceRange: '$290K â $550K',
    rating: 4.0,
    incentive: 'Up to $12,000 with DHI Mortgage + washer/dryer included',
    incentiveExpiry: 'Q2 2026',
    communities: 20,
    features: ['Best value pricing', 'Quick move-in homes', 'Smart home system', 'Energy efficient'],
    specialties: ['Single-family', 'Townhomes', 'Express homes'],
  },
  {
    name: 'Pulte Homes',
    tagline: 'Life TestedÂ® Home Designs',
    priceRange: '$370K â $750K',
    rating: 4.3,
    incentive: '4.25% rate buydown + up to $15K design studio credit',
    incentiveExpiry: 'Limited time',
    communities: 10,
    features: ['Life TestedÂ® designs', 'Built-in organization', 'Open floor plans', 'Del Webb 55+'],
    specialties: ['Single-family', 'Active adult (Del Webb)', 'Townhomes'],
  },
  {
    name: 'M/I Homes',
    tagline: 'A Tradition of Quality',
    priceRange: '$400K â $800K',
    rating: 4.4,
    incentive: 'Up to $20,000 closing cost credit with M/I Financial',
    incentiveExpiry: 'Ongoing',
    communities: 7,
    features: ['Whole-home approach', 'Flexible floor plans', 'Premium locations', 'Quality craftsmanship'],
    specialties: ['Single-family', 'Premium communities'],
  },
  {
    name: 'Shea Homes',
    tagline: 'Live the Difference',
    priceRange: '$450K â $1.1M',
    rating: 4.5,
    incentive: 'Up to $30,000 in design upgrades on select plans',
    incentiveExpiry: 'Q2 2026',
    communities: 5,
    features: ['SheaConnectâ¢ smart home', 'Indoor air PLUS', 'Water-saving fixtures', 'Premium designs'],
    specialties: ['Single-family', 'Active adult (Trilogy)'],
  },
]

const quizQuestions = [
  {
    question: 'What is your primary reason for buying new construction?',
    options: [
      { label: 'First home purchase', value: 'first-time' },
      { label: 'Upgrading / More space', value: 'upgrade' },
      { label: 'Downsizing / Active adult', value: 'downsize' },
      { label: 'Investment property', value: 'investment' },
    ],
  },
  {
    question: 'What is your target budget range?',
    options: [
      { label: 'Under $400K', value: 'under-400' },
      { label: '$400K â $600K', value: '400-600' },
      { label: '$600K â $900K', value: '600-900' },
      { label: '$900K+', value: '900-plus' },
    ],
  },
  {
    question: 'Which features matter most to you?',
    options: [
      { label: 'Top-rated schools', value: 'schools' },
      { label: 'Lowest price per sq ft', value: 'value' },
      { label: 'Luxury finishes & customization', value: 'luxury' },
      { label: 'Energy efficiency & smart home', value: 'energy' },
    ],
  },
  {
    question: 'Preferred location?',
    options: [
      { label: 'South Charlotte (NC)', value: 'south-charlotte' },
      { label: 'Fort Mill / Tega Cay (SC)', value: 'fort-mill' },
      { label: 'Indian Land (SC)', value: 'indian-land' },
      { label: 'Waxhaw / Weddington (NC)', value: 'waxhaw' },
    ],
  },
  {
    question: 'When are you looking to move?',
    options: [
      { label: 'ASAP â Quick move-in', value: 'asap' },
      { label: '3â6 months', value: '3-6' },
      { label: '6â12 months (build from scratch)', value: '6-12' },
      { label: 'Just researching', value: 'researching' },
    ],
  },
]

const strategies = [
  {
    icon: DollarSign,
    title: 'Negotiate Builder Incentives',
    description: 'Builders rarely advertise their best deals. A buyer\'s agent who specializes in new construction knows which communities are offering rate buydowns, design credits, and closing cost assistance â and can negotiate even better terms.',
  },
  {
    icon: Clock,
    title: 'Time Your Purchase Right',
    description: 'End-of-quarter and end-of-year are when builders are most motivated to close deals. Inventory homes (already built but unsold) often carry the deepest discounts, sometimes $30Kâ$50K below original list.',
  },
  {
    icon: Shield,
    title: 'Always Use Your Own Agent',
    description: 'The builder\'s sales agent works for the builder, not you. Having your own buyer\'s agent costs you nothing (the builder pays the commission) but gives you expert representation, inspection guidance, and negotiation power.',
  },
  {
    icon: Target,
    title: 'Get a Pre-Construction Inspection',
    description: 'Don\'t rely on the builder\'s quality checks alone. A third-party inspection during framing and before closing catches issues that save thousands in future repairs. We coordinate this for every client.',
  },
  {
    icon: Lightbulb,
    title: 'Prioritize Structural Upgrades',
    description: 'Cosmetic upgrades can be added later, but structural changes (extra garage bay, additional bathroom rough-in, expanded patio) must be done during construction. Focus your design center budget on things you can\'t easily change.',
  },
  {
    icon: TrendingUp,
    title: 'Understand the Appreciation Map',
    description: 'Not all new construction neighborhoods appreciate equally. Areas with planned commercial development, school improvements, and infrastructure expansion (like the I-485/I-77 corridor) tend to see the strongest long-term gains.',
  },
]

// âââ COMPONENTS âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= Math.floor(rating)
              ? 'fill-yellow-400 text-yellow-400'
              : star - 0.5 <= rating
              ? 'fill-yellow-400/50 text-yellow-400'
              : 'text-silver'
          }`}
        />
      ))}
      <span className="ml-1 text-sm font-medium text-navy/70">{rating.toFixed(1)}</span>
    </div>
  )
}

// âââ NAVIGATION âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

function Navigation({ activeSection, onNavigate }: { activeSection: string; onNavigate: (section: string) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { id: 'quiz', label: 'Buyer Quiz', icon: HelpCircle },
    { id: 'neighborhoods', label: 'Neighborhoods', icon: MapPin },
    { id: 'builders', label: 'Builders', icon: Building2 },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
    { id: 'strategies', label: 'Strategies', icon: Lightbulb },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => onNavigate('hero')} className="flex items-center gap-2 group">
            <Home className="w-6 h-6 text-slate group-hover:text-white transition-colors" />
            <div className="hidden sm:block">
              <span className="font-serif text-lg font-bold text-white">HGPG</span>
              <span className="text-slate text-xs ml-2">New Construction Guide</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-white/15 text-white'
                    : 'text-slate hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="tel:8039024701"
            className="hidden md:flex items-center gap-2 bg-white text-navy px-4 py-2 rounded-lg font-semibold text-sm hover:bg-light-gray transition-colors"
          >
            <Phone className="w-4 h-4" />
            803-902-4701
          </a>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMobileOpen(false) }}
                className={`flex items-center gap-2 w-full px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-white/15 text-white'
                    : 'text-slate hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
            <a
              href="tel:8039024701"
              className="flex items-center gap-2 justify-center bg-white text-navy px-4 py-3 rounded-lg font-semibold text-sm mt-3"
            >
              <Phone className="w-4 h-4" />
              803-902-4701
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

// âââ HERO SECTION âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

function HeroSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-white/90 text-sm font-medium">2026 Charlotte Metro New Construction Guide</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your Guide to{' '}
          <span className="text-slate">New Construction</span>{' '}
          in Charlotte
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
          Compare builders, explore neighborhoods, calculate savings, and discover expert strategies
          for buying a new construction home in South Charlotte, Fort Mill, Indian Land, and Waxhaw.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('quiz')}
            className="flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-light-gray transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02]"
          >
            <HelpCircle className="w-5 h-5" />
            Take the Buyer Quiz
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate('builders')}
            className="flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
          >
            <Building2 className="w-5 h-5" />
            Browse Builders
          </button>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          {[
            { value: '8+', label: 'Top Builders' },
            { value: '80+', label: 'Communities' },
            { value: '$290K+', label: 'Starting From' },
            { value: '5', label: 'Key Areas' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// âââ BUYER QUIZ âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

function BuyerQuiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [currentQ]: value }
    setAnswers(newAnswers)

    if (currentQ < quizQuestions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 300)
    } else {
      setTimeout(() => setShowResults(true), 300)
    }
  }

  const getRecommendation = () => {
    const budget = answers[1]
    const priority = answers[2]
    const location = answers[3]

    let recBuilders: string[] = []
    let recNeighborhood = ''
    let recTip = ''

    if (budget === 'under-400') {
      recBuilders = ['DR Horton', 'Lennar', 'Meritage Homes']
    } else if (budget === '400-600') {
      recBuilders = ['Lennar', 'Pulte Homes', 'Meritage Homes', 'M/I Homes']
    } else if (budget === '600-900') {
      recBuilders = ['Taylor Morrison', 'M/I Homes', 'Shea Homes', 'Pulte Homes']
    } else {
      recBuilders = ['Toll Brothers', 'Shea Homes', 'Taylor Morrison']
    }

    if (location === 'south-charlotte') recNeighborhood = 'South Charlotte (Ballantyne / Ardrey Kell)'
    else if (location === 'fort-mill') recNeighborhood = 'Fort Mill / Tega Cay, SC'
    else if (location === 'indian-land') recNeighborhood = 'Indian Land, SC'
    else recNeighborhood = 'Waxhaw / Weddington, NC'

    if (priority === 'schools') recTip = 'Focus on South Charlotte and Waxhaw for the highest-rated school districts (Ardrey Kell, Marvin Ridge, Weddington).'
    else if (priority === 'value') recTip = 'Indian Land and Fort Mill offer the best price per square foot with SC tax advantages.'
    else if (priority === 'luxury') recTip = 'Toll Brothers and Shea Homes offer the most extensive customization and premium finishes.'
    else recTip = 'Meritage and Lennar lead the market in energy efficiency with ENERGY STAR certified homes and solar-ready builds.'

    return { recBuilders, recNeighborhood, recTip }
  }

  const resetQuiz = () => {
    setCurrentQ(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    const { recBuilders, recNeighborhood, recTip } = getRecommendation()
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-silver/30">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-navy/10 rounded-full mb-4">
              <CheckCircle2 className="w-8 h-8 text-navy" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-2">Your Personalized Recommendations</h3>
            <p className="text-navy/60">Based on your preferences, here&apos;s what we recommend:</p>
          </div>

          <div className="space-y-6">
            <div className="bg-light-gray rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-navy" />
                <span className="font-semibold text-navy">Recommended Area</span>
              </div>
              <p className="text-navy/80 ml-7">{recNeighborhood}</p>
            </div>

            <div className="bg-light-gray rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-navy" />
                <span className="font-semibold text-navy">Top Builders For You</span>
              </div>
              <div className="ml-7 flex flex-wrap gap-2">
                {recBuilders.map((b) => (
                  <span key={b} className="bg-navy text-white px-3 py-1 rounded-full text-sm font-medium">{b}</span>
                ))}
              </div>
            </div>

            <div className="bg-light-gray rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-navy" />
                <span className="font-semibold text-navy">Pro Tip</span>
              </div>
              <p className="text-navy/80 ml-7">{recTip}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:8039024701"
              className="flex-1 flex items-center justify-center gap-2 bg-navy text-white py-3 px-6 rounded-xl font-semibold hover:bg-navy/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Talk to Brian â 803-902-4701
            </a>
            <button
              onClick={resetQuiz}
              className="flex-1 flex items-center justify-center gap-2 border-2 border-navy text-navy py-3 px-6 rounded-xl font-semibold hover:bg-navy/5 transition-colors"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  const q = quizQuestions[currentQ]

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-navy/50 mb-2">
          <span>Question {currentQ + 1} of {quizQuestions.length}</span>
          <span>{Math.round(((currentQ) / quizQuestions.length) * 100)}% complete</span>
        </div>
        <div className="h-2 bg-silver/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-navy rounded-full transition-all duration-500"
            style={{ width: `${(currentQ / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="font-serif text-2xl font-bold text-navy mb-6 text-center">{q.question}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {q.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            className={`quiz-option text-left text-lg font-medium ${
              answers[currentQ] === opt.value ? 'selected' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                answers[currentQ] === opt.value ? 'border-navy bg-navy' : 'border-silver'
              }`}>
                {answers[currentQ] === opt.value && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              {opt.label}
            </div>
          </button>
        ))}
      </div>

      {currentQ > 0 && (
        <button
          onClick={() => setCurrentQ(currentQ - 1)}
          className="mt-6 text-navy/50 hover:text-navy text-sm font-medium flex items-center gap-1 mx-auto"
        >
          â Back to previous question
        </button>
      )}
    </div>
  )
}

// âââ NEIGHBORHOODS ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

function NeighborhoodCards() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {neighborhoods.map((n) => (
        <div
          key={n.name}
          className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-silver/20"
        >
          {/* Header gradient */}
          <div className="bg-gradient-to-br from-navy to-navy/80 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-white">{n.name}</h3>
                <p className="text-white/60 text-sm mt-1">{n.area}</p>
              </div>
              <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {n.growth}
              </span>
            </div>
            <div className="mt-4 text-white/90 font-semibold text-lg">{n.priceRange}</div>
          </div>

          <div className="p-6">
            <p className="text-navy/70 text-sm leading-relaxed mb-4">{n.description}</p>

            <div className="mb-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-navy/50 uppercase tracking-wider mb-2">
                <Award className="w-3 h-3" />
                Schools
              </div>
              <p className="text-sm text-navy/80">{n.schools}</p>
            </div>

            <button
              onClick={() => setExpanded(expanded === n.name ? null : n.name)}
              className="flex items-center gap-1 text-sm font-semibold text-navy hover:text-navy/70 transition-colors"
            >
              {expanded === n.name ? 'Show less' : 'View highlights & builders'}
              <ChevronDown className={`w-4 h-4 transition-transform ${expanded === n.name ? 'rotate-180' : ''}`} />
            </button>

            {expanded === n.name && (
              <div className="mt-4 space-y-4 animate-in">
                <div>
                  <div className="text-xs font-semibold text-navy/50 uppercase tracking-wider mb-2">Highlights</div>
                  <div className="flex flex-wrap gap-2">
                    {n.highlights.map((h) => (
                      <span key={h} className="bg-light-gray text-navy/80 text-xs px-2.5 py-1 rounded-lg">{h}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-navy/50 uppercase tracking-wider mb-2">Active Builders</div>
                  <div className="flex flex-wrap gap-2">
                    {n.builders.map((b) => (
                      <span key={b} className="bg-navy/10 text-navy text-xs font-medium px-2.5 py-1 rounded-lg">{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

// âââ BUILDER CARDS ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

function BuilderCards() {
  const [filter, setFilter] = useState<string>('all')
  const [expandedBuilder, setExpandedBuilder] = useState<string | null>(null)

  const filteredBuilders = filter === 'all'
    ? builders
    : builders.filter((b) => {
        if (filter === 'luxury') return parseInt(b.priceRange.replace(/[^0-9]/g, '')) >= 500
        if (filter === 'value') return parseInt(b.priceRange.replace(/[^0-9]/g, '')) < 400
        if (filter === 'active-adult') return b.specialties.some((s) => s.toLowerCase().includes('active adult'))
        return true
      })

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {[
          { id: 'all', label: 'All Builders' },
          { id: 'luxury', label: 'Luxury ($500K+)' },
          { id: 'value', label: 'Best Value (<$400K)' },
          { id: 'active-adult', label: 'Active Adult / 55+' },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              filter === f.id
                ? 'bg-navy text-white shadow-md'
                : 'bg-white text-navy/70 hover:bg-silver/30 border border-silver/30'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Builder grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBuilders.map((b) => (
          <div
            key={b.name}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-silver/20 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-navy">{b.name}</h3>
                  <p className="text-navy/50 text-sm">{b.tagline}</p>
                </div>
                <StarRating rating={b.rating} />
              </div>

              <div className="text-lg font-semibold text-navy mb-3">{b.priceRange}</div>

              {/* Incentive banner */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-2">
                  <DollarSign className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-green-800 text-sm">{b.incentive}</div>
                    <div className="text-green-600 text-xs mt-1">Expires: {b.incentiveExpiry}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-navy/60 mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {b.communities} communities
                </span>
                <span className="flex items-center gap-1">
                  <Hammer className="w-4 h-4" />
                  {b.specialties.length} home types
                </span>
              </div>

              <button
                onClick={() => setExpandedBuilder(expandedBuilder === b.name ? null : b.name)}
                className="flex items-center gap-1 text-sm font-semibold text-navy hover:text-navy/70 transition-colors"
              >
                {expandedBuilder === b.name ? 'Show less' : 'View features & specialties'}
                <ChevronDown className={`w-4 h-4 transition-transform ${expandedBuilder === b.name ? 'rotate-180' : ''}`} />
              </button>

              {expandedBuilder === b.name && (
                <div className="mt-4 space-y-4 animate-in">
                  <div>
                    <div className="text-xs font-semibold text-navy/50 uppercase tracking-wider mb-2">Key Features</div>
                    <div className="grid grid-cols-2 gap-2">
                      {b.features.map((f) => (
                        <div key={f} className="flex items-center gap-1.5 text-sm text-navy/70">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy/50 uppercase tracking-wider mb-2">Home Types</div>
                    <div className="flex flex-wrap gap-2">
                      {b.specialties.map((s) => (
                        <span key={s} className="bg-navy/10 text-navy text-xs font-medium px-2.5 py-1 rounded-lg">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// âââ CALCULATOR âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

function SavingsCalculator() {
  const [homePrice, setHomePrice] = useState(450000)
  const [downPaymentPct, setDownPaymentPct] = useState(10)
  const [interestRate, setInterestRate] = useState(6.5)
  const [builderCredit, setBuilderCredit] = useState(15000)
  const [rateBuydown, setRateBuydown] = useState(0.5)

  const downPayment = homePrice * (downPaymentPct / 100)
  const loanAmount = homePrice - downPayment

  const monthlyRateStandard = interestRate / 100 / 12
  const monthlyRateBuydown = (interestRate - rateBuydown) / 100 / 12
  const n = 360

  const monthlyStandard = loanAmount * (monthlyRateStandard * Math.pow(1 + monthlyRateStandard, n)) / (Math.pow(1 + monthlyRateStandard, n) - 1)
  const monthlyBuydown = loanAmount * (monthlyRateBuydown * Math.pow(1 + monthlyRateBuydown, n)) / (Math.pow(1 + monthlyRateBuydown, n) - 1)

  const monthlySavings = monthlyStandard - monthlyBuydown
  const totalSavingsOverLife = monthlySavings * n
  const totalIncentiveSavings = builderCredit + totalSavingsOverLife

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-silver/20">
          <h3 className="font-serif text-xl font-bold text-navy mb-6">Adjust Your Numbers</h3>

          <div className="space-y-6">
            <div>
              <label className="flex justify-between text-sm font-medium text-navy mb-2">
                <span>Home Price</span>
                <span className="text-navy font-bold">{formatCurrency(homePrice)}</span>
              </label>
              <input
                type="range"
                min={200000}
                max={1500000}
                step={10000}
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-navy/40 mt-1">
                <span>$200K</span>
                <span>$1.5M</span>
              </div>
            </div>

            <div>
              <label className="flex justify-between text-sm font-medium text-navy mb-2">
                <span>Down Payment</span>
                <span className="text-navy font-bold">{downPaymentPct}% ({formatCurrency(downPayment)})</span>
              </label>
              <input
                type="range"
                min={3}
                max={30}
                step={1}
                value={downPaymentPct}
                onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-navy/40 mt-1">
                <span>3%</span>
                <span>30%</span>
              </div>
            </div>

            <div>
              <label className="flex justify-between text-sm font-medium text-navy mb-2">
                <span>Interest Rate</span>
                <span className="text-navy font-bold">{interestRate.toFixed(2)}%</span>
              </label>
              <input
                type="range"
                min={4}
                max={9}
                step={0.125}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-navy/40 mt-1">
                <span>4%</span>
                <span>9%</span>
              </div>
            </div>

            <div>
              <label className="flex justify-between text-sm font-medium text-navy mb-2">
                <span>Builder Credit / Closing Assistance</span>
                <span className="text-navy font-bold">{formatCurrency(builderCredit)}</span>
              </label>
              <input
                type="range"
                min={0}
                max={50000}
                step={1000}
                value={builderCredit}
                onChange={(e) => setBuilderCredit(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-navy/40 mt-1">
                <span>$0</span>
                <span>$50K</span>
              </div>
            </div>

            <div>
              <label className="flex justify-between text-sm font-medium text-navy mb-2">
                <span>Rate Buydown</span>
                <span className="text-navy font-bold">{rateBuydown.toFixed(2)}% off</span>
              </label>
              <input
                type="range"
                min={0}
                max={2}
                step={0.125}
                value={rateBuydown}
                onChange={(e) => setRateBuydown(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-navy/40 mt-1">
                <span>0%</span>
                <span>2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="font-serif text-xl font-bold mb-6">Your Savings Breakdown</h3>

            <div className="space-y-5">
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/70">Loan Amount</span>
                <span className="font-bold text-lg">{formatCurrency(loanAmount)}</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/70">Monthly Payment (Standard)</span>
                <span className="font-bold text-lg">{formatCurrency(monthlyStandard)}</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <div>
                  <span className="text-white/70">Monthly Payment (With Buydown)</span>
                  <div className="text-xs text-white/40">{(interestRate - rateBuydown).toFixed(2)}% rate</div>
                </div>
                <span className="font-bold text-lg text-green-300">{formatCurrency(monthlyBuydown)}</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/70">Monthly Savings</span>
                <span className="font-bold text-lg text-green-300">{formatCurrency(monthlySavings)}/mo</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/70">Builder Credit</span>
                <span className="font-bold text-lg text-green-300">{formatCurrency(builderCredit)}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 sm:p-8 text-center">
            <div className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-2">Total Estimated Savings</div>
            <div className="font-serif text-4xl font-bold text-green-800">{formatCurrency(totalIncentiveSavings)}</div>
            <div className="text-sm text-green-600 mt-2">
              {formatCurrency(builderCredit)} credit + {formatCurrency(totalSavingsOverLife)} over 30 years
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-md border border-silver/20 text-center">
            <p className="text-navy/60 text-sm mb-3">Want help maximizing your builder incentives?</p>
            <a
              href="tel:8039024701"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Brian â 803-902-4701
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// âââ STRATEGIES âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

function StrategiesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {strategies.map((s, i) => (
        <div
          key={s.title}
          className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-silver/20 group"
        >
          <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy group-hover:text-white transition-all">
            <s.icon className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-navy/30">#{i + 1}</span>
            <h3 className="font-serif text-lg font-bold text-navy">{s.title}</h3>
          </div>
          <p className="text-navy/60 text-sm leading-relaxed">{s.description}</p>
        </div>
      ))}
    </div>
  )
}

// âââ CTA SECTION ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

function CTASection() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Find Your New Construction Home?
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
          Brian McCarron and the Home Grown Property Group team specialize in new construction
          across Charlotte, South Charlotte, Fort Mill, Indian Land, and Waxhaw. Let us negotiate
          the best deal for you â at no cost.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:8039024701"
            className="flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-light-gray transition-all shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Call 803-902-4701
          </a>
          <a
            href="mailto:brian@homegrownpropertygroup.com"
            className="flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
          >
            <Mail className="w-5 h-5" />
            Email Brian
          </a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-6 text-white/40 text-sm">
          <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 500+ Families Helped</span>
          <span className="flex items-center gap-1.5"><Award className="w-4 h-4" /> Real Broker, LLC</span>
          <span className="flex items-center gap-1.5"><TreePine className="w-4 h-4" /> Local Expert</span>
        </div>
      </div>
    </section>
  )
}

// âââ FOOTER âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

function Footer() {
  return (
    <footer className="bg-navy/95 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-slate" />
            <span className="font-serif font-bold text-white">Home Grown Property Group</span>
            <span className="text-white/30 text-sm">| Real Broker, LLC</span>
          </div>
          <div className="text-white/40 text-sm text-center sm:text-right">
            <p>Â© {new Date().getFullYear()} Home Grown Property Group. All rights reserved.</p>
            <p className="mt-1">Brian McCarron | 803-902-4701 | brian@homegrownpropertygroup.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// âââ MAIN PAGE ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('hero')
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const handleNavigate = (section: string) => {
    const el = sectionRefs.current[section]
    if (el) {
      const yOffset = -80
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -60% 0px' }
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el
  }

  return (
    <main className="min-h-screen bg-light-gray">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <div ref={setRef('hero')}>
        <HeroSection onNavigate={handleNavigate} />
      </div>

      {/* Buyer Quiz */}
      <section ref={setRef('quiz')} id="quiz" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-navy/10 text-navy text-sm font-semibold px-3 py-1 rounded-full mb-4">
              PERSONALIZED RECOMMENDATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              New Construction Buyer Quiz
            </h2>
            <p className="text-navy/60 max-w-2xl mx-auto">
              Answer 5 quick questions and we&apos;ll match you with the best builders, neighborhoods,
              and strategies for your new construction home search.
            </p>
          </div>
          <BuyerQuiz />
        </div>
      </section>

      {/* Neighborhoods */}
      <section ref={setRef('neighborhoods')} id="neighborhoods" className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-navy/10 text-navy text-sm font-semibold px-3 py-1 rounded-full mb-4">
              EXPLORE THE MARKET
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              Charlotte Metro Neighborhoods
            </h2>
            <p className="text-navy/60 max-w-2xl mx-auto">
              From South Charlotte&apos;s top-rated schools to Fort Mill&apos;s tax advantages,
              discover which neighborhood fits your lifestyle and budget.
            </p>
          </div>
          <NeighborhoodCards />
        </div>
      </section>

      {/* Builders */}
      <section ref={setRef('builders')} id="builders" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-navy/10 text-navy text-sm font-semibold px-3 py-1 rounded-full mb-4">
              COMPARE & SAVE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              Featured Builders & Incentives
            </h2>
            <p className="text-navy/60 max-w-2xl mx-auto">
              Current incentives, ratings, and community details for the top new construction
              builders in the Charlotte metro. Updated for 2026.
            </p>
          </div>
          <BuilderCards />
        </div>
      </section>

      {/* Calculator */}
      <section ref={setRef('calculator')} id="calculator" className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-navy/10 text-navy text-sm font-semibold px-3 py-1 rounded-full mb-4">
              RUN THE NUMBERS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              Builder Incentive Savings Calculator
            </h2>
            <p className="text-navy/60 max-w-2xl mx-auto">
              See how builder incentives like rate buydowns and closing cost credits can save you
              tens of thousands over the life of your loan.
            </p>
          </div>
          <SavingsCalculator />
        </div>
      </section>

      {/* Strategies */}
      <section ref={setRef('strategies')} id="strategies" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-navy/10 text-navy text-sm font-semibold px-3 py-1 rounded-full mb-4">
              EXPERT ADVICE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              Smart Buyer Strategies
            </h2>
            <p className="text-navy/60 max-w-2xl mx-auto">
              Insider tips from Brian McCarron on how to save money, avoid common mistakes,
              and get the best deal on your new construction home.
            </p>
          </div>
          <StrategiesSection />
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
