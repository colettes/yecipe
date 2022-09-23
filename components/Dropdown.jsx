export default function Dropdown(props) {
    return (
        <div>
            <select
                name="userList"
                id="userList"
                onChange={(e) => console.log(userList.value)}
            >
                {props.users.map((user) => (
                    <option value={user}>{user}</option>
                ))}
            </select>

            {/* {props.users.map((user) => (
                <button onClick={() => console.log('/' + user)}>{user}</button>
            ))} */}
        </div>
    );
}
