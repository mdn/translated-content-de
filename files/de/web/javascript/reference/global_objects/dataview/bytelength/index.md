---
title: DataView.prototype.byteLength
short-title: byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Zugriffseigenschaft **`byteLength`** von Instanzen des {{jsxref("DataView")}} gibt die Länge (in Bytes) dieser Ansicht zurück.

{{InteractiveExample("JavaScript Demo: DataView.prototype.byteLength")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view1.byteLength + view2.byteLength); // 16 + 4
// Expected output: 20
```

## Beschreibung

Die `byteLength`-Eigenschaft ist eine Zugriffseigenschaft, deren Set-Accessor-Funktion auf `undefined` festgelegt ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen eines `DataView` festgelegt und kann nicht geändert werden. Wenn der `DataView` keinen Offset oder eine `byteLength` spezifiziert, wird die `byteLength` des referenzierten `ArrayBuffer` oder `SharedArrayBuffer` zurückgegeben.

## Beispiele

### Verwendung der byteLength-Eigenschaft

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteLength; // 8 (matches the byteLength of the buffer)

const dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (as specified when constructing the DataView)

const dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (due to the offset of the constructed DataView)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
