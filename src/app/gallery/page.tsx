"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const basePath = process.env.NODE_ENV === "production" ? "/irenes-celebrity-cakes-website" : "";

// Generate image arrays for each category
const generateImageArray = (prefix: string, count: number, ext: string = "png", startAt: number = 0) => {
  return Array.from({ length: count }, (_, i) => {
    const num = (startAt + i).toString().padStart(3, "0");
    return `${prefix}_${num}.${ext}`;
  });
};

const categories = [
  {
    id: "wedding",
    name: "Wedding Cakes",
    description: "Elegant multi-tier masterpieces for your special day",
    images: generateImageArray("WDC", 32),
    folder: "wedding",
  },
  {
    id: "birthday",
    name: "Birthday Cakes",
    description: "Celebrate another year with a custom creation",
    images: generateImageArray("BDC", 60),
    folder: "birthday",
  },
  {
    id: "custom",
    name: "Custom Designs",
    description: "Unique cakes tailored to your vision",
    images: generateImageArray("CCD", 30),
    folder: "custom",
  },
  {
    id: "anniversary",
    name: "Anniversary Cakes",
    description: "Celebrate milestones with timeless elegance",
    images: generateImageArray("AC", 20),
    folder: "anniversary",
  },
  {
    id: "babyshower",
    name: "Baby Shower Cakes",
    description: "Welcome the little one in sweet style",
    images: generateImageArray("BYC", 27),
    folder: "babyshower",
  },
  {
    id: "baptism",
    name: "Baptism Cakes",
    description: "Blessed celebrations deserve beautiful cakes",
    images: generateImageArray("BPC", 22),
    folder: "baptism",
  },
  {
    id: "bridal",
    name: "Bridal Shower Cakes",
    description: "Elegant treats for the bride-to-be",
    images: generateImageArray("BSC", 22),
    folder: "bridal",
  },
  {
    id: "communion",
    name: "Communion Cakes",
    description: "Sacred celebrations with heavenly cakes",
    images: generateImageArray("CMC", 19),
    folder: "communion",
  },
  {
    id: "confirmation",
    name: "Confirmation Cakes",
    description: "Mark this important milestone",
    images: generateImageArray("CFC", 15),
    folder: "confirmation",
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    description: "Perfect individual treats for any occasion",
    images: generateImageArray("CCC", 12),
    folder: "cupcakes",
  },
  {
    id: "doll",
    name: "Doll Cakes",
    description: "Whimsical princess and doll-themed creations",
    images: generateImageArray("DLC", 15),
    folder: "doll",
  },
  {
    id: "edible",
    name: "Edible Image Cakes",
    description: "Custom photo cakes for personalized celebrations",
    images: generateImageArray("EIC", 20),
    folder: "edible",
  },
  {
    id: "engagement",
    name: "Engagement Cakes",
    description: "Celebrate saying yes with something sweet",
    images: generateImageArray("EGC", 23),
    folder: "engagement",
  },
  {
    id: "desserts",
    name: "Italian Pastries & Desserts",
    description: "Authentic Italian treats made fresh daily",
    images: [
      "d_000.jpg", "d_001.jpg", "d_002.jpg", "d_003.jpg", "d_004.jpg",
      "d_005.jpg", "d_006.jpg", "d_007.jpg", "d_009.jpg", "d_010.jpg",
      "easter2.png", "xmas2.png", "zep.jpg"
    ],
    folder: "desserts",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredCategories = selectedCategory
    ? categories.filter((c) => c.id === selectedCategory)
    : categories;

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
              <Link href="/#services" className="text-sm font-medium text-gray-600 hover:text-burgundy dark:text-gray-300 dark:hover:text-gold transition-colors">Services</Link>
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
            Browse through 330+ photos of our handcrafted cakes and pastries. Each creation is made with love and attention to detail.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 sm:top-20 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === null
                  ? "bg-burgundy text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              All ({categories.reduce((acc, c) => acc + c.images.length, 0)})
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? "bg-burgundy text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name} ({category.images.length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.map((category) => (
            <div key={category.id} className="mb-16">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-burgundy dark:text-gold">{category.name}</h2>
                <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {category.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setLightboxImage(`${basePath}/gallery/${category.folder}/${image}`)}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
                  >
                    <Image
                      src={`${basePath}/gallery/${category.folder}/${image}`}
                      alt={`${category.name} ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage}
              alt="Cake detail"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

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
