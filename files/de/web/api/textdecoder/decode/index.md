---
title: "TextDecoder: decode()-Methode"
short-title: decode()
slug: Web/API/TextDecoder/decode
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

Die **`TextDecoder.decode()`**-Methode gibt einen String zurück, der Text enthält, der aus dem übergebenen Puffer dekodiert wurde.

Die Dekodierungsmethode ist im aktuellen {{domxref("TextDecoder")}}-Objekt definiert. Dies umfasst die erwartete Codierung der Daten und wie Dekodierungsfehler behandelt werden.

## Syntax

```js-nolint
decode()
decode(buffer)
decode(buffer, options)
```

### Parameter

- `buffer` {{Optional_Inline}}
  - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das den zu dekodierenden kodierten Text enthält.
- `options` {{Optional_Inline}}

  - : Ein Objekt mit der Eigenschaft:

    - `stream`
      - : Ein boolesches Flag, das anzeigt, ob zusätzliche Daten in nachfolgenden Aufrufen von `decode()` folgen werden.
        Setzen Sie es auf `true`, wenn die Daten in Teilen verarbeitet werden, und auf `false` für den letzten Teil oder wenn die Daten nicht in Teilen vorliegen.
        Voreinstellung ist `false`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein Dekodierungsfehler auftritt und die Eigenschaft {{DOMxRef("TextDecoder.fatal")}} `true` ist.

### Rückgabewert

Ein String.

## Beispiele

Dieses Beispiel kodiert und dekodiert das Euro-Symbol, €.

### HTML

```html
<p>Verschlüsselter Wert: <span id="encoded-value"></span></p>
<p>Entschlüsselter Wert: <span id="decoded-value"></span></p>
```

### JavaScript

```js
const encoder = new TextEncoder();
const array = encoder.encode("€"); // Uint8Array(3) [226, 130, 172]
document.getElementById("encoded-value").textContent = array;

const decoder = new TextDecoder();
const str = decoder.decode(array); // String "€"
document.getElementById("decoded-value").textContent = str;
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{DOMxRef("TextDecoder")}}-Schnittstelle, zu der es gehört.
