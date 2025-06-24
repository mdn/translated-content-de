---
title: "TextDecoder: decode()-Methode"
short-title: decode()
slug: Web/API/TextDecoder/decode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die Methode **`TextDecoder.decode()`** gibt einen String zurück, der aus dem übergebenen Puffer decodierten Text enthält.

Die Decodiermethode ist im aktuellen [`TextDecoder`](/de/docs/Web/API/TextDecoder)-Objekt definiert. Dies umfasst die erwartete Kodierung der Daten und wie Dekodierungsfehler behandelt werden.

## Syntax

```js-nolint
decode()
decode(buffer)
decode(buffer, options)
```

### Parameter

- `buffer` {{Optional_Inline}}
  - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}-Objekt, das den zu decodierenden kodierten Text enthält.
- `options` {{Optional_Inline}}
  - : Ein Objekt mit der Eigenschaft:
    - `stream`
      - : Ein boolescher Wert, der anzeigt, ob zusätzliche Daten in nachfolgenden Aufrufen von `decode()` folgen werden. Setzen Sie ihn auf `true`, wenn die Daten in Teilen verarbeitet werden, und auf `false` für das letzte Teil oder wenn die Daten nicht in Teilen vorliegen. Der Standardwert ist `false`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein Dekodierungsfehler auftritt und die Eigenschaft [`TextDecoder.fatal`](/de/docs/Web/API/TextDecoder/fatal) auf `true` gesetzt ist.

### Rückgabewert

Ein String.

## Beispiele

Dieses Beispiel kodiert und decodiert das Euro-Symbol, €.

### HTML

```html
<p>Encoded value: <span id="encoded-value"></span></p>
<p>Decoded value: <span id="decoded-value"></span></p>
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

- Das [`TextDecoder`](/de/docs/Web/API/TextDecoder)-Interface, zu dem es gehört.
