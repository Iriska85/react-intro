import React from 'react';
import Greetings from './Greetings';
import style from './style';
import TextField from './TextField';

class SimpleForm extends React.Component {
	state = {
		firstName: '',
		secondName: '',
		firstNameError: '',
		secondNameError: ''
	};

	firstNameChange(event) {
		this.setState({firstName: event.target.value})
	}

	secondNameChange(event) {
		this.setState({secondName: event.target.value})
	}

	validateName(name) {
		const regex = /[A-Za-z]{3,}/;
		return !regex.test(name) ? 'Name must contain at least three letters' : '';
	}

	firstNameBlur() {
		const {firstName} = this.state;
		const firstNameError = this.validateName(firstName);
		return this.setState({firstNameError: firstNameError});
	}

	secondNameBlur() {
		const {secondName} = this.state;
		const secondNameError = this.validateName(secondName);
		return this.setState({secondNameError: secondNameError});
	}

	render() {
		const{firstName, firstNameError, secondName, secondNameError} = this.state;
		
		return (
			<div style={style.form}>
				<TextField 
					name='firstName'
					label='First name'
					onChange={this.firstNameChange.bind(this)}
					onBlur={this.firstNameBlur.bind(this)}
					error={firstNameError}
				/>
				<TextField 
					name='secondName'
					label='Second name'
					onChange={this.secondNameChange.bind(this)}
					onBlur={this.secondNameBlur.bind(this)}
					error={secondNameError}
				/>
					
				<Greetings 
					firstName={firstName} 
					secondName={secondName} 
				/>
			</div>
		)
	}
}
 
export default SimpleForm; 