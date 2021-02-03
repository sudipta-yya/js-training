const namePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(['Sudipta', 'Sourav', 'Misty']), 2500);
    setTimeout(() => reject('No Name from Server'), 3000);
});
const titlePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(['Bhattacharyya', 'Bhattacharjee', 'Ganguly']), 2500);
    setTimeout(() => reject('No Title from server'), 3000);
});
// namePromise.then(data => log(data)).catch(error => log(error));
Promise.all([namePromise, titlePromise])
    .then(data => {
        // data.forEach(promiseData => {
        //     const [name, title] = promiseData;
        //     log(`${name} ${title}`);
        // });
        const [name, title] = data;
        for (let index = 0; index < name.length; index++) {
            const names = name[index];
            const titles = title[index];
            log(`${names} ${titles}`);
        }
    })
    .catch(error => log(error));