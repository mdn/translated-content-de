---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`DataView`**-Sicht bietet eine Low-Level-Schnittstelle zum Lesen und Schreiben mehrerer Zahlentypen in einem binären {{jsxref("ArrayBuffer")}}, ohne sich um die {{Glossary("Endianness", "Endianness")}} der Plattform kümmern zu müssen.

## Beschreibung

### Endianness

Mehrbyte-Zahlenformate werden je nach Maschinenarchitektur unterschiedlich im Speicher dargestellt — siehe {{Glossary("Endianness", "Endianness")}} für eine Erklärung. `DataView`-Zugriffs-Methoden bieten explizite Kontrolle darüber, wie auf Daten zugegriffen wird, unabhängig von der Endianness des ausführenden Computers. Zum Beispiel ist der Speicher von [WebAssembly](/de/docs/WebAssembly) immer im Little-Endian-Format, daher sollten Sie `DataView` anstelle von typisierten Arrays verwenden, um Mehrbyte-Werte zu lesen und zu schreiben. Siehe [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) für ein Beispiel.

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
> `DataView` verwendet standardmäßig das Big-Endian-Format für das Lesen und Schreiben, aber die meisten Plattformen verwenden Little-Endian.

## Konstruktor

- {{jsxref("DataView/DataView", "DataView()")}}
  - : Erstellt ein neues `DataView`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `DataView.prototype` definiert und werden von allen `DataView`-Instanzen gemeinsam genutzt.

- {{jsxref("DataView.prototype.buffer")}}
  - : Der durch diese Sicht referenzierte {{jsxref("ArrayBuffer")}}. Festgelegt zur Konstruktionszeit und daher **schreibgeschützt**.
- {{jsxref("DataView.prototype.byteLength")}}
  - : Die Länge (in Bytes) dieser Sicht. Festgelegt zur Konstruktionszeit und daher **schreibgeschützt**.
- {{jsxref("DataView.prototype.byteOffset")}}
  - : Der Offset (in Bytes) dieser Sicht vom Anfang ihres {{jsxref("ArrayBuffer")}}. Festgelegt zur Konstruktionszeit und daher **schreibgeschützt**.
- {{jsxref("Object/constructor", "DataView.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `DataView`-Instanzen ist der Anfangswert der {{jsxref("DataView/DataView", "DataView")}}-Konstruktor.
- `DataView.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"DataView"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : Liest 8 Bytes beginnend am angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 64-Bit-Vorzeichen ganze Zahl.
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : Liest 8 Bytes beginnend am angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 64-Bit-Unsignierte ganze Zahl.
- {{jsxref("DataView.prototype.getFloat16()")}}
  - : Liest 2 Bytes beginnend am angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 16-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : Liest 4 Bytes beginnend am angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 32-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : Liest 8 Bytes beginnend am angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 64-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getInt16()")}}
  - : Liest 2 Bytes beginnend am angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 16-Bit-Vorzeichen ganze Zahl.
- {{jsxref("DataView.prototype.getInt32()")}}
  - : Liest 4 Bytes beginnend am angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 32-Bit-Vorzeichen ganze Zahl.
- {{jsxref("DataView.prototype.getInt8()")}}
  - : Liest 1 Byte am angegebenen Byte-Offset dieses `DataView` und interpretiert es als 8-Bit-Vorzeichen ganze Zahl.
- {{jsxref("DataView.prototype.getUint16()")}}
  - : Liest 2 Bytes beginnend am angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 16-Bit-Unsignierte ganze Zahl.
- {{jsxref("DataView.prototype.getUint32()")}}
  - : Liest 4 Bytes beginnend am angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 32-Bit-Unsignierte ganze Zahl.
- {{jsxref("DataView.prototype.getUint8()")}}
  - : Liest 1 Byte am angegebenen Byte-Offset dieses `DataView` und interpretiert es als 8-Bit-Unsignierte ganze Zahl.
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : Nimmt ein BigInt und speichert es als 64-Bit-Vorzeichen ganze Zahl in den 8 Bytes beginnend am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : Nimmt ein BigInt und speichert es als 64-Bit-Unsignierte ganze Zahl in den 8 Bytes beginnend am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-Gleitkommazahl in den 2 Bytes beginnend am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-Gleitkommazahl in den 4 Bytes beginnend am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : Nimmt eine Zahl und speichert sie als 64-Bit-Gleitkommazahl in den 8 Bytes beginnend am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setInt16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-Vorzeichen ganze Zahl in den 2 Bytes am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setInt32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-Vorzeichen ganze Zahl in den 4 Bytes am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setInt8()")}}
  - : Nimmt eine Zahl und speichert sie als 8-Bit-Vorzeichen ganze Zahl im Byte am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setUint16()")}}
  - : Nimmt eine Zahl und speichert sie als 16-Bit-Unsignierte ganze Zahl in den 2 Bytes am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setUint32()")}}
  - : Nimmt eine Zahl und speichert sie als 32-Bit-Unsignierte ganze Zahl in den 4 Bytes am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setUint8()")}}
  - : Nimmt eine Zahl und speichert sie als 8-Bit-Unsignierte ganze Zahl im Byte am angegebenen Byte-Offset dieses `DataView`.

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
