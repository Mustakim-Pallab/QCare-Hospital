import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const PrivateRoute = ({children,...rest}) => {
    const{User}= UseAuth()

    return (
        <div>
            <Route
            {...rest}
            render={({location})=>User.email?children:
            <Redirect to={
                {
                    pathname:"/login",
                    state:{from:location}
                }
            }
            > </Redirect>
        }
            >

            </Route>
            
        </div>
    );
};

export default PrivateRoute;