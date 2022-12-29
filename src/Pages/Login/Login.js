import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message);
            });
    }

    return (
        <div >
            <section className="py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-white hover:text-teal-200 sm:text-4xl lg:text-5xl">Welcome Back!</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-teal-200">Login to your account</p>
                    </div>

                    <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                        <div className="overflow-hidden bg-white rounded-md shadow-md">
                            <div className="px-4 py-6 sm:px-8 sm:py-7">

                                <form onSubmit={handleSubmit(handleLogin)}>
                                    <div className="space-y-5">
                                        <Link className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <div className="px-4 py-2">
                                                <svg className="w-6 h-6" viewBox="0 0 40 40">
                                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                                </svg>
                                            </div>

                                            <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                                        </Link>
                                        <div className=''>
                                            <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <input
                                                    {...register("email", { required: "Email Address is required" })}
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter email to get started"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-teal-200 caret-teal-200"
                                                />
                                                {errors.email && <p className="px-4 py-4 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{errors.email?.message}</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label for="" className="text-base font-medium text-gray-900"> Password </label>

                                                <Link href="#" title="" className="text-sm font-medium text-gray-600 transition-all duration-200 hover:text-purple-700 focus:text-purple-700 hover:underline"> Forgot password? </Link>
                                            </div>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <input
                                                    {...register("password", {
                                                        required: "Password is required",
                                                        minLength: { value: 6, message: "Password is Wrong" }
                                                    })}
                                                    type="password"
                                                    name="password"

                                                    placeholder="Enter your password"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-teal-200 caret-teal-200"
                                                />
                                                {errors.password && <p className="px-4 py-4 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{errors.password?.message}</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <input type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-gray-700 border border-transparent rounded-md focus:outline-none hover:bg-teal-200 hover:text-gray-700" />
                                        </div>

                                        <div className="text-center">
                                            <p className="text-base text-gray-600">Don’t have an account? <Link to="/signup" title="" className="font-medium text-gray-600 transition-all duration-200 hover:text-purple-700 hover:underline">Create a free account</Link></p>
                                        </div>
                                        <div>
                                            {loginError && <p className="px-4 py-4 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{loginError}</p>}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;