/*
 * @Description: 
 * @Author: mlzhang1
 * @Date: 2020-12-05 13:31:35
 * @LastEditTime: 2020-12-05 22:56:36
 * @LastEditors: mlzhang1
 * @email: 1163257974@qq.com
 */

import React, { Component } from "react";
import { Button, message, Tooltip } from 'antd';
import "antd/dist/antd.css";
import {SettingFilled} from '@ant-design/icons';
import './style/login.css';
import Axios from "axios";


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account: {
                userName: '',
                passWord: '',
            },
            status: false,
        }
    }

    setStates = (value) => {
        this.setState({
            account: value
        })
    }

    inputUsername = (val) => {
        const { value } = val.target;
        let temp = this.state.account;
        temp.userName = value;
        this.setStates(temp);
    }

    inputPwd = (val) => {
        const { value } = val.target;
        let temp = this.state.account;
        temp.passWord = value;
        this.setStates(temp);
    }

    onSubmit = () => {
        const { account } = this.state;
        if (account.userName && account.passWord) {
            Axios.post('/service/postLogin', account).then(({ data }) => {
                if (data.result === '1') {
                    this.props.history.push('/test');
                }
            })
        } else {
            message.error('用户名/密码不能为空');
        }
    }

    onClick =()=>{
        console.log('1111');
    }

    render() {
        return (
            <div className="body">
                <div className="dowebok">
                    <div className="logo"></div>
                    <div className="form-item">
                        <input id="username" type="text" autoComplete="off" placeholder="账号/邮箱" onChange={this.inputUsername} />
                        <p className="tip">请输入合法的账号/邮箱</p>
                    </div>
                    <div className="form-item">
                        <input id="password" type="password" autoComplete="off" placeholder="登录密码" onChange={this.inputPwd} />
                        <p className="tip">邮箱或密码不正确</p>
                    </div>
                    <div className="form-item">
                        <Button type="primary" loading={false} onClick={this.onSubmit}>登 录</Button>
                    </div>
                    <div className="reg-bar">
                        <a className="reg" href="/">申请账号</a>
                        <a className="forget" href="/">忘记密码</a>
                    </div>
                </div>
                <div className="operate">
                    <Tooltip title="编辑">
                        <SettingFilled onClick={this.onClick} style={{fontSize: 25}}/>
                    </Tooltip>
                </div>
            </div>
        )
    }
}