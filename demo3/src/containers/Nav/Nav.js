import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
    render() {
        return (
          <div className='flex nav'>
            <div className='flex-item nav-item'>
                <Link to='/home'>
                主页
                </Link>
            </div>
            <div className='flex-item'>
                <Link to={
                    {
                        pathname: '/content',
                        search: 'hello',
                        hash: 'world',
                        state: {
                            name: '测试员1'
                        }
                    }
                }>
                内容
                </Link>
            </div>
            <div className='flex-item'>
                <Link to='/log'>
                日志
                </Link>
            </div>
            <div className='flex-item'>
                <Link to='/other'>
                其他
                </Link>
            </div>
          </div>
        )
    }
}