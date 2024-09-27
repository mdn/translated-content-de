---
title: "TextDecoderStream: fatal-Eigenschaft"
short-title: fatal
slug: Web/API/TextDecoderStream/fatal
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`fatal`** schreibgeschützte Eigenschaft der [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)-Schnittstelle ist ein {{jsxref("boolean")}}, der angibt, ob der Fehlermodus des `TextDecoderStream`-Objekts auf `fatal` gesetzt ist.

Wenn die Eigenschaft `true` ist, wird der Decoder einen {{jsxref("TypeError")}} werfen, wenn er auf fehlerhafte Daten beim Dekodieren trifft.
Ist sie `false`, ersetzt der Decoder die ungültigen Daten durch das Ersatzzeichen `U+FFFD` (�).
Der Wert der Eigenschaft wird im [`TextDecoderStream()`-Konstruktor](/de/docs/Web/API/TextDecoderStream/TextDecoderStream) festgelegt.

## Wert

Ein {{jsxref("boolean")}}, der `true` zurückgibt, wenn der Fehlermodus auf "fatal" gesetzt ist.
Andernfalls gibt er `false` zurück, was bedeutet, dass der Fehlermodus "replacement" ist.

## Beispiele

```js
stream = new TextDecoderStream();
console.log(stream.fatal); // returns false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
