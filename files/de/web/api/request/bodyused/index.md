---
title: "Request: Eigenschaft bodyUsed"
short-title: bodyUsed
slug: Web/API/Request/bodyUsed
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`bodyUsed`**-Eigenschaft des {{domxref("Request")}}-Interfaces ist ein boolescher Wert, der angibt, ob der Anfragetext bereits gelesen wurde.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const request = new Request("/myEndpoint", {
  method: "POST",
  body: "Hello world",
});

request.bodyUsed; // false

request.text().then((bodyAsText) => {
  console.log(request.bodyUsed); // true
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Request.body")}}
