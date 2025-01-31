---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

{{JSRef}}

Der **`DataView`**-View bietet eine Low-Level-Schnittstelle zum Lesen und Schreiben verschiedener Zahlentypen in einem binären {{jsxref("ArrayBuffer")}}, ohne sich um die {{Glossary("Endianness", "Byte-Reihenfolge")}} der Plattform kümmern zu müssen.

## Beschreibung

### Byte-Reihenfolge

Mehrbyte-Zahlenformate werden im Speicher je nach Maschinenarchitektur unterschiedlich dargestellt – siehe {{Glossary("Endianness", "Byte-Reihenfolge")}} für eine Erklärung. `DataView`-Zugriffs-Methoden bieten eine explizite Kontrolle darüber, wie Daten unabhängig von der Byte-Reihenfolge des ausführenden Computers zugegriffen werden. Beispielsweise ist der Speicher von [WebAssembly](/de/docs/WebAssembly) immer im Little-Endian-Format, daher sollten Sie `DataView` anstelle von typisierten Arrays verwenden, um Mehrbyte-Werte zu lesen und zu schreiben. Sehen Sie sich [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) für ein Beispiel an.

```js
const littleEndian = (() => {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array uses the platform's endianness.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false
```

> **Hinweis:** `DataView` liest und schreibt standardmäßig in Big-Endian, aber die meisten Plattformen verwenden Little-Endian.

## Konstruktor

- {{jsxref("DataView/DataView", "DataView()")}}
  - : Erstellt ein neues `DataView`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `DataView.prototype` definiert und werden von allen `DataView`-Instanzen geteilt.

- {{jsxref("DataView.prototype.buffer")}}
  - : Der durch diesen View referenzierte {{jsxref("ArrayBuffer")}}. Festgelegt zur Konstruktionszeit und daher **nur lesbar.**
- {{jsxref("DataView.prototype.byteLength")}}
  - : Die Länge (in Bytes) dieses Views. Festgelegt zur Konstruktionszeit und daher **nur lesbar.**
- {{jsxref("DataView.prototype.byteOffset")}}
  - : Der Offset (in Bytes) dieses Views vom Beginn seines {{jsxref("ArrayBuffer")}}. Festgelegt zur Konstruktionszeit und daher **nur lesbar.**
- {{jsxref("Object/constructor", "DataView.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanz-Objekt erstellt hat. Für `DataView`-Instanzen ist der anfängliche Wert der {{jsxref("DataView/DataView", "DataView")}}-Konstruktor.
- `DataView.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"DataView"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : Liest 8 Bytes beginnend ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 64-Bit-Vorzahlen.
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : Liest 8 Bytes beginnend ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 64-Bit-Unsigned-Integer.
- {{jsxref("DataView.prototype.getFloat16()")}}
  - : Liest 2 Bytes beginnend ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 16-Bit-Floating-Point-Zahl.
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : Liest 4 Bytes beginnend ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 32-Bit-Floating-Point-Zahl.
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : Liest 8 Bytes beginnend ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 64-Bit-Floating-Point-Zahl.
- {{jsxref("DataView.prototype.getInt16()")}}
  - : Liest 2 Bytes beginnend ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 16-Bit-Vorzahlen.
- {{jsxref("DataView.prototype.getInt32()")}}
  - : Liest 4 Bytes beginnend ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 32-Bit-Vorzahlen.
- {{jsxref("DataView.prototype.getInt8()")}}
  - : Liest 1 Byte am angegebenen Byte-Offset dieses `DataView` und interpretiert es als 8-Bit-Vorzahlen.
- {{jsxref("DataView.prototype.getUint16()")}}
  - : Liest 2 Bytes beginnend ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 16-Bit-Unsigned-Integer.
- {{jsxref("DataView.prototype.getUint32()")}}
  - : Liest 4 Bytes beginnend ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 32-Bit-Unsigned-Integer.
- {{jsxref("DataView.prototype.getUint8()")}}
  - : Liest 1 Byte am angegebenen Byte-Offset dieses `DataView` und interpretiert es als 8-Bit-Unsigned-Integer.
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : Nimmt ein BigInt und speichert es als 64-Bit-Vorzeichenwert in den 8 Bytes beginnend ab dem angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : Nimmt ein BigInt und speichert es als 64-Bit-Unsigned-Integer in den 8 Bytes beginnend ab dem angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-Float in den 2 Bytes beginnend ab dem angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-Float in den 4 Bytes beginnend ab dem angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : Nimmt eine Zahl und speichert sie als 64-Bit-Float in den 8 Bytes beginnend ab dem angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setInt16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-Vorzahlen in den 2 Bytes am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setInt32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-Vorzahlen in den 4 Bytes am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setInt8()")}}
  - : Nimmt eine Zahl und speichert sie als 8-Bit-Vorzahlen im Byte am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setUint16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-Unsigned-Integer in den 2 Bytes am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setUint32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-Unsigned-Integer in den 4 Bytes am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setUint8()")}}
  - : Nimmt eine Zahl und speichert sie als 8-Bit-Unsigned-Integer im Byte am angegebenen Byte-Offset dieses `DataView`.

## Beispiele

### Verwendung von DataView

```js
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `DataView` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
