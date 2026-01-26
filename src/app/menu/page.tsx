"use client";

import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/irenes-celebrity-cakes-website" : "";

const pastries = [
  "Black Forest",
  "Cannoli (Ricotta, Chocolate, Vanilla)",
  "Cappuccino",
  "Chocolate Eclair",
  "Cream Puffs (Hazelnut, Zabaglione, Coffee, Vanilla)",
  "Lemon Meringue Tart",
  "Lemon Roll",
  "Mango Mousse",
  "Mixed Fruit Tarts",
  "Rum Baba",
  "Rum Balls",
  "Sfoglia Cannoli",
  "Snow Balls",
  "Strawberry Mousse",
  "Strawberry Roll",
  "Strawberry Tarts",
  "Tiramisu",
  "Trangiata",
  "Veneziane (Chocolate, Vanilla, Torrone)",
];

const almondCookies = [
  "Almond Crescent",
  "Candy Fruit",
  "Chocolate Chip",
  "Coffee",
  "Colombine",
  "Green/White",
  "Green Cherry",
  "Mandorlatte",
  "Orange/White",
  "Pink",
  "Red Cherry",
  "Soft Amaretti w/Almond",
];

const shortbreadCookies = [
  "Apricot Ring",
  "Dark & Orange",
  "Dark & White",
  "Dark Shell dipped in chocolate",
  "Green Cherry",
  "Raspberry Ring",
  "Raspberry Thumb",
  "Red Cherry",
  "White Shell dipped in chocolate",
];

const cakeSponges = [
  "Chocolate Sponge",
  "Red Velvet Sponge",
  "Sfoglia (puff pastry layers)",
  "St. Honore (puff pastry layers and cream puffs)",
  "Vanilla Sponge",
];

const cakeCreams = [
  "Bacio Cream",
  "Banana",
  "Cappuccino Cream",
  "Chantilly Cream",
  "Chocolate Cream",
  "Grand Marnier Cream",
  "Hazelnut Cream",
  "Lemon Cream",
  "Mango Cream",
  "Nougat/Torrone Cream",
  "Raspberry Cream",
  "Strawberry Cream",
  "Tiramisu Flavour",
  "Vanilla Cream",
  "Wildberry Cream",
];

const cakeTypes = [
  "Bacio Cake",
  "Cappuccino Cake",
  "Caramel Crunch Cake",
  "Caramel Pecan Cake",
  "Chocolate Mousse Cake",
  "Ferrero Rocher Cake",
  "Grand Marnier Cake",
  "Hazelnut Delight Cake",
  "Italian Rum Cake",
  "Sacher Torte Cake",
  "Sfoglia Cake",
  "St. Honore Cake",
  "Strawberry Shortcake",
  "Tiramisu Cake",
  "White & Dark Chocolate Mousse Cake",
  "White Mousse Cake",
];

const cakeSizes = [
  { size: '6" Round', serves: "6 people" },
  { size: '8" Round', serves: "8-10 people" },
  { size: '9" Round', serves: "12-14 people" },
  { size: '10" Round', serves: "16-18 people" },
  { size: '12" Round', serves: "20-25 people" },
  { size: "Half Slab", serves: "25-30 people" },
  { size: "14 x 14", serves: "40-45 people" },
  { size: "3/4 Slab", serves: "45-55 people" },
  { size: "Full Slab", serves: "60-70 people" },
];

const holidays = [
  {
    name: "St. Joseph's Day",
    items: ["Zeppole"],
  },
  {
    name: "Easter",
    items: ["Pastiera Di Grano", "Marzipan Lamb", "Chocolate Easter Eggs"],
  },
  {
    name: "Thanksgiving",
    items: ["Pumpkin Pies", "Assorted Fruit Pies"],
  },
  {
    name: "Christmas",
    items: ["Christmas Logs", "Christmas Yule Logs", "Marzipan", "Christmas Gift Baskets"],
  },
  {
    name: "Valentine's Day",
    items: ["Custom Heart Cakes", "Specialty Desserts"],
  },
  {
    name: "Mother's Day & Father's Day",
    items: ["Custom Cakes", "In-House Specialty Cakes"],
  },
];

