---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
l10n:
  sourceCommit: c9875ce8506c411a7f28698c40995c785e3c6cee
---

{{JSRef}}

Die **`DataView`** Ansicht bietet eine Schnittstelle auf niedriger Ebene für das Lesen und Schreiben verschiedener Zahlentypen in einem binären {{jsxref("ArrayBuffer")}}, ohne sich um die [Endianness](/de/docs/Glossary/Endianness) der Plattform kümmern zu müssen.

## Beschreibung

### Endianness

Mehrbyte-Zahlenformate werden im Speicher unterschiedlich dargestellt, abhängig von der Rechnerarchitektur – siehe [Endianness](/de/docs/Glossary/Endianness) für eine Erklärung. `DataView`-Accessor bietet explizite Kontrolle darüber, wie auf Daten zugegriffen wird, unabhängig von der Endianness des ausführenden Computers. Beispielsweise ist der Speicher in [WebAssembly](/de/docs/WebAssembly) immer little-endian, so dass `DataView` anstelle von typisierten Arrays verwendet werden sollte, um Mehrbyte-Werte zu lesen und zu schreiben. Siehe [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) für ein Beispiel.

```js
const littleEndian = (() => {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array uses the platform's endianness.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false
```

> **Note:** `DataView` verwendet standardmäßig big-endian für Lesen und Schreiben, aber die meisten Plattformen verwenden little-endian.

## Konstruktor

- {{jsxref("DataView/DataView", "DataView()")}}
  - : Erstellt ein neues `DataView`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `DataView.prototype` definiert und werden von allen `DataView`-Instanzen geteilt.

- {{jsxref("DataView.prototype.buffer")}}
  - : Der {{jsxref("ArrayBuffer")}}, auf den diese Ansicht verweist. Fest während der Konstruktion und daher **nur lesbar.**
- {{jsxref("DataView.prototype.byteLength")}}
  - : Die Länge (in Bytes) dieser Ansicht. Fest während der Konstruktion und daher **nur lesbar.**
- {{jsxref("DataView.prototype.byteOffset")}}
  - : Der Offset (in Bytes) dieser Ansicht vom Anfang des {{jsxref("ArrayBuffer")}}. Fest während der Konstruktion und daher **nur lesbar.**
- {{jsxref("Object/constructor", "DataView.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `DataView`-Instanzen ist der Anfangswert der {{jsxref("DataView/DataView", "DataView")}}-Konstruktor.
- `DataView.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"DataView"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : Liest 8 Bytes beginnend bei dem angegebenen Byteoffset dieses `DataView` und interpretiert sie als 64-Bit-Integer mit Vorzeichen.
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : Liest 8 Bytes beginnend bei dem angegebenen Byteoffset dieses `DataView` und interpretiert sie als 64-Bit-unsigned Integer.
- {{jsxref("DataView.prototype.getFloat16()")}}
  - : Liest 2 Bytes beginnend bei dem angegebenen Byteoffset dieses `DataView` und interpretiert sie als 16-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : Liest 4 Bytes beginnend bei dem angegebenen Byteoffset dieses `DataView` und interpretiert sie als 32-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : Liest 8 Bytes beginnend bei dem angegebenen Byteoffset dieses `DataView` und interpretiert sie als 64-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getInt16()")}}
  - : Liest 2 Bytes beginnend bei dem angegebenen Byteoffset dieses `DataView` und interpretiert sie als 16-Bit-Integer mit Vorzeichen.
- {{jsxref("DataView.prototype.getInt32()")}}
  - : Liest 4 Bytes beginnend bei dem angegebenen Byteoffset dieses `DataView` und interpretiert sie als 32-Bit-Integer mit Vorzeichen.
- {{jsxref("DataView.prototype.getInt8()")}}
  - : Liest 1 Byte an dem angegebenen Byteoffset dieses `DataView` und interpretiert es als 8-Bit-Integer mit Vorzeichen.
- {{jsxref("DataView.prototype.getUint16()")}}
  - : Liest 2 Bytes beginnend bei dem angegebenen Byteoffset dieses `DataView` und interpretiert sie als 16-Bit-unsigned Integer.
- {{jsxref("DataView.prototype.getUint32()")}}
  - : Liest 4 Bytes beginnend bei dem angegebenen Byteoffset dieses `DataView` und interpretiert sie als 32-Bit-unsigned Integer.
- {{jsxref("DataView.prototype.getUint8()")}}
  - : Liest 1 Byte an dem angegebenen Byteoffset dieses `DataView` und interpretiert es als 8-Bit-unsigned Integer.
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : Nimmt ein BigInt und speichert es als 64-Bit-Integer mit Vorzeichen in den 8 Bytes, beginnend bei dem angegebenen Byteoffset dieses `DataView`.
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : Nimmt ein BigInt und speichert es als 64-Bit-unsigned Integer in den 8 Bytes, beginnend bei dem angegebenen Byteoffset dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-Fließkommazahl in den 2 Bytes, beginnend bei dem angegebenen Byteoffset dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-Fließkommazahl in den 4 Bytes, beginnend bei dem angegebenen Byteoffset dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : Nimmt eine Zahl und speichert sie als 64-Bit-Fließkommazahl in den 8 Bytes, beginnend bei dem angegebenen Byteoffset dieses `DataView`.
- {{jsxref("DataView.prototype.setInt16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-Integer mit Vorzeichen in den 2 Bytes, beginnend bei dem angegebenen Byteoffset dieses `DataView`.
- {{jsxref("DataView.prototype.setInt32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-Integer mit Vorzeichen in den 4 Bytes, beginnend bei dem angegebenen Byteoffset dieses `DataView`.
- {{jsxref("DataView.prototype.setInt8()")}}
  - : Nimmt eine Zahl und speichert sie als 8-Bit-Integer mit Vorzeichen im Byte, an dem angegebenen Byteoffset dieses `DataView`.
- {{jsxref("DataView.prototype.setUint16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-unsigned Integer in den 2 Bytes, beginnend bei dem angegebenen Byteoffset dieses `DataView`.
- {{jsxref("DataView.prototype.setUint32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-unsigned Integer in den 4 Bytes, beginnend bei dem angegebenen Byteoffset dieses `DataView`.
- {{jsxref("DataView.prototype.setUint8()")}}
  - : Nimmt eine Zahl und speichert sie als 8-Bit-unsigned Integer im Byte, an dem angegebenen Byteoffset dieses `DataView`.

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
