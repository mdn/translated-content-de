---
title: webRequest.StreamFilter.fehler
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/error
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein String, der eine Fehlermeldung enthält, nachdem das {{WebExtAPIRef("webRequest.StreamFilter.onerror", "onerror")}}-Ereignis ausgelöst wurde.

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

  //return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
