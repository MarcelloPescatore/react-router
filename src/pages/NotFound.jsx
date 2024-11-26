import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <>
            <h1>😢 Ooops, Page not found</h1>
            <Link to='/' className="btn btn-primary">
                Go to Homepage
            </Link>        
        </>
    )
}