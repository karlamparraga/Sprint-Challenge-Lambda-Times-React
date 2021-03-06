import React from 'react';
import PropTypes from "prop-types";
import Tab from './Tab';

const Tabs = props => {
  const { selectedTab, selectTabHandler } = props
  // console.log(props)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, 
        create a new Tab component for each one.
        give the tab component a `selectTabHandler`, the `selectedTab`, 
        and the `tab` itself as props*/}
        {console.log("Tabs: ", props)}
        {props.tabs.map(tab => 
          //  console.log("tab", tab)
          // console.log('selectTabHandler', selectTabHandler)
          <Tab
            selectTabHandler={selectTabHandler}
            selectedTab={selectedTab}
            tab={tab}
            key={tab}
          />
        )}
      </div>
    </div>
  )
}

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
}

export default Tabs;
