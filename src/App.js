import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Master from './Component/Layout/Master';
import Movie from './Component/Movie';
import Home from './Component/Home';
import Empployee from './Component/Employee';
import Login from './Component/Login';
import "react-toastify/dist/ReactToastify.css";
import { ToastClassName, ToastContainer } from 'react-toastify';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Master/>}>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/emp' element={<Empployee/>}/>
        <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer 
    position='bottom-center'
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    </>
  );
}

export default App;



{/* <Employee />
<Restaurent name="Noodle" cuisine="Chinese" image={"https://imgs.search.brave.com/I1eXaCXE3mVVpk8G1OQCnSBWaD9HL_cMoieuyZHnef0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTI2MTEwNTItMzNl/MDRkZTA4MWRlP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRKOGZHNXZi/MlJzWlhOOFpXNThN/SHg4TUh4OGZEQT0"} />
<Restaurent name="Momo" cuisine="Chinese" image={"https://imgs.search.brave.com/m6hbxQWIAjOtYFyzSLMjD9NVBikN8uRZRTHXBxJVgN8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/MjYzNTMyMS9waG90/by92ZWctc3RlYW0t/bW9tby1uZXBhbGVz/ZS10cmFkaXRpb25h/bC1kaXNoLW1vbW8t/c3R1ZmZlZC13aXRo/LXZlZ2V0YWJsZXMt/YW5kLXRoZW4tY29v/a2VkLWFuZC53ZWJw/P2I9MSZzPTE3MDY2/N2Emdz0wJms9MjAm/Yz11UjVSZ2dMNWpT/UmxGbXQ2LVo2ZkUy/OGRBcml3WXZGN0pr/aDRMNk5ncllvPQ"} /> */}