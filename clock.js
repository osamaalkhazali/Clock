
    setInterval(() => {
        let date = new Date()
        let today0 = new Date()
        today0.setHours(0)
        today0.setMinutes(0)
        today0.setSeconds(0)
        let hour = (date - today0) / 1000 / 60 / 60 
        let sec = (date - today0) / 1000 
        let min = (date - today0) / 1000 / 60

    let s = document.querySelector(".s")
    let secmove = (sec * 6) - 90
    s.style.cssText = `transform: translate(0,-2.5px) rotate(${secmove}deg);`

    let m = document.querySelector(".m")
    let minmove = Math.floor((min * 6) - 90)
    m.style.cssText = `transform: translate(0,-5px) rotate(${minmove}deg);`

    let h = document.querySelector(".h")
    let hourmove = -90 + (30 * hour)
    h.style.cssText = `transform: translate(0,-7.5px) rotate(${hourmove}deg);`

        
        let c = document.querySelector(".c")
        if (hour < 12 ) {
            c.textContent = "AM"
        } else {
            c.textContent = "PM"
        }
        
        
    }, 1000) 
    


