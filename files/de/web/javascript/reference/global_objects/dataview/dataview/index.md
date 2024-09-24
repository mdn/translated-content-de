---
title: DataView()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/DataView/DataView
l10n:
  sourceCommit: 3bb625c6e90ea87be9592a611fb03364905d067d
---

{{JSRef}}

Der **`DataView()`**-Konstruktor erstellt {{jsxref("DataView")}}-Objekte.

{{EmbedInteractiveExample("pages/js/dataview-constructor.html")}}

## Syntax

```js-nolint
new DataView(buffer)
new DataView(buffer, byteOffset)
new DataView(buffer, byteOffset, byteLength)
```

> **Note:** `DataView()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `buffer`
  - : Ein vorhandener {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} zur Verwendung als Speicher, der das neue `DataView`-Objekt unterstützt.
- `byteOffset` {{optional_inline}}
  - : Der Offset in Bytes zum ersten Byte im obigen Buffer, auf den die neue Ansicht verweisen soll. Wenn nicht angegeben, beginnt die Buffer-Ansicht mit dem ersten Byte.
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
