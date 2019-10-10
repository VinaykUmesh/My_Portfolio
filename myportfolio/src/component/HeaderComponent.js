import React from 'react';
import { Layout,Header,Drawer,Navigation,Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './main';

function HeaderComponent() {

  return (
        <div className="demo-big-content">
        <Layout>
            <Header title={<span><strong>MY</strong> Portfolio</span>} scroll className="header-gradient">
            <Navigation>
                                <Link to="/home">Home</Link>
                                <Link to="/resume">Resume</Link>
                                <Link to="/aboutme">About Me</Link>
                                <Link to="/project">Projects</Link>
                                <Link to="/contactme">Contact Me</Link>
                            </Navigation>
                        
                    </Header>
                    <Drawer title="My Portfolio">
                        <Navigation>
                                <Link to="/home">Home</Link>    
                                <Link to="/resume">Resume</Link>
                                <Link to="/aboutme">About Me</Link>
                                <Link to="/project">Projects</Link>
                                <Link to="/contactme">Contact Me</Link>
                        </Navigation>
            </Drawer>
            <Content>
                <div className="page-content">
                    <Main/>
                </div>
            </Content>
        </Layout>
    </div>
  );
}

export default HeaderComponent;
