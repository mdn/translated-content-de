---
title: "Request: body-Eigenschaft"
short-title: body
slug: Web/API/Request/body
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`body`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle enthält einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit dem Inhalt des Bodys, der der Anfrage hinzugefügt wurde. Beachten Sie, dass eine Anfrage, die die `GET`- oder `HEAD`-Methode verwendet, keinen Body haben kann und in diesen Fällen `null` zurückgegeben wird.

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
