import logo from './logo.svg';
import './App.css';
import Qr from './components/Qr';
import Send from './components/Send';
import Home_page from './components/Home_page';
import Buy from './components/Buy';
import axios from "axios";
import { NewsContextProvider } from "/home/maxx/Downloads/news/src/components/news/NewsContext.js";
import News from "./components/news/news";
import "/home/maxx/Downloads/news/src/components/news/news.css";

function App() {
  return (
  //  <Qr></Qr>
  // <Send></Send>
  <div>
  <Home_page></Home_page>

  <NewsContextProvider>
      <News />
    </NewsContextProvider>
  </div>
  
  // <Buy></Buy>
  );
}

export default App;
