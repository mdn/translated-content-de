---
title: webRequest.StreamFilter.close()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/close
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Schließt die Anfrage. Nachdem dies aufgerufen wurde, werden dem Rendering-Engine des Browsers keine weiteren Antwortdaten mehr übergeben, und es werden keine weiteren Filterereignisse an die Erweiterung gesendet.

Beachten Sie den Unterschied zwischen dieser Funktion und {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}. Mit `disconnect()` wird der Browser die weiteren Antwortdaten weiterhin verarbeiten, aber sie werden über den Filter nicht zugänglich sein. Mit `close()` wird der Browser alle Antwortdaten ignorieren, die noch nicht an das Rendering-Engine übergeben wurden.

Sie sollten immer `close()` oder `disconnect()` aufrufen, wenn Sie nicht weiter mit der Antwort interagieren müssen.

Sie können diese Funktion erst aufrufen, nachdem das Ereignis {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} ausgelöst wurde.

## Syntax

```js-nolint
filter.close()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Beispiele

In diesem Beispiel wird der Seiteninhalt durch "replacement text" ersetzt:

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
