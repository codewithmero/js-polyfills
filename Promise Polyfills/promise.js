let basicPromise = new Promise((resolve, reject) => {
    if(true)
        resolve("Promise resolved");
});

basicPromise
    .then(val => console.log("Resolved Promise response:::", val))
    .catch(err => console.log("Rejected Promise response:::", err));