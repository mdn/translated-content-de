---
title: "TextDecoder: TextDecoder() Konstruktor"
short-title: TextDecoder()
slug: Web/API/TextDecoder/TextDecoder
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Der **`TextDecoder()`** Konstruktor gibt ein neu erstelltes [`TextDecoder`](/de/docs/Web/API/TextDecoder) Objekt für die im Parameter spezifizierte Kodierung zurück.

## Syntax

```js-nolint
new TextDecoder()
new TextDecoder(label)
new TextDecoder(label, options)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, standardmäßig `"utf-8"`.
    Dies kann [jede gültige Bezeichnung](/de/docs/Web/API/Encoding_API/Encodings) sein.
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `fatal` {{optional_inline}}

      - : Ein boolescher Wert, der angibt, ob die Methode [`TextDecoder.decode()`](/de/docs/Web/API/TextDecoder/decode) einen {{jsxref("TypeError")}} werfen muss, wenn ungültige Daten dekodiert werden.
        Standardwert ist `false`, was bedeutet, dass der Decoder fehlerhafte Daten durch ein Ersatzzeichen ersetzt.

    - `ignoreBOM` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das [Byte-Order-Mark](https://www.w3.org/International/questions/qa-byte-order-mark) in der Ausgabe enthalten sein oder übersprungen werden soll.
        Standardwert ist `false`, was bedeutet, dass das Byte-Order-Mark beim Dekodieren übersprungen wird und nicht im dekodierten Text enthalten ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Wert von `label` unbekannt ist oder einer der Werte ist, die zu einem `'replacement'` Dekodierungsalgorithmus führen (`"iso-2022-cn"` oder `"iso-2022-cn-ext"`).

## Beispiele

```js
const textDecoder1 = new TextDecoder("iso-8859-2");
const textDecoder2 = new TextDecoder();
const textDecoder3 = new TextDecoder("csiso2022kr", { fatal: true }); // Allows TypeError exception to be thrown.
const textDecoder4 = new TextDecoder("iso-2022-cn"); // Throw a RangeError exception.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TextDecoder`](/de/docs/Web/API/TextDecoder) Interface, zu dem es gehört.
