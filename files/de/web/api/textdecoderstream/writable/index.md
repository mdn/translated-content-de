---
title: "TextDecoderStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/TextDecoderStream/writable
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`writable`** schreibgeschützte Eigenschaft des [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) Interfaces gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Rückgabe eines [`WritableStream`](/de/docs/Web/API/WritableStream) von einem `TextDecoderStream`.

```js
stream = new TextDecoderStream();
console.log(stream.writable); // A WritableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
