import './App.css';
import Friends from "./component/Friends";
import AddFriend from "./component/AddFriend";
import {Fragment, useState} from "react";
import SplitBill from "./component/SplitBill";

function App() {

    const[friendData, setFriendData] = useState([]);
    const[toggleAddFriend, setToggleAddFriend] = useState(false)
    const[selectedFriend, setSelectedFriend] = useState("")

    function handleAddFriend() {
        setToggleAddFriend(!toggleAddFriend)
    }

    function addFriendData(name, src, balance) {
        setFriendData([...friendData, {
            name, src, balance
        }])
        handleAddFriend();
    }

    function handleSelectedFriend(name) {
        setSelectedFriend(name);
    }

    function updateBalance(name, balance) {
        setFriendData((friendData) => friendData.map((item) => item.name === name? {...item, balance: balance} : item))
    }

  return (
      <Fragment>
          <div className={'container'}>
              {
                  friendData.map((items) =>
                      <Friends src={items.src} name={items.name} balance={items.balance} selectedFriend={handleSelectedFriend} key={items.name}/>
                  )
              }

              {toggleAddFriend && <AddFriend addFriendData={addFriendData}/>}
              <button className={"add-friend"} style={friendData.length === 0 && !toggleAddFriend ? {alignSelf : 'center'} : {}} onClick={handleAddFriend}>{toggleAddFriend ? "Close" : "Add Friend"}</button>
          </div>

              {
                  friendData.map((items) =>
                          selectedFriend === items.name &&
                      <div className={"split-bill"} key={items.name}>
                          <SplitBill name={items.name} updateBalance={updateBalance} previousBalance={items.balance} key={items.name}/>
                      </div>
                  )
              }


      </Fragment>
  );
}

export default App;
