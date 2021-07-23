// Variables
const hour = document.querySelector(".hour")
const minute = document.querySelector(".min")
const second = document.querySelector(".sec")
console.log(second);

// Function
function analog() {
    let hours = new Date().getHours(); // yerel saati çekiyoruz.
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    // console.log(typeof sec);

    second.style.transform = `rotate(${180 + (sec * 6)}deg)`
    minute.style.transform = `rotate(${180 + (min * 6)}deg)`
    hour.style.transform = `rotate(${180 + (hours * 30)}deg)`

}

setInterval(analog, 1000)
// analog fonksiyonunu her 1000ms de çalıştır, oynat, döndür.


