"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const basePath = process.env.NODE_ENV === "production" ? "/irenes-celebrity-cakes-website" : "";

// Generate image arrays for each category
const generateImageArray = (prefix: string, count: number, ext: string = "png") => {
  return Array.from({ length: count }, (_, i) => {
    const num = i.toString().padStart(3, "0");
    return `${prefix}_${num}.${ext}`;
  });
};

const categoryData: Record<string, { name: string; description: string; images: string[] }> = {
  wedding: {
    name: "Wedding Cakes",
    description: "Elegant multi-tier masterpieces for your special day",
    images: generateImageArray("WDC", 32),
  },
  birthday: {
    name: "Birthday Cakes",
    description: "Celebrate another year with a custom creation",
    images: generateImageArray("BDC", 60),
  },
  custom: {
    name: "Custom Designs",
    description: "Unique cakes tailored to your vision",
    images: generateImageArray("CCD", 30),
  },
  anniversary: {
    name: "Anniversary Cakes",
    description: "Celebrate milestones with timeless elegance",
    images: generateImageArray("AC", 20),
  },
  babyshower: {
    name: "Baby Shower Cakes",
    description: "Welcome the little one in sweet style",
    images: generateImageArray("BYC", 27),
  },
  baptism: {
    name: "Baptism Cakes",
    description: "Blessed celebrations deserve beautiful cakes",
    images: generateImageArray("BPC", 22),
  },
  bridal: {
    name: "Bridal Shower Cakes",
    description: "Elegant treats for the bride-to-be",
    images: generateImageArray("BSC", 22),
  },
  communion: {
    name: "Communion Cakes",
    description: "Sacred celebrations with heavenly cakes",
    images: generateImageArray("CMC", 19),
  },
  confirmation: {
    name: "Confirmation Cakes",
    description: "Mark this important milestone",
    images: generateImageArray("CFC", 15),
  },
  cupcakes: {
    name: "Cupcakes",
    description: "Perfect individual treats for any occasion",
    images: generateImageArray("CCC", 12),
  },
  doll: {
    name: "Doll Cakes",
    description: "Whimsical princess and doll-themed creations",
    images: generateImageArray("DLC", 15),
  },
  edible: {
    name: "Edible Image Cakes",
    description: "Custom photo cakes for personalized celebrations",
    images: generateImageArray("EIC", 20),
  },
  engagement: {
    name: "Engagement Cakes",
    description: "Celebrate saying yes with something sweet",
    images: generateImageArray("EGC", 23),
  },
  desserts: {
    name: "Italian Pastries & Desserts",
    description: "Authentic Italian treats made fresh daily",
    images: [
      "d_000.jpg", "d_001.jpg", "d_002.jpg", "d_003.jpg", "d_004.jpg",
      "d_005.jpg", "d_006.jpg", "d_007.jpg", "d_009.jpg", "d_010.jpg",
      "easter2.png", "xmas2.png", "zep.jpg"
    ],
  },
};

export default function CategoryGallery({ categoryId }: { categoryId: string }) {
  const category = categoryData[categoryId];
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-burgundy mb-4">Category not found</h1>
          <Link href="/gallery" className="text-burgundy hover:underline">Back to Gallery</Link>
        </div>
      </div>
    );
  }

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
                width={40}
                height={40}
                className="rounded-lg ml-1"
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

      {/* Breadcrumb & Title */}
      <section className="pt-24 sm:pt-28 pb-8 bg-cream dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Link href="/gallery" className="hover:text-burgundy dark:hover:text-gold transition-colors">
              Gallery
            </Link>
            <span>/</span>
            <span className="text-burgundy dark:text-gold">{category.name}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-burgundy dark:text-gold mb-2">{category.name}</h1>
          <p className="text-gray-600 dark:text-gray-300">{category.description} ({category.images.length} photos)</p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {category.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setLightboxImage(`${basePath}/gallery/${categoryId}/${image}`)}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <Image
                  src={`${basePath}/gallery/${categoryId}/${image}`}
                  alt={`${category.name} ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Gallery Link */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-burgundy dark:text-gold hover:underline font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Categories
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-10"
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
