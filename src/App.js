import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import Skill from "./components/Skills/skill";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
