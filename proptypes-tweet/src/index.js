import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types'
import './index.css';

const testTweet = {
    message: "Feels bad man.",
    gravatar: "asuka.jpg",
    author: {
        handle: "bdd-yang-ggez",
        name: "Ricky Yang"
    },
    likes: 6,
    retweets: 4,
    timestamp: "2018-06-30 21:24:37"
};

function Tweet({ tweet }) {
    return(
        <div className="tweet">
            <Avatar avatar={tweet.gravatar}/>
            <div className="content">
                <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton count={tweet.retweets}/>
                    <LikeButton count={tweet.likes}/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    );
}

function Avatar( {avatar} ) {
    return(
        <img  src={avatar}
            className="avatar"
            alt="avatar" />
    );
}

function Message( {text} ) {
    return(
        <div className="message">
            {text}
        </div>
    );
}

function NameWithHandle( {author} ) {
    return(
        <span className="name-with-handle">
            <span className="name">{author.name}</span>
            <span className="handle">{author.handle}</span>
        </span>
    );
}

const Time = ( {time} ) => {
    const timeString = moment(time).fromNow();
    return(
        <span className="time">{timeString}</span>
    )
};

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

function getRetweetCount(count) {
    if(count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    } else {
        return null;
    }
}

const RetweetButton = ( {count} ) => (
    <span className="retweet-button">
        <i className="fa fa-retweet"/>
        {getRetweetCount(count)}
    </span>
);

const LikeButton = ( {count} ) => (
    <span className="like-button">
    <i className="fa fa-heart"/>
        {count > 0 &&
        <span className="like-count">
        {count}
      </span>}
  </span>
);

Tweet.propTypes = {
    tweet: PropTypes.shape({
        message: PropTypes.string,
        gravatar: PropTypes.string,
        author: PropTypes.shape({
            handle: PropTypes.string,
            name: PropTypes.string
        }),
        like: PropTypes.number,
        retweets: PropTypes.number,
        timestamp: PropTypes.string
    })
};

Avatar.propTypes = {
    avatar: PropTypes.string
};

Message.propTypes = {
    text: PropTypes.string
};

NameWithHandle.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
};

Time.propTypes = {
    time: PropTypes.string
};

RetweetButton.propTypes = {
    count: PropTypes.number
};

LikeButton.propTypes = {
    count: PropTypes.number
};

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));
