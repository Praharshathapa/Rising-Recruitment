import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineUsergroupAdd,
  AiOutlineSolution,
  AiOutlineGlobal,
} from "react-icons/ai";

const ServiceCard = ({ icon, title, description, children, delay }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="p-4 bg-white shadow-lg rounded-lg"
    >
      <div className="text-4xl mb-4 mx-auto">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
      {children}
    </motion.div>
  );
};

const Box = ({ title, children }) => (
  <div className="border border-gray-300 p-4 rounded-md mt-4">
    <h4 className="text-lg font-medium mb-2">{title}</h4>
    {children}
  </div>
);

const Services = () => {
  return (
    <section className="p-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          icon={<AiOutlineUsergroupAdd className="text-blue-500" />}
          title="Recruitment"
          description="Connecting you with skilled professionals."
          delay={0}
        >
          <Box title="Our Expertise">
            <ul className="list-disc ml-6 text-left">
              <li>Professional Human Resources</li>
              <ul className="list-disc ml-6">
                <li>Doctors, Engineers, Scientists, Professors/ Teachers,</li>
                <li>Chartered Accountants/ Managers (Hospitality),</li>
                <li>Architects, Geologist/Soil Experts,</li>
                <li>Specialists in Banking, Tourism,</li>
                <li>Certified Engineers (Civil & M.E.P)</li>
                <li>
                  Aeronautical Industries (Engineers, Airhostess, Pilot, Steward)
                </li>
                <li>Refinery Experts, Oil & Gas, Surveyors (Land & Quantity).</li>
              </ul>
              <li>Semi-skilled Human Resources</li>
              <ul className="list-disc ml-6">
                <li>Electric, Plumbing & Mechanic Assistants,</li>
                <li>Glass Cutters, Assistant Cooks, Kitchen Helpers,</li>
                <li>Washer & Pressmen, Gardeners, etc.</li>
              </ul>
              <li>Skilled Human Resources</li>
              <ul className="list-disc ml-6">
                <li>Pharmacist/ Laboratory Technicians,</li>
                <li>Security Officers & Guards,</li>
                <li>Chefs & Cooks</li>
                <li>
                  Other Construction related workforce like Carpenters, Welders,
                  Painters, Steel & Tile Fixers, Plumbers, Pipe Fitters, Waiters,
                  etc.
                </li>
              </ul>
              <li>Unskilled Human Resources</li>
              <ul className="list-disc ml-6">
                <li>Cleaners, Guards & Watchmen,</li>
                <li>Construction workers and other various types of laborers.</li>
              </ul>
            </ul>
          </Box>
          <Box title="Our Recruitment Procedure">
            <ol className="list-decimal ml-6 text-left">
              <li>Data Bank/ Update</li>
              <li>CV by E-mail</li>
              <li>Advertisement</li>
              <li>Shortlisted Candidates according to Job Description</li>
              <li>Interview and Screening of Candidates</li>
              <li>Advertisement</li>
              <li>Intimate Candidates for interview by Consultant</li>
              <li>Interview and Selection by Technical Consultant</li>
              <li>Trade test of Category Candidates</li>
              <li>Profile of Shortlisted Candidates forwarded to clients</li>
              <li>CV by Candidate Walk-In</li>
              <li>Detail to the Client</li>
              <li>Shortlisting CV from online Data Bank</li>
              <li>Trade Test if Required approval</li>
              <li>Final Interview</li>
              <li>Psychological tests (if required)</li>
              <li>Medical Examination</li>
              <li>Verification Check and Background Investigation</li>
              <li>Orientation Program</li>
              <li>Travel Arrangement</li>
            </ol>
          </Box>
        </ServiceCard>
        <ServiceCard
          icon={<AiOutlineSolution className="text-green-500" />}
          title="HR Services"
          description="Comprehensive HR solutions for your business."
          delay={0.2}
        >
          <Box title="Our HR Services">
            <ul className="list-disc ml-6 text-left">
              <li>Employee Relations</li>
              <li>Compensation and Benefits</li>
              <li>Compliance with Labor Laws</li>
              <li>Training and Development</li>
              <li>Performance Management</li>
              <li>HR Consulting</li>
            </ul>
          </Box>
        </ServiceCard>
        <ServiceCard
          icon={<AiOutlineGlobal className="text-purple-500" />}
          title="Foreign Employment"
          description="Opportunities abroad for qualified candidates."
          delay={0.4}
        >
          <Box title="Foreign Employment Services">
            <ul className="list-disc ml-6 text-left">
              <li>Visa Processing</li>
              <li>Work Permit Assistance</li>
              <li>Job Placement Abroad</li>
              <li>Relocation Services</li>
              <li>Pre-departure Orientation</li>
            </ul>
          </Box>
        </ServiceCard>
      </div>
    </section>
  );
};

export default Services;
