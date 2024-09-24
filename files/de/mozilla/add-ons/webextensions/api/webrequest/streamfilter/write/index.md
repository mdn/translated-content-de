---
title: webRequest.StreamFilter.write()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/write
l10n:
  sourceCommit: 2de85adef3b988bf47549446b2254a7f533b7649
---

{{AddonSidebar}}

Schreibt einige Antwortdaten in den Ausgabestream.

Diese Funktion kann nur aufgerufen werden, nachdem das {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}}-Ereignis ausgelöst wurde.

## Syntax

```js-nolint
filter.write(
  data    // ArrayBuffer or Uint8Array
)
```

### Parameter

- `data`
  - : [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) oder [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer): Byte-Array mit den Daten, die an die Rendering-Engine des Browsers übergeben werden sollen.

### Rückgabewert

Keine.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel verwendet `write()`, um "Example" im ersten Teil der Antwort durch "WebExtension Example" zu ersetzen.

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  filter.ondata = (event) => {
    let str = decoder.decode(event.data, { stream: true });
    // Ändern Sie jede Instanz von Example in der HTTP-Antwort
    // zu WebExtension Example.
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
