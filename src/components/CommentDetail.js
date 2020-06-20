import React from 'react';

const CommentDetail = (props) => {
	const { author, timePost, avatarImg, text } = props;
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={avatarImg} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{author}
				</a>
				<div className="metadata">
					<span className="date">{timePost}</span>
				</div>
				<div className="text">{text}</div>
			</div>
			<div className="actions">
				<a href="/" className="reply">
					Reply
				</a>
			</div>
		</div>
	);
};

export default CommentDetail;
