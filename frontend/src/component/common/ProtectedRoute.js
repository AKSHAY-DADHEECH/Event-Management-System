// import React, { useEffect, useState} from 'react';
// import { Route, Redirect } from 'react-router-dom'
// import { useSelector } from "react-redux";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const auth = useSelector(state => state.auth)
//   const [isAuthenticated, setIsAuthenticated] = useState(null)  
//   useEffect(() => {
//     let token = localStorage.getItem('jwttoken')
//         if(token){
            
//                 setIsAuthenticated(true)
            
//         } else {
//            setIsAuthenticated(false)
//         }
//     // eslint-disable-next-line
//   }, [auth])

//   if(isAuthenticated === null){
//     return <></>
//   }

//   return (
//     <Route {...rest} render={props =>
//       !isAuthenticated ? (
//         <Redirect to='/login'/>
//       ) : (
//         <Component {...props} />
//       )
//     }
//     />
//   );
// };

// export default PrivateRoute;

import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest}) => {
  return (
    <Route
    {...rest}
      render={(props) => {
       
        let token = localStorage.getItem('jwttoken')
        console.log(token);
        if (token) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
