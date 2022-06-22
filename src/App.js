import './App.scss'
//导入依赖
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
//导入文件
import Login from './pages/Login'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route path='/home' component={Layout} />
          <Route path='/login' component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}
export default App