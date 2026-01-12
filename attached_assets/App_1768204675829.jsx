import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  let colorStyle = darkMode ? "dark:bg-gray-900 text-gray-100" : "bg-white text-gray-800";
  let colorStyle1 = darkMode
    ? "dark:bg-gray-800 text-gray-100 transition-transform duration-300 hover:scale-105 group"
    : "bg-white text-gray-800 transition-transform duration-300 hover:scale-105 group";
  let colorStyle3 = darkMode ? "dark:bg-gray-700 text-gray-100" : "bg-gray-200 text-gray-800";

  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${colorStyle}`}>
      <div className="max-w-5xl mx-auto p-6 space-y-10">
        <div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-center w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse"
          >
            🚀 Building Bold Backends & Seamless Shopify Apps
          </motion.h1>
          <motion.button
            whileTap={{ rotate: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`ml-4 px-1 py-0.5 rounded-xl ${colorStyle3}`}
          >
            {darkMode ? "Light" : "Dark"} Mode
          </motion.button>
        </div>

        {/* Hero Section */}
        <motion.section
          className="text-center space-y-4"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold tracking-tight leading-tight">
          Hey, I’m Sampann – a Web Developer blending powerful backends with clean UI –
            specializing in custom Shopify apps that actually scale. 💻🚀
          </h2>

        </motion.section>


        {/* Tech Stack */}

        <section className={`${colorStyle1} rounded-2xl shadow p-6`}>
          <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-2">🛠️ Backend</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Languages & Frameworks:</strong> PHP, Laravel, Java</li>
                <li><strong>Databases:</strong> MySQL, MongoDB</li>
                <li><strong>Authentication & APIs:</strong> REST, GraphQL, JWT, OAuth, Shopify Admin APIs</li>
                <li><strong>Tools:</strong> Git, Composer, Postman, Docker, XAMPP/LAMP, Nginx, Vim</li>
                <li><strong>Core Concepts:</strong> MVC, OOP, API design, Authentication, Authorization</li>
              </ul>
            </div>
            </section>

            <section className={`${colorStyle1} rounded-2xl shadow p-6`}>
            <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">🎨 Frontend</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Languages & Libraries:</strong> JavaScript, React, HTML, CSS, Blade</li>
                <li><strong>Shopify Integration:</strong> Liquid, Theme App Extensions, App Bridge</li>
                <li><strong>UI/UX & Tools:</strong> Redux, Ajax, jQuery, Responsive Design</li>
                <li><strong>Mobile Development:</strong> React Native</li>
              </ul>
          </div>
        </section>

        {/* Easy Variant Swatches */}
        
        <section className={`${colorStyle1} rounded-2xl shadow p-6 `}>
        <h2 className="text-2xl font-semibold mb-4">
  🎨 <a href="https://apps.shopify.com/easy-variant-swatches" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-600 transition-colors duration-200">Easy Variant Swatches</a>
</h2>          
          <p className="italic mb-2">
            A customizable swatch solution to enhance how product variants are displayed on storefronts.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Owned entire backend: routes, middleware, controllers, DB design</li>
            <li>Handled app installation, billing (RAC), onboarding setup</li>
            <li>Implemented swatch display, product grouping, variant descriptions, and inventory sync</li>
            <li>Stored config in metafields and integrated with Theme App Extension</li>
            <li>Optimized performance for stores with large catalogs</li>
          </ul>
        </section>

        {/* Store Locator */}
        <section className={`${colorStyle1} rounded-2xl shadow p-6`}>
        <h2 className="text-2xl font-semibold mb-4">
  📍 <a href="https://apps.shopify.com/easy-store-locator-2" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-600 transition-colors duration-200">SpiceGems Store Locator</a>
</h2>
          <p className="italic mb-2">
            Allows merchants to show physical store locations on their site with search and filters.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Implemented installation, pricing plans, CRUD for locations</li>
            <li>Built robust import/export with tags, custom fields, and rollback support</li>
            <li>Developed secure asset upload helpers</li>
            <li>Unified validation logic across backend</li>
            <li>JWT-based session auth for embedded app setup</li>
          </ul>
        </section>

        {/* EPA - Easy Product Addons */}
        <section className={`${colorStyle1} rounded-2xl shadow p-6`}>
        <h2 className="text-2xl font-semibold mb-4">
  ➕ <a href="https://apps.shopify.com/spice-product-add-ons" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-600 transition-colors duration-200">EPA – Easy Product Addons</a>
</h2>
          <p className="italic mb-2">
            Lets merchants add custom add-ons to product pages (checkboxes, text inputs, uploads, etc).
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Built logic for addon groups, conditional rules, pricing logic</li>
            <li>Stored addon settings in metafields to reflect on the storefront</li>
            <li>Handled required fields, dynamic pricing, and validation</li>
            <li>Supported multiple input types and secure file uploads</li>
            <li>Architected scalable backend using Laravel best practices</li>
          </ul>
        </section>

        {/* Embedded App Setup */}
        <section className={`${colorStyle1} rounded-2xl shadow p-6`}>
          <h2 className="text-2xl font-semibold mb-4">🧩 Shopify Embedded App Setup</h2>
          <p className="italic mb-2">
            Led the setup of the team’s first embedded Shopify app using Laravel.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Adapted Shopify's React docs to Laravel backend</li>
            <li>Implemented App Bridge and JWT-based session handling</li>
            <li>Built reusable architecture now used for other apps</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
