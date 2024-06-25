import React from 'react';

const Services = () => {
  return (
    <section className="p-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-bold mb-2">Recruitment</h3>
          <p>Connecting you with skilled professionals.</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-bold mb-2">HR Services</h3>
          <p>Comprehensive HR solutions for your business.</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-bold mb-2">Foreign Employment</h3>
          <p>Opportunities abroad for qualified candidates.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
