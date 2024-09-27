---
title: devtools.inspectedWindow.tabId
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/tabId
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die ID des {{WebExtAPIRef("tabs.Tab", "tab")}}, an den diese Instanz der Devtools angehängt ist, wird als Zahl dargestellt.

Diese kann an die Hintergrundseite der Erweiterung gesendet werden, sodass die Hintergrundseite die {{WebExtAPIRef("tabs")}} API verwenden kann, um mit dem Tab zu interagieren:

```js
// devtools-panel.js

const scriptToAttach = "document.body.innerHTML = 'Hi from the devtools';";

attachContentScriptButton.addEventListener("click", () => {
  browser.runtime.sendMessage({
    tabId: browser.devtools.inspectedWindow.tabId,
    script: scriptToAttach,
  });
});
```

```js
// background.js

function handleMessage(request, sender, sendResponse) {
  browser.tabs.executeScript(request.tabId, {
    code: request.script,
  });
}

browser.runtime.onMessage.addListener(handleMessage);
```

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API von Chromium.
