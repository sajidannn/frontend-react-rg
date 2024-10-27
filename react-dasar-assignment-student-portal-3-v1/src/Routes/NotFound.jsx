import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>404 | Not Found</h1>
      <button data-testid="back" onClick={handleBack}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
