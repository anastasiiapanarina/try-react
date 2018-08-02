import React from 'react';
import Header from './Header';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';

export default class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: []
		};
	}

	componentDidMount() {
		let savedOptions = JSON.parse(localStorage.getItem('options'));
		if (savedOptions) {
			this.setState(() => ({options: savedOptions}));
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const options = JSON.stringify(this.state.options);
			localStorage.setItem('options', options);
		}
	}

	componentWillUnmount() {
		console.log('here3');
	}

	handleDeleteOptions() {
		this.setState(() => ({ options: [] }));
	}

	handleDeleteOption(optionToRemove) {
		this.setState((prewState) => ({
			options: prewState.options.filter(option => optionToRemove !== option)
		}));
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		console.log(this.state.options[randomNum]);
	}

	handleAddOption(option) {
		if (!option) {
			return 'Enter valid value';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		this.setState(prevState => ({ options: prevState.options.concat(option) }));
	}
	render() {
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header subtitle={subtitle}/>
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption handleAddOption={this.handleAddOption}/>
			</div>
		);
	}
}