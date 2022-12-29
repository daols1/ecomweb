import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import FAQs from './Pages/FAQs/FAQs';
import MyAccount from './Pages/My Account/MyAccount';
import Shop from './Pages/Shop/Shop';
import Sharedlayout from './Components/Sharedlayout/Sharedlayout';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import T404 from './Components/404/T404';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element= {<Sharedlayout />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/faqs' element={<FAQs />} />
            <Route path='/myaccount' element={<MyAccount />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
          </Route>
          <Route path='/*' element={<T404 />} />
        </Routes>
      {/* <Home /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
