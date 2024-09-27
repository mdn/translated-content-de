---
title: "TextDecoderStream: encoding-Eigenschaft"
short-title: encoding
slug: Web/API/TextDecoderStream/encoding
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`encoding`**-Eigenschaft der [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)-Schnittstelle gibt einen String zurück, der den Namen des vom spezifischen Decoder verwendeten Kodierungsalgorithmus enthält.

Die Kodierung wird durch den `label`-Parameter des [Konstruktors](/de/docs/Web/API/TextDecoderStream/TextDecoderStream) festgelegt und standardmäßig auf `utf-8` gesetzt.

## Wert

Ein String, der den in Kleinbuchstaben geschriebenen ASCII-Namen des Kodierungsformats enthält.

Die erlaubten Werte sind dieselben wie die, die in [`TextDecoder.encoding`](/de/docs/Web/API/TextDecoder/encoding) aufgelistet sind (die Bezeichnungen in [Encoding API Encodings](/de/docs/Web/API/Encoding_API/Encodings)).

## Beispiele

Rückgabe des Wertes von `encoding` von einem `TextDecoderStream`.

```js
stream = new TextDecoderStream();
console.log(stream.encoding); // returns the default "utf-8"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
