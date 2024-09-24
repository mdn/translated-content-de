---
title: "TextEncoderStream: lesbare Eigenschaft"
short-title: lesbar
slug: Web/API/TextEncoderStream/readable
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

Die schreibgeschützte Eigenschaft **`readable`** der Schnittstelle {{domxref("TextEncoderStream")}} gibt einen {{domxref("ReadableStream")}} zurück.

## Wert

Ein {{domxref("ReadableStream")}}.

## Beispiele

Das folgende Beispiel demonstriert, wie ein `ReadableStream` von einem `TextEncoderStream`-Objekt zurückgegeben wird.

```js
stream = new TextEncoderStream();
console.log(stream.readable); //a ReadableStream
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
