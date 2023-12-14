const buttons = document.querySelectorAll('div[tabindex]:not([tabindex="-1"])');
for (let button of buttons) {
  if (button.textContent.includes('Following')) {
    button.click();
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}
