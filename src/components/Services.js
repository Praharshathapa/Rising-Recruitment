import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineUsergroupAdd,
  AiOutlineSolution,
  AiOutlineGlobal,
} from "react-icons/ai";

const Services = () => {
  return (
    <section className="p-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-4 bg-white shadow rounded"
        >
          <AiOutlineUsergroupAdd className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Recruitment</h3>
          <p>Connecting you with skilled professionals.</p>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4 bg-white shadow rounded"
        >
          <AiOutlineSolution className="text-4xl text-green-500 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">HR Services</h3>
          <p>Comprehensive HR solutions for your business.</p>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-4 bg-white shadow rounded"
        >
          <AiOutlineGlobal className="text-4xl text-purple-500 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Foreign Employment</h3>
          <p>Opportunities abroad for qualified candidates.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
