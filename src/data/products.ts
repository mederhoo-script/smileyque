/**
 * SMILEYQUE PRODUCT CATALOG
 * ==========================
 * To add a new product, simply add a new object to this array.
 * To remove a product, delete its object.
 * To edit a product, modify its fields.
 *
 * Categories: "Gowns" | "Senator Wear" | "Casuals" | "Bridal"
 */

export type ProductCategory = "All" | "Gowns" | "Senator Wear" | "Casuals" | "Bridal";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string; // display string e.g. "₦85,000"
  category: Exclude<ProductCategory, "All">;
  image: string;
  featured?: boolean; // show on homepage featured section
}

export const products: Product[] = [
  // --- GOWNS ---
  {
    id: "gown-001",
    name: "Royal Silk Gown",
    description: "Floor-length silk gown with hand-embroidered gold detailing. Perfect for black-tie events.",
    price: "₦185,000",
    category: "Gowns",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    featured: true,
  },
  {
    id: "gown-002",
    name: "Midnight Drape Gown",
    description: "Flowing chiffon in deep midnight tones with asymmetric hemline and dramatic drape.",
    price: "₦145,000",
    category: "Gowns",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80",
    featured: true,
  },
  {
    id: "gown-003",
    name: "Ivory Lace Evening Gown",
    description: "Delicate French lace with bespoke corseted bodice and full sweeping skirt.",
    price: "₦220,000",
    category: "Gowns",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",
    featured: true,
  },

  // --- SENATOR WEAR ---
  {
    id: "senator-001",
    name: "Classic Senator Wear",
    description: "Refined brocade senator set with modern tailoring. Regal elegance for all occasions.",
    price: "₦95,000",
    category: "Senator Wear",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    featured: true,
  },
  {
    id: "senator-002",
    name: "Gold Embroidered Agbada",
    description: "Three-piece agbada in premium hand-woven fabric with intricate gold embroidery.",
    price: "₦250,000",
    category: "Senator Wear",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    featured: true,
  },
  {
    id: "senator-003",
    name: "Contemporary Kaftan Set",
    description: "Modern kaftan with structured shoulders and bold geometric patterns in rich fabric.",
    price: "₦78,000",
    category: "Senator Wear",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
    featured: true,
  },

  // --- CASUALS ---
  {
    id: "casual-001",
    name: "Ankara Wrap Dress",
    description: "Vibrant ankara print wrap dress — effortlessly chic for brunches and daytime events.",
    price: "₦45,000",
    category: "Casuals",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
    featured: true,
  },
  {
    id: "casual-002",
    name: "Linen Co-ord Set",
    description: "Breathable linen co-ord in earthy tones. Tailored for comfort without compromising style.",
    price: "₦62,000",
    category: "Casuals",
    image: "https://images.unsplash.com/photo-1614251056798-0a63eda2bb25?w=600&q=80",
    featured: true,
  },
  {
    id: "casual-003",
    name: "Peplum Blouse & Trouser",
    description: "Structured peplum blouse paired with wide-leg trousers in complementary fabric.",
    price: "₦58,000",
    category: "Casuals",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    featured: true,
  },

  // --- BRIDAL ---
  {
    id: "bridal-001",
    name: "Bespoke Bridal Gown",
    description: "Custom bridal creation — fully bespoke from first measurement to final fitting.",
    price: "From ₦500,000",
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b6cd?w=600&q=80",
    featured: true,
  },
  {
    id: "bridal-002",
    name: "Traditional Bridal Set",
    description: "Stunning traditional bridal attire blending heritage fabrics with contemporary silhouettes.",
    price: "From ₦380,000",
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    featured: true,
  },
  {
    id: "bridal-003",
    name: "Reception Change Outfit",
    description: "Elegant second-look reception outfit — radiant and memorable for the big moment.",
    price: "From ₦165,000",
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    featured: true,
  },
];

export const categories: ProductCategory[] = ["All", "Gowns", "Senator Wear", "Casuals", "Bridal"];

export const featuredProducts = products.filter((p) => p.featured);
