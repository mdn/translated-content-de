---
title: "TextDecoderStream: TextDecoderStream() Konstruktor"
short-title: TextDecoderStream()
slug: Web/API/TextDecoderStream/TextDecoderStream
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Der **`TextDecoderStream()`**-Konstruktor erstellt ein neues [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)-Objekt, das verwendet wird, um einen Strom von Text in einer binären Kodierung in Strings umzuwandeln.

## Syntax

```js-nolint
new TextDecoderStream(label)
new TextDecoderStream(label, options)
```

### Parameter

- `label`
  - : Ein String, der standardmäßig `utf-8` ist.
    Dies kann [jedes gültige Label](/de/docs/Web/API/Encoding_API/Encodings) sein.
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `fatal` {{optional_inline}}

      - : Ein boolescher Wert, der angibt, ob die Methode [`TextDecoder.decode()`](/de/docs/Web/API/TextDecoder/decode) einen {{jsxref("TypeError")}} auslösen muss, wenn ungültige Daten dekodiert werden.
        Der Standardwert ist `false`, was bedeutet, dass der Decoder fehlerhafte Daten durch ein Ersatzzeichen ersetzt.

    - `ignoreBOM` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das [Byte-Order-Mark](https://www.w3.org/International/questions/qa-byte-order-mark) in die Ausgabe einbezogen oder übersprungen wird.
        Der Standardwert ist `false`, was bedeutet, dass das Byte-Order-Mark beim Dekodieren übersprungen und nicht im dekodierten Text enthalten sein wird.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Wert von `label` unbekannt ist oder zu den Werten gehört, die zu einem „Ersatz“-Dekodierungsalgorithmus führen (`"iso-2022-cn"` oder `"iso-2022-cn-ext"`).

## Beispiele

Das folgende Beispiel zeigt, wie binäre Daten dekodiert werden, die mit einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf abgerufen wurden.
Die Daten werden als UTF-8 interpretiert, da kein `label` übergeben wurde.

```js
const response = await fetch("https://example.com");
const stream = response.body.pipeThrough(new TextDecoderStream());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
