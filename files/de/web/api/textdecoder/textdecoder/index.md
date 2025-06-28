---
title: "TextDecoder: TextDecoder() Konstruktor"
short-title: TextDecoder()
slug: Web/API/TextDecoder/TextDecoder
l10n:
  sourceCommit: ccd1540ad8c51242b318bf437dfabe2e5315b3fa
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Der **`TextDecoder()`** Konstruktor gibt ein neues [`TextDecoder`](/de/docs/Web/API/TextDecoder)-Objekt zurück.

## Syntax

```js-nolint
new TextDecoder()
new TextDecoder(label)
new TextDecoder(label, options)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, der die Zeichenkodierung identifiziert, die dieser Decoder verwenden wird. Dies kann [jedes gültige Label](/de/docs/Web/API/Encoding_API/Encodings) sein.

    Standardmäßig `"utf-8"`.

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `fatal` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Methode [`TextDecoder.decode()`](/de/docs/Web/API/TextDecoder/decode) einen {{jsxref("TypeError")}} werfen muss, wenn ungültige Daten dekodiert werden.
        Standardmäßig `false`, was bedeutet, dass der Decoder fehlerhafte Daten durch ein Ersatzzeichen ersetzt.

    - `ignoreBOM` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das [byte order mark](https://www.w3.org/International/questions/qa-byte-order-mark) in die Ausgabe einbezogen oder übersprungen wird.
        Standardmäßig `false`, was bedeutet, dass das byte order mark beim Dekodieren übersprungen und nicht in den dekodierten Text einbezogen wird.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Wert von `label` unbekannt ist oder einer der Werte ist, die zu einem `'replacement'` Dekodierungsalgorithmus führen (`"iso-2022-cn"` oder `"iso-2022-cn-ext"`).

## Beispiele

```js
const textDecoder1 = new TextDecoder("iso-8859-2");

const textDecoder2 = new TextDecoder();

const textDecoder3 = new TextDecoder("csiso2022kr", { fatal: true });
// Allows TypeError exception to be thrown.

const textDecoder4 = new TextDecoder("iso-2022-cn");
// Throws a RangeError exception.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TextDecoder`](/de/docs/Web/API/TextDecoder)-Interface, dem es angehört.
