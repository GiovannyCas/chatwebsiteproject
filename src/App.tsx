//import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import {createBrowserRouter, createRoutesFromElements, RouterProvider , Route} from "react-router-dom";
import './App.css'
import LoginPage from "@/app/login/page.tsx";
import SignUpPage from "@/app/signup/page.tsx";

import HomePage from "@/app/home/page.tsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={"/"} >
            <Route index element={<LoginPage />}/>
            <Route path={'/signup'} element={<SignUpPage />}/>
            <Route path={'/home'} element={<HomePage/>}/>
        </Route>

    )
)


function App() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <div >
                <RouterProvider router={router}/>
            </div>

        </>
    )
}



/*function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}*/

export default App
