import * as React from "react";
import {Helmet} from 'react-helmet'

class HomePage extends React.Component{

clickHandler(){
 console.log('Yes it worked!')
}

head(){
  return (
    <Helmet>
      <meta />
      <title>DORMshed</title>
    </Helmet>
  )
}

 render(){
 return(
   <div>
      {this.head()}
    <h1>HomePage</h1>

     <button onClick={() => this.clickHandler()}>Console log</button>
    </div>
  )}
 }

export default HomePage