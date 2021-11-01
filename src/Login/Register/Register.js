// import React from 'react';
// import { Button } from 'react-bootstrap';
// import useAuth from '../../Hooks/useAuth';
// import { useHistory, useLocation } from 'react-router';

// const Register = () => {
//     const { signInUsingGoogle } = useAuth();
//     const history = useHistory();
//     const location = useLocation();
//     const redirect_url = location.state?.from || '/home';
//     const handleGoogleLogIn = () => {
//         signInUsingGoogle()
//             .then(result => {
//                 history.push(redirect_url)
//             })
//     }
//     return (
//         <div>
//             <div>
//                 <Button onClick={handleGoogleLogIn} className="btn-primary"><i class="fab fa-google"></i></Button>
//             </div>
//         </div>
//     );
// };

// export default Register;