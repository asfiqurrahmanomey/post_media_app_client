import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Articalform = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const handleAddProduct = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const article = {
                        name: data.name,
                        author: data.author,
                        cartoon: data.cartoon,
                        image: imgData.data.url,
                        story: data.story

                    }
                    // saveto database
                    fetch('https://post-media-app-server.vercel.app/articles', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(article)
                    })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        toast.success(`${data.name} is added successfully`);
                        navigate('/media');
                    })

                }
            })
    }
    return (
        <div>
            <section className="bg-white rounded-lg">
                <div id='blog-upload' className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a Articles</h2>
                    <form onSubmit={handleSubmit(handleAddProduct)}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Articles Name</label>
                                <input {...register("name", { required: "Your Name is required" })} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Articles Title" />
                                {errors.name && <p className="px-4 py-4 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{errors.name?.message}</p>}
                            </div>
                            <div className="w-full">
                                <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                                <input {...register("author", { required: "Author Name is required" })} type="text" name="author" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Name" />
                                {errors.author && <p className="px-4 py-4 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{errors.author?.message}</p>}
                            </div>
                            <div className="w-full">
                                <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Favorite Cartoon</label>
                                <input {...register("cartoon", { required: "Type Cartoon Name" })} type="text" name="cartoon" id="cartoon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Favorite Cartoon" />
                                {errors.cartoon && <p className="px-4 py-4 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{errors.cartoon?.message}</p>}
                            </div>
                            <div className="sm:col-span-2">
                                <label for="file_input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Story Photo</label>
                                <input {...register("image", { required: "Your Photo" })} id="file_input" type="file" name="image" rows="8" className="text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" ></input>
                                {errors.image && <p className="px-4 py-4 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{errors.image?.message}</p>}
                            </div>
                            <div className="sm:col-span-2">
                                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Story</label>
                                <input {...register("story", { required: "Your Story" })} id="description" name="story" rows="8" className="block p-2.5 h-32 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></input>
                                {errors.story && <p className="px-4 py-4 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{errors.story?.message}</p>}
                            </div>
                        </div>

                        <div>
                            {
                                user?.uid ?
                                    <input type="submit" value="Add Product" className="uppercase mt-4 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black bg-teal-200 transition duration-200 rounded shadow-md hover:bg-neutral-600 hover:text-teal-200 focus:shadow-outline focus:outline-none"

                                    />
                                    : <div class="p-4 mt-4 text-sm text-red-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                        <span class="font-medium mr-2 ">Info alert!</span><Link to="/login" className='mr-2 text-gray-700 underline'>Login</Link><span>First to Add a Products</span>
                                    </div>
                            }
                        </div>



                        {/* {signUpError && <p className="px-4 py-4 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{signUpError}</p>} */}
                    </form>
                </div>
                <Toaster />
            </section>
        </div>
    );
};

export default Articalform;