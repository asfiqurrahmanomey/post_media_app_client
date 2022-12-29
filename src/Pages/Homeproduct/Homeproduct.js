import React from 'react';

const Homeproduct = () => {
    return (
        <div>
            <section class="w-full md:w-2/3 flex flex-col items-center px-3">

                <div class="flex flex-col rounded-xl bg-gray-700 my-4">
                    <section class="">
                        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-teal-200 dark:text-white">Our Blog</h2>
                                <p class="font-light text-white sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                            </div>

                            {
                                articles.map((article) =>
                                    <article class="p-6 my-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                        <div class="flex justify-between items-center mb-5 text-gray-500">
                                            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                                <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                                {article?.cartoon}
                                            </span>
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-purple-700">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <img src={article?.image} className="w-full rounded-lg mb-6" alt="" />
                                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article?.name}</h2>
                                        <div class="flex justify-between items-center">
                                            <div class="flex items-center space-x-4">
                                                <img class="w-7 h-7 rounded-full" src="https://i.ibb.co/kHrcY99/IMG-3954.jpg" alt="Jese Leos avatar" />
                                                <span class="font-medium dark:text-white">
                                                    {article?.author}
                                                </span>
                                            </div>
                                            <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                                Read more
                                                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    </article>
                                )
                            }

                        </div>
                    </section>
                </div>

            </section>
        </div>
    );
};

export default Homeproduct;