import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Newpost from './Newpost';
import Postpage from './Postpage';
import About from './About';
import Missing from './Missing';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Post from './Post';
import PostOut from './PostOut';




function App() {
  return (
    <div className="App">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/postpage">PostPage</Link></li>

    </ul>
  <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path='/Postpage' element={<PostOut/>}>
     <Route index element={<Postpage/>}/>
     <Route path=':id' element={<Post/>}/>
     <Route path='newPost' element={<Newpost/>}/>
     </Route>
     

  </Routes>
    {/* <Header/>
    <Nav />
    <Home />
    <Newpost />
    <Postpage/>
    <About />
    <Missing/>
    <Footer /> */}
    </div>
  );
}

export default App;
