//this is the start of my NavBar//
import React, {Component} from 'react'
//import profilePhoto from '../components/me.png';
//import search from '../components/search.png';

// this is the start of my NavBar class//
class NavBar extends Component {


    render() {
        return (
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'gray',
                boxShadow: '0 1px 1px blue',
                top: '0',
                height: 'auto',
                position: 'fixed',
                zIndex: 1
            }}>
                <div className='container-mid' style={{ padding: '0' }}>
                    <div className="navigate">
                        <ul>
                            <li clasName='link align-middle'><span><i className="fas fa-home" style={{ fontSize: '20px', marginRight: '10px' }}></i></span>Home</li>
                            <li className='link align-middle'><span><i className="fas fa-bolt" style={{ fontSize: '20px', marginRight: '10px' }}></i></span>Moments</li>
                            <li className='link align-middle'><span><i className="far fa-bell" style={{ fontSize: '20px', marginRight: '10px' }}></i></span>Notifications</li>
                            <li className='link align-middle'><span><i className="far fa-envelope" style={{ fontSize: '20px', marginRight: '10px' }}></i></span>Messages</li>

                            <li className='bird'>
                                <i className="fab fa-earlybirds" style={{ fontSize: '25px', color: '#e67e22', marginLeft: 'auto', marginRight: 'auto', cursor: 'pointer' }}></i>
                            </li>
                            <li style={{ marginRight: '10px' }}><form><input style={{
                                backgroundColor: '#f5f8fa',
                                borderRadius: '21px',
                                border: '1px solid #e6ecf0',
                                boxSizing: 'border-box',
                                color: '#14171a',
                                display: 'block',
                                fontSize: '12px',
                                height: '32px',
                                lineHeight: '16px',
                                padding: '8px 100px 8px 12px',
                                transition: 'all .2s ease-in-out',
                                width: '250px',
                                marginLeft: '50px',
                                marginRight: '10px',
                               
                            }} placeholder="Search Chirper" /></form>

                            </li>
                            <li>
                                
                            </li>
                            <li><button style={{
                                fontSize: '0.8em',
                                border: '0',
                                background: '#e67e22',
                                color: '#fff',
                                padding: '6px 16px',
                                cursor: 'pointer',
                                borderRadius: '100px',
                                marginRight: '10px'
                            }}>Chirp</button></li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default NavBar