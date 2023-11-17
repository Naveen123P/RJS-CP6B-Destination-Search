// Write your code here
import './index.css'

const Logout = props => {
  const {loginStatus} = props
  const text = loginStatus ? 'Logout' : 'Login'
  return <span>{text}</span>
}

export default Logout
