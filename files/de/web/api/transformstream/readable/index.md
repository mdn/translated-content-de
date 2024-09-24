---
title: "TransformStream: lesbare Eigenschaft"
short-title: lesbare
slug: Web/API/TransformStream/readable
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`readable`** schreibgeschützte Eigenschaft der {{domxref("TransformStream")}}-Schnittstelle gibt die {{domxref("ReadableStream")}}-Instanz zurück, die von diesem `TransformStream` gesteuert wird.

## Wert

Ein {{domxref("ReadableStream")}}.

## Beispiele

Das folgende Beispiel erstellt einen neuen {{domxref("TransformStream")}} als `textEncoderStream` und gibt den Wert von `readable` in der Konsole aus.

```js
const textEncoderStream = new TransformStream();
console.log(textEncoderStream.readable); // a ReadableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
