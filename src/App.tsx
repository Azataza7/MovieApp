import {Routes, Route} from 'react-router-dom';
import Shows from './Components/Shows/Shows';
import ShowInfo from './Components/Shows/ShowInfo';
import './App.css';


const App = () => {

  return (
    <>
      <Shows/>
      <Routes>
        <Route path="/shows/:id" element={(
          <ShowInfo/>
        )}/>
        <Route path="*" element={(
          <h1 className="no-found-text">Not Found</h1>
        )}/>
      </Routes>
    </>
  );
};

export default App;
