
const regularPay = (gross, bonus) => gross + bonus;
const contractPay = (gross, bonus = 0) => gross + bonus;
const executivePay = (gross,
    bonus = { teamBonus: 0, marketShare: 0 }) =>
    gross + bonus.teamBonus + bonus.marketShare;
log('Regular Pay : (20000,5000) -> ' + regularPay(20000, 5000));
log('Contract Pay : (20000) -> ' + contractPay(20000));
log('Contract Pay : (20000,5000) -> ' + contractPay(20000, 5000));
log('Executive Pay : (20000,5000,2000) -> '
    + executivePay(20000, { teamBonus: 5000, marketShare: 2000 }));