---
title: "Request: body Eigenschaft"
short-title: body
slug: Web/API/Request/body
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`body`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle enthält einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit den Körperinhalten, die der Anfrage hinzugefügt wurden. Beachten Sie, dass eine Anfrage, die die `GET`- oder `HEAD`-Methode verwendet, keinen Körper haben kann und in diesen Fällen `null` zurückgegeben wird.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beispiele

```js
const request = new Request("/myEndpoint", {
  method: "POST",
  body: "Hello world",
});

request.body; // ReadableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Request.bodyUsed`](/de/docs/Web/API/Request/bodyUsed)
