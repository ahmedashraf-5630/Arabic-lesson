// كود ترحيب في الكونسول
console.log("مرحبًا بك في منصة العربية التعليمية!");

// عند الضغط على زر "ابدأ الدورة الآن"
document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // تغيير اللون عن طريق إضافة كلاس
      this.classList.add("clicked");

      // إظهار تنبيه
      alert("تم تسجيل دخولك إلى الدورة! ✨");
    });
  }
});
