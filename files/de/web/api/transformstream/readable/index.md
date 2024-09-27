---
title: "TransformStream: readable-Eigenschaft"
short-title: readable
slug: Web/API/TransformStream/readable
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`readable`** schreibgeschützte Eigenschaft des [`TransformStream`](/de/docs/Web/API/TransformStream)-Interface gibt die [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die von diesem `TransformStream` gesteuert wird.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Das folgende Beispiel erstellt einen neuen [`TransformStream`](/de/docs/Web/API/TransformStream) als `textEncoderStream` und gibt den Wert von `readable` in der Konsole aus.

```js
const textEncoderStream = new TransformStream();
console.log(textEncoderStream.readable); // a ReadableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
