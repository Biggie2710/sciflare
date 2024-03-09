import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserListing from "./Component/UserListing"
import UserCreate from "./Component/UserCreate"
import UserDetail from "./Component/UserDetail"
import UserEdit from "./Component/UserEdit"

function App() {
  const API_KEY = '03ab729d341144deaad30c13000e1ffa';
  return (
    <div className="App">
      <h1>Simple Page Crud App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserListing API_KEY={API_KEY} />}></Route>
          <Route path='/user/create' element={<UserCreate API_KEY={API_KEY} />}></Route>
          <Route path='/user/detail/:userId' element={<UserDetail API_KEY={API_KEY} />}></Route>
          <Route path='/user/edit/:userId' element={<UserEdit API_KEY={API_KEY} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
