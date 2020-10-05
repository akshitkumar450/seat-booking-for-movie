let avail = document.querySelectorAll('.seats:not(.occupy)')
let count = document.querySelector('#count')
let total = document.querySelector('#total')
let choose = document.querySelector('#choose')

let price = parseInt(choose.value);

function updateprice() {
    let selectedSeats = document.querySelectorAll('.row .seats.selected')

    let mp=[...selectedSeats]
    console.log(mp)
    
    total.textContent = selectedSeats.length * price;
    count.textContent = selectedSeats.length;
}

choose.addEventListener('change', (e) => {
    price = parseInt(choose.value);
    updateprice()
})

for (let i = 0; i < avail.length; i++) {
    avail[i].addEventListener('click', (e) => {
        if (e.target.classList.contains('seats') && !(e.target.classList.contains('occupy'))) {
            e.target.classList.toggle('selected')
            updateprice();
        }
    })
}


// let cnt;

// function price() {
//     let val = parseInt(choose.value)
//     total.textContent = cnt * val;
//     count.textContent = cnt;
// }
// function change(){
//     choose.onchange=function(){
//         price()
//     }
// }

// for (let i = 0; i < avail.length; i++) {
//     cnt = 0
//     avail[i].addEventListener('click', (e) => {
//         cnt++;
//         e.target.classList.add('selected')

//         let index=[0,1,2,3];
//         for(let i=0;i<index.length;i++){
//             if(choose.selectedIndex===index[i]){
//                 price();
//                 change();
//             }
//         }

//         // if (choose.selectedIndex === parseInt('0')) {
//         //     price();
//         //     change();
//         // }
//         // if (choose.selectedIndex === parseInt('1')) {
//         //     price();
//         //     change();
//         // }
//         // if (choose.selectedIndex === parseInt('2')) {
//         //     price();
//         //     change();
//         // }
//         // if (choose.selectedIndex === parseInt('3')) {
//         //     price();
//         //     change();
//         // }
//     })
// }




