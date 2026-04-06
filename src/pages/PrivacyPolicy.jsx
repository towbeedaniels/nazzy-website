import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl text-navy-900 font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-dark/70">Last updated: April 2026</p>
        </div>

        <div className="space-y-8 text-dark/80">
          <div>
            <h2 className="font-playfair text-2xl text-navy-900 mb-4 font-bold">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              At Nazzy Stitchez, we collect information you voluntarily provide, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number, address)</li>
              <li>Payment and billing information</li>
              <li>Account credentials</li>
              <li>Order history and preferences</li>
              <li>Communication preferences</li>
            </ul>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-navy-900 mb-4 font-bold">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Send transactional communications</li>
              <li>Provide customer support</li>
              <li>Improve our products and services</li>
              <li>Send promotional updates (with your consent)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-navy-900 mb-4 font-bold">
              3. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your personal information 
              from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-navy-900 mb-4 font-bold">
              4. Your Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct or update your information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Unsubscribe from our newsletter</li>
            </ul>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-navy-900 mb-4 font-bold">
              Contact Us
            </h2>
            <p>
              If you have privacy concerns or questions about how we handle your data, 
              please contact us at:<br />
              Email: privacy@nazzy.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
