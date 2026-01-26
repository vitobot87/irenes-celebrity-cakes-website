"use client";

import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/irenes-celebrity-cakes-website" : "";

const categories = [
  {
    id: "wedding",
    name: "Wedding Cakes",
    description: "Elegant multi-tier masterpieces for your special day",
    count: 32,
    featuredImage: "WDC_007.png",
  },
  {
    id: "birthday",
    name: "Birthday Cakes",
    description: "Celebrate another year with a custom creation",
    count: 60,
    featuredImage: "BDC_012.png",
  },
  {
    id: "custom",
    name: "Custom Designs",
    description: "Unique cakes tailored to your vision",
    count: 30,
    featuredImage: "CCD_005.png",
  },
  {
    id: "anniversary",
    name: "Anniversary Cakes",
    description: "Celebrate milestones with timeless elegance",
    count: 20,
    featuredImage: "AC_005.png",
  },
  {
    id: "babyshower",
    name: "Baby Shower Cakes",
    description: "Welcome the little one in sweet style",
    count: 27,
    featuredImage: "BYC_010.png",
  },
  {
    id: "baptism",
    name: "Baptism Cakes",
    description: "Blessed celebrations deserve beautiful cakes",
    count: 22,
    featuredImage: "BPC_005.png",
  },
  {
    id: "bridal",
    name: "Bridal Shower Cakes",
    description: "Elegant treats for the bride-to-be",
    count: 22,
    featuredImage: "BSC_008.png",
  },
  {
    id: "communion",
    name: "Communion Cakes",
    description: "Sacred celebrations with heavenly cakes",
    count: 19,
    featuredImage: "CMC_005.png",
  },
  {
    id: "confirmation",
    name: "Confirmation Cakes",
    description: "Mark this important milestone",
    count: 15,
    featuredImage: "CFC_005.png",
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    description: "Perfect individual treats for any occasion",
    count: 12,
    featuredImage: "CCC_003.png",
  },
  {
    id: "doll",
    name: "Doll Cakes",
    description: "Whimsical princess and doll-themed creations",
    count: 15,
    featuredImage: "DLC_005.png",
  },
  {
    id: "edible",
    name: "Edible Image Cakes",
    description: "Custom photo cakes for personalized celebrations",
    count: 20,
    featuredImage: "EIC_008.png",
  },
  {
    id: "engagement",
    name: "Engagement Cakes",
    description: "Celebrate saying yes with something sweet",
    count: 23,
    featuredImage: "EGC_010.png",
  },
  {
    id: "desserts",
    name: "Italian Pastries & Desserts",
    description: "Authentic Italian treats made fresh daily",
    count: 13,
    featuredImage: "d_003.jpg",
  },
];

export default function GalleryPage() {
  const totalImages = categories.reduce((acc, c) => acc + c.count, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={`${basePath}/logo.png`}
                alt="Irene's Celebrity Cakes"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-burgundy dark:text-gold">Irene&apos;s Celebrity Cakes</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Est. 2007</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#about" className="text-sm font-medium text-gray-600 hover:text-burgundy dark:text-gray-300 dark:hover:text-gold transition-colors">About</Link>
              <Link href="/menu" className="text-sm font-medium text-gray-600 hover:text-burgundy dark:text-gray-300 dark:hover:text-gold transition-colors">Menu</Link>
              <Link href="/gallery" className="text-sm font-medium text-burgundy dark:text-gold transition-colors">Gallery</Link>
              <Link href="/#reviews" className="text-sm font-medium text-gray-600 hover:text-burgundy dark:text-gray-300 dark:hover:text-gold transition-colors">Reviews</Link>
              <Link href="/#contact" className="text-sm font-medium text-gray-600 hover:text-burgundy dark:text-gray-300 dark:hover:text-gold transition-colors">Contact</Link>
            </nav>
            <a
              href="tel:+19056245545"
              className="bg-burgundy hover:bg-burgundy/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              (905) 624-5545
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 sm:pt-28 pb-12 bg-cream dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-burgundy dark:text-gold mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse {totalImages}+ photos of our handcrafted cakes and pastries across {categories.length} categories. Click any category to see more.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/gallery/${category.id}`}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={`${basePath}/gallery/${category.id}/${category.featuredImage}`}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block bg-burgundy/90 text-white text-xs font-medium px-2 py-1 rounded-full">
                      {category.count} photos
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold text-burgundy dark:text-gold mb-1 group-hover:text-burgundy/80 dark:group-hover:text-gold/80 transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-burgundy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order Your Custom Cake?</h2>
          <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your vision. We&apos;d love to create something special for your celebration.
          </p>
          <a
            href="tel:+19056245545"
            className="inline-flex items-center justify-center bg-white hover:bg-cream text-burgundy px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Call (905) 624-5545
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={`${basePath}/logo.png`}
                alt="Irene's Celebrity Cakes"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-gold">Irene&apos;s Celebrity Cakes</h3>
                <p className="text-sm text-gray-400">Crafting Sweet Memories Since 2007</p>
              </div>
            </Link>
            <div className="text-center md:text-right text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Irene&apos;s Celebrity Cakes Inc. All rights reserved.</p>
              <p className="mt-1">1258 Eglinton Ave E, Mississauga, ON L4W 1K8</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
