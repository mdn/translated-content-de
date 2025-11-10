---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

Die **`DataView`** Ansicht bietet eine Low-Level-Schnittstelle zum Lesen und Schreiben mehrerer Zahlentypen in einem binären {{jsxref("ArrayBuffer")}}, ohne sich um die {{Glossary("Endianness", "Endianness")}} der Plattform kümmern zu müssen.

## Beschreibung

### Endianness

Mehrbyte-Zahlenformate werden im Speicher unterschiedlich dargestellt, je nach Maschinenarchitektur – siehe {{Glossary("Endianness", "Endianness")}} für eine Erklärung. `DataView`-Zugriffs-Methoden bieten explizite Kontrolle darüber, wie auf Daten zugegriffen wird, unabhängig von der Endianness des ausführenden Computers. Zum Beispiel ist [WebAssembly](/de/docs/WebAssembly)-Speicher immer little-endian, daher sollten Sie `DataView` anstelle von typisierten Arrays verwenden, um Mehrbyte-Werte zu lesen und zu schreiben. Siehe [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) für ein Beispiel.

```js
const littleEndian = (() => {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array uses the platform's endianness.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false
```

> [!NOTE]
> `DataView` liest und schreibt standardmäßig big-endian, aber die meisten Plattformen verwenden little-endian.

## Konstruktor

- {{jsxref("DataView/DataView", "DataView()")}}
  - : Erstellt ein neues `DataView`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `DataView.prototype` definiert und werden von allen `DataView`-Instanzen geteilt.

- {{jsxref("DataView.prototype.buffer")}}
  - : Gibt den {{jsxref("ArrayBuffer")}} zurück, auf den das `DataView` verweist.
- {{jsxref("DataView.prototype.byteLength")}}
  - : Gibt die Länge (in Bytes) des `DataView` zurück.
- {{jsxref("DataView.prototype.byteOffset")}}
  - : Gibt den Versatz (in Bytes) des `DataView` ab dem Anfang seines {{jsxref("ArrayBuffer")}} zurück.
- {{jsxref("Object/constructor", "DataView.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `DataView`-Instanzen ist der anfängliche Wert der {{jsxref("DataView/DataView", "DataView")}}-Konstruktor.
- `DataView.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"DataView"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : Liest 8 Bytes ab dem angegebenen Byte-Versatz dieses `DataView` und interpretiert sie als 64-Bit-Ganzzahl mit Vorzeichen.
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : Liest 8 Bytes ab dem angegebenen Byte-Versatz dieses `DataView` und interpretiert sie als 64-Bit-Ganzzahl ohne Vorzeichen.
- {{jsxref("DataView.prototype.getFloat16()")}}
  - : Liest 2 Bytes ab dem angegebenen Byte-Versatz dieses `DataView` und interpretiert sie als 16-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : Liest 4 Bytes ab dem angegebenen Byte-Versatz dieses `DataView` und interpretiert sie als 32-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : Liest 8 Bytes ab dem angegebenen Byte-Versatz dieses `DataView` und interpretiert sie als 64-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getInt16()")}}
  - : Liest 2 Bytes ab dem angegebenen Byte-Versatz dieses `DataView` und interpretiert sie als 16-Bit-Ganzzahl mit Vorzeichen.
- {{jsxref("DataView.prototype.getInt32()")}}
  - : Liest 4 Bytes ab dem angegebenen Byte-Versatz dieses `DataView` und interpretiert sie als 32-Bit-Ganzzahl mit Vorzeichen.
- {{jsxref("DataView.prototype.getInt8()")}}
  - : Liest 1 Byte am angegebenen Byte-Versatz dieses `DataView` und interpretiert es als 8-Bit-Ganzzahl mit Vorzeichen.
- {{jsxref("DataView.prototype.getUint16()")}}
  - : Liest 2 Bytes ab dem angegebenen Byte-Versatz dieses `DataView` und interpretiert sie als 16-Bit-Ganzzahl ohne Vorzeichen.
- {{jsxref("DataView.prototype.getUint32()")}}
  - : Liest 4 Bytes ab dem angegebenen Byte-Versatz dieses `DataView` und interpretiert sie als 32-Bit-Ganzzahl ohne Vorzeichen.
- {{jsxref("DataView.prototype.getUint8()")}}
  - : Liest 1 Byte am angegebenen Byte-Versatz dieses `DataView` und interpretiert es als 8-Bit-Ganzzahl ohne Vorzeichen.
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : Nimmt ein BigInt und speichert es als 64-Bit-Ganzzahl mit Vorzeichen in den 8 Bytes ab dem angegebenen Byte-Versatz dieses `DataView`.
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : Nimmt ein BigInt und speichert es als 64-Bit-Ganzzahl ohne Vorzeichen in den 8 Bytes ab dem angegebenen Byte-Versatz dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-Gleitkommazahl in den 2 Bytes ab dem angegebenen Byte-Versatz dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-Gleitkommazahl in den 4 Bytes ab dem angegebenen Byte-Versatz dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : Nimmt eine Zahl und speichert sie als 64-Bit-Gleitkommazahl in den 8 Bytes ab dem angegebenen Byte-Versatz dieses `DataView`.
- {{jsxref("DataView.prototype.setInt16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-Ganzzahl mit Vorzeichen in den 2 Bytes am angegebenen Byte-Versatz dieses `DataView`.
- {{jsxref("DataView.prototype.setInt32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-Ganzzahl mit Vorzeichen in den 4 Bytes am angegebenen Byte-Versatz dieses `DataView`.
- {{jsxref("DataView.prototype.setInt8()")}}
  - : Nimmt eine Zahl und speichert sie als 8-Bit-Ganzzahl mit Vorzeichen im Byte am angegebenen Byte-Versatz dieses `DataView`.
- {{jsxref("DataView.prototype.setUint16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-Ganzzahl ohne Vorzeichen in den 2 Bytes am angegebenen Byte-Versatz dieses `DataView`.
- {{jsxref("DataView.prototype.setUint32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-Ganzzahl ohne Vorzeichen in den 4 Bytes am angegebenen Byte-Versatz dieses `DataView`.
- {{jsxref("DataView.prototype.setUint8()")}}
  - : Nimmt eine Zahl und speichert sie als 8-Bit-Ganzzahl ohne Vorzeichen im Byte am angegebenen Byte-Versatz dieses `DataView`.

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
