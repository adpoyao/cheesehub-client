import React from 'react';
import {fetchCheeses} from '../actions/cheese';
import CheeseAddForm from './cheese-add-form';
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
      <div>
        <ul>
          {cheeses}
        </ul>
        <CheeseAddForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
})

export default connect(mapStateToProps)(CheeseList);