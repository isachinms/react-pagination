import React from 'react'

function Post(props) {
    return (
        <ul className="list-group">
            {
                props.posts.map(post => {
                    return (
                        <li key={post.id} className="list-group-item mb-3" style={{backgroundColor:"#FFB795"}}>
                            <h5 className="text-left mb-1">{post.title}</h5>
                            <p className="mb-1">{post.body}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Post