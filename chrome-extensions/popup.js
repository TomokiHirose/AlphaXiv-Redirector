document.addEventListener('DOMContentLoaded', () => {
  const enabledSwitch = document.getElementById('enabledSwitch');

  chrome.storage.sync.get('enabled', ({ enabled }) => {
    enabledSwitch.checked = enabled;
  });

  enabledSwitch.addEventListener('change', () => {
    chrome.storage.sync.set({ enabled: enabledSwitch.checked });
  });
});
