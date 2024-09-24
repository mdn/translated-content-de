---
title: "TextDecoderStream: Lesbare Eigenschaft"
short-title: lesbar
slug: Web/API/TextDecoderStream/readable
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

Die **`readable`** schreibgeschützte Eigenschaft des {{domxref("TextDecoderStream")}} Interfaces gibt einen {{domxref("ReadableStream")}} zurück.

## Wert

Ein {{domxref("ReadableStream")}}.

## Beispiele

Dieses Beispiel zeigt, wie ein {{domxref("ReadableStream")}} von einem `TextDecoderStream` zurückgegeben wird.

```js
stream = new TextDecoderStream();
console.log(stream.readable); //a ReadableStream
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
