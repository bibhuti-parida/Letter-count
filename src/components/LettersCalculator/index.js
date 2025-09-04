// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    typed: '',
  }

  onTyping = event => {
    this.setState({typed: event.target.value})
  }

  render() {
    const {typed} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="left-container">
            <h1 className="title">Calculate the Letters you enter</h1>

            <label htmlFor="phraseInput" className="label">
              Enter the phrase
            </label>
            <input
              id="phraseInput"
              type="text"
              className="input"
              placeholder="Enter the Phrase"
              value={typed}
              onChange={this.onTyping}
            />

            {/* Count below input */}
            <p className="count-text">No.of letters: {typed.length}</p>
          </div>

          <div className="right-container">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
