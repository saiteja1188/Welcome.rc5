// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onButton = () => {
    this.setState(prevState => {
      console.log(`prev state ${!prevState.isSubscribe}`)
      return {isSubscribe: !prevState.isSubscribe}
    })
  }

  getButtonText = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learing</p>
        <button type="button" className="button" onClick={this.onButton}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
