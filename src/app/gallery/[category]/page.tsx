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

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  return <CategoryGallery categoryId={category} />;
}
