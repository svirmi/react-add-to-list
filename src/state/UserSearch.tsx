import { useState } from "react";

const users = [
    { name: 'Bob', age: 22 },
    { name: 'Marley', age: 55 },
    { name: 'Chuck', age: 31 },
    { name: 'Alice', age: 32 },
];

const UserSearch: React.FC = () => {

    const [name, setName] = useState('');
    const [user,setUser] = useState<{name: string, age: number} | undefined>();
    
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });

        setUser(foundUser);
    }

    return <div>
        <h3>User Search</h3>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>
}

export default UserSearch;