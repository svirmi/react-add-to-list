import { useState } from "react";

const users = [
    { name: 'Bob', age: 22 },
    { name: 'Marley', age: 55 },
    { name: 'Chuck', age: 31 },
    { name: 'Alice', age: 32 },
];

const UserSearch: React.FC = () => {

    const [name, setName] = useState('');
    
    const onClick = () => {}

    return <div>
        <h3>User Search</h3>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button>Find User</button>
    </div>
}

export default UserSearch;