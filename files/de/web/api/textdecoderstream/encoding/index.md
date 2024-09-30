---
title: "TextDecoderStream: encoding-Eigenschaft"
short-title: encoding
slug: Web/API/TextDecoderStream/encoding
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`encoding`** der [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)-Schnittstelle gibt einen String zurück, der den Namen des von dem spezifischen Decoder verwendeten Kodierungsalgorithmus enthält.

Die Kodierung wird durch den [Konstruktor](/de/docs/Web/API/TextDecoderStream/TextDecoderStream)-`label`-Parameter festgelegt und standardmäßig auf `utf-8` gesetzt.

## Wert

Ein String, der den in Kleinbuchstaben geschriebenen ASCII-Namen des Kodierungsformats enthält.

Die zulässigen Werte entsprechen denen, die in [`TextDecoder.encoding`](/de/docs/Web/API/TextDecoder/encoding) aufgeführt sind (den Bezeichnungen in [Encoding API Encodings](/de/docs/Web/API/Encoding_API/Encodings)).

## Beispiele

Der Wert von `encoding` aus einem `TextDecoderStream` wird zurückgegeben.

```js
stream = new TextDecoderStream();
console.log(stream.encoding); // returns the default "utf-8"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
