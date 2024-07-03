// เริ่มเขียนโค้ดตรงนี้ 
function printStar(n) {
    let finalResult = ""
    for (let i = 1; i<=n; i++) {
    let result = ""
    let row = "*"
    for (let j = 1; j<=i; j++) {
        result += row + "\t"
    }
    finalResult += result + "\n"
   }
   return finalResult
}

console.log(printStar(5))