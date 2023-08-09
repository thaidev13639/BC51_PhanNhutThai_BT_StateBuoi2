import React, { Component } from 'react'

export default class ModelGlasess extends Component {
    
    render() {
        // console.log(this.props.Detail)
        const {id,price,name,url,desc} = this.props.Detail;
        return (
            <>
                <div className='imgModel model1'>
                    <img className='img-fluid' src="./glassesImage/model.jpg" alt="..." />
                    <div className='test'>
                        <h3>{name}</h3>
                        <h6>{price} $</h6>
                        <p>{desc}</p>
                    </div>
                    <div className='glasessModel'>
                        <img className='img-fluid' src={url} alt="" />
                    </div>
                </div>
                <div className='imgModel model2'>
                    <img className='img-fluid' src="./glassesImage/model.jpg" alt="..." />
                    <div className='glasessModel'>
                        <img className='img-fluid' src={url} alt="" />
                    </div>
                </div>
            </>
        )
    }
}
