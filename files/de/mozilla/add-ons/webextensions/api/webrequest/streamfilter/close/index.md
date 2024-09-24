---
title: webRequest.StreamFilter.close()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/close
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Schließt die Anfrage. Nachdem dies aufgerufen wurde, werden keine weiteren Antwortdaten an die Rendering-Engine des Browsers weitergeleitet, und es werden keine weiteren Filter-Ereignisse an die Erweiterung übergeben.

Beachten Sie den Unterschied zwischen dieser Funktion und {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}. Bei `disconnect()` wird der Browser weiterhin alle weiteren Antwortdaten verarbeiten, aber sie sind nicht über den Filter zugänglich. Bei `close()` ignoriert der Browser alle Antwortdaten, die noch nicht an die Rendering-Engine weitergegeben wurden.

Sie sollten immer `close()` oder `disconnect()` aufrufen, sobald Sie nicht mehr mit der Antwort interagieren müssen.

Diese Funktion kann nicht aufgerufen werden, bis das Ereignis {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} ausgelöst wurde.

## Syntax

```js-nolint
filter.close()
```

### Parameter

Keine.

### Rückgabewert

Keiner.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel ersetzt den Seiteninhalt durch "replacement content":

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
