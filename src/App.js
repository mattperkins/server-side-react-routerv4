import * as React from 'react'
import { Switch, Route } from 'react-router'
import HomePage from './pages/HomePage'

class App extends React.Component{
 render(){
  return(
    <Switch>
     <Route path="/" render={props => (
       <HomePage {...props} />
     )} />
    </Switch>
  )
 }
}

export default App