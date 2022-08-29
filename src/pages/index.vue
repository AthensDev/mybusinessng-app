<template>
    <!-- BEGIN: Content -->
    <div class="content">
        <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 2xl:col-span-9">
                <div class="grid grid-cols-12 gap-6">
                    
                    <!-- BEGIN: Notification -->
                    <div class="col-span-12 mt-6 -mb-6 intro-y">
                        <div class="alert alert-dismissible show box bg-theme-3 text-white flex items-center mb-6" role="alert">
                            <span>Introducing new dashboard! Download now at <a href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820" class="underline ml-1" target="blank">themeforest.net</a>.</span>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"> <i data-feather="x" class="w-4 h-4"></i> </button>
                        </div>
                    </div>
                    <!-- BEGIN: Notification -->
                    
                    <!-- BEGIN: General Report -->
                    <div class="col-span-12 lg:col-span-8 xl:col-span-6 mt-2">
                        <div class="intro-y block sm:flex items-center h-10">
                            <h2 class="text-lg font-medium truncate mr-5">
                                General Report
                            </h2>
                            <select class="sm:ml-auto mt-3 sm:mt-0 sm:w-auto form-select box">
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                                <option value="custom-date">Custom Date</option>
                            </select>
                        </div>
                        <div class="report-box-2 intro-y mt-12 sm:mt-5">
                            <div class="box sm:flex">
                                <div class="px-8 py-12 flex flex-col justify-center flex-1">
                                    <i data-feather="shopping-bag" class="w-10 h-10 text-theme-12"></i> 
                                    <div class="text-3xl text-center font-medium mt-12  "> <span class="absolute mx-auto text-2xl font-medium top-0 left-0 -ml-0.5"></span> 54.143 </div>
                                    <div class="report-box-2__indicator bg-theme-9 tooltip cursor-pointer mx-auto" title="Unique views than last month"> Unique Views <i data-feather="chevron-up" class="w-4 h-4 ml-0.5"></i> </div>
                                    <div class="mt-4 text-gray-600 text-center dark:text-gray-600">Views and interactions on this business profile</div>
                                    <button class="btn btn-outline-secondary relative justify-start rounded-full mt-12">
                                        Download Reports 
                                        <span class="w-8 h-8 absolute flex justify-center items-center bg-theme-1 text-white rounded-full right-0 top-0 bottom-0 my-auto ml-auto mr-0.5"> <i data-feather="arrow-right" class="w-4 h-4"></i> </span>
                                    </button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <!-- END: General Report -->
                    <!-- BEGIN: Visitors -->
                   
                    <!-- END: Visitors -->
                    <!-- BEGIN: Users By Age -->
                    <div class="col-span-12 sm:col-span-6 lg:col-span-6 xl:col-span-6 mt-2 lg:mt-6 xl:mt-2">
                        <div class="intro-y flex items-center h-10">
                            <h2 class="text-lg font-medium truncate mr-5">
                                Stats
                            </h2>
                            <a href="" class="ml-auto text-theme-1 dark:text-theme-10 truncate">Show More</a> 
                        </div>
                        <div class="report-box-2 intro-y mt-5">
                            <div class="box p-5">
                                
                                <div class="tab-content mt-6">
                                    <div class="tab-pane active" id="active-users" role="tabpanel" aria-labelledby="active-users-tab">
                                        <div class="relative">
                                            <canvas class="mt-3" id="report-donut-chart" height="300"></canvas>
                                            <div class="flex flex-col justify-center items-center absolute w-full h-full top-0 left-0">
                                                <div class="text-2xl font-medium">2.501</div>
                                                <div class="text-gray-600 dark:text-gray-600 mt-0.5">Trust Score</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- END: Users By Age -->
                    <!-- BEGIN: Official Store -->
                    <div class="col-span-12 lg:col-span-8 mt-6">
                        <div class="intro-y block sm:flex items-center h-10">
                            <h2 class="text-lg font-medium truncate mr-5">
                                Official Store
                            </h2>
                            <div class="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300">
                                <i data-feather="map-pin" class="lw-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"></i> 
                                <input type="text" class="form-control sm:w-40 box pl-10" placeholder="Filter by city">
                            </div>
                        </div>
                        <div class="intro-y box p-5 mt-12 sm:mt-5">
                            <div>250 Official stores in 21 countries, click the marker to see location details.</div>
                            <div class="report-maps mt-5 bg-gray-200 rounded-md" data-center="-6.2425342, 106.8626478" data-sources="//assets/json/location.json"></div>
                        </div>
                    </div>
                    <!-- END: Official Store -->
                    <!-- BEGIN: Weekly Best Sellers -->
                    <div class="col-span-12 xl:col-span-4 mt-6">
                        <div class="intro-y flex items-center h-10">
                            <h2 class="text-lg font-medium truncate mr-5">
                                My Businesses
                            </h2>
                        </div>
                        <div class="mt-5">
                            <div class="intro-y">
                                <div class="box px-4 py-4 mb-3 flex items-center zoom-in">
                                    <div class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                        <img alt="Rubick Tailwind HTML Admin Template" src="/assets/images/profile-6.jpg">
                                    </div>
                                    <div class="ml-4 mr-auto">
                                        <div class="font-medium">Craige Stores</div>
                                        <div class="text-gray-600 text-xs mt-0.5">26 June 2022</div>
                                    </div>
                                    <div class="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 Sales</div>
                                </div>
                            </div>
                            <div class="intro-y">
                                <div class="box px-4 py-4 mb-3 flex items-center zoom-in">
                                    <div class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                        <img alt="Rubick Tailwind HTML Admin Template" src="/assets/images/profile-7.jpg">
                                    </div>
                                    <div class="ml-4 mr-auto">
                                        <div class="font-medium">Russell Funitures</div>
                                        <div class="text-gray-600 text-xs mt-0.5">30 October 2020</div>
                                    </div>
                                    <div class="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 Sales</div>
                                </div>
                            </div>
                            <div class="intro-y">
                                <div class="box px-4 py-4 mb-3 flex items-center zoom-in">
                                    <div class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                        <img alt="Rubick Tailwind HTML Admin Template" src="/assets/images/profile-11.jpg">
                                    </div>
                                    <div class="ml-4 mr-auto">
                                        <div class="font-medium">LightRoom Photography</div>
                                        <div class="text-gray-600 text-xs mt-0.5">19 December 2020</div>
                                    </div>
                                    <div class="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 Sales</div>
                                </div>
                            </div>
                            <div class="intro-y">
                                <div class="box px-4 py-4 mb-3 flex items-center zoom-in">
                                    <div class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                        <img alt="Rubick Tailwind HTML Admin Template" src="/assets/images/profile-3.jpg">
                                    </div>
                                    <div class="ml-4 mr-auto">
                                        <div class="font-medium">Havit Foods</div>
                                        <div class="text-gray-600 text-xs mt-0.5">28 January 2021</div>
                                    </div>
                                    <div class="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 Sales</div>
                                </div>
                            </div>
                            <a href="" class="intro-y w-full block text-center rounded-md py-4 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600">View More</a> 
                        </div>
                    </div>
                    <!-- END: Weekly Best Sellers -->
                    <!-- BEGIN: Ads 1 -->
                    <div class="col-span-12 lg:col-span-6 mt-6">
                        <div class="ads-box box p-8 relative overflow-hidden bg-theme-3 intro-y">
                            <div class="ads-box__title w-full sm:w-72 text-white text-xl -mt-3">Transact safely with Lender’s Fund Account (RDL)</div>
                            <div class="w-full sm:w-72 leading-relaxed text-white text-opacity-70 dark:text-gray-600 dark:text-opacity-100 mt-3">Apply now, quick registration</div>
                            <button class="btn w-32 bg-white dark:bg-dark-2 dark:text-white mt-6 sm:mt-10">Start Now</button>
                            <img class="hidden sm:block absolute top-0 right-0 w-2/5 -mt-3 mr-2" alt="Rubick Tailwind HTML Admin Template" src="/assets/images/woman-illustration.svg">
                        </div>
                    </div>
                    <!-- END: Ads 1 -->
                    <!-- BEGIN: Ads 2 -->
                    <div class="col-span-12 lg:col-span-6 mt-6">
                        <div class="ads-box box p-8 relative overflow-hidden intro-y">
                            <div class="ads-box__title w-full sm:w-52 text-theme-1 dark:text-white text-xl -mt-3">Invite friends to get <span class="font-medium">FREE</span> bonuses!</div>
                            <div class="w-full sm:w-60 leading-relaxed text-gray-600 mt-2">Get a IDR 100,000 voucher by inviting your friends to fund #BecomeMember</div>
                            <div class="w-48 relative mt-6 cursor-pointer tooltip" title="Copy referral link">
                                <input class="form-control" value="https://dashboard.in">
                                <i data-feather="copy" class="absolute right-0 top-0 bottom-0 my-auto mr-4 w-4 h-4"></i> 
                            </div>
                            <img class="hidden sm:block absolute top-0 right-0 w-1/2 mt-1 -mr-12" alt="Rubick Tailwind HTML Admin Template" src="/assets/images/phone-illustration.svg">
                        </div>
                    </div>
                    <!-- END: Ads 2 -->
                    <!-- BEGIN: Weekly Top Products -->
                    <div class="col-span-12 mt-6">
                        <div class="intro-y block sm:flex items-center h-10">
                            <h2 class="text-lg font-medium truncate mr-5">
                                Weekly Top Products
                            </h2>
                            <div class="flex items-center sm:ml-auto mt-3 sm:mt-0">
                                <button class="btn box flex items-center text-gray-700 dark:text-gray-300"> <i data-feather="file-text" class="hidden sm:block w-4 h-4 mr-2"></i> Export to Excel </button>
                                <button class="ml-3 btn box flex items-center text-gray-700 dark:text-gray-300"> <i data-feather="file-text" class="hidden sm:block w-4 h-4 mr-2"></i> Export to PDF </button>
                            </div>
                        </div>
                        <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                            <table class="table table-report sm:mt-2">
                                <thead>
                                    <tr>
                                        <th class="whitespace-nowrap">IMAGES</th>
                                        <th class="whitespace-nowrap">PRODUCT NAME</th>
                                        <th class="text-center whitespace-nowrap">STOCK</th>
                                        <th class="text-center whitespace-nowrap">STATUS</th>
                                        <th class="text-center whitespace-nowrap">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="intro-x">
                                        <td class="w-40">
                                            <div class="flex">
                                                <div class="w-10 h-10 image-fit zoom-in">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="tooltip rounded-full" src="/assets/images/preview-15.jpg" title="Uploaded at 26 June 2022">
                                                </div>
                                                <div class="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="tooltip rounded-full" src="/assets/images/preview-13.jpg" title="Uploaded at 23 April 2022">
                                                </div>
                                                <div class="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="tooltip rounded-full" src="/assets/images/preview-14.jpg" title="Uploaded at 28 December 2020">
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="" class="font-medium whitespace-nowrap">Sony Master Series A9G</a> 
                                            <div class="text-gray-600 text-xs whitespace-nowrap mt-0.5">Electronic</div>
                                        </td>
                                        <td class="text-center">61</td>
                                        <td class="w-40">
                                            <div class="flex items-center justify-center text-theme-6"> <i data-feather="check-square" class="w-4 h-4 mr-2"></i> Inactive </div>
                                        </td>
                                        <td class="table-report__action w-56">
                                            <div class="flex justify-center items-center">
                                                <a class="flex items-center mr-3" href=""> <i data-feather="check-square" class="w-4 h-4 mr-1"></i> Edit </a>
                                                <a class="flex items-center text-theme-6" href=""> <i data-feather="trash-2" class="w-4 h-4 mr-1"></i> Delete </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="intro-x">
                                        <td class="w-40">
                                            <div class="flex">
                                                <div class="w-10 h-10 image-fit zoom-in">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="tooltip rounded-full" src="/assets/images/preview-8.jpg" title="Uploaded at 30 October 2020">
                                                </div>
                                                <div class="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="tooltip rounded-full" src="/assets/images/preview-11.jpg" title="Uploaded at 23 June 2021">
                                                </div>
                                                <div class="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="tooltip rounded-full" src="/assets/images/preview-4.jpg" title="Uploaded at 24 July 2021">
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="" class="font-medium whitespace-nowrap">Oppo Find X2 Pro</a> 
                                            <div class="text-gray-600 text-xs whitespace-nowrap mt-0.5">Smartphone &amp; Tablet</div>
                                        </td>
                                        <td class="text-center">212</td>
                                        <td class="w-40">
                                            <div class="flex items-center justify-center text-theme-6"> <i data-feather="check-square" class="w-4 h-4 mr-2"></i> Inactive </div>
                                        </td>
                                        <td class="table-report__action w-56">
                                            <div class="flex justify-center items-center">
                                                <a class="flex items-center mr-3" href=""> <i data-feather="check-square" class="w-4 h-4 mr-1"></i> Edit </a>
                                                <a class="flex items-center text-theme-6" href=""> <i data-feather="trash-2" class="w-4 h-4 mr-1"></i> Delete </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="intro-x">
                                        <td class="w-40">
                                            <div class="flex">
                                                <div class="w-10 h-10 image-fit zoom-in">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="tooltip rounded-full" src="/assets/images/preview-5.jpg" title="Uploaded at 19 December 2020">
                                                </div>
                                                <div class="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="tooltip rounded-full" src="/assets/images/preview-1.jpg" title="Uploaded at 9 March 2022">
                                                </div>
                                                <div class="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="tooltip rounded-full" src="/assets/images/preview-10.jpg" title="Uploaded at 1 January 2021">
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="" class="font-medium whitespace-nowrap">Oppo Find X2 Pro</a> 
                                            <div class="text-gray-600 text-xs whitespace-nowrap mt-0.5">Smartphone &amp; Tablet</div>
                                        </td>
                                        <td class="text-center">150</td>
                                        <td class="w-40">
                                            <div class="flex items-center justify-center text-theme-6"> <i data-feather="check-square" class="w-4 h-4 mr-2"></i> Inactive </div>
                                        </td>
                                        <td class="table-report__action w-56">
                                            <div class="flex justify-center items-center">
                                                <a class="flex items-center mr-3" href=""> <i data-feather="check-square" class="w-4 h-4 mr-1"></i> Edit </a>
                                                <a class="flex items-center text-theme-6" href=""> <i data-feather="trash-2" class="w-4 h-4 mr-1"></i> Delete </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="intro-x">
                                        <td class="w-40">
                                            <div class="flex">
                                                <div class="w-10 h-10 image-fit zoom-in">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="tooltip rounded-full" src="/assets/images/preview-10.jpg" title="Uploaded at 28 January 2021">
                                                </div>
                                                <div class="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="tooltip rounded-full" src="/assets/images/preview-2.jpg" title="Uploaded at 27 September 2021">
                                                </div>
                                                <div class="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="tooltip rounded-full" src="/assets/images/preview-6.jpg" title="Uploaded at 7 September 2021">
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="" class="font-medium whitespace-nowrap">Samsung Q90 QLED TV</a> 
                                            <div class="text-gray-600 text-xs whitespace-nowrap mt-0.5">Electronic</div>
                                        </td>
                                        <td class="text-center">81</td>
                                        <td class="w-40">
                                            <div class="flex items-center justify-center text-theme-9"> <i data-feather="check-square" class="w-4 h-4 mr-2"></i> Active </div>
                                        </td>
                                        <td class="table-report__action w-56">
                                            <div class="flex justify-center items-center">
                                                <a class="flex items-center mr-3" href=""> <i data-feather="check-square" class="w-4 h-4 mr-1"></i> Edit </a>
                                                <a class="flex items-center text-theme-6" href=""> <i data-feather="trash-2" class="w-4 h-4 mr-1"></i> Delete </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
                            <ul class="pagination">
                                <li>
                                    <a class="pagination__link" href=""> <i class="w-4 h-4" data-feather="chevrons-left"></i> </a>
                                </li>
                                <li>
                                    <a class="pagination__link" href=""> <i class="w-4 h-4" data-feather="chevron-left"></i> </a>
                                </li>
                                <li> <a class="pagination__link" href="">...</a> </li>
                                <li> <a class="pagination__link" href="">1</a> </li>
                                <li> <a class="pagination__link pagination__link--active" href="">2</a> </li>
                                <li> <a class="pagination__link" href="">3</a> </li>
                                <li> <a class="pagination__link" href="">...</a> </li>
                                <li>
                                    <a class="pagination__link" href=""> <i class="w-4 h-4" data-feather="chevron-right"></i> </a>
                                </li>
                                <li>
                                    <a class="pagination__link" href=""> <i class="w-4 h-4" data-feather="chevrons-right"></i> </a>
                                </li>
                            </ul>
                            <select class="w-20 form-select box mt-3 sm:mt-0">
                                <option>10</option>
                                <option>25</option>
                                <option>35</option>
                                <option>50</option>
                            </select>
                        </div>
                    </div>
                    <!-- END: Weekly Top Products -->
                </div>
            </div>
            <div class="col-span-12 2xl:col-span-3">
                <div class="2xl:border-l border-theme-5 -mb-10 pb-10">
                    <div class="2xl:pl-6 grid grid-cols-12 gap-6">
                        <!-- BEGIN: Important Notes -->
                        <div class="col-span-12 md:col-span-6 xl:col-span-12 mt-3 2xl:mt-8">
                            <div class="intro-x flex items-center h-10">
                                <h2 class="text-lg font-medium truncate mr-auto">
                                    Important Notes
                                </h2>
                                <button data-carousel="important-notes" data-target="prev" class="tiny-slider-navigator btn px-2 border-gray-400 text-gray-700 dark:text-gray-300 mr-2"> <i data-feather="chevron-left" class="w-4 h-4"></i> </button>
                                <button data-carousel="important-notes" data-target="next" class="tiny-slider-navigator btn px-2 border-gray-400 text-gray-700 dark:text-gray-300 mr-2"> <i data-feather="chevron-right" class="w-4 h-4"></i> </button>
                            </div>
                            <div class="mt-5 intro-x">
                                <div class="box zoom-in">
                                    <div class="tiny-slider" id="important-notes">
                                        <div class="p-5">
                                            <div class="text-base font-medium truncate">Lorem Ipsum is simply dummy text</div>
                                            <div class="text-gray-500 mt-1">20 Hours ago</div>
                                            <div class="text-gray-600 text-justify mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                            <div class="font-medium flex mt-5">
                                                <button type="button" class="btn btn-secondary py-1 px-2">View Notes</button>
                                                <button type="button" class="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                            </div>
                                        </div>
                                        <div class="p-5">
                                            <div class="text-base font-medium truncate">Lorem Ipsum is simply dummy text</div>
                                            <div class="text-gray-500 mt-1">20 Hours ago</div>
                                            <div class="text-gray-600 text-justify mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                            <div class="font-medium flex mt-5">
                                                <button type="button" class="btn btn-secondary py-1 px-2">View Notes</button>
                                                <button type="button" class="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                            </div>
                                        </div>
                                        <div class="p-5">
                                            <div class="text-base font-medium truncate">Lorem Ipsum is simply dummy text</div>
                                            <div class="text-gray-500 mt-1">20 Hours ago</div>
                                            <div class="text-gray-600 text-justify mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                            <div class="font-medium flex mt-5">
                                                <button type="button" class="btn btn-secondary py-1 px-2">View Notes</button>
                                                <button type="button" class="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- END: Important Notes -->
                        <!-- BEGIN: Recent Activities -->
                        <div class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3">
                            <div class="intro-x flex items-center h-10">
                                <h2 class="text-lg font-medium truncate mr-5">
                                    Recent Activities
                                </h2>
                                <a href="" class="ml-auto text-theme-1 dark:text-theme-10 truncate">Show More</a> 
                            </div>
                            <div class="report-timeline mt-5 relative">
                                <div class="intro-x relative flex items-center mb-3">
                                    <div class="report-timeline__image">
                                        <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template" src="/assets/images/profile-5.jpg">
                                        </div>
                                    </div>
                                    <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                                        <div class="flex items-center">
                                            <div class="font-medium">Al Pacino</div>
                                            <div class="text-xs text-gray-500 ml-auto">07:00 PM</div>
                                        </div>
                                        <div class="text-gray-600 mt-1">Has joined the team</div>
                                    </div>
                                </div>
                                <div class="intro-x relative flex items-center mb-3">
                                    <div class="report-timeline__image">
                                        <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template" src="/assets/images/profile-12.jpg">
                                        </div>
                                    </div>
                                    <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                                        <div class="flex items-center">
                                            <div class="font-medium">Tom Cruise</div>
                                            <div class="text-xs text-gray-500 ml-auto">07:00 PM</div>
                                        </div>
                                        <div class="text-gray-600">
                                            <div class="mt-1">Added 3 new photos</div>
                                            <div class="flex mt-2">
                                                <div class="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Sony Master Series A9G">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="rounded-md border border-white" src="/assets/images/preview-12.jpg">
                                                </div>
                                                <div class="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Oppo Find X2 Pro">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="rounded-md border border-white" src="/assets/images/preview-3.jpg">
                                                </div>
                                                <div class="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Oppo Find X2 Pro">
                                                    <img alt="Rubick Tailwind HTML Admin Template" class="rounded-md border border-white" src="/assets/images/preview-15.jpg">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="intro-x text-gray-500 text-xs text-center my-4">12 November</div>
                                <div class="intro-x relative flex items-center mb-3">
                                    <div class="report-timeline__image">
                                        <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template" src="/assets/images/profile-15.jpg">
                                        </div>
                                    </div>
                                    <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                                        <div class="flex items-center">
                                            <div class="font-medium">Kate Winslet</div>
                                            <div class="text-xs text-gray-500 ml-auto">07:00 PM</div>
                                        </div>
                                        <div class="text-gray-600 mt-1">Has changed <a class="text-theme-1 dark:text-theme-10" href="">Sony A7 III</a> price and description</div>
                                    </div>
                                </div>
                                <div class="intro-x relative flex items-center mb-3">
                                    <div class="report-timeline__image">
                                        <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template" src="/assets/images/profile-11.jpg">
                                        </div>
                                    </div>
                                    <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                                        <div class="flex items-center">
                                            <div class="font-medium">Denzel Washington</div>
                                            <div class="text-xs text-gray-500 ml-auto">07:00 PM</div>
                                        </div>
                                        <div class="text-gray-600 mt-1">Has changed <a class="text-theme-1 dark:text-theme-10" href="">Dell XPS 13</a> description</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- END: Recent Activities -->
                        <!-- BEGIN: Transactions -->
                        <div class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3">
                            <div class="intro-x flex items-center h-10">
                                <h2 class="text-lg font-medium truncate mr-5">
                                    Transactions
                                </h2>
                            </div>
                            <div class="mt-5">
                                <div class="intro-x">
                                    <div class="box px-5 py-3 mb-3 flex items-center zoom-in">
                                        <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template" src="/assets/images/profile-6.jpg">
                                        </div>
                                        <div class="ml-4 mr-auto">
                                            <div class="font-medium">Christian Bale</div>
                                            <div class="text-gray-600 text-xs mt-0.5">26 June 2022</div>
                                        </div>
                                        <div class="text-theme-6">-$189</div>
                                    </div>
                                </div>
                                <div class="intro-x">
                                    <div class="box px-5 py-3 mb-3 flex items-center zoom-in">
                                        <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template" src="/assets/images/profile-7.jpg">
                                        </div>
                                        <div class="ml-4 mr-auto">
                                            <div class="font-medium">Russell Crowe</div>
                                            <div class="text-gray-600 text-xs mt-0.5">30 October 2020</div>
                                        </div>
                                        <div class="text-theme-6">-$36</div>
                                    </div>
                                </div>
                                <div class="intro-x">
                                    <div class="box px-5 py-3 mb-3 flex items-center zoom-in">
                                        <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template" src="/assets/images/profile-11.jpg">
                                        </div>
                                        <div class="ml-4 mr-auto">
                                            <div class="font-medium">Arnold Schwarzenegger</div>
                                            <div class="text-gray-600 text-xs mt-0.5">19 December 2020</div>
                                        </div>
                                        <div class="text-theme-6">-$26</div>
                                    </div>
                                </div>
                                <div class="intro-x">
                                    <div class="box px-5 py-3 mb-3 flex items-center zoom-in">
                                        <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template" src="/assets/images/profile-3.jpg">
                                        </div>
                                        <div class="ml-4 mr-auto">
                                            <div class="font-medium">Arnold Schwarzenegger</div>
                                            <div class="text-gray-600 text-xs mt-0.5">28 January 2021</div>
                                        </div>
                                        <div class="text-theme-9">+$78</div>
                                    </div>
                                </div>
                                <div class="intro-x">
                                    <div class="box px-5 py-3 mb-3 flex items-center zoom-in">
                                        <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template" src="/assets/images/profile-4.jpg">
                                        </div>
                                        <div class="ml-4 mr-auto">
                                            <div class="font-medium">Johnny Depp</div>
                                            <div class="text-gray-600 text-xs mt-0.5">2 July 2021</div>
                                        </div>
                                        <div class="text-theme-9">+$35</div>
                                    </div>
                                </div>
                                <a href="" class="intro-x w-full block text-center rounded-md py-3 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600">View More</a> 
                            </div>
                        </div>
                        <!-- END: Transactions -->
                        <!-- BEGIN: Schedules -->
                        <div class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3">
                            <div class="intro-x flex items-center h-10">
                                <h2 class="text-lg font-medium truncate mr-5">
                                    Schedules
                                </h2>
                                <a href="" class="ml-auto text-theme-1 dark:text-theme-10 truncate flex items-center"> <i data-feather="plus" class="w-4 h-4 mr-1"></i> Add New Schedules </a>
                            </div>
                            <div class="mt-5">
                                <div class="intro-x box">
                                    <div class="p-5">
                                        <div class="flex">
                                            <i data-feather="chevron-left" class="w-5 h-5 text-gray-600"></i> 
                                            <div class="font-medium text-base mx-auto">April</div>
                                            <i data-feather="chevron-right" class="w-5 h-5 text-gray-600"></i> 
                                        </div>
                                        <div class="grid grid-cols-7 gap-4 mt-5 text-center">
                                            <div class="font-medium">Su</div>
                                            <div class="font-medium">Mo</div>
                                            <div class="font-medium">Tu</div>
                                            <div class="font-medium">We</div>
                                            <div class="font-medium">Th</div>
                                            <div class="font-medium">Fr</div>
                                            <div class="font-medium">Sa</div>
                                            <div class="py-0.5 rounded relative text-gray-600">29</div>
                                            <div class="py-0.5 rounded relative text-gray-600">30</div>
                                            <div class="py-0.5 rounded relative text-gray-600">31</div>
                                            <div class="py-0.5 rounded relative">1</div>
                                            <div class="py-0.5 rounded relative">2</div>
                                            <div class="py-0.5 rounded relative">3</div>
                                            <div class="py-0.5 rounded relative">4</div>
                                            <div class="py-0.5 rounded relative">5</div>
                                            <div class="py-0.5 bg-theme-18 dark:bg-theme-9 rounded relative">6</div>
                                            <div class="py-0.5 rounded relative">7</div>
                                            <div class="py-0.5 bg-theme-1 dark:bg-theme-1 text-white rounded relative">8</div>
                                            <div class="py-0.5 rounded relative">9</div>
                                            <div class="py-0.5 rounded relative">10</div>
                                            <div class="py-0.5 rounded relative">11</div>
                                            <div class="py-0.5 rounded relative">12</div>
                                            <div class="py-0.5 rounded relative">13</div>
                                            <div class="py-0.5 rounded relative">14</div>
                                            <div class="py-0.5 rounded relative">15</div>
                                            <div class="py-0.5 rounded relative">16</div>
                                            <div class="py-0.5 rounded relative">17</div>
                                            <div class="py-0.5 rounded relative">18</div>
                                            <div class="py-0.5 rounded relative">19</div>
                                            <div class="py-0.5 rounded relative">20</div>
                                            <div class="py-0.5 rounded relative">21</div>
                                            <div class="py-0.5 rounded relative">22</div>
                                            <div class="py-0.5 bg-theme-17 dark:bg-theme-11 rounded relative">23</div>
                                            <div class="py-0.5 rounded relative">24</div>
                                            <div class="py-0.5 rounded relative">25</div>
                                            <div class="py-0.5 rounded relative">26</div>
                                            <div class="py-0.5 bg-theme-14 dark:bg-theme-12 rounded relative">27</div>
                                            <div class="py-0.5 rounded relative">28</div>
                                            <div class="py-0.5 rounded relative">29</div>
                                            <div class="py-0.5 rounded relative">30</div>
                                            <div class="py-0.5 rounded relative text-gray-600">1</div>
                                            <div class="py-0.5 rounded relative text-gray-600">2</div>
                                            <div class="py-0.5 rounded relative text-gray-600">3</div>
                                            <div class="py-0.5 rounded relative text-gray-600">4</div>
                                            <div class="py-0.5 rounded relative text-gray-600">5</div>
                                            <div class="py-0.5 rounded relative text-gray-600">6</div>
                                            <div class="py-0.5 rounded relative text-gray-600">7</div>
                                            <div class="py-0.5 rounded relative text-gray-600">8</div>
                                            <div class="py-0.5 rounded relative text-gray-600">9</div>
                                        </div>
                                    </div>
                                    <div class="border-t border-gray-200 p-5">
                                        <div class="flex items-center">
                                            <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                                            <span class="truncate">UI/UX Workshop</span> 
                                            <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                            <span class="font-medium xl:ml-auto">23th</span> 
                                        </div>
                                        <div class="flex items-center mt-4">
                                            <div class="w-2 h-2 bg-theme-1 dark:bg-theme-10 rounded-full mr-3"></div>
                                            <span class="truncate">VueJs Frontend Development</span> 
                                            <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                            <span class="font-medium xl:ml-auto">10th</span> 
                                        </div>
                                        <div class="flex items-center mt-4">
                                            <div class="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                                            <span class="truncate">Laravel Rest API</span> 
                                            <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                            <span class="font-medium xl:ml-auto">31th</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- END: Schedules -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END: Content -->
    <!-- BEGIN: Dark Mode Switcher-->
    <div data-url="top-menu-dark-dashboard-overview-2.html" class="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10">
        <div class="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
        <div class="dark-mode-switcher__toggle border"></div>
    </div>
    <!-- END: Dark Mode Switcher-->

</template>

<route lang="yaml">
    meta:
        layout: user
        middleware: []
        requiresAuth: false
</route>

<script>
import { useMeta } from 'vue-meta'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { mapActions, useStore, mapGetters, mapState, mapMutations } from "vuex";
export default {
    setup() {
        useMeta({
            title: 'Home',
        })
        return {
            data: {}
        }
    },
    data() {
        return {}
    },
    computed: {},
    mounted() {},
    methods: {
        start(){
           if(this.data.type == 'person'){
                this.$router.push('person')
           }else{
                this.$router.push('company')
           }
        }
    }
}

</script>
<style>
</style>
