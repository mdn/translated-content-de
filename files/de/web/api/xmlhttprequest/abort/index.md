---
title: "XMLHttpRequest: abort()-Methode"
short-title: abort()
slug: Web/API/XMLHttpRequest/abort
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`XMLHttpRequest.abort()`**-Methode bricht die Anfrage ab, wenn sie bereits gesendet wurde. Wenn eine Anfrage abgebrochen wird, ändert sich ihr [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) auf `XMLHttpRequest.UNSENT` (0) und der [`status`](/de/docs/Web/API/XMLHttpRequest/status)-Code der Anfrage wird auf 0 gesetzt.

## Syntax

```js-nolint
abort()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

In diesem Beispiel wird begonnen, Inhalte von der MDN-Startseite zu laden. Aufgrund einer bestimmten Bedingung wird der Transfer durch Aufruf von `abort()` abgebrochen.

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

- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
