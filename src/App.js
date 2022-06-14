import BaseLayout from './landing/components/BaseLayout'
import Header from './landing/Header';
import Slider from './landing/Slider';
import Section from './landing/Section';
import Footer from './landing/Footer';

function App() {
  return (
    <BaseLayout>
        <div className="bg-[#7052fb] lg:px-[15%] md:px-[5%] px-[5%] min-h-screen">
          <Header />
          <Slider />
        </div> 
        <Section/>
        <Footer />
    </BaseLayout>
  );
}

export default App;
