---
title: "Request: blob()-Methode"
short-title: blob()
slug: Web/API/Request/blob
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`blob()`**-Methode der {{domxref("Request")}}-Schnittstelle
liest den Anfragekörper aus und gibt ein Promise zurück, das mit einem {{domxref("Blob")}} aufgelöst wird.

## Syntax

```js-nolint
blob()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem {{domxref("Blob")}} aufgelöst wird.

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

- {{domxref("Response.blob()")}}
