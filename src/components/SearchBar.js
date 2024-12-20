import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass the input value to the parent
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search movies..."
        className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500"
      />
    </div>
  );
};

export default SearchBar;
