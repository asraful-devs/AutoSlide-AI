import { useParams } from 'react-router-dom';

const Project = () => {
    const { projectId } = useParams();

    return (
        <div>
            <h1>Project Page {projectId}</h1>
        </div>
    );
};

export default Project;
