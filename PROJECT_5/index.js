let countEl = document.getElementById("count-el");
let countEle = document.getElementById("count-ele");
let countEel = document.getElementById("count-eel");
let count = 0;
let count1=0

// function increment() 
// {
//     count += 1;
//     countEl.textContent = count;
//     NOM();
// }

function increment() 
{
    count += 1;
    count1+=1;
    countEl.textContent = count;
    let mala = Math.floor(count / 108);
    countEle.textContent = mala;
    countEel.textContent = count - mala*108;;
}

// function NOM() 
// {
//     let mala =Math.floor(count / 108);
//     countEle.textContent = mala;
// }

// function CC() 
// {
//     countEel.textContent = count1;

//     if (count1 > 8) {
//         countEel.textContent = 0;
//     }
// }
