//this is the start of my NavBar//
import React from 'react'


// this is the start of my NavBar class//
class NavBar extends Component {
    
    
    render() {
        return(
            <div style= {{
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
                <div className = 'container-mid' style = {{padding : '0'}}>
                
                </div>

            </div>
        );
    }
}   

