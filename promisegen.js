
import { coroutine } from 'bluebird';


/* coding examples */
// const getRandomUsers = n => {
//     const fetchRandomUser = fetch(`https://randomuser.me/api/?results=${n}`);
//     fetchRandomUser.then(data => {
//         data.json().then(retreivedData => {
//             log(JSON.stringify(retreivedData).length);
//             retreivedData.results
//                 .filter(female => female.gender == 'female')
//                 .forEach(loopData => {
//                     const { gender, email } = loopData;
//                     log(`${gender} - ${email}`);
//                 });
//         });
//     });
// }
// getRandomUsers(30);

const getRandomUsers = coroutine(function* (n) {
    const fetchRandomUser = yield fetch(`https://randomuser.me/api/?results=${n}`);
    const data = yield fetchRandomUser.json();
    return data;
});
getRandomUsers(30).then(randomUsers => {
    randomUsers.results
        .filter(female => female.gender == 'female')
        .forEach(element => {
            const { gender, email } = element;
            log(`${gender} - ${email}`);
        });
}).catch(err => log);