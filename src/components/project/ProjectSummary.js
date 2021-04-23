import React from 'react';
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return (
        <div>
                <div className="card z-depth-0 project-summary">
                  <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by: {project.authorLastname} {project.authorFirstname}</p>
                    <div>Date: {moment(project.createdAt.toDate()).calendar()}</div>
                    <p className= 'grey-text'></p>
                </div>
            </div>
        </div>
    );
}

export default ProjectSummary;
