---
title: webRequest.StreamFilter.disconnect()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/disconnect
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Trennt den Filter von der Anfrage. Danach wird der Browser die Antwort weiterhin verarbeiten, aber es werden keine Filterereignisse mehr ausgelöst, und keine weiteren Filterfunktionsaufrufe werden eine Wirkung haben. Beachten Sie den Unterschied zwischen dieser Funktion und {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}. Mit `disconnect()` wird der Browser jegliche weitere Antwortdaten verarbeiten, jedoch werden sie nicht mehr durch den Filter zugreifbar sein. Mit `close()` ignoriert der Browser alle Antwortdaten, die nicht bereits an die Rendering-Engine weitergeleitet wurden.

Sie sollten immer `disconnect()` oder `close()` aufrufen, sobald Sie nicht mehr mit der Antwort interagieren müssen.

Diese Funktion kann erst aufgerufen werden, nachdem das {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}}-Ereignis ausgelöst wurde.

## Syntax

```js-nolint
filter.disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keiner.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel fügt "Einleitungstext" an den Antwortkörper an. Es trennt dann die Verbindung, sodass der Original-Antwortkörper normal geladen wird:

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
