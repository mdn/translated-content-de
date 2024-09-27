---
title: "TextDecoder: decode() Methode"
short-title: decode()
slug: Web/API/TextDecoder/decode
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`TextDecoder.decode()`**-Methode gibt einen String zurück, der den aus dem übergebenen Puffer dekodierten Text enthält.

Die Dekodierungsmethode ist im aktuellen [`TextDecoder`](/de/docs/Web/API/TextDecoder)-Objekt definiert. Dies umfasst die erwartete Kodierung der Daten und die Handhabung von Dekodierungsfehlern.

## Syntax

```js-nolint
decode()
decode(buffer)
decode(buffer, options)
```

### Parameter

- `buffer` {{Optional_Inline}}
  - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}-Objekt, das den zu dekodierenden kodierten Text enthält.
- `options` {{Optional_Inline}}

  - : Ein Objekt mit der Eigenschaft:

    - `stream`
      - : Ein boolesches Flag, das angibt, ob zusätzliche Daten in nachfolgenden Aufrufen von `decode()` folgen werden.
        Setzen Sie es auf `true`, wenn die Daten in Teilen verarbeitet werden, und auf `false` für das letzte Teilstück oder wenn die Daten nicht in Abschnitten vorliegen.
        Es ist standardmäßig auf `false` gesetzt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn ein Dekodierungsfehler auftritt und die Eigenschaft [`TextDecoder.fatal`](/de/docs/Web/API/TextDecoder/fatal) auf `true` gesetzt ist.

### Rückgabewert

Ein String.

## Beispiele

Dieses Beispiel kodiert und dekodiert das Euro-Symbol, €.

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

- Die [`TextDecoder`](/de/docs/Web/API/TextDecoder)-Schnittstelle, zu der sie gehört.
