import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { login } from '../actions'

class Login extends React.Component {
	state = {
		credentials: {
			username: '',
			password: ''
		}
	}

	handleChange = event => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[event.target.name]: event.target.value
			}
		})
	}

	login = event => {
		event.preventDefault();
		this.props.login(this.state.credentials).then(() => {
			this.props.history.push('/protected');
		})
	}

	render() {
		return (
			<form onSubmit={this.login}>
				<input name="username" onChange={this.handleChange} value={this.state.credentials.username} placeholder="username" />
				<input name="password" onChange={this.handleChange} value={this.state.credentials.password} placeholder="password" />
				<button onClick={this.login}>
					{this.props.isLoggingIn 
						? ( <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />) 
						: ('Log in')
          }
        </button>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggingIn: state.isLoggingIn
	}
}

export default connect(mapStateToProps, { login })(Login);
