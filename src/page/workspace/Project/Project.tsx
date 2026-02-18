import { useParams } from 'react-router-dom';

const Project = () => {
    const { projectId } = useParams();

    return (
        <div>
            Project Page -{' '}
            {projectId ? `Project ID: ${projectId}` : 'No Project ID provided'}
        </div>
    );
};

export default Project;
