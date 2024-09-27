---
title: "Request: arrayBuffer()-Methode"
short-title: arrayBuffer()
slug: Web/API/Request/arrayBuffer
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`arrayBuffer()`**-Methode der [`Request`](/de/docs/Web/API/Request)-Schnittstelle liest den Anfrageinhalt und gibt ihn als ein Versprechen zurück, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird.

## Syntax

```js-nolint
arrayBuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein Versprechen, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird.

## Beispiele

```js
const myArray = new Uint8Array(10);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myArray,
});

request.arrayBuffer().then((buffer) => {
  // do something with the buffer sent in the request
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
