// resolved all the pending promises at once (they'd either be resolved or rejected!)
function asyncProvider(time) {
    return new Promise((resolve, reject) => {
        resolve(time);
    });
}

let promises = [asyncProvider(1000), asyncProvider(2000), asyncProvider(3000)];

const myPromiseAll = (promises) => {
    let resolvedPromiseArray = [];
    let resolvedPromiseCount = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise
                .then(p => {
                    resolvedPromiseArray[index] = p;
                    resolvedPromiseCount++;
                    
                    if(resolvedPromiseCount === promises.length)
                        resolve(resolvedPromiseArray);
                })
                .catch(err => reject(err))
        });
    });
}

myPromiseAll(promises)
    .then(val => console.log(val))
    .catch(err => console.log(err));