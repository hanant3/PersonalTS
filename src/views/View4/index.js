import React, { Component } from 'react';
import './view4.css';
import LineChart from '../../charts/LineChart';

export default class View4 extends Component {
    render() {
        const {user} = this.props,
              width = 1100,
              height = 250;
        return (
            <div id='view4' className='pane' >
                <div className='header'>TIME-SERIES ANALYSIS</div>
                    <LineChart data={user} width={width} height={height} xLabel="X-axis Label" yLabel="Y-axis Label"/>
                </div>
            </div>
        )
    }
}