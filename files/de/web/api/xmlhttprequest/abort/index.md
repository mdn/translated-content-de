---
title: "XMLHttpRequest: abort()-Methode"
short-title: abort()
slug: Web/API/XMLHttpRequest/abort
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`XMLHttpRequest.abort()`**-Methode bricht die Anfrage ab, wenn sie bereits gesendet wurde. Wenn eine Anfrage abgebrochen wird, wird ihr {{domxref("XMLHttpRequest.readyState", "readyState")}} auf `XMLHttpRequest.UNSENT` (0) geändert und der {{domxref("XMLHttpRequest.status", "status")}}-Code der Anfrage wird auf 0 gesetzt.

## Syntax

```js-nolint
abort()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel beginnt mit dem Laden von Inhalten von der MDN-Startseite, bricht den Versand dann jedoch aufgrund einer Bedingung durch den Aufruf von `abort()` ab.

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
