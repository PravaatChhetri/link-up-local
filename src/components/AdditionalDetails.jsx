import React from 'react';

const AdditionalDetails = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        {/* Category & Services */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category *
          </label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="category"
          >
            <option>Choose Your Business Category</option>
            {/* Populate with your categories */}
          </select>
        </div>

        {/* Additional Information */}
        <div className="flex flex-wrap -mx-3 mb-2">
          {/* Delivery and Takeout toggles */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="delivery">
              Delivery
            </label>
            <input type="checkbox" id="delivery" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="takeout">
              Take Out
            </label>
            <input type="checkbox" id="takeout" />
          </div>
        </div>

        {/* More checkboxes for amenities */}
        {/* ... Similar structure for your other checkboxes ... */}

        {/* Gender Radios */}
        <div className="mb-4">
          <span className="text-gray-700 text-sm font-bold mb-2">Gender</span>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input type="radio" name="gender" value="male" />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="gender" value="female" />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>

        {/* Accept Payments */}
        {/* ... Similar structure for your payment method checkboxes ... */}

        {/* Price Details */}
        <div className="flex justify-between items-center mb-4">
          {/* ... Input fields for price range ... */}
        </div>

        {/* Business Hours */}
        <div>
          <span className="text-gray-700 text-sm font-bold mb-2">Business Hours</span>
          {/* ... Fields for each day ... */}
        </div>

      </div>
    </div>
  );
};

export default AdditionalDetails;
