import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectSelectedShow} from '../../store/ShowSlice';
import {fetchShowInfo} from './ShowThunks';
import {showTemplate} from '../../types';

const ShowInfo = () => {
  const show = useAppSelector(selectSelectedShow);
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = params.id.toString();

  useEffect(() => {
    dispatch(fetchShowInfo(id));
  }, [dispatch, id]);

  console.log(show)
  return (
    <div className="card-film">
      {show && Object.keys(show).length > 0 && (
        <div className="card-film-container">
          <div className="card-img">
            <img src={show.image.medium} alt={show.name + 'image'}/>
          </div>
          <div className="card-info">
            <h3 className="card-title mb-2">{show.name}</h3>
            <p className="category">{show.genres.map((genre, index) => (
              <span key={index}>{genre} </span>
            ))}</p>
            <p className="card-desc">{show.summary ? show.summary.replace(/<[^>]+>/g, '') : 'no rate'}</p>
            <span className="rating">{show.rating.average ? show.rating.average : ''}</span>
            <span className="language d-block">Language:{show.language}</span>
            <span className="date-release d-block">Date release:{show.premiered}</span>
            <span className="show-status d-block">Status:{show.status}</span>
            <p className="madeIn">Country: {show.network.country.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowInfo;