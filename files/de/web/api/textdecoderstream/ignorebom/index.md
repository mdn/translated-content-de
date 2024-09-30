---
title: "TextDecoderStream: ignoreBOM-Eigenschaft"
short-title: ignoreBOM
slug: Web/API/TextDecoderStream/ignoreBOM
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`ignoreBOM`** der [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)-Schnittstelle ist ein {{jsxref('Boolean')}}, der angibt, ob das [Byte-Order-Mark](https://www.w3.org/International/questions/qa-byte-order-mark) in der Ausgabe enthalten sein wird oder übersprungen wird.

## Wert

`true`, wenn das [Byte-Order-Mark](https://www.w3.org/International/questions/qa-byte-order-mark) in den decodierten Text aufgenommen wird; `false`, wenn es beim Decodieren übersprungen und weggelassen wird.

## Beispiele

```js
stream = new TextDecoderStream();
console.log(stream.ignoreBOM); // returns false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
