import { FormControl } from 'react-bootstrap';


export default function Filter({ search,setSearch }) {
    
    return (
        <div>
            <FormControl type="text" placeholder="enter your text ..."
                value={search}
                onChange={(event) => setSearch(event.target.value)} 
            />
        </div>
    )
}