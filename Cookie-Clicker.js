//var clicksnd = new Audio("click-sound-effect.wav");

var addhtml

var cookies = 0

var cookiehtml = `<p>${cookies} Cookies<p>`

let perclick = 1

var cursorcost = 30

var grandmacost = 500

var farmcost = 5000

var factorycost = 50000

var bankcost = 65000

let persec = 0

const clicksper = document.querySelector('.clicksper')

var avghtml

var avghtml2

async function cookieintitle() {
    while (true) {
        await delay(1)
        document.title = `Cookie Clicker - ${cookies} Cookies`
    }
}

cookieintitle()

function displayavg() {
    avghtml = document.querySelector('.check3')

    avghtml2 = `<p>Average Cookies: ${average}</p>`

    avghtml.innerHTML = avghtml2
}



const allcookies = [];

var oldcookies = '';

var sum

var average

averages()

async function averages() {
    while (true) {
        oldcookies = cookies
        await delay(1000);
        
        if (oldcookies != cookies) {
            allcookies.push(oldcookies)
        }
        //console.log(allcookies);

        sum = 0;

        for (var i  = 0; i < allcookies.length; i++) {
     
        sum  += allcookies[i];
        
        average = (sum / allcookies.length).toFixed(2)

        console.log(average);
        }
    }
    
}

async function checkaverage() {
    if (average != 'undefined') {
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "info",
            title: 'Your Average amount of Cookies is ' + average + ' cookies'
            });
            await delay(1000);
    }
    else if (average = 'undefined') {
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "info",
            title: 'Your Average amount of Cookies is ' + 0 + ' cookies'
            });
            await delay(1000);
    }
}

console.log(typeof allcookies)

let persecHTML

var grabpersechtml = '123';

//while (true) {
    persecHTML = `<span class="check1" onclick="persecs()">${persec} Cookies per Second</span>`
    console.log('saved inside a variable');

    grabpersechtml = document.querySelector('.check1');
    console.log('grabbed html ➜ ' + grabpersechtml);

    grabpersechtml = 'dfdf';

    grabpersechtml.innerHTML = persecHTML
    console.log('html displayed on the page');
//}


//clicksper.innerHTML = `<p>hello</p>`

function cookieadd() {
    cookies += perclick

    cookiehtml = `<p id="results">${Math.round(cookies)} Cookies<p>`

    addhtml = document.querySelector('.cookiecount')

    addhtml.innerHTML = cookiehtml

    //console.log('The Cookie has been Clicked');

    //clicksnd.play();
}

function cursor() {
    if (cookies >= cursorcost) {
        cookies -= cursorcost
        perclick += 1
        cursorcost *= 1.5
        cookies = Math.round(cookies)
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "success",
            title: 'Purchase Successful!'
            });
            cookiehtml = `<p id="results">${cookies} Cookies<p>`
            addhtml.innerHTML = cookiehtml
    }
    else {
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "error",
            title: 'This product costs ' + Math.round(cursorcost) + ' Cookies. You will need ' + Math.round(cursorcost - cookies) + ' more Cookies'
            });
    }
}

/*
while (true) {
    Math.round(cookies)
}
*/

function checkcursorcost() {
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
        }
        });
        Toast.fire({
        icon: "info",
        title: 'Cursor costs ' + Math.round(cursorcost) + ' Cookies'
        });
}

function grandma() {
    if (cookies >= grandmacost) {
        cookies -= grandmacost
        persec += 2
        grandmacost *= 1.5
        cookies = Math.round(cookies)
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "success",
            title: 'Purchase Successful!'
            });
            cookieadd2()
    }
    else {
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "error",
            title: 'This product costs ' + Math.round(grandmacost) + ' Cookies. You will need ' + Math.round(grandmacost - cookies) + ' more Cookies'
            });
    }
}

function checkgrandmacost() {
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
        }
        });
        Toast.fire({
        icon: "info",
        title: 'Grandma costs ' + Math.round(grandmacost) + ' Cookies'
        });
}

function perclicks() {
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
        }
        });
        Toast.fire({
        icon: "info",
        title: 'You have ' + perclick + ' Cookies per click'
        });
}

async function cookieadd2() {
    while (true) {
        cookiehtml = `<p id="results">${Math.round(cookies)} Cookies<p>`
        await delay(1000 / persec);
        cookies += 1;
        cookiehtml = `<p id="results">${Math.round(cookies)} Cookies<p>`
        addhtml.innerHTML = cookiehtml
    }
    
}

function persecs() {
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
        }
        });
        Toast.fire({
        icon: "info",
        title: 'You have ' + persec + ' Cookies per second'
        });
}

function farm() {
    if (cookies >= farmcost) {
        cookies -= farmcost
        perclick *= 1.25
        farmcost *= 1.5
        cookies = Math.round(cookies)
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "success",
            title: 'Purchase Successful!'
            });
            cookiehtml = `<p id="results">${Math.round(cookies)} Cookies<p>`
    }
    else {
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "error",
            title: 'This product costs ' + Math.round(farmcost) + ' Cookies. You will need ' + Math.round(farmcost - cookies) + ' more Cookies'
            });
    }
}
    function checkfarmcost() {
        const Toast = Swal.mixin({
                toast: true,
                position: "bottom",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
                }
                });
                Toast.fire({
                icon: "info",
                title: 'Farm costs ' + Math.round(farmcost) + ' Cookies'
                });
        }

function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function factory() {
    if (cookies >= factorycost) {
        cookies -= factorycost
        persec *= 1.25
        factorycost *= 1.5
        cookies = Math.round(cookies)
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "success",
            title: 'Purchase Successful!'
            });
            cookieadd2()
    }
    else {
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "error",
            title: 'This product costs ' + Math.round(factorycost) + ' Cookies. You will need ' + Math.round(factorycost - cookies) + ' more Cookies'
            });
    }
}

function checkfactorycost() {
    const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "info",
            title: 'Factory costs ' + Math.round(factorycost) + ' Cookies'
            });
    }

function bank() {
    if (cookies >= bankcost) {
        cookies -= bankcost
        perclick += 20
        bankcost *= 1.5
        cookies = Math.round(cookies)
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "success",
            title: 'Purchase Successful!'
            });
            cookiehtml = `<p id="results">${Math.round(cookies)} Cookies<p>`
    }
    else {
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "error",
            title: 'This product costs ' + Math.round(bankcost) + ' Cookies. You will need ' + Math.round(bankcost - cookies) + ' more Cookies'
            });
    }
}

function checkbankcost() {
    const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "info",
            title: 'Bank costs ' + Math.round(bankcost) + ' Cookies'
            });
    }
