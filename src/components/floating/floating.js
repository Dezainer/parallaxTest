import React from 'react'
import PropTypes from 'prop-types'
import './floating.css'

import ScrollingCore from 'scrollingCore'

export default class Floating extends React.Component {

	state = { scrollTop: 0 }

	componentDidMount() {
		ScrollingCore.onScroll(e => {
			let { scrollTop, offsetHeight } = e.target.documentElement

			!this.elementDidNotAppearYet(scrollTop) &&
				this.setState({ scrollTop })
		})
	}

	elementDidNotAppearYet(scrollTop) {
		return this.element.offsetTop > (scrollTop + window.innerHeight)
	}

	getScrollOffset(amount) {
		return this.state.scrollTop * ((100 - amount) / -100)
	}

	getScrollOffsetY() {
		return this.getScrollOffset(this.props.verticalSpeed)
	}

	getScrollOffsetX() {
		return this.getScrollOffset(this.props.horizontalSpeed)
	}

	getRotation() {
		return this.state.scrollTop * this.props.rotation / 180
	}

	getStyle() {
		let { top, left, right, bottom, rotation } = this.props
		return {
			top: top && `calc(${ top } + ${ this.getScrollOffsetY() }px)`,
			left: left && `calc(${ left } + ${ this.getScrollOffsetX() }px)`,
			right: right && `calc(${ right } - ${ this.getScrollOffsetX() }px)`,
			bottom: bottom && `calc(${ bottom } - ${ this.getScrollOffsetY() }px)`,
			transform: `rotate(${ rotation * (this.getScrollOffsetY() / 100) }deg)`
		}
	}

	render() {
		return (
			<div 
				className={ `floating ${ this.props.className || '' }` }
				style={ this.getStyle() }
				ref={ ref => this.element = ref }
			>
				{ this.props.children }
			</div>
		)
	}
}

Floating.propTypes = {
	top: PropTypes.string,
	left: PropTypes.string,
	right: PropTypes.string,
	bottom: PropTypes.string,
	verticalSpeed: PropTypes.number,
	horizontalSpeed: PropTypes.number,
	rotation: PropTypes.number
}

Floating.defaultProps = {
	verticalSpeed: 0,
	horizontalSpeed: 100,
	rotation: 0
}