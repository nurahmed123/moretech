import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about our smart wheelchair? We'd love to hear from
            you!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-500 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <p className="text-white/90 mb-8">
                  We're here to help and answer any questions you might have. We
                  look forward to hearing from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 bg-white/20 p-2 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm mb-1">Call Us</p>
                      <p className="text-white font-medium">
                        <a
                          href="tel:+8801712593281"
                          className="hover:underline"
                        >
                          +880 1712 593281
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-white/20 p-2 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm mb-1">Email Us</p>
                      <p className="text-white font-medium">
                        <a
                          href="mailto:prince.sngff@gmail.com"
                          className="hover:underline"
                        >
                          prince.sngff@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-white/20 p-2 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm mb-1">Visit Us</p>
                      <p className="text-white font-medium">
                        Satkhira Sadar, Khulna, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Send Us a Message
              </h3>

              {submitted ? (
                <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                      <svg
                        className="h-6 w-6 text-green-600 dark:text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Message Sent!
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Thank you for reaching out. We've received your message and
                    will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 text-gray-900 dark:text-white placeholder-transparent border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 bg-transparent peer ${
                          errors.name
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500/20 dark:focus:border-purple-400 dark:focus:ring-purple-400/20"
                        }`}
                        placeholder="Your name"
                      />
                      <label
                        htmlFor="name"
                        className={`absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-1 text-sm transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm ${
                          errors.name
                            ? "text-red-500"
                            : "text-gray-600 dark:text-gray-400 peer-focus:text-purple-600 dark:peer-focus:text-purple-400"
                        }`}
                      >
                        Your Name
                      </label>
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 text-gray-900 dark:text-white placeholder-transparent border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 bg-transparent peer ${
                          errors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500/20 dark:focus:border-purple-400 dark:focus:ring-purple-400/20"
                        }`}
                        placeholder="Your email"
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-1 text-sm transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm ${
                          errors.email
                            ? "text-red-500"
                            : "text-gray-600 dark:text-gray-400 peer-focus:text-purple-600 dark:peer-focus:text-purple-400"
                        }`}
                      >
                        Email Address
                      </label>
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 text-gray-900 dark:text-white placeholder-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:focus:border-purple-400 dark:focus:ring-purple-400/20 transition-colors duration-300 bg-transparent peer"
                        placeholder="Your phone"
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-1 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 dark:peer-focus:text-purple-400"
                      >
                        Phone Number (Optional)
                      </label>
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`block w-full px-4 py-3 text-gray-900 dark:text-white placeholder-transparent border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 bg-transparent peer ${
                          errors.message
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500/20 dark:focus:border-purple-400 dark:focus:ring-purple-400/20"
                        }`}
                        placeholder="Your message"
                      ></textarea>
                      <label
                        htmlFor="message"
                        className={`absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-1 text-sm transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm ${
                          errors.message
                            ? "text-red-500"
                            : "text-gray-600 dark:text-gray-400 peer-focus:text-purple-600 dark:peer-focus:text-purple-400"
                        }`}
                      >
                        Your Message
                      </label>
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:transform-none disabled:hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending Message...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Chat widget trigger */}
            <div className="fixed bottom-8 right-8 z-20">
              <button
                className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Open chat"
              >
                <MessageSquare className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
