import React, { useState } from "react"; // Importing React and useState hook for managing component state
import "./SignUp.css"; // Importing the CSS file for styling the component
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation

const SignUp = () => {
    // State to manage error messages
    const [error, setError] = useState('');

    // State to manage user input details
    const [userDetails, setuserDetails] = useState({
        name: '', // User's name
        email: '', // User's email
        password: '', // User's password
        confirm_password: '' // User's password confirmation
    });

    // Function to handle input changes
    const handleOnchange = (e) => {
        // Update userDetails state based on input field name
        setuserDetails({
            ...userDetails, // Preserve previous state
            [e.target.name]: e.target.value // Update the field that changed
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Check if any fields are empty
        if (userDetails.confirm_password === '' || userDetails.password === '' || userDetails.email === '' || userDetails.name === '') {
            setError('please fill in all the required field'); // Set error message if fields are empty
            return; // Exit the function
        }

        // Check if the passwords match
        if (userDetails.password !== userDetails.confirm_password) {
            setError('Passwords do not match'); // Set error message if passwords do not match
            return; // Exit the function
        }

        console.log(userDetails); // Log the user details to the console (for debugging purposes)

        // Reset the input fields after successful submission
        setuserDetails({
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        });

        setError(''); // Clear any error messages
    };

    return (
        <main className="main-sign_up_container"> {/* Main container for the sign-up form */}
            <form onSubmit={handleSubmit} className="sign-up-container"> {/* Form element */}
                <p className="error-paragraph">{error !== '' ? Error: $}{error} : null</p> {/* Display error message if exists */}
                <h3>Sign up</h3> {/* Form title */}
                <div className="inputs"> {/* Container for input fields */}
                </div>
                <div className="input-div"> {/* Container for name input */}
                    <label htmlFor="name">Name</label> {/* Label for name input */}
                    <input
                        name="name" // Name of the input field
                        id="name" // ID for the input field
                        type="text" // Type of the input field
                        onChange={handleOnchange} // Handler for input change
                        value={userDetails.name} // Controlled input value
                    />
                </div>
                <div className="input-div"> {/* Container for email input */}
                    <label htmlFor="email">Email</label> {/* Label for email input */}
                    <input
                        name="email" // Name of the input field
                        id="email" // ID for the input field
                        type="email" // Type of the input field
                        onChange={handleOnchange} // Handler for input change
                        value={userDetails.email} // Controlled input value
                    />
                </div>
                <div className="input-div"> {/* Container for password input */}
                    <label htmlFor="password">Password</label> {/* Label for password input */}
                    <input
                        name="password" // Name of the input field
                        id="password" // ID for the input field
                        type="password" // Type of the input field (password)
                        onChange={handleOnchange} // Handler for input change
                        value={userDetails.password} // Controlled input value
                    />
                </div>
                <div className="input-div"> {/* Container for confirm password input */}
                    <label htmlFor="confirm_password">Confirm Password</label> {/* Label for confirm password input */}
                    <input
                        name="confirm_password" // Name of the input field
                        id="confirm_password" // ID for the input field
                        type="password" // Type of the input field (password)
                        onChange={handleOnchange} // Handler for input change
                        value={userDetails.confirm_password} // Controlled input value
                    />
                </div>
                <button className="sign-up-button">Sign up</button> {/* Submit button for the form */}
                <p className="sign-up-redirect-p">Already have an account? <Link to="/sign-in">Sign in</Link></p> {/* Link to the sign-in page */}
            </form>
        </main>
    );
};

export default SignUp; // Exporting the SignUp component for use in other parts of the application