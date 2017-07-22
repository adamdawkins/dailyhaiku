import React from "react"
import PropTypes from "prop-types"
import Typekit from 'react-typekit'
import appleTouchIcon from './apple-touch-icon.png'
import favicon32x32 from './favicon-32x32.png'
import favicon16x16 from "./favicon-16x16.png"
import manifest from "./manifest.json"

const BUILD_TIME = new Date().getTime()

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
  }

  render() {
    let css
		let tracking
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require("!raw!../public/styles.css"),
          }}
        />
      )
			tracking = (
				<div
					dangerouslySetInnerHTML={{
						__html: require("!raw!./clicky.html"),
					}}
				/>
			)
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
						/>
						<Typekit kitId="vha4dvp" />
          {this.props.headComponents}
					<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}/>
					<link rel="icon" type="image/png" sizes="32x32" href={ favicon32x32 }/>
					<link rel="icon" type="image/png" sizes="16x16" href={ favicon16x16}/>
					<link rel="manifest" href={manifest}/>
					<meta name="theme-color" content="#ffffff"/ >
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
					{tracking}
        </body>
      </html>
    )
  }
}
