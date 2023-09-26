import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './component/login';
import { Register } from './component/register';
import { Menu } from './component/menu';
import { Home } from './component/home_Page';
import { Clientdash} from './component/clientdashboard';
import { Admin } from './component/admindashboard';
import { Dashboard } from './component/dashboard';
import { Updateprofile } from './component/update_page';
import { Customersingle } from './component/clientsingle_view';
import { ContactPage } from './component/contact';

function App() {
  return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={[<Menu/>,<Home/>]}/>
            <Route path='/reg_page' element={[<Menu/>,<Register/>]}/>
            <Route path='/login' element={[<Menu/>,<Login/>]}/>
            <Route path='/dashboard' element={[<Menu/>,<Dashboard/>]}/>
            <Route path='/clientdashboard/:id' element={[<Menu/>,<Clientdash/>]}/>
            <Route path='/clientsingle_view/:aid' element={[<Menu/>,<Customersingle/>]}/>
            <Route path='/admindashboard/:id' element={[<Menu/>,<Admin/>]}/>
            <Route path='/update_page/:aid' element={[<Menu/>,<Updateprofile/>]}/>
            <Route path='/contact' element={[<Menu/>,<ContactPage/>]}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
