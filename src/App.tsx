import './App.css';
import {Routes, Route} from 'react-router-dom';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="*" element={(
          <h1 className="no-found-text">Not Found</h1>
        )}/>
      </Routes>
    </>
  );
};

export default App;
