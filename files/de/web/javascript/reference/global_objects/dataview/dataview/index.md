---
title: DataView()-Konstruktor
short-title: DataView()
slug: Web/JavaScript/Reference/Global_Objects/DataView/DataView
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`DataView()`**-Konstruktor erstellt {{jsxref("DataView")}}-Objekte.

{{InteractiveExample("JavaScript Demo: DataView() constructor")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Create a couple of views
const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes
view1.setInt8(12, 42); // Put 42 in slot 12

console.log(view2.getInt8(0));
// Expected output: 42
```

## Syntax

```js-nolint
new DataView(buffer)
new DataView(buffer, byteOffset)
new DataView(buffer, byteOffset, byteLength)
```

> [!NOTE]
> `DataView()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `buffer`
  - : Ein vorhandener {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}, der als Speicher für das neue `DataView`-Objekt dient.
- `byteOffset` {{optional_inline}}
  - : Der Offset in Bytes zum ersten Byte im obigen Buffer, auf das die neue Ansicht verweisen soll. Wenn nicht angegeben, beginnt die Ansicht des Buffers beim ersten Byte.
- `byteLength` {{optional_inline}}
  - : Die Anzahl der Elemente im Byte-Array. Wenn nicht angegeben, entspricht die Länge der Ansicht der Länge des Buffers.

### Rückgabewert

Ein neues {{jsxref("DataView")}}-Objekt, das den angegebenen Datenpuffer darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn die Werte der Parameter `byteOffset` oder `byteLength` dazu führen, dass die Ansicht über das Ende des Buffers hinausgeht. Mit anderen Worten, `byteOffset + byteLength > buffer.byteLength`.

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
- {{jsxref("DataView")}}
