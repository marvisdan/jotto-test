import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    return (
      <div>
        <button></button>
      </div>
    );
  }
}

Input.propTypes = {

};
function mapStateToProps(state) {
  return{

  };
};

export default connect(mapStateToProps,null)(Input);