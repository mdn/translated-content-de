---
title: webRequest.StreamFilter.onerror
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onerror
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein Ereignishandler, der aufgerufen wird, wenn ein Fehler auftritt. Dies geschieht meist, weil eine ungültige Anforderungs-ID an {{WebExtAPIRef("webRequest.filterResponseData()")}} übergeben wurde.

Nachdem dieses Ereignis ausgelöst wurde, enthält die Eigenschaft {{WebExtAPIRef("webRequest.StreamFilter.error")}} eine Nachricht mit weiteren Informationen über den Fehler.

Beachten Sie, dass dieses Ereignis **nicht** bei Netzwerkfehlern ausgelöst wird.

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

## Browser-Kompatibilität

{{Compat}}
