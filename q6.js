function findMax(arr) {
    if (arr.length === 0) {
        return null; // ถ้าอาร์เรย์ว่าง
    }

    let max = arr[0]; // สมมติว่าตัวแรกคือค่ามากที่สุด

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // ถ้าตัวปัจจุบันมากกว่า max → อัพเดต max
        }
    }

    return max;
}

// ตัวอย่างการใช้งาน
console.log(findMax([3, 7, 2, 9, 5])); // 9
console.log(findMax([-2, -5, -1]));    // -1
