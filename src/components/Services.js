import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  AiOutlineUsergroupAdd,
  AiOutlineSolution,
  AiOutlineGlobal,
  AiOutlineCheckCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";

const ServiceCard = ({ icon, title, description, children, delay, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-white p-8 h-full">
        {/* Icon */}
        <motion.div 
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: 5 }}
        >
          <div className="text-2xl text-white">{icon}</div>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Content */}
        <div className="space-y-4">
          {children}
        </div>

        {/* Hover Arrow */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ x: 5 }}
        >
          <AiOutlineArrowRight className="text-2xl text-blue-500" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Box = ({ title, children }) => (
  <motion.div 
    className="border border-gray-200 p-6 rounded-xl bg-gray-50 hover:bg-white transition-colors duration-300"
    whileHover={{ y: -2 }}
  >
    <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
      <AiOutlineCheckCircle className="text-green-500 mr-2" />
      {title}
    </h4>
    {children}
  </motion.div>
);

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={headerVariants}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive recruitment solutions tailored to meet your business needs
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<AiOutlineUsergroupAdd />}
            title="Professional Recruitment"
            description="Connecting you with skilled professionals across all industries."
            delay={0}
            index={0}
          >
            <Box title="Our Expertise">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <h5 className="font-semibold text-gray-800 mb-2">Professional Human Resources</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Doctors, Engineers, Scientists, Professors</li>
                    <li>• Chartered Accountants & Managers</li>
                    <li>• Architects, Geologists, Banking Specialists</li>
                    <li>• Certified Engineers (Civil & M.E.P)</li>
                    <li>• Aeronautical Industry Professionals</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-gray-800 mb-2">Skilled Human Resources</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pharmacists & Laboratory Technicians</li>
                    <li>• Security Officers & Guards</li>
                    <li>• Chefs & Cooks</li>
                    <li>• Construction Specialists</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <h5 className="font-semibold text-gray-800 mb-2">Semi-skilled & Unskilled</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Electric, Plumbing & Mechanic Assistants</li>
                    <li>• Kitchen Helpers & Gardeners</li>
                    <li>• Cleaners & Construction Workers</li>
                  </ul>
                </div>
              </div>
            </Box>

            <Box title="Recruitment Procedure">
              <div className="space-y-3">
                {[
                  "Data Bank Update & CV Collection",
                  "Advertisement & Shortlisting",
                  "Interview & Technical Screening",
                  "Trade Tests & Profile Forwarding",
                  "Medical Examination & Verification",
                  "Orientation & Travel Arrangement"
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg"
                    whileHover={{ x: 5 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </motion.div>
                ))}
              </div>
            </Box>
          </ServiceCard>

          <ServiceCard
            icon={<AiOutlineSolution />}
            title="HR Services"
            description="Comprehensive HR solutions to optimize your workforce management."
            delay={0.2}
            index={1}
          >
            <Box title="Our HR Services">
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Employee Relations Management",
                  "Compensation & Benefits Design",
                  "Labor Law Compliance",
                  "Training & Development Programs",
                  "Performance Management Systems",
                  "Strategic HR Consulting"
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg"
                    whileHover={{ x: 5 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <AiOutlineCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </Box>
          </ServiceCard>

          <ServiceCard
            icon={<AiOutlineGlobal />}
            title="Foreign Employment"
            description="Global opportunities for qualified candidates worldwide."
            delay={0.4}
            index={2}
          >
            <Box title="Foreign Employment Services">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-3">Visa & Documentation</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Visa Processing Assistance</li>
                    <li>• Work Permit Applications</li>
                    <li>• Document Verification</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-3">Placement & Relocation</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• International Job Placement</li>
                    <li>• Relocation Services</li>
                    <li>• Pre-departure Orientation</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-3">Support Services</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Cultural Training</li>
                    <li>• Language Preparation</li>
                    <li>• Ongoing Support</li>
                  </ul>
                </div>
              </div>
            </Box>
          </ServiceCard>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Explore Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
