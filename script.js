function convertHexToDecimal() {
    const hexInput = document.getElementById("hexInput").value;
    const decimalResult = document.getElementById("decimalResult");

    try {
        const cleanedHex = hexInput.replace(/\s/g, "");
        const hexWithoutPrefix = cleanedHex.startsWith("0x") || cleanedHex.startsWith("0X") ? cleanedHex.substring(2) : cleanedHex;
        const upperCaseHex = hexWithoutPrefix.toUpperCase();

        if (!/^[0-9A-F]+$/.test(upperCaseHex)) {
            throw new Error("Invalid hexadecimal characters");
        }

        const decimalValue = BigInt("0x" + upperCaseHex);
        decimalResult.textContent = "Result: " + decimalValue.toString(10);
    } catch (error) {
        decimalResult.textContent = "Error: " + error.message;
    }
}

// 添加 Enter 键监听事件
const hexInput = document.getElementById("hexInput");
hexInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // 阻止默认的回车换行行为
        convertHexToDecimal();
    }
});
