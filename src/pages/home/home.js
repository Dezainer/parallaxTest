import React from 'react'
import Floating from 'floating/floating'
import './home.css'

export default class Home extends React.Component {

	render() {
		return (
			<section className="home board">
				<Floating 
					className="orange" 
					verticalSpeed={ 17 }
					horizontalSpeed={ 90 }
					rotation={ 8 }
					left="15%"
					top="140%"
				>
					<img src={ require('footage/orange.png') }/>
				</Floating>
				<Floating
					className="apple"
					verticalSpeed={ 35 }
					horizontalSpeed={ 90 }
					rotation={ -4 }
					left="25%"
					top="117%"
				>
					<img src={ require('footage/apple.png') }/>
				</Floating>
			</section>
		)
	}
}