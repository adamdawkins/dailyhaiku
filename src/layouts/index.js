import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import logo from '../../static/logo.png';

import "../css/typography.css"

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div style={{ padding: '1vh 5vw' }}>
        <Helmet
          title="Adam's Daily Haiku"
        />
				<div style={{fontFamily: 'henriette'}}>
				<Link to='/' className="logo">
					<img src={logo} alt="俳句" style={{height: '1em', marginBottom: '-0.2em', marginRight: '.2em' }}/> Adam's Daily Haiku
				</Link>
				</div>
        <div>
          {this.props.children()}
        </div>
		 </div>
    )
  }
}
