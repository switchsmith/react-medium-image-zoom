import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ImageZoom from '../../lib'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <ImageZoom
            image={{
              src: 'bridge.jpg',
              alt: 'Golden Gate Bridge',
              className: 'img',
              style: { width: '20%' }
            }}
            zoomImage={{
              src: 'bridge-big.jpg',
              alt: 'Golden Gate Bridge',
              className: 'img--zoomed'
            }}
          />
        </div>
      </div>
    )
  }
}

const container = document.querySelector('[data-app]')
ReactDOM.render(<App />, container)
