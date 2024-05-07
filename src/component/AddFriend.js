function AddFriend({addFriendData}) {

    let name = '';
    let src = '';
    const balance = "0";

    return (
        <div className={"add-friend-container"}>
            <div className={"add-friend-name"}>
                <p>👭 Friend Name</p>
                <input type="text" onChange={(e) => name = e.target.value}/>
            </div>
            <div className={"add-friend-image-url"}>
                <p>🌄 Image-URL</p>
                <input type="text" onChange={(e) => src = e.target.value}/>
            </div>
            <button className={"add-friend-button"} onClick={() => addFriendData(name, src, balance)} >ADD</button>
        </div>
    )
}

export default AddFriend;