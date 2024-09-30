---
title: webRequest.StreamFilter.onerror
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onerror
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein Ereignishandler, der aufgerufen wird, wenn ein Fehler auftritt. Dies geschieht meist, wenn eine ungültige Anfrage-ID an {{WebExtAPIRef("webRequest.filterResponseData()")}} übergeben wurde.

Nach diesem Ereignis beinhaltet die Eigenschaft {{WebExtAPIRef("webRequest.StreamFilter.error")}} eine Nachricht, die weitere Informationen über den Fehler gibt.

Beachten Sie, dass dieses Ereignis **nicht** bei Netzwerkfehlern ausgelöst wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel fügt einen `onerror`-Listener hinzu, der den Wert von {{WebExtAPIRef("webRequest.StreamFilter.error")}} protokolliert.

```js
function listener(details) {
  // This example seems not useful because,
  // an extension would use "details.requestId"
  let filter = browser.webRequest.filterResponseData("12345");

  filter.onerror = (event) => {
    console.log(`Error: ${filter.error}`);
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"],
);
```

Dieses Beispiel verwendet kein `"blocking"`.

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onerror = (event) => {
    console.log(`Error: ${filter.error}`); // Error: Invalid request ID
  };
}

browser.webRequest.onBeforeRequest.addListener(listener, {
  urls: ["<all_urls>"],
  types: ["main_frame"],
});
```

{{WebExtExamples}}
