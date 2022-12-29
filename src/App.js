import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import ScrollToTop from "react-scroll-to-top";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="overflow-x-hidden bg-purple-800">
      <RouterProvider router={router}>
        <Toaster></Toaster>
      </RouterProvider>
    </div>
  );
}

export default App;