import React,{Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Test from "./pages/test";


class MyRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch> {/*只匹配一个*/}
          <Route path="/test" component={Test} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default MyRouter
