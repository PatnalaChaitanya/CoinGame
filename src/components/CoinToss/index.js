// Write your code here
import {Component} from 'react'
import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  
  state = {count : 0, heads : 0, tails : 0, imgUrl: headImage}

  tossOnclick = () => {
    let result = Math.floor(Math.random() * 2)

    if (result === 0) {
      this.setState(prevState => ({count : prevState.count + 1, heads : prevState.heads + 1, imgUrl : headImage}))
    }else {
      this.setState(prevState => ({count : prevState.count + 1, tails : prevState.tails + 1, imgUrl : tailImage}))
    }
  }
      

  


  render() {
    const { count, heads, tails, imgUrl } = this.state 
    return (
      <div className="bg-container">
        <div className="coin-container">
          <h1 className="game-heading">Coin Toss Game</h1>
          <p className="game-content">Heads (or) Tails</p>
          <img src={imgUrl} className="coin-image" alt="toss result" />
          <button className="toss-button" type="button" onClick={this.tossOnclick}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {count} </p>
            <p className="count">Heads: {heads} </p>
            <p className="count">Tails: {tails} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
