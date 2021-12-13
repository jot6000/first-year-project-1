import { useParams } from "react-router-dom"

export default function Profile(props){
    const {id} = useParams()
    return(
        <h1>
            The ID is: {id}
        </h1>
    )
}