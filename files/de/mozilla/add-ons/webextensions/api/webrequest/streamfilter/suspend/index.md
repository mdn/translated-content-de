---
title: webRequest.StreamFilter.suspend()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/suspend
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Pausiert eine Anfrage. Nachdem diese Methode aufgerufen wurde, werden keine Daten mehr geliefert, bis die Anfrage mit einem Aufruf von {{WebExtAPIRef("webRequest.StreamFilter.resume()", "resume()")}} fortgesetzt wird.

Sie können diese Funktion erst aufrufen, nachdem das Ereignis {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} ausgelöst wurde.

## Syntax

```js-nolint
filter.suspend()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Beispiele

Dieses Beispiel verwendet suspend/resume, um eine Webanfrage zu verzögern.

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    filter.suspend();

    setTimeout(() => {
      filter.resume();
      filter.disconnect();
    }, 1000);
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
