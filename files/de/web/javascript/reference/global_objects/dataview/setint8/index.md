---
title: DataView.prototype.setInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt8
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`setInt8()`**-Methode von {{jsxref("DataView")}} Instanzen nimmt eine Zahl und speichert sie als 8-Bit vorzeichenbehaftete ganze Zahl im Byte an dem angegebenen Byte-Offset dieses `DataView`.

{{EmbedInteractiveExample("pages/js/dataview-setint8.html")}}

## Syntax

```js-nolint
setInt8(byteOffset, value)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Anfang der Ansicht, an dem die Daten gespeichert werden sollen.
- `value`
  - : Der zu setzende Wert. Für die Kodierung des Wertes in Bytes siehe [Wertkodierung und -normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt wird, dass er über das Ende der Ansicht hinaus speichert.

## Beispiele

### Verwendung von setInt8()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setInt8(0, 3);
dataview.getInt8(0); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int8Array")}}
