import React from 'react';
import ReactDOM from 'react-dom';
import Time from './time';
import PropTypes from 'prop-types';
import logo from './logo.gif'
import votearrow from './WX20180715-011210@2x.png';
import './index.css';
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
    },
    {
        id: 4,
        title: 'I got arrested in Kazakhstan and represented myself in court',
        source: 'medium.com',
        points: 72,
        timeStamp: '2018-7-12 20:46:00',
        author: 'drpp',
        commentCount: 79
    },
    {
        id: 5,
        title: 'Sculpture of Housing Prices Ripping San Fransico Apart',
        source: 'dougmccune.com',
        points: 254,
        timeStamp: '2018-7-12 19:45:00',
        author: 'dougmccune',
        commentCount: 149
    }
];

const Header = () => {
    return(
        <table className="header" width="100%">
            <tbody>
                <tr>
                    <td className="logo-image">
                        <a href="https://new.ycombinator.com">
                            <img className="logo-image"
                                 src={logo}
                                 width={18}
                                 height={18}
                                 alt="HackerNews Logo"/>
                        </a>
                    </td>
                    <td>
                        <b>
                            Hacker News
                        </b>
                    </td>
                    <td>
                        <span>newest</span>
                        <span> | </span>
                        <span>comments</span>
                        <span> | </span>
                        <span> show </span>
                        <span> | </span>
                        <span> ask </span>
                        <span> | </span>
                        <span> jobs </span>
                        <span> | </span>
                        <span> submit  </span>
                    </td>
                    <td className="log-in">
                        <span>log in</span>
                    </td>
                </tr>
               
            </tbody>
        </table>
    )
};

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
            <PostInfo className="post-info" post={post}/>
        </td>
    </tr>
);
PostListItem.propTypes = {
    post: PropTypes.object.isRequired
};

const PostInfo = ({ post }) => {
    return(
        <tbody>
            <tr className="post-title">
                <td>
                    <span className="post-number">{post.id + '.'}</span>
                    <span>
                        <img className="votearrow" src={votearrow} alt="votearrow"/>
                    </span>
                    <span>{post.title}</span>
                </td>
            </tr>
            <tr className="post-subtext">
                <td>
                    <span className="points">{post.points + ' points'}</span>
                    <span className="author">{' by ' + post.author + ' '}</span>
                    <span className="time"><Time time={post.timeStamp} /></span>
                    <span className="separator"> | </span>
                    <span className="hide-button">hide</span>
                    <span className="separator"> | </span>
                    <span className="comment-count">{post.commentCount + ' comments'}</span>
                </td>
            </tr>
        </tbody>
    )
};
PostInfo.propTypes = {
    post: PropTypes.object.isRequired
};

ReactDOM.render(
    <div>
        <Header/>
        <div className="posts">
            <PostList posts={testPosts} />
        </div>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
