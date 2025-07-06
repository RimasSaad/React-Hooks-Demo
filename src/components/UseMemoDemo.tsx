// UseMemoDemo.tsx
// Demonstrates useMemo by filtering a list of names based on user input efficiently.

import React, { useState, useMemo } from 'react';

const UseMemoDemo: React.FC = () => {
  // State for the filter input
  const [search, setSearch] = useState<string>('');

  // Static list of names
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Emily','Frank', 'Charles', 'Grace'];

  // useMemo to memoize the filtered list
  const filteredNames = useMemo(() => {
    console.log('Filtering names...'); // To show when it runs

    return names.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]); // Re-run only when 'search' changes

  return (
    <div>
      <h3>useMemo Demo: Filter Names</h3>

      {/* Input field to enter search text */}
      <input
        type="text"
        placeholder="Search names..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Display filtered names */}
      <ul>
        {filteredNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoDemo;
