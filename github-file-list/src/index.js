import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'
import registerServiceWorker from './registerServiceWorker';

const FileList = ({ files }) => (
    <table className="file-list">
        <tbody>
        {files.map(file => (
            <React.Fragment>
                <FileListItem key={file.id} file={file} />
            </React.Fragment>
        ))}
        </tbody>
    </table>
);

FileList.propTypes = {
    files: PropTypes.array
};

const FileListItem = ({ file }) => (
    <tr className="file-list-item">
        <FileName file={file}/>
    </tr>
);
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};

const FileIcon = ({ file }) => {
    let icon = 'fa-file-text-o';
    if(file.type === 'folder') {
        icon = 'fa-folder';
    }
    return(
      <td className="file-icon">
        <i className={`fa ${icon}`}/>
      </td>
    );
};

FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};

const FileName = ({ file }) => {
    return(
        <React.Fragment>
            <FileIcon className="file-icon" file={file} />
            <td className="file-name">{file.name}</td>
        </React.Fragment>
    );
}

FileName.propTypes = {
    file: PropTypes.object.isRequired
};

const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
        message: 'Initial commit'
        }
    },
    
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
        message: 'Initial commit'
        }
    },
    
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        latestCommit: {
        message: 'Added a readme'
        }
    }
];

ReactDOM.render(<FileList files={testFiles}/>, document.getElementById('root'));
registerServiceWorker();
