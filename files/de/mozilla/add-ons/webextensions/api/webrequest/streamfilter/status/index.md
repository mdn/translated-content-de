---
title: webRequest.StreamFilter.status
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/status
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein String, der den aktuellen Status der Anfrage beschreibt. Er wird einer der folgenden Werte sein:

- `"uninitialized"`
  - : Der Filter ist nicht vollständig initialisiert. Keine Filterfunktionen dürfen aufgerufen werden.
- `"transferringdata"`
  - : Der zugrunde liegende Kanal überträgt derzeit Daten, die in einem oder mehreren {{WebExtAPIRef("webRequest.StreamFilter.ondata", "ondata")}}-Ereignissen an die Erweiterung geleitet werden. Die Erweiterung kann Filterfunktionen wie {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}, {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}} oder {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}} aufrufen.
- `"finishedtransferringdata"`
  - : Der zugrunde liegende Kanal hat das Übertragen von Daten abgeschlossen. In diesem Zustand kann die Erweiterung weiterhin Antwortdaten mit der {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}-Funktion des Filters schreiben.
- `"suspended"`
  - : Die Datenübertragung ist derzeit ausgesetzt. In diesem Zustand kann die Erweiterung die Anfrage fortsetzen, indem sie die {{WebExtAPIRef("webRequest.StreamFilter.resume()", "resume()")}}-Funktion des Filters aufruft und Antwortdaten mit der {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}-Funktion des Filters schreiben.
- `"closed"`
  - : Die Erweiterung hat die Anfrage geschlossen, indem sie die {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}-Funktion des Filters aufgerufen hat. Der Filter wird keine weiteren Ereignisse auslösen und die Erweiterung darf keine Filterfunktionen mehr aufrufen.
- `"disconnected"`
  - : Die Erweiterung hat den Filter durch Aufruf der {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}-Funktion des Filters von der Anfrage getrennt. Alle weiteren Daten werden direkt zugestellt, ohne den Filter zu durchlaufen. Der Filter wird keine weiteren Ereignisse auslösen und die Erweiterung darf keine Filterfunktionen mehr aufrufen.
- `"failed"`
  - : Ein Fehler ist aufgetreten und der Filter wurde von der Anfrage getrennt. Die Erweiterung kann eine Fehlermeldung in {{WebExtAPIRef("webRequest.StreamFilter.error", "error")}} finden und darf keine Filterfunktionen mehr aufrufen.

## Browser-Kompatibilität

{{Compat}}

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
