import React from 'react';

export default function ShippingReturns() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl text-navy-900 font-bold mb-4">
            Shipping & Returns
          </h1>
          <p className="text-dark/70">Last updated: April 2026</p>
        </div>

        <div className="space-y-8 text-dark/80">
          <div>
            <h2 className="font-playfair text-2xl text-navy-900 mb-4 font-bold">
              Shipping Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Domestic Shipping</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Standard Delivery (5-7 business days):</strong> $10</li>
                  <li><strong>Express Delivery (2-3 business days):</strong> $25</li>
                  <li><strong>Overnight Delivery:</strong> $50</li>
                  <li>Free shipping on orders over $200</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-navy-900 mb-2">International Shipping</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Standard (10-15 business days):</strong> $30-50</li>
                  <li><strong>Express (5-7 business days):</strong> $75-100</li>
                  <li>Customs and duties may apply</li>
                  <li>Tracking provided for all international orders</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Processing Time</h3>
                <p>
                  Orders are typically processed within 1-2 business days. 
                  Custom and bespoke orders may take 2-4 weeks.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-navy-900 mb-4 font-bold">
              Returns Policy
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">30-Day Return Guarantee</h3>
                <p>
                  We accept returns within 30 days of purchase for unused, unworn items 
                  in original condition with tags attached.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Return Process</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Contact our customer service team at returns@nazzy.com</li>
                  <li>Receive return shipping label</li>
                  <li>Ship item back to us (prepaid label provided)</li>
                  <li>Refund issued within 5-7 business days of receipt</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Non-Returnable Items</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Custom or bespoke items (non-refundable)</li>
                  <li>Items worn or damaged due to customer use</li>
                  <li>Items without original tags or packaging</li>
                  <li>Clearance or final sale items</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-navy-900 mb-4 font-bold">
              Exchange Policy
            </h2>
            <p className="mb-3">
              If an item doesn't fit or is incorrect, we'll exchange it for free:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Exchange request must be made within 30 days</li>
              <li>Free return shipping on exchanges</li>
              <li>Item must be unworn with tags attached</li>
              <li>New item ships once we receive return</li>
            </ul>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-navy-900 mb-4 font-bold">
              Damaged or Defective Items
            </h2>
            <p>
              If your item arrived damaged or defective, please contact us immediately 
              at support@nazzy.com with photos of the damage. We'll arrange a replacement 
              or refund at no cost to you.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-navy-900 mb-4 font-bold">
              Bespoke/Custom Orders
            </h2>
            <p>
              Custom tailoring and bespoke orders are created specifically for you 
              and are non-returnable and non-refundable once production has begun. 
              Consultation is highly recommended before placing a custom order.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-navy-900 mb-4 font-bold">
              Questions?
            </h2>
            <p>
              Contact our customer service team:<br />
              Email: support@nazzy.com<br />
              Phone: +1 (555) 123-4567<br />
              Hours: Monday-Friday, 10am-6pm EST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
