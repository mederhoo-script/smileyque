import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-brand-black text-background/70 font-inter text-sm">
        <div className="px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-playfair text-2xl text-background font-semibold tracking-wider mb-3">
              Smileyque
            </p>
            <p className="text-background/60 text-xs leading-relaxed">
              Wear Your Story — Bespoke luxury fashion crafted for the extraordinary woman.
            </p>
          </div>
          <div>
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {[
                ["Home", "/"],
                ["Collections", "/collections"],
                ["About", "/about"],
                ["Lookbook", "/lookbook"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-background/60 hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Contact
            </p>
            <address className="not-italic text-background/60 space-y-1.5 text-xs leading-relaxed">
              <p>Lagos, Nigeria</p>
              <p>+234 803 429 5030</p>
              <p>hello@smileyque.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-background/10 px-6 md:px-12 lg:px-20 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-background/40">
          <p>© {new Date().getFullYear()} Smileyque. All rights reserved.</p>
          <p>Bespoke fashion crafted with love.</p>
        </div>
      </footer>

      {/* Global overlays */}
      <CartDrawer />
      <FloatingWhatsApp />
    </>
  );
}
