import React from "react";
import countries from "../data";

const RecruitingCountries = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:mb-6 bg-[#ececec] rounded-xl lg:mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col mt-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recruiting Countries
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Consectetur pariatur magna anim commodo cillum aliqua dolor dolore
            anim cillum eu. Nulla tempor elit laboris veniam elit dolor fugiat
            tempor anim. Duis pariatur minim in aliquip irure tempor proident
            cupidatat dolor labore. Aute ipsum eu ut aute cillum magna sit
            commodo minim Lorem culpa.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {countries.map((country, index) => (
            <div key={index} className="flex flex-col items-center ">
              <div className="flex justify-center items-center bg-transparent ">
                <img
                  src={country.image}
                  alt={country.name}
                  className="rounded-lg object-contain h-24 w-24 md:h-32 md:w-32"
                />
              </div>
              <p className="text-lg font-semibold text-center">
                {country.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitingCountries;
