function sortArray(arr) { // กำหนดและเรียกใช้ funtion เรียงลำดับจาก array จากน้อยไปมาก
    return arr.sort(function (a, b) { // return หมายถึงเรียกใช้  arr.sort หมายถึงเรียงลำดับ  a,b คือแทนค่า
        return a-b;  // return คือ เรียกใช้คำสั่ง  เรียง จาก a-b
    });
}
console.log(sortArray([2, -2,-4, 10000, 4,0 ]));  // แสดงตัวเลขที่อยู่ใน array โดยจะเรียงจากมากไปน้อย