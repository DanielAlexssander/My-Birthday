(function () {
    let date = new Date()
    const birthDay = document.querySelector("#date")
    let currentDate = date.getDate()
    let currentMonth = date.getMonth()
    let currentYear = date.getFullYear()
    let [day, month, year] = birthDay.innerHTML.split("/")
    
    if (currentMonth >= month - 1 && currentDate >= day) {
        currentYear = date.getFullYear() + 1
        currentYears = 2005
        
    } else {
        currentYear = date.getFullYear()
        currentYears = 2006
    }


    birthDay.innerHTML += `${currentYear}`
    const ass = document.querySelector(".ass")
    const old = document.createElement("span")
    ass.appendChild(old)
    let currentYearOld = date.getFullYear()
    let yearsOld = currentYearOld - currentYears
    old.textContent = `, ${yearsOld} anos`

    function getDate() {
        [day, month, year] = birthDay.innerHTML.split("/")
        return new Date(year, month - 1, day)
    }
    let dateEvent = getDate(birthDay)

    const ONE_MINUTE = 60 * 1000
    const ONE_HOUR = 60 * ONE_MINUTE
    const ONE_DAY = 24 * ONE_HOUR
    

    const leftId = document.querySelector("#left")
    const timeLeft = document.createElement("span")
    leftId.appendChild(timeLeft)
    function addLeftTime(d, h, m, s) {
        timeLeft.textContent = ` ${d} dias, ${h} horas, ${m} minutos, ${s} segundos`
    }

    function updateDate() {
        date = new Date()
        left = dateEvent.getTime() - date.getTime()
        const daysLeft = parseInt(left / ONE_DAY)
        left = left - daysLeft * ONE_DAY

        const hoursLeft = parseInt(left / ONE_HOUR)
        left = left - hoursLeft * ONE_HOUR

        const minutesLeft = parseInt(left / ONE_MINUTE)
        left = left - minutesLeft * ONE_MINUTE

        const secondsLeft = parseInt(left / 1000)

        addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft)
    }
    updateDate()

    setInterval(updateDate, 1000)
})()