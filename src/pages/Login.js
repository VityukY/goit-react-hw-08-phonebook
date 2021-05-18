import { Component } from 'react';
import { connect } from 'react-redux';
import * as operations from '../redux/auth/auth-operations';
class Login extends Component {
   state = {
      email: '',
      password: '',
   };
   componentDidMount() {
      this.props.getCurrentUser();
   }
   onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
   };
   onSubmit = e => {
      e.preventDefault();
      this.props.signIn(this.state);
   };
   render() {
      return (
         <>
            <h1> Login page</h1>
            <form onSubmit={this.onSubmit}>
               <input
                  value={this.state.email}
                  name="email"
                  onChange={this.onChange}
               />

               <input
                  value={this.state.password}
                  name="password"
                  onChange={this.onChange}
               />

               <button type="submit">Login</button>
            </form>
            <button type="button" onClick={() => this.props.logout()}>
               Logout
            </button>
         </>
      );
   }
}
const mapDispatchToProps = {
   signIn: operations.login,
   logout: operations.logout,
   getCurrentUser: operations.getCurrentUserUser,
};
export default connect(null, mapDispatchToProps)(Login);
