import React from 'react';
import PropTypes from 'prop-types';

/** 
 * @function
 * @param {object} props - React props
 * @return {JSX.Element} - Render component (or null if success props is )
 */

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">Congratulation ! Your guessed the word ! </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats" />
    );

  }
};

Congrats.propTypes = {
 success: PropTypes.bool.isRequired,
}

export default Congrats;

