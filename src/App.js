import logo from './logo.svg';
import './App.css';
import { Appbar } from '@mui/material';
import Appbar1 from './components/Appbar1';
import { Route,Routes } from 'react-router-dom';



import View1 from './components/View1';

import Add from './components/Add';
;





function App() {
  return (
    <div>
      
    <Appbar1/>
       <Routes>
        <Route path='/' element={<View1/>}/>
        <Route path='/add' element={<Add data ={{BookName:'',Author:'',Publishedon:'',Publishedon:''}} method="post"/>}/>
        
        
       
 </Routes> 

    
    </div>
  );
}

export default App;
