---
title: "XMLHttpRequest: abort()-Methode"
short-title: abort()
slug: Web/API/XMLHttpRequest/abort
l10n:
  sourceCommit: 1d7d53ef07169095702a60e3b315aa4f820c98b4
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`XMLHttpRequest.abort()`**-Methode bricht die Anfrage ab, falls sie bereits gesendet wurde. Wird eine Anfrage abgebrochen, ändert sich der [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) auf `XMLHttpRequest.UNSENT` (0) und der [`status`](/de/docs/Web/API/XMLHttpRequest/status)-Code wird auf 0 gesetzt.

Falls die Anfrage noch in Bearbeitung ist (ihr `readyState` ist weder `XMLHttpRequest.DONE` noch `XMLHttpRequest.UNSENT`), werden ein [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event)-Ereignis, ein [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event)-Ereignis und ein [`loadend`](/de/docs/Web/API/XMLHttpRequest/loadend_event)-Ereignis in dieser Reihenfolge ausgelöst. Bei synchronen Anfragen werden keine Ereignisse ausgelöst und stattdessen ein Fehler geworfen.

## Syntax

```js-nolint
abort()
```

### Parameter

Keine.

### Rückgabewert

Keinen ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel beginnt damit, Inhalte von der MDN-Startseite zu laden. Aufgrund einer Bedingung wird der Transfer anschließend durch einen Aufruf von `abort()` abgebrochen.

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
