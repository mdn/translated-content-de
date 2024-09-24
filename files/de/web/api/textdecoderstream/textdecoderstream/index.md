---
title: "TextDecoderStream: TextDecoderStream() Konstruktor"
short-title: TextDecoderStream()
slug: Web/API/TextDecoderStream/TextDecoderStream
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Encoding API")}}

Der **`TextDecoderStream()`**-Konstruktor erstellt ein neues {{domxref("TextDecoderStream")}}-Objekt, das verwendet wird, um einen Textstrom in einer binären Kodierung in Zeichenfolgen umzuwandeln.

## Syntax

```js-nolint
new TextDecoderStream(label)
new TextDecoderStream(label, options)
```

### Parameter

- `label`
  - : Eine Zeichenfolge, die standardmäßig auf `utf-8` gesetzt ist.
    Dies kann [jedes gültige Label](/de/docs/Web/API/Encoding_API/Encodings) sein.
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `fatal` {{optional_inline}}

      - : Ein boolescher Wert, der angibt, ob die Methode {{DOMxRef("TextDecoder.decode()")}} einen {{jsxref("TypeError")}} erzeugen muss, wenn ungültige Daten dekodiert werden.
        Standardmäßig ist dieser Wert `false`, was bedeutet, dass der Dekodierer fehlerhafte Daten durch ein Ersatzzeichen ersetzt.

    - `ignoreBOM` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das [Byte Order Mark](https://www.w3.org/International/questions/qa-byte-order-mark) in die Ausgabe einbezogen oder übersprungen wird.
        Standardmäßig ist dieser Wert `false`, was bedeutet, dass das Byte Order Mark beim Dekodieren übersprungen und nicht im dekodierten Text enthalten wird.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Wert von `label` unbekannt ist oder einer der Werte ist, die zu einem `'replacement'` Dekodierungsalgorithmus führen (`"iso-2022-cn"` oder `"iso-2022-cn-ext"`).

## Beispiele

Das folgende Beispiel zeigt, wie binäre Daten, die von einem {{domxref("Window/fetch", "fetch()")}}-Aufruf abgerufen wurden, dekodiert werden.
Die Daten werden als UTF-8 interpretiert, da kein `label` übergeben wurde.

```js
const response = await fetch("https://example.com");
const stream = response.body.pipeThrough(new TextDecoderStream());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
