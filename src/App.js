import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Profile from './page/Profile';
import ChangePhoto from './page/ChangePhoto';
import ChangePhoto2 from './page/ChangePhoto2';
import AmbilPhoto from './page/AmbilPhoto';
import AmbilGaleri from './page/AmbilGaleri';
import Profile2 from './page/Profile2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/ChangePhoto" element={<ChangePhoto />} />
        <Route path="/AmbilPhoto" element={<AmbilPhoto />} />
        <Route path="/AmbilGaleri" element={<AmbilGaleri />} />
        <Route path="/ChangePhoto2" element={<ChangePhoto2 />} />
        <Route path="/Profile" element={<Profile2 />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
  }

export default App;
