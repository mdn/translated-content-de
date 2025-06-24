---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Die **`DataView`**-Sicht bietet eine Low-Level-Schnittstelle zum Lesen und Schreiben mehrerer Zahlentypen in einem binären {{jsxref("ArrayBuffer")}}, ohne sich um die {{Glossary("Endianness", "Endianness")}} der Plattform kümmern zu müssen.

## Beschreibung

### Endianness

Mehrbyte-Zahlenformate werden im Speicher je nach Maschinenarchitektur unterschiedlich dargestellt – siehe {{Glossary("Endianness", "Endianness")}} für eine Erklärung. `DataView`-Zugriffe bieten explizite Kontrolle darüber, wie auf Daten zugegriffen wird, unabhängig von der Endianness des ausführenden Computers. Zum Beispiel ist [WebAssembly](/de/docs/WebAssembly)-Speicher immer klein-endian, daher sollten Sie `DataView` anstelle von typisierten Arrays verwenden, um Mehrbyte-Werte zu lesen und schreiben. Siehe [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) für ein Beispiel.

```js
const littleEndian = (() => {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array uses the platform's endianness.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false
```

> [!NOTE] > `DataView` liest und schreibt standardmäßig im Big-Endian-Format, aber die meisten Plattformen verwenden Little-Endian.

## Konstruktor

- {{jsxref("DataView/DataView", "DataView()")}}
  - : Erstellt ein neues `DataView`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `DataView.prototype` definiert und werden von allen `DataView`-Instanzen geteilt.

- {{jsxref("DataView.prototype.buffer")}}
  - : Das vom dieser Sicht referenzierte {{jsxref("ArrayBuffer")}}. Wird zur Konstruktion festgelegt und ist daher **nur lesbar**.
- {{jsxref("DataView.prototype.byteLength")}}
  - : Die Länge (in Bytes) dieser Sicht. Wird zur Konstruktion festgelegt und ist daher **nur lesbar**.
- {{jsxref("DataView.prototype.byteOffset")}}
  - : Der Versatz (in Bytes) dieser Sicht vom Beginn ihres {{jsxref("ArrayBuffer")}}. Wird zur Konstruktion festgelegt und ist daher **nur lesbar**.
- {{jsxref("Object/constructor", "DataView.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `DataView`-Instanzen ist der Anfangswert der {{jsxref("DataView/DataView", "DataView")}}-Konstruktor.
- `DataView.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"DataView"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : Liest 8 Bytes beginnend bei dem angegebenen Byteversatz dieser `DataView` und interpretiert sie als 64-Bit-Ganzzahl mit Vorzeichen.
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : Liest 8 Bytes beginnend bei dem angegebenen Byteversatz dieser `DataView` und interpretiert sie als 64-Bit-Ganzzahl ohne Vorzeichen.
- {{jsxref("DataView.prototype.getFloat16()")}}
  - : Liest 2 Bytes beginnend bei dem angegebenen Byteversatz dieser `DataView` und interpretiert sie als 16-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : Liest 4 Bytes beginnend bei dem angegebenen Byteversatz dieser `DataView` und interpretiert sie als 32-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : Liest 8 Bytes beginnend bei dem angegebenen Byteversatz dieser `DataView` und interpretiert sie als 64-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getInt16()")}}
  - : Liest 2 Bytes beginnend bei dem angegebenen Byteversatz dieser `DataView` und interpretiert sie als 16-Bit-Ganzzahl mit Vorzeichen.
- {{jsxref("DataView.prototype.getInt32()")}}
  - : Liest 4 Bytes beginnend bei dem angegebenen Byteversatz dieser `DataView` und interpretiert sie als 32-Bit-Ganzzahl mit Vorzeichen.
- {{jsxref("DataView.prototype.getInt8()")}}
  - : Liest 1 Byte an der angegebenen Byteversatz dieser `DataView` und interpretiert es als 8-Bit-Ganzzahl mit Vorzeichen.
- {{jsxref("DataView.prototype.getUint16()")}}
  - : Liest 2 Bytes beginnend bei dem angegebenen Byteversatz dieser `DataView` und interpretiert sie als 16-Bit-Ganzzahl ohne Vorzeichen.
- {{jsxref("DataView.prototype.getUint32()")}}
  - : Liest 4 Bytes beginnend bei dem angegebenen Byteversatz dieser `DataView` und interpretiert sie als 32-Bit-Ganzzahl ohne Vorzeichen.
- {{jsxref("DataView.prototype.getUint8()")}}
  - : Liest 1 Byte an der angegebenen Byteversatz dieser `DataView` und interpretiert es als 8-Bit-Ganzzahl ohne Vorzeichen.
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : Nimmt eine BigInt und speichert sie als 64-Bit-Ganzzahl mit Vorzeichen in den 8 Bytes beginnend bei dem angegebenen Byteversatz dieser `DataView`.
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : Nimmt eine BigInt und speichert sie als 64-Bit-Ganzzahl ohne Vorzeichen in den 8 Bytes beginnend bei dem angegebenen Byteversatz dieser `DataView`.
- {{jsxref("DataView.prototype.setFloat16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-Fließkommazahl in den 2 Bytes beginnend bei dem angegebenen Byteversatz dieser `DataView`.
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-Fließkommazahl in den 4 Bytes beginnend bei dem angegebenen Byteversatz dieser `DataView`.
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : Nimmt eine Zahl und speichert sie als 64-Bit-Fließkommazahl in den 8 Bytes beginnend bei dem angegebenen Byteversatz dieser `DataView`.
- {{jsxref("DataView.prototype.setInt16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-Ganzzahl mit Vorzeichen in den 2 Bytes an dem angegebenen Byteversatz dieser `DataView`.
- {{jsxref("DataView.prototype.setInt32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-Ganzzahl mit Vorzeichen in den 4 Bytes an dem angegebenen Byteversatz dieser `DataView`.
- {{jsxref("DataView.prototype.setInt8()")}}
  - : Nimmt eine Zahl und speichert sie als 8-Bit-Ganzzahl mit Vorzeichen in dem Byte an dem angegebenen Byteversatz dieser `DataView`.
- {{jsxref("DataView.prototype.setUint16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-Ganzzahl ohne Vorzeichen in den 2 Bytes an dem angegebenen Byteversatz dieser `DataView`.
- {{jsxref("DataView.prototype.setUint32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-Ganzzahl ohne Vorzeichen in den 4 Bytes an dem angegebenen Byteversatz dieser `DataView`.
- {{jsxref("DataView.prototype.setUint8()")}}
  - : Nimmt eine Zahl und speichert sie als 8-Bit-Ganzzahl ohne Vorzeichen in dem Byte an dem angegebenen Byteversatz dieser `DataView`.

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
