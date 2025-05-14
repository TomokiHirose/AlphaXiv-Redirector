chrome.runtime.onInstalled.addListener(() => {
  console.log("AlphaXiv Redirector: Extension installed."); // インストールログ
  chrome.storage.sync.set({ enabled: true });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("AlphaXiv Redirector: Tab updated.", tabId, changeInfo, tab); // タブ更新ログ
  chrome.storage.sync.get("enabled", ({ enabled }) => {
    console.log("AlphaXiv Redirector: Storage 'enabled' status:", enabled); // 有効状態ログ
    if (enabled && changeInfo.url && changeInfo.url.startsWith("https://arxiv.org/")) {
      const newUrl = changeInfo.url.replace("https://arxiv.org/", "https://alphaxiv.org/");
      console.log("AlphaXiv Redirector: Redirecting to:", newUrl); // リダイレクト実行ログ
      chrome.tabs.update(tabId, { url: newUrl });
    }
  });
});