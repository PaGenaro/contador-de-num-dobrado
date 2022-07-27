import React, {Component} from 'react';

export default class Msg extends Component{

  state={
    count:2
  }

Add = ()=>{
  this.setState({
    count: this.state.count *2
  })
}

render() {
return(
  <div>
<h1>Dobre o valor!</h1>
<p>{this.state.count}</p>
<button onClick={this.Add}>Dobre</button>
</div>
)
}
}

