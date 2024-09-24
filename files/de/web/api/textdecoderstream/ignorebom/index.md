---
title: "TextDecoderStream: ignoreBOM-Eigenschaft"
short-title: ignoreBOM
slug: Web/API/TextDecoderStream/ignoreBOM
l10n:
  sourceCommit: fafe14e30746524b128e4efabcd11d8f57fa0571
---

{{APIRef("Encoding API")}}

Die **`ignoreBOM`** schreibgeschützte Eigenschaft der {{domxref("TextDecoderStream")}}-Schnittstelle ist ein {{jsxref('Boolean')}}, der anzeigt, ob das [Byte-Order-Mark](https://www.w3.org/International/questions/qa-byte-order-mark) in die Ausgabe einbezogen oder übersprungen wird.

## Wert

`true`, wenn das [Byte-Order-Mark](https://www.w3.org/International/questions/qa-byte-order-mark) in den dekodierten Text einbezogen wird; `false`, wenn es beim Dekodieren übersprungen und weggelassen wird.

## Beispiele

```js
stream = new TextDecoderStream();
console.log(stream.ignoreBOM); // gibt false zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
