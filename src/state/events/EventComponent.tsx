export const EventComponent: React.FC = () => {
    return (
        <div>
            <input onChange={e => {
                console.log(e);
            }} />
        </div>
    )
}
