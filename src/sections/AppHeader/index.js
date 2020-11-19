import React from "react";
import { Link } from "react-router-dom";

export const AppHeader = () => {
  return (
    <header class="top-bar top-bar--no-logo">
      <span class="top-bar__button js-trigger-menu">menu</span>
      <nav class="main-menu js-target-menu main-menu--left">
        <div class="main-menu--left__close-menu">
          <i class="material-icons button">clear</i>
        </div>
        <Link to="/">Home</Link>
        <Link to="/people">People</Link>
      </nav>
    </header>
  );
};
