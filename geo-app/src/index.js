import React from 'react';
import ReactDOM from 'react-dom';
import SeasonalDisplay from './SeasonalDisplay';

class App extends React.Component {
    state = {
        lat: null,
        errMessage: ''
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({
                lat: position.coords.latitude
            }),
            err => this.setState({
                errMessage: err.message
            })
        );
    }
    render(){
        if(this.state.errMessage && !this.state.lat){
            console.log('sadsds');
            return <div>Error: {this.state.errMessage}</div>;
        }
        if(!this.state.errMessage && this.state.lat){
            return <SeasonalDisplay lat={this.state.lat}/>;  
        }
        return <div>Loading</div>;  
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));