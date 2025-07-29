import { Link } from "react-router-dom"

function CharacterSummary({post}) {
    return (
        <>
                <div className="summary-scroll">
                    <div className="summary-text">
                        <Link to={`/details/${post.charid}`}>
                            <h2>{post.name}</h2>
                        </Link>
                        <p>Class: {post.class}</p>
                        <p>Level: {post.level}</p>
                        <Link to={`/edit/${post.charid}`}>
                            <div className="button"> Edit </div>
                        </Link>

                    </div>
                </div>
        </>
        
        
    )
}

export default CharacterSummary