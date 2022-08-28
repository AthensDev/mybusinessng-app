/**
*
* -----------------------------------------------------------------------------
*
* Template : Braintech - Technology & IT Solutions HTML Template
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/
export default function () {
    // get all content wrappers
const getAllContentWrappers = () => {
    return [].map.call(document.querySelectorAll('.main-content .content-wrapper'), (element) => element);
};

// get all content wrapper buttons
const getAllContentWrappersButtons = () => {
    return [].map.call(document.querySelectorAll('.main-content .content-wrapper a[data-nav="next"]'), (element) => element);
}

// get all content wrappers with starter
const getAllContentWrappersWithStarter = () => {
    return [].map.call(document.querySelectorAll('.main-content .content-wrapper[data-starter="yes"]'), (element) => element);
};

// generate trackers
let trackers = getAllContentWrappersWithStarter();

// has trackers
if (trackers.length > 0)
{
    const trackerHeader = document.querySelector('.content-header .right-tracker');

    if (trackerHeader)
    {
        trackers.forEach((tracker, index) => {
            let div = document.createElement('div');
            div.className = 'tracker' + (tracker.classList.contains('active') ? ' active' : '');
            div.textContent = index + 1;

            // add to tracker header
            trackerHeader.appendChild(div);
        });
    }
}

// get tracker headers
const trackerHeaders = [].map.call(document.querySelectorAll('.content-header .right-tracker .tracker'), (element) => element);

// load all content wrappers
const contentWrappers = getAllContentWrappers();

// get the previous link
let previousLink = '';

// load previous button
const loadPreviousButton = () => {

    let previous = document.querySelector('.content-header .left-nav .arrow-left');

    // previous button avaliable and clicked?
    if (typeof previous !== 'undefined')
    {
        // can we change the text?
        const active = contentWrappers.find((element) => element.classList.contains('active'));

        // get the active index
        const activeIndex = contentWrappers.indexOf(active);

        // index greater than 1 ?
        if (activeIndex > 0) 
        {
            previous.querySelector('.arrow-left-text').textContent = 'Previous';

            // set previous link
            if (previousLink == '') previousLink = previous.href;

            // change href
            previous.href = 'javascript:void(0)';
        }
        else
        {
            previous.href = previousLink;
            previous.querySelector('.arrow-left-text').textContent = 'Home';
        }

    }
};

let previous = document.querySelector('.content-header .left-nav .arrow-left');

// previous button avaliable and clicked?
if (typeof previous !== 'undefined')
{
    // previous button clicked
    previous.addEventListener('click', ()=>{

        // can we change the text?
        const active = contentWrappers.find((element) => element.classList.contains('active'));
    
        // has tracker
        if (active.hasAttribute('data-starter'))
        {
            setTimeout(()=>{
                if (trackerHeaders.length > 0)
                {
                    trackers = getAllContentWrappersWithStarter();

                    const tracker = trackerHeaders[trackers.indexOf(active)];

                    if (tracker.classList.contains('active'))
                    {
                        tracker.classList.remove('active');
                    }
                }
            }, 400);
        }

        // get the active index
        const activeIndex = contentWrappers.indexOf(active);
        
        // paginate page
        paginatePage(activeIndex-1, activeIndex);
        
    });
}

// manage content navigation
getAllContentWrappersButtons().forEach((button, index) => {

    const next = index + 1;

    // next exists?
    if (typeof contentWrappers[next] !== 'undefined')
    {
        button.addEventListener('click', ()=>{

            // has all required fields filled ??
            let input = button.parentNode.querySelector('.input'), canContinue = true,
                errorText = '';


            // check if it is required
            if (input !== null && input.hasAttribute('required'))
            {
                if (input.type == 'file')
                {
                    // check file lengh
                    if (input.files.length == 0)
                    {
                        canContinue = false;
                        errorText = 'You need to choose a file to proceed.';
                    }
                }
                else
                {
                    if (input.value.replace(/[\s+]g/, '').length == 0) {
                        canContinue = false;
                        errorText = 'You need to provide an answer to proceed';
                    }
                }
            }

            // paginate page
            if (canContinue) {
                paginatePage(next);
                errorText = '';
            }
            else
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Process error',
                    text: errorText
                });
            }

        });
    }
});

// paginate page
function paginatePage(index, animateOutIndex = false)
{
    if (typeof contentWrappers[index] !== 'undefined')
    {
        // remove active
        const active = contentWrappers.find(element => element.classList.contains('active'));
        if (active) active.classList.remove('active');

        const element = contentWrappers[index];

        // page to animate out
        const indexToAnimateOut = animateOutIndex === false ? (index - 1) : animateOutIndex;

        // animate content
        const animateContent = ()=>{

            // has tracker
            if (element.hasAttribute('data-starter'))
            {
                if (trackerHeaders.length > 0)
                {
                    const tracker = trackerHeaders[trackers.indexOf(element)];

                    if (!tracker.classList.contains('active'))
                    {
                        tracker.classList.add('active');
                    }
                }
            }

            // change position
            element.classList.add('change-position');

            // set content wrapper on this index active
            element.classList.add('active');

            // run effect
            setTimeout(()=>{
                element.setAttribute('style', 'bottom:0; opacity:1');

                // remove style
                setTimeout(()=>{
                    element.classList.remove('change-position');
                    element.removeAttribute('style');
                }, 350);

            }, 100);

            // load previous button
            loadPreviousButton();

            // manage progress bar
            loadProgressBar(index);
        };

        // animate out the last
        if (typeof contentWrappers[indexToAnimateOut] !== 'undefined')
        {
            const lastElement = contentWrappers[indexToAnimateOut];

            lastElement.classList.add('active');

            setTimeout(()=>{
                // change position
                lastElement.classList.add('hide-position');

                // delay and show
                setTimeout(()=>{

                    lastElement.setAttribute('style', 'bottom: -100px; opacity:0;');

                    // show next content
                    setTimeout(()=>{

                        lastElement.classList.remove('active');
                        lastElement.classList.remove('hide-position');
                        lastElement.removeAttribute('style');

                        animateContent();

                    }, 350);

                }, 100);
            }, 50);
        }
        else
        {
            animateContent();
        }
    }
}

// load progress bar
function loadProgressBar(index)
{
    // get total length
    const contentLength = contentWrappers.length;

    // get max progress
    const maxProgress = 100 / contentLength;

    // index is last ?
    if (index == (contentLength - 1)) index += 1;

    // check stat
    const currentIndex = (maxProgress * index);

    setTimeout(()=>{
        // update range
        document.querySelector('.range-inner').style.width = currentIndex + '%';
    }, 100);
}

window.onload = ()=> {
    // load collection
    (function(){

        // set the access header
        const header = {
            "x-access-token" : "C1GPDpBEpulOV4RRT3tqoECTCc5Bc6hPun8BdLreMC"
        };

        // get mode
        const mode = location.href.indexOf('localhost') !== false || location.href.indexOf('127.0.0.1') ? 'local' : 'prod';

        // set the endpoint url
        const url = mode == 'local' ? 'http://localhost:3001' : '';

        // load all collections for registration
        const collections = async (applyto = '') => {

            try
            {
                const result = await axios({
                    method : 'get',
                    url : url + '/shared/collection',
                    headers : header
                });

                let collections = result.data.collection;

                buildOptionFromCollection(document.querySelectorAll('select[data-autofill="occupation"]'), 'WorkerTypes', collections);
                buildOptionFromCollection(document.querySelectorAll('select[data-autofill="house_type"]'), 'HouseTypes', collections);
                buildOptionFromCollection(document.querySelectorAll('select[data-autofill="urgency"]'), 'HowUrgent', collections);
                buildOptionFromCollection(document.querySelectorAll('select[data-autofill="budget"]'), 'RentBudget', collections);
                buildOptionFromCollection(document.querySelectorAll('select[data-autofill="money_ready"]'), 'IsMoneyReady', collections);
                buildOptionFromCollection(document.querySelectorAll('select[data-autofill="mix_living"]'), 'MixLiving', collections);
                buildOptionFromCollection(document.querySelectorAll('select[data-autofill="type_of_worker"]'), 'WorkerTypes', collections);
            }
            catch(e)
            {   
                Swal.fire({
                    icon: 'error',
                    title: 'Network error',
                    text: 'We could not load all the resources you would need to complete this registration.',
                    footer: '<a href="javascript:void(0)" onclick="networkError()">Why do I have this issue?</a>'
                });
            }

        };

        // autofil
        collections();

        // build option from collection
        function buildOptionFromCollection(elements, find, collections)
        {
            let option = document.createElement('option');
            option.value = '';
            option.innerText = 'Please Choose';

            // are we good ?
            if (elements.length > 0) [].forEach.call(elements, (element)=>{

                // add option
                element.appendChild(option);

                if (typeof collections[find] != 'undefined')
                {
                    // build options from collection
                    collections[find].forEach((record) => {

                        let opt = document.createElement('option');
                        opt.value = opt.innerText = capitalizeString(record);

                        // add to house type
                        element.appendChild(opt);
                    
                    });
                }
                else
                {
                    console.log(find);
                }
            });
        }

        // finish button clicked
        const finishButton = document.querySelector('*[data-nav="finish"]');

        if (finishButton !== null)
        {
            finishButton.addEventListener('click', async (e)=>{

                let input = finishButton.parentNode.querySelector('input');

                if (input.value.length == 0)
                {
                    Swal.fire({
                        icon: 'error',
                        title: 'Process error',
                        text: 'You need to provide an answer to proceed'
                    });
                }
                else
                {
                    // look for data-input
                    let allInputs = document.querySelectorAll('[data-input]');

                    // create form data
                    let form = new FormData();

                    // load all inputs
                    if (allInputs.length > 0)
                    {
                        let data = { 
                            personal : {
                                firstname : document.querySelector('[data-input="fullname"]').value,
                                occupation : document.querySelector('[data-input="occupation"]').value,
                                sex : document.querySelector('[data-input="sex"]').value,
                                age : document.querySelector('[data-input="age"]').value,
                            }, 
                            preference : {
                                type_of_house : document.querySelector('[data-input="house_type"]').value,
                                type_of_worker : document.querySelector('[data-input="type_of_worker"]').value,
                                sex : document.querySelector('[data-input="gender_to_stay_with"]').value,
                                no_of_housemates : document.querySelector('[data-input="house_mates"]').value
                            }, 
                            budget : {
                                how_urgent : document.querySelector('[data-input="urgency"]').value,
                                is_money_ready : document.querySelector('[data-input="money_ready"]').value,
                                budget : document.querySelector('[data-input="budget"]').value,
                                open_to_mix_living : document.querySelector('[data-input="mix_living"]').value,
                            },  
                            account : {
                                email : document.querySelector('[data-input="email"]').value,
                                password : document.querySelector('[data-input="password"]').value,
                            }
                        };

                        // get files
                        let displayPicture = document.querySelector('[data-input="picture"]');

                        if (displayPicture)
                        {
                            form.append('display_picture', displayPicture.files.item(0));
                        }

                        // extract data
                        for (var key in data)
                        {
                            form.append(key, JSON.stringify(data[key]));
                        }

                        Swal.fire(
                            'Loading',
                            'We are trying to submit your information securely, please be patient',
                            'info'
                        );

                        // submit data
                        try
                        {
                            const result = await axios({
                                method : 'post',
                                url : url + '/register',
                                headers : header,
                                data : form
                            });

                            if (result.data.statusCode == 200)
                            {
                                Swal.fire(
                                    'Successful',
                                    result.data.message,
                                    'success'
                                ).then(()=>{

                                    // clean up
                                    [].forEach.call(allInputs, (input)=>{
                                        input.value = '';
                                    });

                                    // reload
                                    location.reload();

                                }); 
                                
                            }
                            else
                            {
                                Swal.fire(
                                    'Submission failed',
                                    result.data.message,
                                    'error'
                                );
                            }
                        }
                        catch(e)
                        {
                            if (typeof e.response != 'undefined')
                            {
                                Swal.fire(
                                    'Submission failed',
                                    e.response.data.message,
                                    'error'
                                );
                            }
                            else
                            {
                                Swal.fire(
                                    'The Internet?',
                                    'This can be an issue with your internet connection or a fault from the server. Can you check your network and try again?',
                                    'question'
                                );
                            }
                        }
                    }
                }
                
            });
        }
    })()
};


function networkError()
{
    Swal.fire(
        'The Internet?',
        'This can be an issue with your internet connection or a fault from the server. Can you check your network and try again?',
        'question'
    );
}

function capitalizeString(str)
{
    const arr = str.split(" ");

    //loop through each element of the array and capitalize the first letter.

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }

    //Join all the elements of the array back into a string 
    //using a blankspace as a separator 
    return arr.join(" ");
}

}