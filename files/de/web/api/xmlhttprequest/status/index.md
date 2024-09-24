---
title: "XMLHttpRequest: status Eigenschaft"
short-title: status
slug: Web/API/XMLHttpRequest/status
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die schreibgeschützte **`XMLHttpRequest.status`** Eigenschaft gibt den numerischen HTTP-[Statuscode](/de/docs/Web/HTTP/Status) der Antwort des `XMLHttpRequest` zurück.

Bevor die Anfrage abgeschlossen ist, hat `status` den Wert 0. Browser geben auch einen Status von 0 zurück, wenn `XMLHttpRequest`-Fehler auftreten.

## Wert

Eine Zahl.

## Beispiele

```js
const xhr = new XMLHttpRequest();
console.log("UNSENT: ", xhr.status);

xhr.open("GET", "/server");
console.log("OPENED: ", xhr.status);

xhr.onprogress = () => {
  console.log("LOADING: ", xhr.status);
};

xhr.onload = () => {
  console.log("DONE: ", xhr.status);
};

xhr.send();

/**
 * Gibt Folgendes aus:
 *
 * UNSENT: 0
 * OPENED: 0
 * LOADING: 200
 * DONE: 200
 */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Liste der [HTTP-Statuscodes](/de/docs/Web/HTTP/Status)
- [HTTP](/de/docs/Web/HTTP)
