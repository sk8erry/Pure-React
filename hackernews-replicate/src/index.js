import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Time from './time';
import PropTypes from 'prop-types';
import registerServiceWorker from './registerServiceWorker';

const testPosts = [
    {
        id: 1,
        title: 'Why I\'m suing the US government',
        source: 'bunniesstudios.com',
        points: 1346,
        timeStamp: '2018-7-12 21:24:00',
        author: 'ivank',
        commentCount: 257
    },
    {
        id: 2,
        title: 'Zenzizenzizenzic',
        source: 'wikipedia.org',
        points: 140,
        timeStamp: '2018-7-12 20:23:00',
        author: 'vinchuo',
        commentCount: 40
    },
    {
        id: 3,
        title: 'A practical security guide for web developers',
        source: 'github.com',
        points: 72,
        timeStamp: '2018-7-12 20:05:00',
        author: 'zianwar',
        commentCount: 6
    }
];

const PostList = ({ posts }) => {
    return(
        <table className="post-list">
            <tbody>
            {posts.map(post => (
                <PostListItem key={post.id} post={post}/>
            ))}
            </tbody>
        </table>
    )
};
PostList.propTypes = {
    posts: PropTypes.array
};

const PostListItem = ({ post }) => (
    <tr>
        <td>
            <PostInfo className="post-list-iten" post={post}/>
        </td>
    </tr>
);
PostListItem.propTypes = {
    post: PropTypes.object.isRequired
};

const PostInfo = ({ post }) => {
    return(
        <tbody className="post">
            <tr className="post-title">
                <td>{post.title}</td>
            </tr>
            <tr className="post-subtext">
                <span className="points">{post.points + ' points'}</span>
                <span className="author">{' by ' + post.author + ' '}</span>
                <span className="time"><Time time={post.timeStamp} /></span>
                <span className="separator"> | </span>
                <span className="hide-button">hide</span>
                <span className="separator"> | </span>
                <span className="comment-count">{post.commentCount + 'comments'}</span>
            </tr>
        </tbody>
    )
};
PostInfo.propTypes = {
    post: PropTypes.object.isRequired
};

ReactDOM.render(<PostList posts={testPosts} />, document.getElementById('root'));
registerServiceWorker();
