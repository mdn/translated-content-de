---
title: DataView.prototype.setBigUint64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setBigUint64
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`setBigUint64()`**-Methode von {{jsxref("DataView")}}-Instanzen nimmt einen BigInt und speichert ihn als 64-Bit-Unsigned-Integer in den 8 Bytes, die beim angegebenen Byte-Offset dieser `DataView` beginnen. Es gibt keine Ausrichtungsbeschränkung; mehrbyteige Werte können an jedem Offset innerhalb der Grenzen gespeichert werden.

{{EmbedInteractiveExample("pages/js/dataview-setbiguint64.html")}}

## Syntax

```js-nolint
setBigUint64(byteOffset, value)
setBigUint64(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Anfang der Ansicht, in dem die Daten gespeichert werden sollen.
- `value`
  - : Der Wert, der als {{jsxref("BigInt")}} gesetzt werden soll. Wie der Wert in Bytes kodiert wird, siehe [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im [Little- oder Big-Endian](/de/docs/Glossary/Endianness)-Format gespeichert werden. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt wird, dass er über das Ende der Ansicht hinaus speichert.

## Beispiele

### Verwendung von setBigUint64()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setBigUint64(0, 3n);
dataview.getBigUint64(1); // 768n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigUint64Array")}}
