import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      picture: "",
      name: ""
    }
  }

  updatePicture(value) {
    // console.log("Value for picture on state", value)
    this.setState({picture: value});
  }

  updateName(value) {
    // console.log("Value for name on state", value)
    this.setState({name: value});
  }

  addFriend() {
    const {friends, picture, name} = this.state;

    let newFriends = friends.slice();
    newFriends.push({ picture, name });
    // console.log("Value of friends on state", newFriends);
    this.setState({friends: newFriends, picture: '', name: ''});
  }
 
  render() {
    const friends = this.state.friends.map((friend, index) => (
      <div key={`friend-${index}-${friend.name}`}>
        <img width="100px" src={friend.picture} alt={`This is ${friend.name}`} />
        <span>{friend.name}</span>
      </div>
    ));

    return (
      <div className="add-friend-container">
        
        <span>Picture:</span>
        <input onChange={(e) => this.updatePicture(e.target.value)} value={this.state.picture}/>
        <span>Friend:</span>
        <input onChange={(e) => this.updateName(e.target.value)} value={this.state.name}/>
        <button onClick={() => this.addFriend()}>Add a Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
