import React, { Component } from 'react'

export default class SidebarRight extends Component {
    render() {
        const { user } = this.props
        return (
            <div className='aside-right'>
                <div className='msg-menu'>
                    <h3><i className='fas fa-bell'></i><sup className='badge-notif'>1</sup></h3>
                    <h3><i className='fas fa-comment'></i></h3>
                    <h3><img src={'https://avatars1.githubusercontent.com/u/44439185?s=460&v=4'} alt='profile' width='24px' style={{borderRadius:'50%'}} /></h3>
                </div>
                <div className='user-list'>
                    <div className='user-online'>
                        <h5>Online</h5>
                        {
                            user.slice(0,5).map(u => (
                                <div className='user'>
                                    <img src={u.image} width='35px' height='100%' alt={u.nama} />
                                    <div className='user-detail'>
                                        <h4 style={{margin: 0}}>{u.nama}</h4>
                                        <h6 style={{margin: 0, marginTop: '5px', color: 'rgba(0,0,0,0.6)'}}>{u.city}</h6>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='user-offline'>
                        <h5>Offline</h5>
                        {
                            user.slice(5,10).map(u => (
                                <div className='user'>
                                    <img src={u.image} width='35px' height='100%' alt={u.nama} />
                                    <div className='user-detail'>
                                        <h4 style={{margin: 0}}>{u.nama}</h4>
                                        <h6 style={{margin: 0, marginTop: '5px', color: 'rgba(0,0,0,0.6)'}}>{u.city}</h6>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='aside-right-footer'>
                    <h4><span><i className='fas fa-search'></i></span>Search User...</h4>
                </div>
            </div>
        )
    }
}
