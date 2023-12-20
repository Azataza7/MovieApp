import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectResult, setResult} from '../../store/ShowSlice';
import {fetchSearchShow} from './ShowThunks';
import {showTemplate} from '../../types';
import SearchShow from '../SearchShow/SearchShow';

const Shows: React.FC = () => {
  const dispatch = useAppDispatch();
  const shows: showTemplate = useAppSelector(selectResult);

  useEffect(() => {
    dispatch(fetchSearchShow('breaking'));
  }, []);

  useEffect(() => {
    console.log(shows);
  }, [shows]);

  const handleShowSelect = (selectedShow) => {
    console.log('Selected show:', selectedShow);
  };

  return (
    <>
      <SearchShow onShowSelect={handleShowSelect} />
    </>
  );
};

export default Shows;