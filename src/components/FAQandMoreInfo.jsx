import React, { useState } from 'react';

const FAQsAndMoreInfo = () => {
  const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);

  const handleAddFaq = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  const handleFaqChange = (index, e) => {
    const newFaqs = [...faqs];
    newFaqs[index][e.target.name] = e.target.value;
    setFaqs(newFaqs);
  };

  const handleRemoveFaq = (index) => {
    const newFaqs = [...faqs];
    newFaqs.splice(index, 1);
    setFaqs(newFaqs);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Frequently Asked Questions */}
        <div className="mb-6">
          <div className="mb-2">
            <span className="text-gray-700 text-sm font-bold mb-2">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="question"
                placeholder="FAQ"
                value={faq.question}
                onChange={(e) => handleFaqChange(index, e)}
              />
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                name="answer"
                placeholder="Answer"
                value={faq.answer}
                onChange={(e) => handleFaqChange(index, e)}
              />
              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveFaq(index)}
                  className="text-red-500 hover:text-red-700 text-sm mt-2"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddFaq}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            + Add New
          </button>
        </div>

        {/* More Info */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            More Info
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            rows="4"
            placeholder="Detail description about your listing"
          />
        </div>

        {/* Tags or Keywords */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
            Tags Or Keywords (Comma Separated)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tags"
            type="text"
            placeholder="Enter tags or keywords comma separated..."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQsAndMoreInfo;
