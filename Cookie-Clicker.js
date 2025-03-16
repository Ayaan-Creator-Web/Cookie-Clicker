//JSON.parse(localStorage.getItem('cookies'))

cookieadd2();

let cookies = JSON.parse(localStorage.getItem('cookies')) ? JSON.parse(localStorage.getItem('cookies')) : 0

var addhtml

var cookiehtml = `<p>${cookies} Cookies<p>`

let perclick = JSON.parse(localStorage.getItem('perclick')) ? JSON.parse(localStorage.getItem('perclick')) : 1

var cursorcost = JSON.parse(localStorage.getItem('cursorcost')) ? JSON.parse(localStorage.getItem('cursorcost')) : 30

var grandmacost = JSON.parse(localStorage.getItem('grandmacost')) ? JSON.parse(localStorage.getItem('grandmacost')) : 500

var farmcost = JSON.parse(localStorage.getItem('farmcost')) ? JSON.parse(localStorage.getItem('farmcost')) : 5000

var factorycost = JSON.parse(localStorage.getItem('factorycost')) ? JSON.parse(localStorage.getItem('factorycost')) : 50000

var bankcost = JSON.parse(localStorage.getItem('farmcost')) ? JSON.parse(localStorage.getItem('farmcost')) : 65000

let persec = JSON.parse(localStorage.getItem('persec')) ? JSON.parse(localStorage.getItem('persec')) : null

const clicksper = document.querySelector('.clicksper')

var avghtml

const allcookies = [];

var oldcookies = '';

var sum

var average

//averages()

var avghtml2

//console.log(typeof allcookies)

let persecHTML

var grabpersechtml = '123';

//while (true) {
    persecHTML = `<span class="check1" onclick="persecs()">${persec} Cookies per Second</span>`
    //console.log('saved inside a variable');

    grabpersechtml = document.querySelector('.check1');
    //console.log('grabbed html ➜ ' + grabpersechtml);

    grabpersechtml = 'dfdf';

    grabpersechtml.innerHTML = persecHTML
    //console.log('html displayed on the page');
//}


//clicksper.innerHTML = `<p>hello</p>`

async function cookieintitle() {
    while (true) {
        await delay(1)
        document.title = `Cookie Clicker - ${Math.round(cookies)} Cookies`
    }
}

cookieintitle()

function displayavg() {
    avghtml = document.querySelector('.check3')

    avghtml2 = `<p>Average Cookies: ${average}</p>`

    avghtml.innerHTML = avghtml2
}

function displaycookies() {
    var cookiecount = `${JSON.parse(localStorage.getItem('cookies'))} Cookies`? `${JSON.parse(localStorage.getItem('cookies'))} Cookies` : 0
    document.querySelector('.cookiecount').innerHTML = cookiecount
}

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

function cookieadd() {
    cookies += perclick

    localStorage.setItem('cookies', JSON.stringify(cookies));

    cookiehtml = `<p id="results">${Math.round(cookies)} Cookies<p>`

    addhtml = document.querySelector('.cookiecount')

    addhtml.innerHTML = cookiehtml

    localStorage.setItem('perclick', JSON.stringify(perclick));

    cookieadd2();

    //console.log('The Cookie has been Clicked');

    //clicksnd.play();
}

function wipeout() {
    Swal.fire({
        title: "Are you sure that you want to wipe out all your data?",
        showConfirmButton: true,
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Yes, please wipe out my data",
      }).then((result) => {
        if (result.isConfirmed) {

            //clear all data
            localStorage.clear()

            //refresh the page
            window.location.href = ""
        }
      });
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
            localStorage.setItem('perclick', JSON.stringify(perclick));
            localStorage.setItem('cursorcost', JSON.stringify(cursorcost));
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
            localStorage.setItem('grandmacost', JSON.stringify(grandmacost));
            localStorage.setItem('perclick', JSON.stringify(perclick));
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
        await delay(1);
        if (persec) {
            cookiehtml = `<p id="results">${Math.round(cookies)} Cookies<p>`
            await delay(1000 / persec);
            cookies += 1;
            cookiehtml = `<p id="results">${Math.round(cookies)} Cookies<p>`
            addhtml.innerHTML = cookiehtml
    
            localStorage.setItem('persec', JSON.stringify(persec));
        }
    }
    
}

function persecs() {
    if (persec) {
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
            icon: "info",
            title: 'You have ' + 0 + ' Cookies per second'
            });
    }
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
            localStorage.setItem('perclick', JSON.stringify(perclick));
            localStorage.setItem('farmcost', JSON.stringify(farmcost));
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
            localStorage.setItem('persec', JSON.stringify(persec));
            localStorage.setItem('factorycost', JSON.stringify(factorycost));
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
            localStorage.setItem('bankcost', JSON.stringify(bankcost));
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

async function refresh() {
    cookieadd2();
    //cookieadd2();
    //cursor()
    //grandma()
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom",
        showConfirmButton: false,
        timer: 400,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
        }
        });
        Toast.fire({
        title: 'Refreshing'
        });

        await delay(200);

        //window.location.href = "https://ayaan-creator-web.github.io/Cookie-Clicker/";
}
