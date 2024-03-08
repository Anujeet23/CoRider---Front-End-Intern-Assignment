import { Provider } from 'react-redux';
import './App.css';
import ChatSection from './Components/ChatSection';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import TripHead from './Components/TripHead';
import appStore from './utils/appStrore';

function App() {
  return (
    <Provider store={appStore}>
      <Nav/>
     <TripHead/>
    <ChatSection/>
     <Footer/>
    </Provider>
     
    
  );
}

export default App;
