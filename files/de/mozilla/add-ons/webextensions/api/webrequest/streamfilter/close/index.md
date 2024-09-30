---
title: webRequest.StreamFilter.close()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/close
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Schließt die Anfrage. Nachdem dies aufgerufen wurde, werden keine weiteren Antwortdaten an die Rendering-Engine des Browsers übermittelt und keine weiteren Filterereignisse an die Erweiterung gegeben.

Beachten Sie den Unterschied zwischen dieser Funktion und {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}. Mit `disconnect()` wird der Browser fortfahren, weitere Antwortdaten zu verarbeiten, aber sie werden nicht über den Filter zugänglich sein. Mit `close()` wird der Browser alle Antwortdaten ignorieren, die noch nicht an die Rendering-Engine übergeben wurden.

Sie sollten immer `close()` oder `disconnect()` aufrufen, sobald Sie nicht mehr mit der Antwort interagieren müssen.

Sie können diese Funktion nicht aufrufen, bevor das Ereignis {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} ausgelöst wurde.

## Syntax

```js-nolint
filter.close()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel ersetzt den Seiteninhalt mit "replacement text":

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
