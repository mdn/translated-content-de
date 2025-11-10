---
title: webRequest.StreamFilter.disconnect()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/disconnect
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Trennt den Filter von der Anfrage. Danach wird der Browser die Antwort weiterverarbeiten, aber es werden keine weiteren Filter-Ereignisse ausgelöst und keine weiteren Filter-Funktionsaufrufe haben einen Effekt. Beachten Sie den Unterschied zwischen dieser Funktion und {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}. Mit `disconnect()` wird der Browser alle weiteren Antwortdaten weiterhin verarbeiten, aber sie werden durch den Filter nicht mehr zugänglich sein. Bei `close()` wird der Browser alle Antwortdaten ignorieren, die noch nicht an die Rendering-Engine übergeben wurden.

Sie sollten immer `disconnect()` oder `close()` aufrufen, sobald Sie nicht mehr mit der Antwort interagieren müssen.

Sie können diese Funktion erst aufrufen, nachdem das Ereignis {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} ausgelöst wurde.

## Syntax

```js-nolint
filter.disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keiner.

## Beispiele

Dieses Beispiel fügt dem Antwortkörper "preface text" voran. Anschließend wird disconnect ausgeführt, sodass der ursprüngliche Antwortkörper normal geladen wird:

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    console.log("started");
    let encoder = new TextEncoder();
    filter.write(encoder.encode("preface text"));
    filter.disconnect();
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
