import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';



const Logout = () => {
    const history=useHistory();

    const onSubmitHandler = (e) => {
        history.push("/");
      }
      const onSubmitHandler1 = (e) => {
        history.push("/home");
      }
      

    return (
        <div>
            <Button variant="outlined" onClick={onSubmitHandler1}color="primary">
                Cancel
            </Button>
            <Button variant="outlined" onClick={onSubmitHandler}color="primary">
                Yes
            </Button>
        </div>
    )
}
export default Logout;