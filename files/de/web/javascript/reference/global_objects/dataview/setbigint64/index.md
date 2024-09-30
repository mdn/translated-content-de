---
title: DataView.prototype.setBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setBigInt64
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`setBigInt64()`**-Methode von {{jsxref("DataView")}}-Instanzen nimmt ein BigInt und speichert es als 64-Bit-Ganzzahl mit Vorzeichen in den 8 Bytes ab dem angegebenen Byte-Offset dieses `DataView`. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können an jedem Offset innerhalb der Grenzen gespeichert werden.

{{EmbedInteractiveExample("pages/js/dataview-setbigint64.html")}}

## Syntax

```js-nolint
setBigInt64(byteOffset, value)
setBigInt64(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset, in Bytes, vom Anfang der Ansicht, um die Daten zu speichern.
- `value`
  - : Der zu setzende Wert als {{jsxref("BigInt")}}. Wie der Wert in Bytes kodiert wird, sehen Sie unter [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im [Little- oder Big-Endian](/de/docs/Glossary/Endianness)-Format gespeichert werden. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt wird, dass es über das Ende der Ansicht hinaus speichern würde.

## Beispiele

### Verwendung von setBigInt64()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setBigInt64(0, 3n);
dataview.getBigInt64(1); // 768n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt64Array")}}
