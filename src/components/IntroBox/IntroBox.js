import React from 'react';
import PropTypes from 'prop-types';
import './IntroBox.css';
import WorkSwitcher from '../WorkSwitcher/WorkSwitcher';

const IntroBox = () => (
  <div className="IntroBox">
    <div className="MainDiv">
      <h1 className="nameHeader">ERIC REES</h1>
      <h1 className="workHeader">DEVELOPMENT</h1>
      <WorkSwitcher />
    </div>
  </div>
);

IntroBox.propTypes = {};

IntroBox.defaultProps = {};

export default IntroBox;
