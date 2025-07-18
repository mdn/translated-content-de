---
title: webRequest.StreamFilter.onstop
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onstop
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein Ereignishandler, der aufgerufen wird, wenn der Stream keine Daten mehr zur Verfügung hat. Im Ereignishandler können Sie weiterhin Filterfunktionen wie {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}, {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}, oder {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}} aufrufen.

## Beispiele

Dieses Beispiel wird "extra stuff" an die Antwort anhängen:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();

  filter.ondata = (event) => {
    // pass through all the response data
    filter.write(event.data);
  };

  filter.onstop = (event) => {
    filter.write(encoder.encode("extra stuff"));
    filter.disconnect();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"],
);
```

Hier ist eine andere Version des obigen Beispiels:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = (event) => {
    for (const buffer of data) {
      filter.write(buffer);
    }
    filter.write(encoder.encode("extra stuff"));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
