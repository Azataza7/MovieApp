import './App.css';
import {Routes, Route} from 'react-router-dom';
import Shows from './Components/Shows/Shows';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={(
          <Shows/>
        )}/>
        <Route path="*" element={(
          <h1 className="no-found-text">Not Found</h1>
        )}/>
      </Routes>
    </>
  );
};

export default App;
