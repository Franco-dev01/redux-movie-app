import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  toast.configure({
    autoClose: 8000,
    draggable: false,
    hideProgressBar: true,
    closeButton: false,
    pauseOnFocusLoss: true,
    style: { fontSize: 13 },
  });
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:movieId" component={MovieDetail} />
            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
