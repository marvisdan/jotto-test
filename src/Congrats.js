import React from 'react';
/** 
 * @function
 * @param {object} props - React props
 * @return {JSX.Element} - Render component (or null if success props is )
 */

export default (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-messsage">Congratulation ! Your guessed the word ! </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats" />
    );

  }
};
