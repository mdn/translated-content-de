---
title: "TextEncoderStream: readable-Eigenschaft"
short-title: readable
slug: Web/API/TextEncoderStream/readable
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`readable`** des [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream)-Interfaces gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Das folgende Beispiel zeigt, wie man einen `ReadableStream` von einem `TextEncoderStream`-Objekt zurückgibt.

```js
stream = new TextEncoderStream();
console.log(stream.readable); //a ReadableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
