import React from 'react';
import Spinner from './Spinner';
import {Route,Redirect} from 'react-router-dom';


function RedirectPage({ loading,children, ...rest }) {
    console.log(loading)
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          loading ? (
            <Spinner/>
          ) : (
            <Redirect
              to={{
                pathname: "/upload",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
        
    


export default RedirectPage;