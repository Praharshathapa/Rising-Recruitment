import React from 'react';
// import teamPhoto from '../assets/team.jpg';
// import officePhoto from '../assets/office.jpg';
// import networkPhoto from '../assets/network.jpg';
import { motion } from 'framer-motion';


const About = () => {
  return (
    <motion.div 
  initial={{ opacity: 0 }} 
  animate={{ opacity: 1 }} 
  transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }} 
  className="flex flex-col items-center">
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="flex flex-col items-center">
          {/* <img src={teamPhoto} alt="Our Team" className="rounded-lg shadow-lg mb-4" /> */}
          <p className="text-lg text-center">
            Rising Recruitment is an integrated human resources company, incorporated under the Ministry of Labour, Government of Nepal approved license no. 878/067/68. We are the outreach vehicle of Nepalese people aspiring to work in foreign countries, namely the Gulf, South East Asia, East Asia, Europe, and other countries.
          </p>
        </div>
        <div className="flex flex-col items-center">
          {/* <img src={officePhoto} alt="Our Office" className="rounded-lg shadow-lg mb-4" /> */}
          <p className="text-lg text-center">
            Our company is centrally located in the heart of the capital city of Kathmandu. We are headed by a team of highly qualified professionals with many years of experience in various aspects of human resources. Our main strategy is to understand the customers' needs and provide the best solutions that serve the need of candidates as well as meet the requirement of the clients.
          </p>
        </div>
        <div className="flex flex-col items-center">
          {/* <img src={networkPhoto} alt="Our Network" className="rounded-lg shadow-lg mb-4" /> */}
          <p className="text-lg text-center">
            Our wide network of recruiting centers that is spread over remote areas of Nepal has provided us access to a huge number of skilled and unskilled workforce. We further coach the approved candidates to enhance their work knowledge based on the countries they will be working in. Additionally, we also have access to professionals who are seeking to work abroad.
          </p>
        </div>
        <div className="flex flex-col items-center">
          {/* <img src={teamPhoto} alt="Integrity and Transparency" className="rounded-lg shadow-lg mb-4" /> */}
          <p className="text-lg text-center">
            Our core values are based on integrity and transparency, thus providing the clients and job seekers a reliable platform to conduct business. Choosing Rising Recruitment as your recruitment partner in Nepal will no doubt be a profitable and a lasting business relationship.
          </p>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default About;
