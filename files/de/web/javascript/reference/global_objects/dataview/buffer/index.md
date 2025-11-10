---
title: DataView.prototype.buffer
short-title: buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`buffer`** Accessor-Eigenschaft von {{jsxref("DataView")}} Instanzen gibt den {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} zurück, der bei der Konstruktion dieser Ansicht referenziert wurde.

{{InteractiveExample("JavaScript Demo: DataView.prototype.buffer")}}

```js interactive-example
// Create an ArrayBuffer
const buffer = new ArrayBuffer(123);

// Create a view
const view = new DataView(buffer);

console.log(view.buffer.byteLength);
// Expected output: 123
```

## Beschreibung

Die `buffer`-Eigenschaft ist eine Accessor-Eigenschaft, deren set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen der `DataView` festgelegt und kann nicht geändert werden.

## Beispiele

### Verwendung der buffer-Eigenschaft

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.buffer; // ArrayBuffer { byteLength: 8 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
