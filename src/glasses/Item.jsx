import React, { Component } from 'react'

export default class Item extends Component {
    
    render() {
        // console.log(this.props.element)
        return (
            <>
                <img className='img-fluid' src={this.props.element.url} alt="..." />
                <p>{this.props.element.name}</p>
                <button className="btn btn-success" onClick={() => {this.props.getDetailGlasess(this.props.element)}}>Try Me</button>
            </>
        )
    }
}
