function checkShift() {
  const input = document.getElementById("dateInput").value;

  if (!input) {
    alert("請選擇日期");
    return;
  }

  const selectedDate = new Date(input);

  // 基準日期：2026-06-24 (星期三)
  const baseDate = new Date("2026-06-24");

  // 相差天數
  const diffTime = selectedDate - baseDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // 算第幾週
  const weekNumber = Math.floor(diffDays / 7);

  // 星期幾 (0=星期日, 1=星期一...)
  const day = selectedDate.getDay();

  let isWorking = false;

  if (weekNumber % 2 === 0) {
    // Week A：只做星期三、四
    if (day === 3 || day === 4) {
      isWorking = true;
    }
  } else {
    // Week B：休星期三、四
    if (day !== 3 && day !== 4) {
      isWorking = true;
    }
  }

  const result = document.getElementById("result");

  if (isWorking) {
    result.innerHTML = "✅ 今天做工";
  } else {
    result.innerHTML = "😴 今天 OFF DAY";
  }
}
