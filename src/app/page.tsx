'use client';

import { useState } from 'react';
import {
  Home,
  MapPin,
  Calculator,
  ChevronRight,
  TrendingUp,
  Clock,
  Menu,
  X,
  Check,
  AlertTriangle,
  Award,
  Building2,
  DollarSign,
  Sparkles,
  Shield,
} from 'lucide-react';

export default function NewConstructionPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Buyer Quiz', 'Neighborhoods', 'Builders', 'Calculator'];

  const builders = [
    {
      name: 'M/I Homes',
      priceRange: '$280,000 - $550,000',
      incentives: 3,
      savings: '$15,000',
      badge: '3 Active Incentives',
    },
    {
      name: 'DR Horton',
      priceRange: '$250,000 - $450,000',
      incentives: 2,
      savings: '$12,000',
      badge: '2 Active Incentives',
    },
    {
      name: 'Pulte Homes',
      priceRange: '$320,000 - $650,000',
      incentives: 2,
      savings: '$25,000',
      badge: '2 Active Incentives',
    },
    {
      name: 'David Weekley Homes',
      priceRange: '$400,000 - $800,000',
      incentives: 1,
      savings: '$15,000',
      badge: '1 Active Incentive',
    },
    {
      name: 'Lennar',
      priceRange: '$290,000 - $500,000',
      incentives: 1,
      savings: '$18,000',
      badge: '1 Active Incentive',
    },
    {
      name: 'True Homes',
      priceRange: '$275,000 - $480,000',
      incentives: 0,
      savings: null,
      badge: null,
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'Record-High Builder Incentives',
      description: '66% of builders offering incentives - highest in 5 years. Rate buydowns as low as 4.875%.',
    },
    {
      icon: Calculator,
      title: 'Incentive Stacking Calculator',
      description: 'Combine builder incentives + down payment assistance for maximum savings up to $45K+.',
    },
    {
      icon: MapPin,
      title: 'Neighborhood Matcher Quiz',
      description: 'Find your perfect Charlotte community based on budget, schools, commute, and lifestyle.',
    },
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Weekly updates on new incentives, expiring deals, and hot new communities.',
    },
  ];

  const whyCards = [
    {
      title: 'Builder Incentives',
      description: 'Save $15K-$85K+ with rate buydowns, closing cost assistance, and upgrade packages not available with resale homes.',
    },
    {
      title: "Everything's New",
      description: 'Brand new appliances, HVAC, roof, and systems. No surprise repairs or maintenance for years.',
    },
    {
      title: 'Customize Your Home',
      description: "Choose finishes, colors, and upgrades to match your style. No need to renovate someone else's choices.",
    },
    {
      title: 'Lower Costs',
      description: 'Energy-efficient construction means lower utility bills. Plus, builder warranties protect your investment.',
    },
  ];

  const strategies = [
    {
      icon: Home,
      title: 'First-Time Buyers',
      badge: 'Up to $15K Down Payment Assistance',
      description: 'NC & SC programs can get you into a brand new home with little to no money down.',
    },
    {
      icon: TrendingUp,
      title: 'Move-Up Buyers',
      badge: 'Stack Your Equity + Incentives',
      description: 'Leverage your home equity plus builder incentives for maximum buying power.',
    },
    {
      icon: Award,
      title: 'Relocating Professionals',
      badge: 'Quick Move-In Homes Available',
      description: 'Close in 30-60 days on completed homes with full builder warranties.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://newconstruction.homegrownpropertygroup.com/logos/trimmed_6.png"
                alt="Home Grown Property Group"
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium text-sm"
                >
               {item}
                </a>
              ))}
            </nav>

            {/* Get Started Button (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-[#2A384C] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#1e2937] transition">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-700 hover:text-gray-900 font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-[#2A384C] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#1e2937] transition">
                Get Started
              </button>
            </div>
          )}
        </div>
      </header>

      {/* SECTION 1 - HERO */}
      <section className="relative h-screen md:h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://newconstruction.homegrownpropertygroup.com/charlotte-skyline.jpg"
            alt="Charlotte Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-blue-500/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-900">Updated Weekly with the Latest Incentives</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Charlotte's Complete New Construction Resource
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Discover builder incentives worth up to <strong>$120,000</strong> and maximize your savings on new construction homes in the Charlotte metro area.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <button className="inline-flex items-center justify-center bg-[#2A384C] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1e2937] transition">
                Get Started Free <ChevronRight className="w-4 h-4 ml-2" />
              </button>
              <button className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
                Browse Builders
              </button>
              <button className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
                Submit Your Incentives
              </button>
            </div>

            {/* Below buttons text */}
            <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-700">
              <span>✓ Exclusive access for qualified buyers</span>
              <span>✓ Instant access</span>
              <span>✓ Updated weekly</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - STATS BAR */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">13+</div>
              <div className="text-sm text-gray-600">Active Builders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">9+</div>
              <div className="text-sm text-gray-600">Current Incentives</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">$30K</div>
              <div className="text-sm text-gray-600">Max Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">4.875%</div>
              <div className="text-sm text-gray-600">Lowest Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - WHY CHOOSE NEW CONSTRUCTION */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose New Construction?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              New construction offers unique advantages over resale homes, especially in today's market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - EVERYTHING YOU NEED */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Buy Smart</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get insider access to builder incentives, neighborhood insights, and expert strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8">
                  <div className="flex items-start space-x-4">
                    <IconComponent className="w-8 h-8 text-[#2A384C] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 - PROTECT YOUR REPRESENTATION */}
      <section className="bg-gradient-to-r from-[#2A384C] to-[#3A4A5E] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4 mb-8">
            <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Important: Protect Your Representation</h2>
              <p className="text-lg mb-4">
                <strong>Before contacting any builder directly, you must mention you're working with a realtor. Many builders won't allow you to add a realtor later if you've already made contact.</strong>
              </p>
              <p className="text-lg mb-8">
                This is why we route all builder introductions through your agent - to ensure you're properly represented and protected throughout the buying process.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Expert Negotiation', description: 'Your agent negotiates incentives and terms on your behalf at no cost to you.' },
              { title: 'Contract Protection', description: 'Navigate complex builder contracts with professional guidance and advocacy.' },
              { title: 'Incentive Maximization', description: 'Stack builder incentives with programs you might not know about.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - FEATURED BUILDERS */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Builders & Current Incentives</h2>
            <p className="text-lg text-gray-600">Explore 13+ Charlotte builders with active incentives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {builders.map((builder, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{builder.name}</h3>
                  {builder.badge && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ml-2">
                      {builder.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-4">{builder.priceRange}</p>
                {builder.savings ? (
                  <>
                    <p className="text-gray-900 font-bold mb-4">Save up to {builder.savings}</p>
                    <button className="mt-auto bg-[#2A384C] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1e2937] transition">
                      View Incentives
                    </button>
                  </>
                ) : (
                  <p className="text-gray-600 mt-auto">Check back for new incentives</p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-[#2A384C] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1e2937] transition">
              View All Builders & Incentives
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7 - TAILORED STRATEGIES */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tailored Strategies for Every Buyer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're buying your first home or upgrading, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategies.map((strategy, idx) => {
              const IconComponent = strategy.icon;
              return (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8">
                  <IconComponent className="w-10 h-10 text-[#2A384C] mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{strategy.title}</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {strategy.badge}
                  </span>
                  <p className="text-gray-600">{strategy.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8 - CTA */}
      <section className="bg-gradient-to-r from-[#2A384C] to-[#3A4A5E] text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Saving?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Get instant access to builder incentives, neighborhood insights, and expert strategies to maximize your savings.
          </p>
          <button className="inline-flex items-center justify-center bg-white text-[#2A384C] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Unlock Your Free Guide <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            {/* Logo and Description */}
            <div>
              <img
                src="https://newconstruction.homegrownpropertygroup.com/logos/trimmed_6.png"
                alt="Home Grown Property Group"
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-gray-600">
                Your trusted guide to the 2026 Greater Charlotte real estate market. Rooted in community, focused on your growth.
              </p>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Buyer Quiz</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Neighborhood Guides</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Market Strategy</a></li>
              </ul>
            </div>

            {/* More Guides */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">More Guides</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Seller's Guide</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">New Construction Guide</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Disclaimer</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Ready to start?</h4>
              <button className="w-full bg-[#2A384C] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1e2937] transition mb-4">
                Contact an Agent
              </button>
              <p className="text-sm text-gray-600 mb-2">7612 Charlotte Highway, Indian Land, SC 29707</p>
              <p className="text-sm text-gray-600 mb-2">803-902-3700</p>
              <p className="text-sm text-gray-600">Info@HomeGrownPropertyGroup.com</p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-600">© 2026 Home Grown Property Group. All rights reserved.</p>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 font-medium">Admin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
