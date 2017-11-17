import React from 'react';
import {fetchCheeses} from '../actions/cheese';
import {connect} from 'react-redux';

export class CheeseList extends React.Component {  
  componentDidMount() {
    this.props.dispatch(fetchCheeses())
    }

  render() {
    const cheeses = this.props.cheeses.map((cheese, index) => {
      return <li key={index}>{cheese}</li>
    })

    return (
      <ul>
        {cheeses}
      </ul>)
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
})

export default connect(mapStateToProps)(CheeseList);