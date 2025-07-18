---
title: webRequest.StreamFilter.write()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/write
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Schreibt einige Antwortdaten in den Ausgabestrom.

Sie können diese Funktion nur aufrufen, nachdem das Ereignis {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} ausgelöst wurde.

## Syntax

```js-nolint
filter.write(
  data    // ArrayBuffer or Uint8Array
)
```

### Parameter

- `data`
  - : [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) oder [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer): Array von Bytes, das die an die Rendering-Engine des Browsers zu übergebenden Daten enthält.

### Rückgabewert

Keiner.

## Beispiele

Dieses Beispiel verwendet `write()`, um "Example" im ersten Teil der Antwort durch "WebExtension Example" zu ersetzen.

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  filter.ondata = (event) => {
    let str = decoder.decode(event.data, { stream: true });
    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    str = str.replaceAll("Example", "WebExtension Example");
    filter.write(encoder.encode(str));
    filter.disconnect();
  };

  // return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
