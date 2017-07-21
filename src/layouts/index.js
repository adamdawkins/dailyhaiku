import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import "../css/typography.css"

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div style={{ padding: '1vh 5vh' }}>
        <Helmet
          title="Adam's Daily Haiku"
        />
				<div style={{fontFamily: 'henriette'}}>
				<Link to='/'>
				Adam's Daily Haiku
				</Link>
				</div>
        <div>
          {this.props.children()}
        </div>
		 </div>
    )
  }
}
