import React from 'react';

import PropTypes from 'prop-types';

export default class SelectableList extends React.Component {
    render() {
        return(
            <ul className="selectable-list">
                {
                    this.props.items.filter(item => !item.hidden).map((item, index) => {
                        return <li key={index}
                                   onClick={() => {
                                       this.props.setSelected(item);
                                   }}
                                   className={this.props.selectedItem == item ? "selected-item" : ""}
                        >
                            <a>
                                {item.name}
                            </a>
                        </li>
                    })
                }
            </ul>
        );
    }
}

SelectableList.propTypes = {
    items: PropTypes.array.isRequired,
    selectedItem: PropTypes.object,
    setSelected: PropTypes.func.isRequired
};