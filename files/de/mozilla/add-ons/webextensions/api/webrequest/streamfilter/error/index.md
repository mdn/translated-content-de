---
title: webRequest.StreamFilter.error
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/error
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{AddonSidebar}}

Ein String, der eine Fehlermeldung enthalten wird, nachdem das {{WebExtAPIRef("webRequest.StreamFilter.onerror", "onerror")}}-Ereignis ausgelöst wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel fügt einen {{WebExtAPIRef("webRequest.StreamFilter.onerror", "onerror")}}-Listener hinzu, der den Wert von `error` protokolliert.

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData("12345");

  filter.onerror = (event) => {
    console.log(`Error: ${filter.error}`);
  };

  // return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
