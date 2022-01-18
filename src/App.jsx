import {Header} from "./components/Header.jsx";
import Firstsection from "./components/Firstsection.jsx";
import Secondsection from "./components/Secondsection.jsx";
import Thirdsection from "./components/Thirdsection.jsx"
import Fourthsection from "./components/Fourthsection.jsx";
import FifthSection from "./components/FifthSection.jsx";
import SixthSection from "./components/SixthSection.jsx";
import SeventhSection from "./components/SeventhSection.jsx";
import Footer from "./components/Footer.jsx";
import "../src/Responsive/responsive.css"

function App() {
  return (
    <>
      <Header/>
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Fourthsection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <Footer/>
    </>
  );
}

export default App;
