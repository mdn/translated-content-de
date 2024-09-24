---
title: "TextDecoder: Konstruktor TextDecoder()"
short-title: TextDecoder()
slug: Web/API/TextDecoder/TextDecoder
l10n:
  sourceCommit: fafe14e30746524b128e4efabcd11d8f57fa0571
---

{{APIRef("Encoding API")}}

Der **`TextDecoder()`** Konstruktor gibt ein neu erstelltes {{DOMxRef("TextDecoder")}}-Objekt für die im Parameter angegebene Kodierung zurück.

## Syntax

```js-nolint
new TextDecoder()
new TextDecoder(label)
new TextDecoder(label, options)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, standardmäßig `"utf-8"`.
    Dies kann [jedes gültige Label](/de/docs/Web/API/Encoding_API/Encodings) sein.
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `fatal` {{optional_inline}}

      - : Ein boolescher Wert, der angibt, ob die Methode {{DOMxRef("TextDecoder.decode()")}} einen {{jsxref("TypeError")}} auslösen muss, wenn ungültige Daten decodiert werden.
        Standardmäßig ist dies `false`, was bedeutet, dass der Decoder fehlerhafte Daten durch ein Ersatzzeichen ersetzt.

    - `ignoreBOM` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das [Byte-Order-Mark](https://www.w3.org/International/questions/qa-byte-order-mark) in die Ausgabe einbezogen oder übersprungen wird.
        Standardmäßig ist dies `false`, was bedeutet, dass das Byte-Order-Mark beim Decodieren übersprungen wird und nicht in den decodierten Text aufgenommen wird.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Wert von `label` unbekannt ist oder einer der Werte ist, die zu einem `'replacement'` Decodierungsalgorithmus führen (`"iso-2022-cn"` oder `"iso-2022-cn-ext"`).

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

- Die {{DOMxRef("TextDecoder")}} Schnittstelle, zu der es gehört.
