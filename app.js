const btn = document.querySelector('button');

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
const movX = (element, amount, delay)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if (elRight + amount > bodyBoundary) {
                reject({status: 'Outside of the boundary'});
            } else {
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve({status: 'OK'});
            }
        }, delay);
    })
}
const movSize = 50
movX(btn, 200,1000)
    .then((res)=>movX(btn, movSize,1000))
    .then((res)=>movX(btn, movSize,1000))
    .then((res)=>movX(btn, movSize,1000))
    .then((res)=>movX(btn, movSize,1000))
    .then((res)=>movX(btn, movSize,1000))
    .then((res)=>movX(btn, movSize,1000))
    .then((res)=>movX(btn, movSize,1000))
    .then((res)=>movX(btn, movSize,1000))
    .then((res)=>movX(btn, movSize,1000))
    .then((res)=>movX(btn, movSize,1000))
    .then((res)=>movX(btn, movSize,1000))
    .then((res)=>movX(btn, movSize,1000))
    .catch(()=>{
        console.log('blocked - out of space')
    })
