import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
    return (
        <div className="panel panel-success">
            <div className="panel-heading">
                Post
          </div>
            <div className="panel-body">
                <div className="jumbotron">
                    <h2>Post Page</h2>
                </div>
                <h3>Javascript</h3>
                <Link>Details</Link>
                <h3>Nodejs</h3>
                <Link>Details</Link>
                <h3>ReactJs</h3>
                <Link>Details</Link>
                <h3>AngularJs</h3>
                <Link>Details</Link>
            </div>
        </div>
    )
}

export default Post;