export const products = [
  {
    id: 1,
    name: "Ankara Blazer",
    category: "womens",
    price: 450,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop",
    description: "Hand-beaded jacket with intricate embroidery",
    details: "Premium Ankara fabric, hand-beaded details, custom fit available",
    size: ["XS", "S", "M", "L", "XL"],
    color: ["Navy", "Burgundy", "Gold"],
    rating: 4.8,
    reviews: 24,
  },
  {
    id: 2,
    name: "Traditional Agbada",
    category: "mens",
    price: 380,
    image: "https://images.unsplash.com/photo-1505689914660-d02b0e88ca56?w=500&h=600&fit=crop",
    description: "Structured traditional attire with modern tailoring",
    details: "100% silk blend, expertly tailored, includes matching cap",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Navy", "Black", "Cream"],
    rating: 4.9,
    reviews: 18,
  },
  {
    id: 3,
    name: "Regal Wedding Gown",
    category: "bridal",
    price: 1200,
    image: "https://images.unsplash.com/photo-1595777707802-1b5f11b1388c?w=500&h=600&fit=crop",
    description: "Custom wedding dress with gold threading",
    details: "Couture-quality fabric, custom embroidery, bespoke tailoring",
    size: ["XS", "S", "M", "L"],
    color: ["White", "Ivory", "Cream"],
    rating: 5.0,
    reviews: 42,
  },
  {
    id: 4,
    name: "Evening Elegance Gown",
    category: "womens",
    price: 550,
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&h=600&fit=crop",
    description: "Floor-length silhouette with gold accents",
    details: "Silk chiffon, gold embellishments, dramatic train",
    size: ["XS", "S", "M", "L", "XL"],
    color: ["Navy", "Black", "Burgundy"],
    rating: 4.7,
    reviews: 31,
  },
  {
    id: 5,
    name: "Contemporary Suit",
    category: "mens",
    price: 520,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop",
    description: "Bespoke tailored suit with subtle detailing",
    details: "Premium wool blend, hand-stitched, made-to-measure available",
    size: ["S", "M", "L", "XL"],
    color: ["Navy", "Black", "Charcoal"],
    rating: 4.9,
    reviews: 27,
  },
  {
    id: 6,
    name: "Bridal Alteration Service",
    category: "bridal",
    price: 300,
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=500&h=600&fit=crop",
    description: "Expert alteration and customization",
    details: "Professional seamstresses, perfect fit guaranteed, express service available",
    size: ["One Size"],
    color: ["Service"],
    rating: 5.0,
    reviews: 58,
  },
  {
    id: 7,
    name: "Kente Jacket",
    category: "womens",
    price: 480,
    image: "https://images.unsplash.com/photo-1539533053867-bb4a50d5d50b?w=500&h=600&fit=crop",
    description: "Vibrant kente pattern with modern silhouette",
    details: "Traditional kente weave, contemporary cut, premium quality",
    size: ["XS", "S", "M", "L", "XL"],
    color: ["Multi", "Navy", "Gold"],
    rating: 4.8,
    reviews: 19,
  },
  {
    id: 8,
    name: "Dashiki Ensemble",
    category: "mens",
    price: 420,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=600&fit=crop",
    description: "Authentic dashiki with tailored trousers",
    details: "Traditional patterns, premium cotton, includes matching trousers",
    size: ["S", "M", "L", "XL"],
    color: ["Navy", "Burgundy", "Black"],
    rating: 4.9,
    reviews: 22,
  },
];

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
  );
};
