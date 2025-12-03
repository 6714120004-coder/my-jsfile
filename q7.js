function isPalindrome(word) {
    // แปลงคำเป็นอาร์เรย์, reverse, แล้ว join กลับเป็นสตริง
    const reversed = word.split('').reverse().join('');

    // เปรียบเทียบกับคำเดิม
    return word === reversed;
}

// ตัวอย่างการใช้งาน
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
