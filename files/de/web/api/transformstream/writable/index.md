---
title: "TransformStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/TransformStream/writable
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`writable`**-Eigenschaft, die schreibgeschützte Eigenschaft des [`TransformStream`](/de/docs/Web/API/TransformStream)-Interfaces, gibt die [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die von diesem `TransformStream` gesteuert wird.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Das folgende Beispiel erstellt einen neuen [`TransformStream`](/de/docs/Web/API/TransformStream) als `textEncoderStream` und gibt den Wert von `writable` in der Konsole aus.

```js
const textEncoderStream = new TransformStream();
console.log(textEncoderStream.writable); // a WritableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
