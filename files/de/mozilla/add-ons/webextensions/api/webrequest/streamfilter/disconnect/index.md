---
title: webRequest.StreamFilter.disconnect()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/disconnect
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Trennt den Filter von der Anfrage. Danach wird der Browser die Antwort weiterhin verarbeiten, aber es werden keine weiteren Filterereignisse ausgelöst, und keine weiteren Filterfunktionen haben eine Wirkung. Beachten Sie den Unterschied zwischen dieser Funktion und {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}. Mit `disconnect()` wird der Browser weiterhin alle weiteren Antwortdaten verarbeiten, diese sind jedoch nicht mehr über den Filter zugänglich. Mit `close()` ignoriert der Browser alle Antwortdaten, die noch nicht an die Rendering-Engine übergeben wurden.

Sie sollten immer `disconnect()` oder `close()` aufrufen, sobald Sie nicht mehr mit der Antwort interagieren müssen.

Sie können diese Funktion erst aufrufen, nachdem das {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}}-Ereignis ausgelöst wurde.

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

Dieses Beispiel wird "Preface Text" an den Antwortkörper anfügen. Es trennt dann die Verbindung, sodass der ursprüngliche Antwortkörper normal geladen wird:

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
