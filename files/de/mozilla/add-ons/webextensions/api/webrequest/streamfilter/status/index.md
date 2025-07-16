---
title: webRequest.StreamFilter.status
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/status
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein String, der den aktuellen Status der Anfrage beschreibt. Er wird einen der folgenden Werte haben:

- `"uninitialized"`
  - : Der Filter ist nicht vollständig initialisiert. Es dürfen keine Filterfunktionen aufgerufen werden.
- `"transferringdata"`
  - : Der zugrunde liegende Kanal überträgt derzeit Daten, die in einem oder mehreren {{WebExtAPIRef("webRequest.StreamFilter.ondata", "ondata")}}-Ereignissen an die Erweiterung weitergeleitet werden. Die Erweiterung kann Filterfunktionen wie {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}, {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}} oder {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}} aufrufen.
- `"finishedtransferringdata"`
  - : Der zugrunde liegende Kanal hat die Datenübertragung abgeschlossen. In diesem Zustand kann die Erweiterung immer noch Antwortdaten mit der {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}-Funktion des Filters schreiben.
- `"suspended"`
  - : Der Datentransfer ist derzeit ausgesetzt. In diesem Zustand kann die Erweiterung die Anfrage fortsetzen, indem sie die {{WebExtAPIRef("webRequest.StreamFilter.resume()", "resume()")}}-Funktion des Filters aufruft, und kann Antwortdaten mit der {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}-Funktion des Filters schreiben.
- `"closed"`
  - : Die Erweiterung hat die Anfrage geschlossen, indem sie die {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}-Funktion des Filters aufgerufen hat. Der Filter wird keine weiteren Ereignisse auslösen, und die Erweiterung darf keine Filterfunktionen aufrufen.
- `"disconnected"`
  - : Die Erweiterung hat den Filter von der Anfrage getrennt, indem sie die {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}-Funktion des Filters aufgerufen hat. Alle weiteren Daten werden direkt geliefert, ohne durch den Filter zu gehen. Der Filter wird keine weiteren Ereignisse auslösen, und die Erweiterung darf keine Filterfunktionen aufrufen.
- `"failed"`
  - : Ein Fehler ist aufgetreten und der Filter wurde von der Anfrage getrennt. Die Erweiterung kann eine Fehlermeldung in {{WebExtAPIRef("webRequest.StreamFilter.error", "error")}} finden und darf keine Filterfunktionen aufrufen.

## Beispiele

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  console.log(filter.status); // uninitialized

  filter.onstart = (event) => {
    console.log(filter.status); // transferringdata
  };

  filter.ondata = (event) => {
    console.log(filter.status); // transferringdata
    // pass through the response data
    filter.write(event.data);
  };

  filter.onstop = (event) => {
    console.log(filter.status); // finishedtransferringdata
    filter.disconnect();
    console.log(filter.status); // disconnected
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
