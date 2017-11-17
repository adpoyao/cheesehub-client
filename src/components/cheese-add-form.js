import React from  'react';
import store from '../store';
import {addCheese} from '../actions/cheese';

export default class CheeseAddForm extends React.Component {
    handleAddCheese(event) {
        event.preventDefault();
        let cheese = {cheese: this.input.value}
        store.dispatch(addCheese(cheese))
        this.input.value = '';
    }

    render() {
        return (
            <form onSubmit={e => this.handleAddCheese(e)}>
                <label htmlFor="addCheeseField">Add cheese: </label>
                <input 
                    type="text" 
                    name="addCheeseField" 
                    id="addCheeseField" 
                    className="text" 
                    ref={input => this.input = input}
                    placeholder="Enter your cheese" />
                <input 
                    type="submit" 
                    id="addCheeseButton"
                    className="button"
                    name="submit"
                    value="Add" />
            </form>
            )
    }
}