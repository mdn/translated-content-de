---
title: DataView.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`byteLength`** Accessor-Eigenschaft von {{jsxref("DataView")}}-Instanzen gibt die Länge (in Bytes) dieser Ansicht zurück.

{{EmbedInteractiveExample("pages/js/dataview-bytelength.html")}}

## Beschreibung

Die `byteLength`-Eigenschaft ist eine Accessor-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen eines `DataView` festgelegt und kann nicht geändert werden. Wenn der `DataView` keinen Offset oder eine `byteLength` angibt, wird die `byteLength` des referenzierten `ArrayBuffer` oder `SharedArrayBuffer` zurückgegeben.

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
