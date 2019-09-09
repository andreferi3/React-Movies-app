import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
    render() {
        return (
            <aside className='side-left'>
                <div className='logo'>
                    <h1><Link to='/'>Movies Box</Link></h1>
                </div>
                <div className='aside-mainmenu'>
                    <div className='aside-subtitle'>
                        <h5>Main</h5>
                    </div>
                    <div className='aside-list-menu'>
                        <h4><Link><span className='aside-left-icon'><i className='fas fa-layer-group'></i></span>Genres</Link><span className='badge-soon'>soon</span></h4>
                        <h4><Link><span className='aside-left-icon'><i className='fas fa-film'></i></span>Categories</Link></h4>
                        <h4><Link><span className='aside-left-icon'><i className='fas fa-check'></i></span>Recomended</Link><span className='badge-soon'>soon</span></h4>
                        <h4><Link><span className='aside-left-icon'><i className='fas fa-fire'></i></span> Hot Now</Link><span className='badge-soon'>soon</span></h4>
                        <h4><Link><span className='aside-left-icon'><i className='fas fa-folder-plus'></i></span>New Release</Link><span className='badge-soon'>soon</span></h4>
                    </div>
                </div>
                <div className='aside-user'>
                    <div className='aside-subtitle'>
                        <h5>Admin</h5>
                    </div>
                    <div className='aside-list-menu'>
                        <h4><Link><span className='aside-left-icon'><i className='fas fa-plus-circle'></i></span>Add New Movies</Link></h4>
                        <h4><Link><span className='aside-left-icon'><i className='fas fa-pencil-alt'></i></span>Edit Movies</Link></h4>
                    </div>
                </div>
            </aside>
        )
    }
}
