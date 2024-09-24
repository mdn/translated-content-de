---
title: webRequest.StreamFilter.disconnect()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/disconnect
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Unterbricht den Filter von der Anfrage. Danach wird der Browser die Antwort weiterhin bearbeiten, aber es werden keine weiteren Filterereignisse ausgelöst und keine weiteren Filterfunktionen werden eine Wirkung haben. Beachten Sie den Unterschied zwischen dieser Funktion und {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}. Bei `disconnect()` wird der Browser weiterhin alle weiteren Antwortdaten verarbeiten, aber sie werden nicht durch den Filter zugänglich sein. Bei `close()` ignoriert der Browser alle Antwortdaten, die noch nicht an die Rendering-Engine weitergeleitet wurden.

Sie sollten stets `disconnect()` oder `close()` aufrufen, sobald Sie nicht mehr mit der Antwort interagieren müssen.

Diese Funktion kann erst aufgerufen werden, nachdem das {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} Ereignis ausgelöst wurde.

## Syntax

```js-nolint
filter.disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel wird den "Einleitungstext" an den Antwortkörper voranstellen. Danach wird die Verbindung getrennt, sodass der ursprüngliche Antwortkörper normal geladen wird:

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
