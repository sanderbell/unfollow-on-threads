// Find all focusable `div` elements (except those with `tabindex="-1"`)
const buttons = document.querySelectorAll('div[tabindex]:not([tabindex="-1"])');
// Loop through each found button
for (let button of buttons) {
  // Check if the button's text contains "Following"
  if (button.textContent.includes('Following')) {
    // Click the button
    button.click();
    // Wait for 500 milliseconds (simulated delay)
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}
