function Friends({src, name, balance, selectedFriend}) {

    return (
        <div className={'friend'}>
            <div className={'person-details'}>
                <img src={src} alt=""/>
                <div className={'details'}>
                    <p>{name}</p>
                    <p className={'balance'} style={balance === '0'? {color: 'black'} : balance > 0? {color: 'green'} : {color: 'red'}} >{balance === "0"? `You and ${name} are even` : balance > 0? `${name} ows you ₹${Math.abs(balance)}` : `You owe ${name} ₹${Math.abs(balance)}`}</p>
                </div>
            </div>
            <button onClick={() => selectedFriend(name)}>Select</button>
        </div>
    )
}

export default Friends;