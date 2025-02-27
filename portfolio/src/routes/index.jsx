import React from 'react'
import Home from '../pages/home/home.jsx'
import About from '../pages/about/about.jsx'
import Project from '../pages/project/project.jsx'
export const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/project",
      component: Project,
    },
  ];