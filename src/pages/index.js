import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  render() {
    return (
      <div className="haiku">
			<p>
				Let me hold your hand<br />
				If I sleep, will you <span className="nbsp">leave me?</span><br />
				Baby's bed time fear.<br />
			</p>

      </div>
    )
  }
}
