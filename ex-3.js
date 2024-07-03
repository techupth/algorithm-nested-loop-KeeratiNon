// เริ่มเขียนโค้ดตรงนี้ 
function multiplicationTable(n) {
    let finalResult = ""
    for (let i = 1; i<=n; i++) {
        let row = ""
        for (let j = 1;j<=n;j++ ) {
            row += j*i + "\t"
        }
        finalResult += row + "\n"
    }
    return finalResult
}
// multiplicationTable(5)
console.log(multiplicationTable(5))