import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectSelectedShow} from '../../store/ShowSlice';
import {fetchShowInfo} from './ShowThunks';
import {showJson} from '../../types';
import {RootState} from '../../app/store';
import Spinner from '../Spinner/Spinner';

const ShowInfo = () => {
  const show: showJson = useAppSelector(selectSelectedShow);
  const dispatch = useAppDispatch();
  const id = useParams().id;
  const isLoading: boolean = useAppSelector((state: RootState) => state.shows.isLoading);
  console.log(isLoading);

  useEffect(() => {
    dispatch(fetchShowInfo(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner/>;
  }

  if (!show || Object.keys(show).length === 0) {
    return 'Oops!';
  }

  const {
    image, name, genres,
    summary, rating, language,
    premiered, status, network,
  } = show;

  return (
    <>
      <div className="card-film">
        <div className="card-film-container">
          <div className="card-img">
            <img src={image?.medium} alt={name + 'image'}/>
            <span className="rating">{rating?.average ?? 'no rate'}</span>
          </div>
          <div className="card-info">
            <h3 className="card-title mb-2">{name}</h3>
            <p className="category">
              {genres && genres.map((genre, index) => (
                <span key={index}>{genre} |</span>
              ))}
            </p>
            <p className="card-desc">{summary ? summary.replace(/<[^>]+>/g, '') : 'no rate'}</p>
            <span className="language d-block">Language:{language}</span>
            <span className="date-release d-block">Date release:{premiered}</span>
            <span className="show-status d-block">Status:{status}</span>
            <p className="madeIn">Country: {network?.country?.name ?? 'Unknown'}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowInfo;
