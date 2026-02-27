'use client'

import { MapPin, Phone, MessageCircle, Facebook, Heart, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white border border-border overflow-hidden flex items-center justify-center">
                <img
                  src="https://apeirosprod.blob.core.windows.net/retailer-details-prod/HGOOQ5ECP/WhatsApp_Image_2026-02-25_at_3.30.46_PM_1772018790267.jpeg"
                  alt="Tulsi Footwear logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Tulsi Footwear</h1>
                <p className="text-xs text-muted-foreground">Premium shoes in red & black style</p>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#products" className="hover:text-primary transition">Products</a>
            <a href="#gallery" className="hover:text-primary transition">Gallery</a>
            <a href="#pricing" className="hover:text-primary transition">Pricing</a>
            <a href="#faq" className="hover:text-primary transition">FAQ</a>
            <a href="#locations" className="hover:text-primary transition">Locations</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-transparent py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Shoes That Speak Your Style
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Casuals to Customs — We've Got Your Soles Covered 👟
          </p>
          <p className="text-lg text-foreground mb-8">
            Discover our curated collection of premium footwear for every occasion and every style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
              Get in Touch
            </Link>
            <Link href="#locations" className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition">
              Find Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-foreground mb-16 text-center">Our Collections</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '👟', name: 'Casual Shoes', desc: 'Comfortable everyday wear' },
              { icon: '👔', name: 'Formal Shoes', desc: 'Professional elegance' },
              { icon: '👢', name: 'Slippers', desc: 'Cozy comfort at home' },
              { icon: '🩴', name: 'Sandals', desc: 'Perfect for any season' },
            ].map((product, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-border hover:border-primary transition shadow-sm">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{product.name}</h4>
                <p className="text-muted-foreground">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-foreground mb-6 text-center">Gallery</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A glimpse of our latest arrivals and best-selling styles. Visit our stores to explore the full collection.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/Screenshot 2026-02-27 120324.png', label: 'Store display' },
              { src: '/Screenshot 2026-02-27 120630.png', label: 'Men’s casual collection' },
              { src: '/Screenshot 2026-02-27 115232.png', label: 'Women’s sandals' },
              { src: '/Screenshot 2026-02-27 115313.png', label: 'New arrivals' },
              { src: '/Screenshot 2026-02-27 115330.png', label: 'Customer favourites' },
              { src: '/Screenshot 2026-02-27 115352.png', label: 'Daily bestsellers' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-border overflow-hidden shadow-sm">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">Captured at Tulsi Footwear.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-foreground mb-16 text-center">Why Choose Tulsi</h3>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: 'Quality Products', desc: 'Premium footwear designed for comfort and style' },
              { icon: Heart, title: 'Customer Focused', desc: 'Your satisfaction is our priority' },
              { icon: MapPin, title: 'Multiple Locations', desc: 'Easy access across Mumbai locations' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground mb-3">{item.title}</h4>
                  <p className="text-muted-foreground text-lg">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-foreground mb-6 text-center">Pricing</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Transparent pricing for every budget. Exact prices vary by style and size in-store.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Casual Collection',
                price: 'From ₹799',
                desc: 'Daily-wear shoes designed for comfort and durability.',
              },
              {
                name: 'Formal Collection',
                price: 'From ₹1,299',
                desc: 'Polished styles for office, events and special occasions.',
              },
              {
                name: 'Slippers & Sandals',
                price: 'From ₹399',
                desc: 'Easy-going options for home, travel and everyday use.',
              },
            ].map((tier) => (
              <div key={tier.name} className="bg-white rounded-lg border border-border p-8 shadow-sm">
                <h4 className="text-xl font-semibold text-foreground mb-2">{tier.name}</h4>
                <p className="text-2xl font-bold text-primary mb-3">{tier.price}</p>
                <p className="text-muted-foreground text-sm mb-4">{tier.desc}</p>
                <p className="text-xs text-muted-foreground">
                  Visit our Kalyan, Ulhasnagar, Vashi or Thane store to see full pricing and offers.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-foreground mb-6 text-center">Frequently Asked Questions</h3>
          <p className="text-muted-foreground text-center mb-12">
            Answers to common questions about Tulsi Footwear.
          </p>
          <div className="space-y-6">
            <div className="bg-white border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">Do you offer custom sizes or designs?</h4>
              <p className="text-muted-foreground">
                We stock a wide range of sizes across all collections. For specific requirements, please visit our
                nearest store or message us on WhatsApp and our team will guide you.
              </p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">What is your exchange or return policy?</h4>
              <p className="text-muted-foreground">
                Exchange is available on most products within a limited time when accompanied by the original bill and
                unused condition. Exact policy may vary by store and offer, so please confirm at the counter.
              </p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">Do you deliver or take orders online?</h4>
              <p className="text-muted-foreground">
                We currently assist customers via WhatsApp for product queries and availability. Visit our stores for
                final selection, fitting and billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-foreground mb-16 text-center">Visit Our Stores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Kalyan', gmap: 'https://maps.app.goo.gl/mxmUEFbnLVYK5FBL6' },
              { name: 'Ulhasnagar', gmap: 'https://maps.app.goo.gl/kQrJnPknCbKCQWTe8' },
              { name: 'Vashi', gmap: '#' },
              { name: 'Thane', gmap: 'https://maps.app.goo.gl/E4JkktrYi96Sq7DS8' },
            ].map((location, idx) => (
              <Link
                key={idx}
                href={location.gmap}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-lg border border-border hover:border-primary hover:shadow-lg transition text-center group"
              >
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition" />
                <h4 className="text-xl font-semibold text-foreground mb-2">{location.name}</h4>
                <p className="text-sm text-primary font-medium">View on Map →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-foreground mb-12 text-center">Get in Touch</h3>
          <div className="bg-white rounded-lg border border-border p-12 shadow-sm">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h4>
                <p className="text-muted-foreground mb-3">Quick messaging available</p>
                <Link
                  href="https://wa.me/message/TNELR7RWK46LB1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Chat with us
                </Link>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Phone</h4>
                <p className="text-muted-foreground mb-3">Call us during business hours</p>
                <Link href="tel:+918390089197" className="text-primary font-semibold hover:underline">
                  8390089197
                </Link>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Facebook className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Follow Us</h4>
                <p className="text-muted-foreground mb-3">Stay updated with new products</p>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Facebook Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">About Tulsi</h4>
              <p className="text-white/70 text-sm">Premium footwear for every occasion. Serving Mumbai with quality shoes since day one.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#products" className="hover:text-white transition">Collections</a></li>
                <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Locations</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Kalyan</li>
                <li>Ulhasnagar</li>
                <li>Vashi</li>
                <li>Thane</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="space-y-2">
                <p className="text-sm text-white/70">
                  <Link href="https://instagram.com/tulsishoes_official" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Instagram @tulsishoes_official
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>© 2026 Tulsi Footwear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
