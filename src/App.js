import './App.css';
import Main from './components/Main';
import Popup from './components/Popup';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import PageWrapper from './components/PageWrapper';

function App() {
  const show = useSelector(state => state.appReducer.isPopupShow);

  return (
    <PageWrapper show={show}>
      {show && <Popup />}
      <Header />
      <Main />
    </PageWrapper>
  );
}

export default App;
