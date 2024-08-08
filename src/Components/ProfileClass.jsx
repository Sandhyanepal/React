// First constructor is called, then render, and then componentDidMount.

import React from 'react'

class ProfileClass extends React.Component {

    constructor(props) {
        super(props);

        // Create State
        this.state = {
            count: 0,
            count2: 0,
            userInfo: {
                name: "DEV",
                location: "Bangloru"
            },
        };
    }

    async componentDidMount() {
        // Best place to make API Calls

        const data = await fetch(" https://api.github.com/users/sandhyanepal");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
    }

    render() {

        const { count2 } = this.state; //destructuring
        // const { name, location } = this.state.userInfo;
        return (
            <>
                <h1>Profile Class Component</h1>
                <h2>{this.props.name}</h2>
                <h2>Count: {this.state.count}</h2>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Loaction: {this.state.userInfo.location}</h2>
                {/* <h2>Name: {name}</h2>
                <h2>Loaction: {location}</h2> */}
                <button onClick={() => {
                    // WE DO NOT MUTATE STATE DIRECTLY
                    this.setState({
                        count: 1,
                    })
                }}>Count</button>

                <h2>Count2: {count2}</h2>
            </>
        )
    }
}

export default ProfileClass;
