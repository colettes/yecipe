export default function Dropdown(props) {
    return (
        <div>
            {props.users.map((user) => (
                <button onClick={() => console.log('/' + user)}>{user}</button>
            ))}
        </div>
    );
}
