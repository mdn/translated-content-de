---
title: "TextDecoderStream: fatal-Eigenschaft"
short-title: fatal
slug: Web/API/TextDecoderStream/fatal
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`fatal`** schreibgeschützte Eigenschaft der [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)-Schnittstelle ist ein {{jsxref("Boolean")}}, der angibt, ob der Fehlermodus des `TextDecoderStream`-Objekts auf `fatal` gesetzt ist.

Wenn die Eigenschaft `true` ist, wird ein Decoder einen {{jsxref("TypeError")}} auslösen, wenn er auf fehlerhafte Daten beim Dekodieren stößt. Ist sie `false`, ersetzt der Decoder die ungültigen Daten durch das Ersatzzeichen `U+FFFD` (�). Der Wert der Eigenschaft wird im [`TextDecoderStream()`-Konstruktor](/de/docs/Web/API/TextDecoderStream/TextDecoderStream) festgelegt.

## Wert

Ein {{jsxref("Boolean")}}, der `true` zurückgibt, wenn der Fehlermodus auf "fatal" gesetzt ist. Andernfalls gibt er `false` zurück, was darauf hinweist, dass der Fehlermodus auf "replacement" gesetzt ist.

## Beispiele

```js
stream = new TextDecoderStream();
console.log(stream.fatal); // returns false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
