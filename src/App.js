import React from 'react'
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            long:null,
            errorMessage: '',
            loading: true
        }
        const location =  window.navigator.geolocation.getCurrentPosition(
            position => {this.setState({lat:position.coords.latitude})
            this.setState({long:position.coords.longitude})
        },
            err => {this.setState({errorMessage:err.message})}
        );
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            err => this.setState({errorMessage:err.message})
        );
    }
    componentDidUpdate() {
        console.log('my component was just updated - it rerendered!')
    }
    componentWillUnmount() {
        console.log('my component was just removed from the screen')
    }
    render () {

    if(this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat} />
    }

    return <div>Loading...</div>
}
}

export default App
