import "./App.css";
import Navbar from "./component/Navbar/index";
import Header from "./pages/home/Header/index";
import Patners from "./pages/home/Patners/index";
import Services from "./component/Services/index";
import Youtube from "./component/Youtube/index";
import Testimonials from "./component/Testimonials/index";
import Newsletter from "./component/Newsletter/index";
import CallToAction from "./component/CTA/index";
import Footer from "./component/Footer/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Patners />
      <Services />
      <Youtube />
      <Testimonials />
      <Newsletter />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
