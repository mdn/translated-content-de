---
title: webRequest.StreamFilter.disconnect()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/disconnect
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Trennt den Filter von der Anfrage. Danach wird der Browser die Antwort weiterhin verarbeiten, aber es werden keine weiteren Filterereignisse ausgelöst, und keine weiteren Filterfunktionsaufrufe haben einen Effekt. Beachten Sie den Unterschied zwischen dieser Funktion und {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}. Bei `disconnect()` wird der Browser weiterhin alle weiteren Antwortdaten verarbeiten, aber sie sind über den Filter nicht mehr zugänglich. Bei `close()` ignoriert der Browser jegliche Antwortdaten, die noch nicht an die Rendering-Engine weitergeleitet wurden.

Sie sollten immer `disconnect()` oder `close()` aufrufen, sobald Sie nicht mehr mit der Antwort interagieren müssen.

Diese Funktion kann nicht aufgerufen werden, bevor das {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}}-Ereignis ausgelöst wurde.

## Syntax

```js-nolint
filter.disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Beispiele

Dieses Beispiel wird dem Antwortkörper "Preface text" voranstellen. Es wird dann getrennt, sodass der ursprüngliche Antwortkörper normal geladen wird:

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
