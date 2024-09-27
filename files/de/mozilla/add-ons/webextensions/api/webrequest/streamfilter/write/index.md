---
title: webRequest.StreamFilter.write()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/write
l10n:
  sourceCommit: 2de85adef3b988bf47549446b2254a7f533b7649
---

{{AddonSidebar}}

Schreibt einige Antwortdaten in den Ausgabestream.

Sie können diese Funktion nur nach dem Auslösen des {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}}-Ereignisses aufrufen.

## Syntax

```js-nolint
filter.write(
  data    // ArrayBuffer or Uint8Array
)
```

### Parameter

- `data`
  - : [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) oder [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer): Array von Bytes, das die Daten enthält, die an die Rendering-Engine des Browsers übergeben werden sollen.

### Rückgabewert

Keiner.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel verwendet `write()`, um "Example" im ersten Abschnitt der Antwort durch "WebExtension Example" zu ersetzen.

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

  //return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
