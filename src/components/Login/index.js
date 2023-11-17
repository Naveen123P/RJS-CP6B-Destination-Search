// Write your code here
import './index.css'

const Login = props => {
  const {loginStatus} = props
  const text = loginStatus ? 'Logout' : 'Login'
  return <span>{text}</span>
}

export default Login
