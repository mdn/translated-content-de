---
title: "TextDecoderStream: TextDecoderStream()-Konstruktor"
short-title: TextDecoderStream()
slug: Web/API/TextDecoderStream/TextDecoderStream
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Der **`TextDecoderStream()`**-Konstruktor erstellt ein neues [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)-Objekt, das verwendet wird, um einen Strom von Text in einer binären Codierung in Zeichenfolgen umzuwandeln.

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

      - : Ein boolescher Wert, der angibt, ob die Methode [`TextDecoder.decode()`](/de/docs/Web/API/TextDecoder/decode) einen {{jsxref("TypeError")}} auslösen muss, wenn ungültige Daten dekodiert werden.
        Standardmäßig ist er auf `false` gesetzt, was bedeutet, dass der Decoder fehlerhafte Daten mit einem Ersatzzeichen ersetzt.

    - `ignoreBOM` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das [Byte-Order-Mark](https://www.w3.org/International/questions/qa-byte-order-mark) in die Ausgabe einbezogen oder übersprungen wird.
        Standardmäßig ist er auf `false` gesetzt, was bedeutet, dass das Byte-Order-Mark beim Dekodieren übersprungen wird und nicht in den dekodierten Text einbezogen wird.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Wert von `label` unbekannt ist oder einer der Werte ist, die zu einem `'replacement'`-Dekodierungsalgorithmus führen (`"iso-2022-cn"` oder `"iso-2022-cn-ext"`).

## Beispiele

Das folgende Beispiel zeigt, wie binäre Daten, die von einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf abgerufen wurden, dekodiert werden.
Die Daten werden als UTF-8 interpretiert, da kein `label` übergeben wurde.

```js
const response = await fetch("https://example.com");
const stream = response.body.pipeThrough(new TextDecoderStream());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
