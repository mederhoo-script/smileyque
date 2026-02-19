import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const { addItem, openCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article
      className={cn(
        "group flex flex-col bg-card border border-border rounded-sm overflow-hidden shadow-elegant hover:shadow-gold transition-shadow duration-400",
        className
      )}
    >
      {/* Image */}
      <div className="img-zoom relative aspect-[3/4] bg-secondary overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 font-inter text-[10px] tracking-[0.2em] uppercase bg-background/90 text-foreground px-2.5 py-1 rounded-sm">
          {product.category}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex-1">
          <h3 className="font-playfair text-base font-semibold leading-snug">
            {product.name}
          </h3>
          <p className="font-inter text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="font-playfair text-sm font-medium text-primary">
            {product.price}
          </span>

          <button
            onClick={handleAddToCart}
            className={cn(
              "flex items-center gap-1.5 font-inter text-xs tracking-widest uppercase px-3 py-2 rounded-sm border transition-all duration-200",
              added
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-foreground border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
            )}
          >
            {added ? (
              <>
                <Check size={12} />
                Added
              </>
            ) : (
              <>
                <ShoppingBag size={12} />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
