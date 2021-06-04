import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom'

import Profile from './Profile';
import Singlepro from './singleprofile'

const App=()=>{
  return(
    <BrowserRouter>
  <Route exact path='/'  component={Profile}/>
  <Route path='/singleprofile' component={Singlepro}/>
    </BrowserRouter>
  )
}


export default App;