import './App.css';
import AllRoutes from './blog/AllRoutes';
import WriteBlog from './blog/WriteBlog';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
    <AllRoutes />
    <Footer />
    </div>
  );
}

export default App;
