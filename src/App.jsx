import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router";
import Layout from "./ui/components/layout/Layout/Layout.jsx";
import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import BooksPage from "./ui/pages/BookPage/BookPage.jsx";
import AuthorsPage from "./ui/pages/AuthorPage/AuthorPage.jsx";
import CountriesPage from "./ui/pages/CountryPage/CountryPage.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<HomePage/>}/>
                  <Route path="books" element={<BooksPage/>}/>
                  <Route path="authors" element={<AuthorsPage/>}/>
                  <Route path="countries" element={<CountriesPage/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
