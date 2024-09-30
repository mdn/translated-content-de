---
title: webRequest.StreamFilter.onstart
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onstart
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein Ereignishandler, der aufgerufen wird, wenn der Stream geöffnet wird und kurz davor steht, Daten zu liefern. Von diesem Punkt an kann die Erweiterung Filterfunktionen wie {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}, {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}} oder {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}} verwenden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel wird den Seiteninhalt mit "replacement text" ersetzen:

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
