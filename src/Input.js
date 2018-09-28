import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    const {success} = this.props;
    const contents = success ? (
      <span data-test="text-message">
        You have guess the word !!
      </span>
    ) : (
      <form className="form-inline">
        <input id="word-guess"
          data-test="input-box"
          className="m-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      
    );
    return (
      <div data-test="component-input"> 
        {contents}
      </div>
      
    );
  }
} 

Input.propTypes = {

};
function mapStateToProps({success}) {
  return{
    success
  };
};

export default connect(mapStateToProps,null)(Input);