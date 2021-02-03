const getRandomUser = n => {
    const fetchRandomUser = fetch(`https://randomuser.me/api/?results=${n}`);
    fetchRandomUser.then(data => {
        data.json().then(retreivedData => {
            log(JSON.stringify(retreivedData).length);
            retreivedData.results
                .filter(female => female.gender == 'female')
                .forEach(loopData => {
                    const { gender, email } = loopData;
                    log(`${gender} - ${email}`);
                });
        });
    });
}
getRandomUser(30);