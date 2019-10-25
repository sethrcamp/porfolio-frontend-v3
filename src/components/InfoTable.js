import React from 'react';

import PropTypes from 'prop-types';

export default class InfoTable extends React.Component {

    getList(items) {
        return items.map((item, index) => {
           if(item.link !== null) {
               return [" ", <a href={item.link} target="_blank">{item.name}</a>, index === items.length-1 ? "" : ","];
           }

           return " "+item.name+(index === items.length-1 ? "" : ",");
        });
    }

    render() {

        return(
            <table className="items">
                <tbody>
                    {
                        this.props.information.map((rowInfo, index) => {

                            if(rowInfo.items.length === 0)
                                return null;

                            return <tr key={index}>
                                       <td><h3>{rowInfo.title}:</h3></td>
                                       <td><p>{this.getList(rowInfo.items)}</p></td>
                                   </tr>
                        })
                    }
                </tbody>
            </table>
        );
    }
}

InfoTable.propTypes = {
    information: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            link: PropTypes.string
        })).isRequired
    })).isRequired
};