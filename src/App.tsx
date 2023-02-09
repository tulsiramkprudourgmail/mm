import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import NoPage from './pages/NoPage';
import CommitteeSRMC from './pages/CommitteeSRMC';
import CommitteeSSC from './pages/CommitteeSSC';
import MainPage from './pages/MainPage';
import Dommy from "./pages/Dommy";



export default function App() {
    return (
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<MainPage />}>  
              <Route index element={<Dommy />} />                               
              <Route path="commitee-ssc" element={<CommitteeSSC />} />
              <Route path="commitee-srmc" element={<CommitteeSRMC />} />
              <Route path="*" element={<NoPage />} />
           </Route>
        </Routes>
     </BrowserRouter>
    );
  }
