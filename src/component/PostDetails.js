import React from 'react';
import { Link } from 'react-router-dom';

const PostDetails = (props) => {
    console.log(props.match.params.topic);
    return (
        <div className="panel panel-success">
            <div className="panel-heading">Profile</div>
            <div className="panel-body">
                <div className="jumbotron">
                    <h2>PostDetails of {props.match.params.topic}</h2>
                    <p>A post office is a public facility that provides mail services, including accepting of letters and parcels, providing post office boxes, and selling postage stamps, packaging, and stationery.</p>
                </div>
                <Link to="/post" className="btn btn-danger">Back</Link>
            </div>
        </div>
    )
}

export default PostDetails;
