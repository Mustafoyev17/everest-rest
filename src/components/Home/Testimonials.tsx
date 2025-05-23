
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana De Armas",
      title: "Food Critic, NY Times",
      content: "Everest Rest delivers an unparalleled dining experience. Each dish is a masterpiece that tells a story of culinary excellence and innovation.",
      rating: 5,
      image: "data:image/jpeg;base64,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",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Celebrity Chef",
      content: "The attention to detail and flavor complexity at Everest Rest is extraordinary. This is fine dining at its absolute peak.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Emma Thompson",
      title: "Luxury Travel Blogger",
      content: "From the ambiance to the last bite, Everest Rest provides an unforgettable journey. Worth every star in its collection.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      date: "3 weeks ago"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-6">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what culinary experts and food enthusiasts are saying
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="glass-card hover:bg-white/10 transition-all duration-500 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-slate-900" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-300 text-center mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400/30"
                  />
                  <div className="text-center">
                    <div className="font-semibold text-white group-hover:text-yellow-400 transition-colors duration-200">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block glass-card p-8 max-w-2xl">
            <h3 className="font-display text-2xl font-bold gradient-text mb-4">
              Join Our Community of Food Enthusiasts
            </h3>
            <p className="text-gray-400 mb-6">
              Experience the difference that has made Everest Rest a destination for culinary excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-semibold rounded-lg hover:from-yellow-500 hover:to-amber-600 transition-all duration-200">
                Get Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
