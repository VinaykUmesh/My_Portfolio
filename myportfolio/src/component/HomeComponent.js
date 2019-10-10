import React from 'react';
import { Grid,Cell } from 'react-mdl';
import logo from '../images/logo.png';


const HomeComponent = () => {
    return (
        <div style={{width : '100%' ,margin : 'auto'}}>
          <Grid className='grid-gradient'>
              <Cell col={12}>
                <img src={logo} alt='avatar'
                className="avatar-img"
                />
                <div className='banner-text'>
                  <h2>Full Stack Web Developer</h2>
                    <hr/>
                    <p>HTML/CSS | Javascript | React Js | Spring Boot | Hibernate | Mysql</p>
                      <div className='social-img'>
                      
                      <a href='/' rel="noopener noreferrer" target='_blank'>
                      <i className='fa fa-linkedin-square' aria-hidden='true'/>
                      </a>
                      <a href='https://github.com/VinaykUmesh' rel="noopener noreferrer" target='_blank'>
                      <i className='fa fa-github-square' aria-hidden='true'/>
                      </a>
                    </div>
                </div>
              </Cell>
          </Grid>
        </div>
    );
};

// eslint-disable-next-line 
export default HomeComponent;