export default function MenuPage() {
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
              <Link href="/menu" className="text-sm font-medium text-burgundy dark:text-gold transition-colors">Menu</Link>
              <Link href="/gallery" className="text-sm font-medium text-gray-600 hover:text-burgundy dark:text-gray-300 dark:hover:text-gold transition-colors">Gallery</Link>
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
          <h1 className="text-4xl sm:text-5xl font-bold text-burgundy dark:text-gold mb-4">Our Menu</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From our famous cannoli to our renowned Italian pastries, every item is made fresh with traditional recipes and quality ingredients. Perfect for any occasion.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="sticky top-16 sm:top-20 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <a href="#pastries" className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-white transition-colors">Pastries</a>
            <a href="#cookies" className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-white transition-colors">Cookies</a>
            <a href="#cakes" className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-white transition-colors">Cakes</a>
            <a href="#holidays" className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-white transition-colors">Holiday Specials</a>
          </div>
        </div>
      </section>

      {/* Pastries Section */}
      <section id="pastries" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-burgundy dark:text-gold mb-4">Italian Pastries</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our pastries are made fresh daily using authentic Italian recipes passed down through generations. From our creamy cannoli to our delicate cream puffs, every bite transports you to Italy.
              </p>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={`${basePath}/gallery/desserts/d_003.jpg`}
                  alt="Italian pastries"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="bg-cream dark:bg-gray-900 rounded-2xl p-8">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {pastries.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 py-2 border-b border-burgundy/10 dark:border-gold/10">
                      <span className="w-2 h-2 rounded-full bg-burgundy dark:bg-gold flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies Section */}
      <section id="cookies" className="py-16 bg-cream dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-burgundy dark:text-gold mb-8 text-center">Traditional Cookies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Almond Cookies */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-burgundy dark:text-gold mb-6">Almond Cookies</h3>
              <div className="space-y-3">
                {almondCookies.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 py-2 border-b border-burgundy/10 dark:border-gold/10">
                    <span className="w-2 h-2 rounded-full bg-burgundy dark:bg-gold flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shortbread Cookies */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-burgundy dark:text-gold mb-6">Shortbread Cookies</h3>
              <div className="space-y-3">
                {shortbreadCookies.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 py-2 border-b border-burgundy/10 dark:border-gold/10">
                    <span className="w-2 h-2 rounded-full bg-burgundy dark:bg-gold flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cakes Section */}
      <section id="cakes" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-burgundy dark:text-gold mb-4 text-center">Cakes</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Build your perfect cake by choosing your sponge, cream filling, and size. Or select from our signature cake types.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Sponges */}
            <div className="bg-cream dark:bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-burgundy dark:text-gold mb-6">Sponge Options</h3>
              <div className="space-y-3">
                {cakeSponges.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 py-2 border-b border-burgundy/10 dark:border-gold/10">
                    <span className="w-2 h-2 rounded-full bg-burgundy dark:bg-gold flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Creams */}
            <div className="bg-cream dark:bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-burgundy dark:text-gold mb-6">Cream Fillings</h3>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {cakeCreams.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 py-2 border-b border-burgundy/10 dark:border-gold/10">
                    <span className="w-2 h-2 rounded-full bg-burgundy dark:bg-gold flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cake Types */}
          <div className="bg-burgundy rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Signature Cake Types</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cakeTypes.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center">
                  <span className="text-cream font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="bg-cream dark:bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-burgundy dark:text-gold mb-6 text-center">Cake Sizes</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cakeSizes.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm flex justify-between items-center">
                  <span className="font-semibold text-burgundy dark:text-gold">{item.size}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{item.serves}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Specials */}
      <section id="holidays" className="py-16 bg-cream dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-burgundy dark:text-gold mb-4 text-center">Holiday Specials</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            We take pride in our festive creations. While keeping with traditional pastries and desserts, we also love to be creative and push the bar with our holiday offerings.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {holidays.map((holiday, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-burgundy dark:text-gold mb-4">{holiday.name}</h3>
                <ul className="space-y-2">
                  {holiday.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-burgundy dark:bg-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-burgundy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Place an Order?</h2>
          <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
            Call us or visit our bakery to discuss your order. For custom cakes, we recommend ordering at least a week in advance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19056245545"
              className="inline-flex items-center justify-center bg-white hover:bg-cream text-burgundy px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call (905) 624-5545
            </a>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Browse Our Gallery
            </Link>
          </div>
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
