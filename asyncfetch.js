
// async function logName(name) {
//     log(name);
//     // we can yield promises using await
//     // this function returns a promise
//     const transformName = new Promise((resolve, reject) => {
//         setTimeout(() => resolve(name.toUpperCase()), 1000);
//     });
//     return await transformName;
// }
// logName('Sudipta').then(res => {
//     log(`async function returns ${res}`);
// });

const getRandomUsers = async n => {
    try {
        const fetchRandomUser = await fetch(`https://randomuser.me/api/?results=${n}`);
        const data = await fetchRandomUser.json();
        data.results
            .filter(female => female.gender.toLowerCase() == 'female')
            .forEach(element => {
                const { gender, email } = element;
                log(`${gender} - ${email}`);
            });
        return data;
    } catch (err) {
        log(err);
    }
};
getRandomUsers(30);