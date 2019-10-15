import React from 'react';
import { Switch,Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import AboutMeComponent from './AboutMeComponent';
import ProjectComponent from './ProjectComponent';
import ContactComponent from './ContactComponent';
const Main = () => {
    return (
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/resume" component={HomeComponent} />
                <Route exact path="/aboutme" component={AboutMeComponent} />
                <Route exact path="/project" component={ProjectComponent} />
                <Route exact path="/contactme" component={ContactComponent} />
            </Switch>
    );
};

export default Main;
