---
title: "TextDecoder: Methode decode()"
short-title: decode()
slug: Web/API/TextDecoder/decode
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`TextDecoder.decode()`**-Methode gibt einen Zeichenfolgeninhalt zurück, der aus dem als Parameter übergebenen Puffer dekodiert wird.

Die Dekodierungsmethode ist im aktuellen [`TextDecoder`](/de/docs/Web/API/TextDecoder)-Objekt definiert. Dies umfasst die erwartete Kodierung der Daten und die Behandlung von Dekodierungsfehlern.

## Syntax

```js-nolint
decode()
decode(buffer)
decode(buffer, options)
```

### Parameter

- `buffer` {{Optional_Inline}}
  - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das den zu dekodierenden Text enthält.
- `options` {{Optional_Inline}}

  - : Ein Objekt mit der Eigenschaft:

    - `stream`
      - : Ein boolesches Flag, das angibt, ob zusätzliche Daten bei nachfolgenden Aufrufen von `decode()` folgen werden.
        Setzen Sie es auf `true`, wenn die Daten in Teilen verarbeitet werden, und auf `false` für das letzte Stück oder wenn die Daten nicht in Teilen vorliegen.
        Der Standardwert ist `false`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein Dekodierungsfehler auftritt und die Eigenschaft [`TextDecoder.fatal`](/de/docs/Web/API/TextDecoder/fatal) auf `true` gesetzt ist.

### Rückgabewert

Eine Zeichenkette.

## Beispiele

Dieses Beispiel kodiert und dekodiert das Eurosymbol, €.

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
