import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router";
import Layout from "./ui/components/layout/Layout/Layout.jsx";
import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import BooksPage from "./ui/pages/HomePage/BookPage.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<HomePage/>}/>
                  <Route path="books" element={<BooksPage/>}/>
                  {/*<Route path="products/:id" element={<ProductDetails/>}/>*/}
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
