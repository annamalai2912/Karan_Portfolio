import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Get In <span className="text-[#00ff95]">Touch</span>
        </h2>
        <Card className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-[#00ff95]" />
                  <span>contact@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-[#00ff95]" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#00ff95]" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00ff95] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00ff95] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00ff95] focus:border-transparent"
                ></textarea>
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;