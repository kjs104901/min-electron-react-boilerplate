import React, {Component}  from 'react'

import './Logo.css'

export default class Logo extends Component {
    render() {
        return <img src={this.props.src} className='Logo'/>
    }
}
