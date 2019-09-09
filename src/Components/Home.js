import React, { Component } from 'react'
import seed from './api/seed'
import user from './api/user'
import Sidebar from './Sidebar'
import SidebarRight from './SidebarRight'
import './styles/App.css'

export default class Home extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Sidebar />
                <div className='root-content'>
                    <div className='root-container'>
                        <div className='search-top'>
                            <h3>Search...</h3>
                            <hr className='search-border' />
                        </div>
                        <div className='content'>
                            <div className='content-title'>
                                <h1>Recommended</h1>
                                <div className='content-subtitle'>
                                    <h5>Get better recomendation <span>defining your taste</span></h5>
                                    <div className='content-select'>
                                        <h5 className='movies'>Movies</h5>
                                        <h5 className='series'>Series</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='root-film'>
                                <div className='container'>
                                    <div className='film-list'>
                                        {seed.map(s => (
                                            <div className='film'>
                                                <img className='image' src={s.image} alt={s.title} />
                                                <h4>{s.title}</h4>
                                                <h6>Drama, Comedy</h6>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SidebarRight user={user} />
                </div>
            </div>
        )
    }
}
