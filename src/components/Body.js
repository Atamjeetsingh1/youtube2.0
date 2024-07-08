import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import {Outlet} from 'react-router-dom';
 
//feed change ho skti h isliye outlet import kreng
//sidebar or nav bar constant h,feed change hri h bs
const Body = () => {
  return (
    <div className="flex mt-16">
        <Sidebar />
        <Outlet/> 
      </div>
  )
}
//outlet m sare children k andr wli chiz render hnge,jo child k under aenge component
export default Body