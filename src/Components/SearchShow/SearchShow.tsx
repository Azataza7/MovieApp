import React, {useState, useEffect} from 'react';
import axiosApi from '../../axiosApi';
import {Link} from 'react-router-dom';

const SearchShow = () => {
  const [query, setQuery] = useState('');
  const [options, setOptions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (query.trim() !== '') {
        try {
          const response = await axiosApi.get(query);
          setOptions(response.data.map((result) => result.show));
        } catch (error) {
          console.error('Error fetching autocomplete options:', error);
          setOptions([]);
        }
      } else {
        setOptions([]);
      }
    };

    void fetchData();
  }, [query]);

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src="https://static.tvmaze.com/images/tvm-header-logo.png" alt="logo"/>
        </Link>
      </div>
      <div className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a TV show"
          onClick={() => setIsFocused(!isFocused)}
        />
        {options.length > 0 && isFocused &&(
          <div className="search-results">
            {options.map((option) => (
              <Link className="option" to={'shows/' + option.id} key={option.id}>
                {option.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchShow;
