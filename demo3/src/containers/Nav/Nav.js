import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
    render() {
        const refCallback = node => {
            // node在未渲染的时候是null，在渲染的时候是真实dom
            console.log(node)
        }
        return (
            <div className='flex nav'>
                <div className='flex-item nav-item'>
                    <Link to='/'>
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
                    <Link replace to = '/log'>
                    日志
                    </Link>
                </div>
                <div className='flex-item'>
                    <Link to='/other' innerRef={refCallback}>
                    其他
                    </Link>
                </div>
            </div>
        )
    }
}