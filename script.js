let count = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// 页面加载时初始化计数器显示
document.addEventListener("DOMContentLoaded", function() {
    updateCounter();
});

function increment() {
    count++;
    updateCounter("up");
}

function decrement() {
    count--;
    updateCounter("down");
}

function reset() {
    count = 0;
    updateCounter();
}

function updateCounter(changeType) {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = count;

    // 保存最新的计数器值到 localStorage
    localStorage.setItem('counter', count);

    // 添加动画效果
    if (changeType === "up") {
        counterElement.classList.add("change-up");
        setTimeout(() => counterElement.classList.remove("change-up"), 200);
    } else if (changeType === "down") {
        counterElement.classList.add("change-down");
        setTimeout(() => counterElement.classList.remove("change-down"), 200);
    }
}

function customStep() {
    const stepValue = parseInt(document.getElementById('step-value').value);
    if (!isNaN(stepValue)) {
        count += stepValue;
        updateCounter(stepValue > 0 ? "up" : "down");
    } else {
        alert("请输入有效的数字");
    }
}
