import React, {useState, useEffect} from 'react';
import axiosApi from '../../axiosApi';
import {Link} from 'react-router-dom';
import {showResponse, showTemplate} from '../../types';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectResult, setResult} from '../../store/ShowSlice';

const SearchShow = () => {
  const [userInput, setUserInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const options: showTemplate[] = useAppSelector(selectResult);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (userInput.trim() !== '') {
        try {
          const response: showResponse = await axiosApi.get(userInput);
          dispatch(setResult(response.data.map((result) => result.show)));
        } catch (error) {
          console.log('Error fetching options:', error);
          dispatch(setResult([]));
        }
      } else {
        dispatch(setResult([]));
      }
    };

    void fetchData();
  }, [dispatch, userInput]);

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
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
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
