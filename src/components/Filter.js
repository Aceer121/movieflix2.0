const Filter = ({ onFilterChange }) => {
    return (
      <div className="filter">
        <select onChange={(e) => onFilterChange(e.target.value)}>
          <option value="all">All</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          {/* Add more genres */}
        </select>
      </div>
    );
  };
  
  export default Filter;
  