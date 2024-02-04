// resolved all the pending promises at once (they'd either be resolved or rejected!)
function asyncProvider(time) {
    return new Promise((resolve, reject) => {
        if(time === 1000)
            reject(time);
        else
            resolve(time);
    });
}

let promises = [asyncProvider(1000), asyncProvider(2000), asyncProvider(3000)];

const myPromiseAny = (promises) => {
    let rejectedPromiseArray = [];
    let rejectedPromiseCount = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise
                .then(p => resolve(p))
                .catch(err => {
                    rejectedPromiseArray[index] = err;
                    rejectedPromiseCount++;
                    
                    if(rejectedPromiseCount === promises.length)
                        reject(rejectedPromiseArray);
                })
        });
    });
}

myPromiseAny(promises)
    .then(val => console.log(val))
    .catch(err => console.log(err));