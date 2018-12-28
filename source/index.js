import React, { PureComponent, StrictMode } from 'react'
import withForwardedRef from 'react-with-forwarded-ref'

export class ImageZoom extends PureComponent {
  render() {
    const { forwardedRef } = this.props

    return (
      <StrictMode>
        <div ref={forwardedRef}>Hello, world!</div>
      </StrictMode>
    )
  }
}

export default withForwardedRef(ImageZoom)
