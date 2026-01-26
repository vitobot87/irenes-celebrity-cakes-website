"use client";

import Image from "next/image";

const basePath = process.env.NODE_ENV === "production" ? "/irenes-celebrity-cakes-website" : "";

const services = [
  {
    title: "Wedding Cakes",
    description: "From classic elegance to modern masterpieces, we design the perfect centerpiece for your special day. Multi-tier cakes renowned for stunning presentation and unforgettable taste.",
    image: `${basePath}/hero-wedding-cake.png`,
  },
  {
    title: "Custom Celebration Cakes",
    description: "Milestone birthdays, baby showers, corporate events - we create custom cakes that capture the spirit of your celebration. Share your vision and watch it come to life.",
    image: `${basePath}/hero-birthday-cake.png`,
  },
  {
    title: "Italian Pastries & Desserts",
    description: "Step into our bakery and be transported to Italy. Authentic cannoli, sfogliatelle, tiramisu, and traditional Italian cookies - all made fresh daily.",
    image: `${basePath}/hero-pastries.png`,
  },
];

const testimonials = [
  {
    quote: "I've been coming to Irene's Celebrity Cakes since the day she opened and I'm always pleased with the quality of her baking. My nieces have gotten their wedding cakes here and they were just spectacular.",
    author: "Lucy V.",
    rating: 5,
  },
  {
    quote: "The service was 10/10. I had gotten quotes from 6 other bakeries but Irene and team were so accommodating and lovely to deal with! The cake photographed so well, it was a beautiful touch to our wedding.",
    author: "Recent Wedding Customer",
    rating: 5,
  },
  {
    quote: "What a wonderful discovery. My visit to Irene's Celebrity Cake Shop exceeded all expectations. The pastries were absolutely delicious - you can tell they use quality ingredients and traditional recipes.",
    author: "Ramdas M.",
    rating: 5,
  },
];

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday - Friday", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday - Sunday", time: "9:00 AM - 5:00 PM" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
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
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-burgundy dark:text-gray-300 dark:hover:text-gold transition-colors">About</a>
              <a href="#services" className="text-sm font-medium text-gray-600 hover:text-burgundy dark:text-gray-300 dark:hover:text-gold transition-colors">Services</a>
              <a href="#reviews" className="text-sm font-medium text-gray-600 hover:text-burgundy dark:text-gray-300 dark:hover:text-gold transition-colors">Reviews</a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-burgundy dark:text-gray-300 dark:hover:text-gold transition-colors">Contact</a>
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

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${basePath}/hero-wedding-cake.png`}
            alt="Elegant wedding cake"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Where Every Celebration Becomes Unforgettable
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Mississauga&apos;s beloved Italian bakery crafting custom cakes and authentic pastries since 2007. With over 35 years of experience, we bring your sweetest visions to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+19056245545"
                className="inline-flex items-center justify-center bg-burgundy hover:bg-burgundy/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Order Your Custom Cake
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Visit Our Bakery
              </a>
            </div>
            <div className="mt-12 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-medium">4.6/5</span>
              <span className="text-gray-300">from 1,060+ Google Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28 bg-cream dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-burgundy dark:text-gold mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                For over 17 years, Irene&apos;s Celebrity Cakes has been the heart of celebrations across Mississauga and the GTA. What began as a passion for authentic Italian baking has blossomed into one of the most trusted names in custom cakes and pastries.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                With more than 35 years of experience in the craft, owner Irene brings the warmth of Italian tradition to every creation that leaves our ovens. From elaborate multi-tier wedding cakes to beloved family recipes passed down through generations, we believe that every celebration deserves something extraordinary.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-burgundy dark:text-gold">35+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-burgundy dark:text-gold">1,000+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-burgundy dark:text-gold">4.6</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Star Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={`${basePath}/hero-pastries.png`}
                alt="Italian pastry display"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-burgundy text-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="italic text-sm">
                  &ldquo;We take pride and joy in everything that comes out of our oven. Always keeping an eye on detail and ensuring to put smiles on all our customers&apos; faces.&rdquo;
                </p>
                <p className="mt-2 text-gold font-semibold">- Irene</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-burgundy dark:text-gold mb-4">Our Specialties</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              From stunning wedding cakes to authentic Italian pastries, we bring artistry and tradition to every creation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-burgundy dark:text-gold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We also offer: Baby Shower Cakes, Baptism & Communion Cakes, Cupcakes, Doll Cakes, Fresh Gelato, and more!
            </p>
            <a
              href="tel:+19056245545"
              className="inline-flex items-center justify-center bg-burgundy hover:bg-burgundy/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Inquire About Custom Orders
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 sm:py-28 bg-burgundy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-lg font-medium">4.6/5 from 1,060+ reviews on Google</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold text-burgundy dark:text-gold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-burgundy dark:text-gold mb-6">Visit Our Bakery</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                Stop by for coffee, browse our pastry display, or schedule a consultation for your next celebration. We&apos;d love to meet you!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-burgundy/10 dark:bg-burgundy/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy dark:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">1258 Eglinton Ave E<br />Mississauga, ON L4W 1K8</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-burgundy/10 dark:bg-burgundy/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy dark:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Phone</h3>
                    <a href="tel:+19056245545" className="text-burgundy dark:text-gold hover:underline">(905) 624-5545</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-burgundy/10 dark:bg-burgundy/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy dark:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Email</h3>
                    <a href="mailto:irenescelebritycakesinc@gmail.com" className="text-burgundy dark:text-gold hover:underline">irenescelebritycakesinc@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-burgundy/10 dark:bg-burgundy/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy dark:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Hours</h3>
                    <div className="text-gray-600 dark:text-gray-300">
                      {hours.map((h, i) => (
                        <div key={i} className="flex justify-between gap-8">
                          <span>{h.day}</span>
                          <span className={h.time === "Closed" ? "text-burgundy dark:text-red-400" : ""}>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.instagram.com/irenescelebritycakes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-burgundy/10 dark:bg-burgundy/20 hover:bg-burgundy/20 dark:hover:bg-burgundy/30 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6 text-burgundy dark:text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/pages/Irenes-Celebrity-Cakes-Inc/299515943442494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-burgundy/10 dark:bg-burgundy/20 hover:bg-burgundy/20 dark:hover:bg-burgundy/30 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6 text-burgundy dark:text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-cream dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-burgundy dark:text-gold mb-6">Get Directions</h3>
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.4366982080147!2d-79.5989!3d43.6447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3857c1c7da3f%3A0x8c1d1a8e8e8e8e8e!2s1258%20Eglinton%20Ave%20E%2C%20Mississauga%2C%20ON%20L4W%201K8!5e0!3m2!1sen!2sca!4v1706000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Irene's Celebrity Cakes Location"
                />
              </div>
              <a
                href="https://www.google.com/maps/dir//1258+Eglinton+Ave+E,+Mississauga,+ON+L4W+1K8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-burgundy hover:bg-burgundy/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
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
            </div>
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
