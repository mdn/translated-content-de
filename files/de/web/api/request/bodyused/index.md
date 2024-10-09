---
title: "Request: bodyUsed-Eigenschaft"
short-title: bodyUsed
slug: Web/API/Request/bodyUsed
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`bodyUsed`** schreibgeschützte Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle ist ein boolescher Wert, der anzeigt, ob der Anfrageinhalt bereits gelesen wurde.

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

- [`Request.body`](/de/docs/Web/API/Request/body)
