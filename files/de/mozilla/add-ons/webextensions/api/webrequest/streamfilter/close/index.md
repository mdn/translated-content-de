---
title: webRequest.StreamFilter.close()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/close
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Schließt die Anfrage. Nachdem diese Funktion aufgerufen wurde, werden keine weiteren Antwortdaten an die Rendering-Engine des Browsers übergeben, und es werden keine weiteren Filter-Ereignisse an die Erweiterung gesendet.

Beachten Sie den Unterschied zwischen dieser Funktion und {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}. Bei `disconnect()` wird der Browser weiterhin alle weiteren Antwortdaten verarbeiten, diese sind jedoch nicht mehr über den Filter zugänglich. Mit `close()` ignoriert der Browser alle Antwortdaten, die nicht bereits an die Rendering-Engine übergeben wurden.

Sie sollten immer `close()` oder `disconnect()` aufrufen, wenn Sie nicht mehr mit der Antwort interagieren müssen.

Sie können diese Funktion erst aufrufen, nachdem das {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}}-Ereignis ausgelöst wurde.

## Syntax

```js-nolint
filter.close()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Beispiele

Dieses Beispiel ersetzt den Seiteninhalt durch "replacement text":

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

## Browser-Kompatibilität

{{Compat}}
