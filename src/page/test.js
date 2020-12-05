/*
 * @Description: 
 * @Author: mlzhang1
 * @Date: 2020-12-05 12:31:41
 * @LastEditTime: 2020-12-05 13:22:03
 * @LastEditors: mlzhang1
 * @email: 1163257974@qq.com
 */
import Axios from 'axios';
import React, { Component } from 'react';

export default class Test extends Component{

    componentDidMount(){
        Axios.get('/service/login/getUser').then(({data}) => {
            console.log(data);
        })
    }

    render() {
        return (
            <div>
                <h1>Hello,Route~Hello,Route~Hello,Route~Hello,Route~</h1>
            </div>
        );
    }
}