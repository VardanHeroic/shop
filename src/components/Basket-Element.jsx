import { Component } from 'react'


export default class Element extends Component {
	render() {
		return(
			<div className="element">
				<div className="info">
					<img src={require('../../public/img/'+this.props.img)} alt=""/>
					<span>{this.props.name}</span>
					<input type="number" name="" id="" min={1} defaultValue={1} onChange={e => this.props.changePrice(this.props.id,e.target.value * this.props.price) } />
				</div>
				<div className="price">
					<span>{this.props.basketPrice}</span>
					<button className="close"  onClick={(e) => {this.props.removeElement(this.props.id)}} >X</button>
				</div>
			</div>
		)
	}
}


