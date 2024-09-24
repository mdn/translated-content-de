---
title: "Request: text() Methode"
short-title: text()
slug: Web/API/Request/text
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`text()`** Methode der {{domxref("Request")}} Schnittstelle
liest den Anfragetext und gibt ihn als ein Promise zurück, das mit einem {{jsxref("String")}} aufgelöst wird.
Die Antwort wird _immer_ mit UTF-8 dekodiert.

## Syntax

```js-nolint
text()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem {{jsxref("String")}} aufgelöst wird.

## Beispiele

```js
const text = "Hello world";

const request = new Request("/myEndpoint", {
  method: "POST",
  body: text,
});

request.text().then((text) => {
  // do something with the text sent in the request
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Response.text()")}}
