import React, { Component } from 'react'
import Data from "../Data/dataGlasses.json"
import Style from "../glasses/style.css"
import GlasessItem from './GlasessItem'
import ModelGlasess from './ModelGlasess'
export default class Glasess extends Component {
    state = {
        Detail: Data[2]
    }

    getDetailGlasess = (glasess) => {
        this.setState = ({
            Detail: glasess,
        })
    }
    render() {
        // console.log(Data)
        // console.log(this.state.Detail)
        return (
            <>
                <div className='background'>
                    <div className='imgModelGlasess'>
                        <ModelGlasess Detail={this.state.Detail}/>
                    </div>
                    <div className='content row'>
                        <GlasessItem Data={Data} getDetailGlasess={this.getDetailGlasess}/>
                    </div>
                </div>

            </>
        )
    }
}
