function sumArray(arr) {
    let sum = 0; // ตัวแปรเก็บผลรวมเริ่มต้นที่ 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // บวกแต่ละตัวเลขเข้ากับ sum
    }

    return sum; // ส่งผลรวมกลับ
}

// ตัวอย่างการใช้งาน
console.log(sumArray([1, 2, 3, 4])); 
console.log(sumArray([5, 10, 15]));
