---
title: webRequest.StreamFilter.onstart
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onstart
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein Event-Handler, der aufgerufen wird, wenn der Stream geöffnet wird und beginnt, Daten zu liefern. Ab diesem Punkt kann die Erweiterung Filterfunktionen wie {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}, {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}} oder {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}} verwenden.

## Beispiele

Dieses Beispiel ersetzt den Seiteninhalt durch "replacement text":

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    console.log("started");
    let encoder = new TextEncoder();
    filter.write(encoder.encode("replacement content"));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.org/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
