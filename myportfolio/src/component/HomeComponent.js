import React from 'react';
import { Grid,Cell } from 'react-mdl';


const HomeComponent = () => {
    return (
        <div style={{width : '100%' ,margin : 'auto'}}>
          <Grid className='grid-gradient'>
              <Cell col={12}>
                <img src='' alt='avatar' />
              </Cell>
          </Grid>
        </div>
    );
};

export default HomeComponent;