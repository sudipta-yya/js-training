
const getUser = () => {
    return {
        name: 'Sudipta',
        surname: 'Bhattacharyya',
        gender: 'M',
        address: {
            country: 'India',
            state: 'West Bengal',
            pincode: 743123,
            details: {
                holdingno: 26,
                street: 'Thakurpara Road',
                landmark: 'Bhatpara Baroary Ground'
            }
        }
    }
};

const user = getUser();

// const myName = user.name;
// const myCountry = user.address.country;
// const myLandmark = user.address.details.landmark;

const { name: myName, address: { country: myCountry }, address: { details: { landmark: myLandmark } } } = user;

log(myName);
log(myCountry);
log(myLandmark);

// developer.mozilla.org/js/destructuring assignment