---
title: "TextDecoderStream: Eigenschaft fatal"
short-title: fatal
slug: Web/API/TextDecoderStream/fatal
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

Die **`fatal`** schreibgeschützte Eigenschaft der {{domxref("TextDecoderStream")}}-Schnittstelle ist ein {{jsxref("boolean")}}, der angibt, ob der Fehlermodus des `TextDecoderStream`-Objekts auf `fatal` gesetzt ist.

Wenn die Eigenschaft `true` ist, löst ein Decoder einen {{jsxref("TypeError")}} aus, wenn er beim Dekodieren auf fehlerhafte Daten stößt.
Wenn `false`, ersetzt der Decoder die ungültigen Daten mit dem Ersatzzeichen `U+FFFD` (�).
Der Wert der Eigenschaft wird im [`TextDecoderStream()`-Konstruktor](/de/docs/Web/API/TextDecoderStream/TextDecoderStream) festgelegt.

## Wert

Ein {{jsxref("boolean")}}, der `true` zurückgibt, wenn der Fehlermodus auf "fatal" gesetzt ist.
Andernfalls gibt er `false` zurück, was darauf hinweist, dass der Fehlermodus "Ersatz" ist.

## Beispiele

```js
stream = new TextDecoderStream();
console.log(stream.fatal); // gibt false zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
