---
title: "TextDecoderStream: lesbare Eigenschaft"
short-title: readable
slug: Web/API/TextDecoderStream/readable
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`readable`** schreibgeschützte Eigenschaft der [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)-Schnittstelle gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Dieses Beispiel zeigt, wie ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) aus einem `TextDecoderStream` zurückgegeben wird.

```js
stream = new TextDecoderStream();
console.log(stream.readable); //a ReadableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
