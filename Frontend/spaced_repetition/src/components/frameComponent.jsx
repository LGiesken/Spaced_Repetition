import React, { Component } from 'react';

import '../index.css';
import NameComponent from './nameComponent';

class FrameComponent extends React.Component {
    render() { 
        return <div>
                    <div className="frameComponent"> <NameComponent /> </div>
                    <div className="frameComponent"> <NameComponent /> </div>
                </div> 

        
    }
}
 
export default FrameComponent;