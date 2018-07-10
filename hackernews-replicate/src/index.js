import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const testPosts = [
    {
        id: 1,
        title: 'Why I\'m suing the US government',
        source: 'bunniesstudios.com',
        points: 1346,
        timeStamp: '2018-7-11 21:24:00',
        author: 'ivank',
        commentCount: 257
    },
    {
        id: 2,
        title: 'Zenzizenzizenzic',
        source: 'wikipedia.org',
        point: 140,
        timeStamp: '2018-7-11 20:23:00',
        author: 'vinchuo',
        commentCount: 40
    },
    {
        id: 3,
        title: 'A practical security guide for web developers',
        source: 'github.com',
        points: 72,
        timeStamp: '2018-7-11 20:05:00',
        author: 'zianwar',
        commentCount: 6
    }
];

const PostList = ({ posts }) => {
    return(
        <table className="post-list">
            <tbody>
            {posts.map(post => (
                <td key={post.id}>
                    {post.title}
                </td>
            ))}
            </tbody>
        </table>
    )
};

ReactDOM.render(<PostList posts={testPosts} />, document.getElementById('root'));
registerServiceWorker();
