import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";
import { brand } from "@/config/brand";

export default function Index() {
  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Hero background */}
        <div className="absolute inset-0">
          <img
            src={brand.heroImage}
            alt="Smileyque luxury fashion hero"
            className="w-full h-full object-cover object-center"
          />
          {/* Layered overlay for luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/30 to-brand-black/70" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          {/* Pre-tagline */}
          <p className="font-inter text-xs tracking-[0.4em] uppercase text-primary mb-5 animate-fade-in-up opacity-0 animate-delay-100">
            Luxury Bespoke Fashion
          </p>

          {/* Brand name */}
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-semibold text-background leading-none tracking-widest mb-4 animate-fade-in-up opacity-0 animate-delay-200">
            {brand.brandName}
          </h1>

          {/* Tagline */}
          <p className="font-playfair italic text-xl md:text-3xl text-background/85 mb-2 animate-fade-in-up opacity-0 animate-delay-200">
            {brand.tagline}
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-primary my-6 animate-fade-in-up opacity-0 animate-delay-300" />

          {/* Sub-tagline */}
          <p className="font-inter text-sm text-background/70 max-w-md leading-relaxed mb-10 animate-fade-in-up opacity-0 animate-delay-300">
            {brand.subTagline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up opacity-0 animate-delay-300">
            <Link
              to="/collections"
              className="font-inter text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-gold-light transition-colors duration-300 shadow-gold"
            >
              Book Your Order Now
            </Link>
            <Link
              to="/lookbook"
              className="font-inter text-sm tracking-[0.2em] uppercase border border-background/60 text-background px-8 py-4 hover:bg-background/10 transition-colors duration-300"
            >
              View Lookbook
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-background/50">
            Scroll
          </span>
          <div className="w-px h-8 bg-background/30" />
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="bg-primary text-primary-foreground overflow-hidden py-3">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-inter text-xs tracking-[0.3em] uppercase mx-8">
              Bespoke Gowns &nbsp;•&nbsp; Senator Wear &nbsp;•&nbsp; Bridal Couture &nbsp;•&nbsp; Editorial Fashion
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURED DESIGNS ── */}
      <section className="section-padding bg-background">
        <div className="text-center mb-14">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Curated Selection
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold">
            Featured Designs
          </h2>
          <div className="gold-divider" />
          <p className="font-inter text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Handpicked pieces that embody the Smileyque aesthetic — bold, refined, and unmistakably you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {featuredProducts.slice(0, 20).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/collections"
            className="font-inter text-sm tracking-[0.2em] uppercase border border-foreground text-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-300 inline-block"
          >
            View All Collections
          </Link>
        </div>
      </section>

      {/* ── BRAND PROMISE ── */}
      <section className="bg-beige section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-primary mb-4">
            The Smileyque Promise
          </p>
          <blockquote className="font-playfair italic text-3xl md:text-4xl leading-relaxed text-foreground/90">
            "Every stitch is a declaration. Every silhouette, a story worth telling."
          </blockquote>
          <div className="gold-divider mt-8" />
          <p className="font-inter text-sm text-muted-foreground mt-4">
            Crafted to order. Tailored to perfection. Delivered with care.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-padding bg-background">
        <div className="text-center mb-14">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Simple & Personal
          </p>
          <h2 className="font-playfair text-4xl font-semibold">How to Order</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {[
            {
              step: "01",
              title: "Browse & Select",
              desc: "Explore our collections and add your desired pieces to your cart.",
            },
            {
              step: "02",
              title: "Send via WhatsApp",
              desc: "Click 'Send Order via WhatsApp' — your selections are pre-filled automatically.",
            },
            {
              step: "03",
              title: "We Craft & Deliver",
              desc: "We confirm your measurements, craft your piece, and arrange delivery.",
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="text-center">
              <p className="font-playfair text-5xl font-semibold text-primary/30 mb-3">
                {step}
              </p>
              <h3 className="font-playfair text-lg font-semibold mb-2">{title}</h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FULL-WIDTH CTA BANNER ── */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img
          src={brand.heroImage2}
          alt="Smileyque fashion editorial"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-brand-black/65" />
        <div className="relative z-10 text-center px-6">
          <h2 className="font-playfair text-4xl md:text-5xl text-background font-semibold mb-6">
            Your Story. Your Style.
          </h2>
          <Link
            to="/collections"
            className="font-inter text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            Shop Collections
          </Link>
        </div>
      </section>
    </Layout>
  );
}
