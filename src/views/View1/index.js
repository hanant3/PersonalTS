import React, { Component } from 'react';
import { Avatar } from 'antd';
import './view1.css';

export default class View1 extends Component {
    render() {
        let {user} = this.props;
        if (user === null) {
            user = {
                name: 'null',
                gender: 'null',
                age: 'null',
            }
        }
        return (
            <div id='view1' className='pane'>
                <div className='header'>USER-DATA</div>
                <div>
                    <div className={'info-view'}>
                        <div>gender: {user.gender}</div>
                        <div>age: {user.age}</div>
                    </div>
                </div>
            </div>
        )
    }
}
