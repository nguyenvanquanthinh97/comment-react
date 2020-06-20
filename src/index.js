import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import moment from 'moment';

import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
	return (
		<div className="ui comments container">
			<ApprovalCard>
				<div>
					Are you sure you want it ?
				</div>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Sam"
					timePost={moment().format('YYYY-MM-DD HH:mm')}
					avatarImg={faker.image.avatar()}
					text={faker.lorem.text()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Alex"
					timePost={moment().subtract(1, 'hour').format('YYYY-MM-DD HH:mm')}
					avatarImg={faker.image.avatar()}
					text={faker.lorem.text()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Jane"
					timePost={moment().subtract(2, 'hour').format('YYYY-MM-DD HH:mm')}
					avatarImg={faker.image.avatar()}
					text={faker.lorem.text()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
