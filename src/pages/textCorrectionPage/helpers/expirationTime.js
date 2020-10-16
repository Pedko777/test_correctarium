//функция изминяющая время с учётом необходимого времени на перевод
export const expirationTime = ({ balance, dateNow}) => {
    do {
        if ( dateNow.day() === 0 ||  dateNow.day() === 6) {
            // console.log("воскресенье или суббота")
        dateNow.set(dateNow.add({day: 1}))
        } else if (dateNow.hour() >= 10 && dateNow.hour() <= 19) {
            // console.log("работаем с пн по пт с 10 до 19")
        const timeLeft = (18 - dateNow.hour()) * 60 + (60 - dateNow.hour())
        if (balance > timeLeft) {
            balance -= timeLeft;
            dateNow.set(dateNow.add({day: 1}));
            dateNow.set(dateNow.hour(10).minute(0))              
        } else {      
            dateNow.set(dateNow.add({minutes: balance}))
            balance = 0
        }
        } else {
                // console.log("не рабочее время")
            // dateNow.set(dateNow.add({day: 1}));
            dateNow.set(dateNow.hour(10).minute(0))
        }
    }
    while (balance !== 0 && dateNow.hour() >= 10 && dateNow.hour() <= 19)
}