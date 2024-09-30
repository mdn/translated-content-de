---
title: "Request: blob() Methode"
short-title: blob()
slug: Web/API/Request/blob
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`blob()`** Methode der [`Request`](/de/docs/Web/API/Request)-Schnittstelle liest den Anfragetext und gibt ihn als ein Promise zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird.

## Syntax

```js-nolint
blob()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird.

## Beispiele

```js
const obj = { hello: "world" };
const myBlob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myBlob,
});

request.blob().then((myBlob) => {
  // do something with the blob sent in the request
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Response.blob()`](/de/docs/Web/API/Response/blob)
