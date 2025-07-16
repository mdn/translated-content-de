---
title: webRequest.StreamFilter.error
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/error
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein String, der eine Fehlermeldung enthält, nachdem das {{WebExtAPIRef("webRequest.StreamFilter.onerror", "onerror")}}-Ereignis ausgelöst wurde.

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

## Browser-Kompatibilität

{{Compat}}
