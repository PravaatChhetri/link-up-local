import React from 'react';
import GoogleMapReact from 'google-map-react';


// Assuming each of these components are in separate files and exported as default
import PrimaryListingDetails from '../components/PrimaryListingDetails';
import AdditionalDetails from '../components/AdditionalDetails';
import FAQsAndMoreInfo from '../components/FAQandMoreInfo';
import MediaAndSubmitForm from '../components/MediaAndSubmitForm';

const ListingFormPage = () => {
  
  return (
    <div className="container mx-auto p-4">
      <form className="space-y-8 divide-y divide-gray-200  md:w-1/2 mx-auto">
        <PrimaryListingDetails />
        <AdditionalDetails />
        <FAQsAndMoreInfo />
        <MediaAndSubmitForm />
        <div className="pt-8">
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Listing
            </button>
          </div>
        </div>
      </form>
     
    </div>
  );
};

export default ListingFormPage;
