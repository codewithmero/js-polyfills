// resolved all the pending promises at once (they'd either be resolved or rejected!)
function asyncProvider(time) {
    return new Promise((resolve, reject) => {
        if(time === 2000)
            reject(time);
        else
            resolve(time);
    });
}

let promises = [asyncProvider(1000), asyncProvider(2000), asyncProvider(3000)];

const myPromiseRace = (promises) => {

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise
                .then(resolve, reject)
                .catch(reject)
        });
    });
}

myPromiseRace(promises)
    .then(val => console.log(val))
    .catch(err => console.log(err));