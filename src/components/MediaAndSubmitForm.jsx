import React, { useState } from 'react';

const MediaAndSubmitForm = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [email, setEmail] = useState('');

  // This will handle the file input for uploading images and logo
  const handleFileChange = (e) => {
    // For demonstration purposes only, we're logging the file names
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      console.log(files[i].name);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Media */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="video">
            Your Business Video (Optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="video"
            type="text"
            placeholder="ex: https://youtu.be/IV2jAdbvdQ"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Images
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            multiple
            onChange={handleFileChange}
          />
        </div>

        {/* Logo Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Business Logo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            onChange={handleFileChange}
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Enter Email To Signup & Receive Notification Upon Listing Approval
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="your contact email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Already Have Account?</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-between items-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save & Preview
          </button>
        </div>

      </div>
    </div>
  );
};

export default MediaAndSubmitForm;
