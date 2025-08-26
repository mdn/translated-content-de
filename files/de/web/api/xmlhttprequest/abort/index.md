---
title: "XMLHttpRequest: abort() Methode"
short-title: abort()
slug: Web/API/XMLHttpRequest/abort
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`XMLHttpRequest.abort()`**-Methode bricht die Anfrage ab, wenn sie bereits gesendet wurde. Wenn eine Anfrage abgebrochen wird, ändert sich ihr [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) zu `XMLHttpRequest.UNSENT` (0) und der [`status`](/de/docs/Web/API/XMLHttpRequest/status)-Code der Anfrage wird auf 0 gesetzt.

Wenn die Anfrage noch in Bearbeitung ist (ihr `readyState` ist nicht `XMLHttpRequest.DONE` oder `XMLHttpRequest.UNSENT`), werden in dieser Reihenfolge ein [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event)-Ereignis, ein [`abort`](/de/docs/Web/API/XMLHttpRequestEventTarget/abort_event)-Ereignis und ein [`loadend`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadend_event)-Ereignis ausgelöst. Bei synchronen Anfragen werden keine Ereignisse ausgelöst, stattdessen wird ein Fehler geworfen.

## Syntax

```js-nolint
abort()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel beginnt mit dem Laden von Inhalten von der MDN-Startseite, bricht den Transfer dann aber aufgrund einer bestimmten Bedingung durch Aufruf von `abort()` ab.

```js
const xhr = new XMLHttpRequest();
const method = "GET";
const url = "https://developer.mozilla.org/";
xhr.open(method, url, true);

xhr.send();

if (OH_NOES_WE_NEED_TO_CANCEL_RIGHT_NOW_OR_ELSE) {
  xhr.abort();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
