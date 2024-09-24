---
title: "TransformStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/TransformStream/writable
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`writable`** des {{domxref("TransformStream")}}-Interfaces gibt die {{domxref("WritableStream")}}-Instanz zurück, die von diesem `TransformStream` gesteuert wird.

## Wert

Ein {{domxref("WritableStream")}}.

## Beispiele

Das folgende Beispiel erstellt einen neuen {{domxref("TransformStream")}} als `textEncoderStream` und gibt den Wert von `writable` in der Konsole aus.

```js
const textEncoderStream = new TransformStream();
console.log(textEncoderStream.writable); // a WritableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
