import React, { Component } from 'react'
import Item from './Item'

export default class GlasessItem extends Component {
    renderGlasess = () => {
       return this.props.Data.map((element,index)=>{
            return (
                <div key={element.id} className='col-1'>
                    <Item element={element} getDetailGlasess={this.props.getDetailGlasess}/>
                </div>
            )
        })
    }
    render() {
        // console.log(this.props.Data)
        return (
            <>
                {this.renderGlasess()}
            </>
        )
    }
}
