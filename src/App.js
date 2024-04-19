

import { BrowserRouter, Routes, Route } from 'react-router-dom';



import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './components/privacypolicy/PrivacyPolicy';
import { TermsOfUse } from './components/termsofuse/TermsOfUse';


function App() {
  return (
    <><BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
        <Route path='/terms-of-use' element={<TermsOfUse />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
