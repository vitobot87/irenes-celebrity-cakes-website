import CategoryGallery from "./CategoryGallery";

// Required for static export - generates all category pages at build time
export function generateStaticParams() {
  return [
    { category: "wedding" },
    { category: "birthday" },
    { category: "custom" },
    { category: "anniversary" },
    { category: "babyshower" },
    { category: "baptism" },
    { category: "bridal" },
    { category: "communion" },
    { category: "confirmation" },
    { category: "cupcakes" },
    { category: "doll" },
    { category: "edible" },
    { category: "engagement" },
    { category: "desserts" },
  ];
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  return <CategoryGallery categoryId={params.category} />;
}
