---
title: "TextDecoderStream: encoding-Eigenschaft"
short-title: encoding
slug: Web/API/TextDecoderStream/encoding
l10n:
  sourceCommit: 2c6e4dc4393fb1e60d4ff293f011b62b23659cab
---

{{APIRef("Encoding API")}}

Die **`encoding`** schreibgeschützte Eigenschaft der {{domxref("TextDecoderStream")}}-Schnittstelle gibt einen String zurück, der den Namen des von dem spezifischen Decoder verwendeten Kodierungsalgorithmus enthält.

Die Kodierung wird durch den [Konstruktor](/de/docs/Web/API/TextDecoderStream/TextDecoderStream) `label`-Parameter festgelegt und standardmäßig auf `utf-8` gesetzt.

## Wert

Ein String, der den in Kleinbuchstaben geschriebenen ASCII-Namen des Kodierungsformats enthält.

Die zulässigen Werte entsprechen denen, die in [`TextDecoder.encoding`](/de/docs/Web/API/TextDecoder/encoding) aufgeführt sind (die Bezeichnungen in [Encoding API Encodings](/de/docs/Web/API/Encoding_API/Encodings)).

## Beispiele

Rückgabe des Wertes von `encoding` aus einem `TextDecoderStream`.

```js
stream = new TextDecoderStream();
console.log(stream.encoding); // gibt standardmäßig "utf-8" zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
