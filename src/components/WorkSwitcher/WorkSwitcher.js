import React from 'react';
import PropTypes from 'prop-types';
import './WorkSwitcher.css';

const WorkSwitcher = () => (
  <div className="WorkSwitcher">
    <div className="developmentBox">
      Development
    </div>
    <div className="marketingBox">
      Marketing
    </div>
  </div>
);

WorkSwitcher.propTypes = {};

WorkSwitcher.defaultProps = {};

export default WorkSwitcher;
