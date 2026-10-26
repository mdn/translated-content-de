---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die **`DataView`**-Ansicht bietet eine Low-Level-Schnittstelle zum Lesen und Schreiben verschiedener Zahlentypen in einem binären {{jsxref("ArrayBuffer")}}, ohne dass Sie die {{Glossary("Endianness", "Byte-Reihenfolge")}} der Plattform berücksichtigen müssen.

## Beschreibung

### Byte-Reihenfolge

Mehrbyte-Zahlenformate werden je nach Rechnerarchitektur unterschiedlich im Speicher dargestellt – eine Erklärung finden Sie unter {{Glossary("Endianness", "Byte-Reihenfolge")}}. Die Zugriffsmethoden von `DataView` ermöglichen eine ausdrückliche Kontrolle darüber, wie auf Daten zugegriffen wird, unabhängig von der Byte-Reihenfolge des ausführenden Computers. Beispielsweise verwendet der Speicher von [WebAssembly](/de/docs/WebAssembly) immer Little-Endian. Daher sollten Sie zum Lesen und Schreiben von Mehrbyte-Werten `DataView` statt typisierter Arrays verwenden. Ein Beispiel finden Sie unter [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory).

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
> `DataView` verwendet beim Lesen und Schreiben standardmäßig Big-Endian, die meisten Plattformen verwenden jedoch Little-Endian.

## Konstruktor

- {{jsxref("DataView/DataView", "DataView()")}}
  - : Erstellt ein neues `DataView`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `DataView.prototype` definiert und werden von allen `DataView`-Instanzen gemeinsam genutzt.

- {{jsxref("DataView.prototype.buffer")}}
  - : Gibt den {{jsxref("ArrayBuffer")}} zurück, auf den `DataView` verweist.
- {{jsxref("DataView.prototype.byteLength")}}
  - : Gibt die Länge von `DataView` in Bytes zurück.
- {{jsxref("DataView.prototype.byteOffset")}}
  - : Gibt den Offset von `DataView` gegenüber dem Anfang seines {{jsxref("ArrayBuffer")}} in Bytes zurück.
- {{jsxref("Object/constructor", "DataView.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `DataView`-Instanzen ist der Anfangswert der {{jsxref("DataView/DataView", "DataView")}}-Konstruktor.
- `DataView.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"DataView"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : Liest 8 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als vorzeichenbehaftete 64-Bit-Ganzzahl.
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : Liest 8 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als vorzeichenlose 64-Bit-Ganzzahl.
- {{jsxref("DataView.prototype.getFloat16()")}}
  - : Liest 2 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 16-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : Liest 4 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 32-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : Liest 8 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 64-Bit-Gleitkommazahl.
- {{jsxref("DataView.prototype.getInt16()")}}
  - : Liest 2 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als vorzeichenbehaftete 16-Bit-Ganzzahl.
- {{jsxref("DataView.prototype.getInt32()")}}
  - : Liest 4 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als vorzeichenbehaftete 32-Bit-Ganzzahl.
- {{jsxref("DataView.prototype.getInt8()")}}
  - : Liest 1 Byte am angegebenen Byte-Offset dieses `DataView` und interpretiert es als vorzeichenbehaftete 8-Bit-Ganzzahl.
- {{jsxref("DataView.prototype.getUint16()")}}
  - : Liest 2 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als vorzeichenlose 16-Bit-Ganzzahl.
- {{jsxref("DataView.prototype.getUint32()")}}
  - : Liest 4 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als vorzeichenlose 32-Bit-Ganzzahl.
- {{jsxref("DataView.prototype.getUint8()")}}
  - : Liest 1 Byte am angegebenen Byte-Offset dieses `DataView` und interpretiert es als vorzeichenlose 8-Bit-Ganzzahl.
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : Nimmt einen BigInt-Wert entgegen und speichert ihn als vorzeichenbehaftete 64-Bit-Ganzzahl in den 8 Bytes ab dem angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : Nimmt einen BigInt-Wert entgegen und speichert ihn als vorzeichenlose 64-Bit-Ganzzahl in den 8 Bytes ab dem angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat16()")}}
  - : Nimmt eine Zahl entgegen und speichert sie als 16-Bit-Gleitkommazahl in den 2 Bytes ab dem angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : Nimmt eine Zahl entgegen und speichert sie als 32-Bit-Gleitkommazahl in den 4 Bytes ab dem angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : Nimmt eine Zahl entgegen und speichert sie als 64-Bit-Gleitkommazahl in den 8 Bytes ab dem angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setInt16()")}}
  - : Nimmt eine Zahl entgegen und speichert sie als vorzeichenbehaftete 16-Bit-Ganzzahl in den 2 Bytes am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setInt32()")}}
  - : Nimmt eine Zahl entgegen und speichert sie als vorzeichenbehaftete 32-Bit-Ganzzahl in den 4 Bytes am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setInt8()")}}
  - : Nimmt eine Zahl entgegen und speichert sie als vorzeichenbehaftete 8-Bit-Ganzzahl im Byte am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setUint16()")}}
  - : Nimmt eine Zahl entgegen und speichert sie als vorzeichenlose 16-Bit-Ganzzahl in den 2 Bytes am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setUint32()")}}
  - : Nimmt eine Zahl entgegen und speichert sie als vorzeichenlose 32-Bit-Ganzzahl in den 4 Bytes am angegebenen Byte-Offset dieses `DataView`.
- {{jsxref("DataView.prototype.setUint8()")}}
  - : Nimmt eine Zahl entgegen und speichert sie als vorzeichenlose 8-Bit-Ganzzahl im Byte am angegebenen Byte-Offset dieses `DataView`.

## Beispiele

### DataView verwenden

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

- [Polyfill für `DataView` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
