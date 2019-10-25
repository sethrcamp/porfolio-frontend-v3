import React from 'react';

import SelectableList from "../SelectableList";
import Project from './Project';

import Requests from '../../requests';

import testData from '../../assets/test-data/projects';

export default class Projects extends React.Component {

    constructor() {
        super();

        this.state = {
            selectedProject: null,
            projects: testData.filter(project => !project.hidden)
        };

    }

    componentDidMount() {
        // Requests.getAllProjects((response) => {
        //     this.setState({
        //         projects: response.data.data,
        //         selectedProject: response.data.data[0]
        //     });
        // });
        this.setState({
            selectedProject: this.state.projects[0]
        });
    }

    setSelectedProject(project) {
        this.setState({
            selectedProject: project
        });
    }

    render() {
        return (
            <div className="projects">
                <SelectableList items={this.state.projects}
                                selectedItem={this.state.selectedProject}
                                setSelected={project => this.setSelectedProject(project)}
                />
                {
                    this.state.selectedProject != null &&
                    <Project project={this.state.selectedProject}/>
                }
            </div>
        );
    }
}