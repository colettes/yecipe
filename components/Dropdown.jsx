


export default function Dropdown(props) {

    function onClick(e) => 
    
    return (
    <div>
      {props.users.map((user) => (
        <button onClick={() => console.log("/" + user)}>{user}</button>
      ))}
    </div>
  );
}
