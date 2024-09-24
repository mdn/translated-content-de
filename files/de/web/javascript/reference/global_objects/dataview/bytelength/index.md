---
title: DataView.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`byteLength`**-Zugriffseigenschaft von {{jsxref("DataView")}}-Instanzen gibt die Länge (in Bytes) dieser Ansicht zurück.

{{EmbedInteractiveExample("pages/js/dataview-bytelength.html")}}

## Beschreibung

Die `byteLength`-Eigenschaft ist eine Zugriffseigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen einer `DataView` festgelegt und kann nicht geändert werden. Wenn die `DataView` keinen Offset oder keine `byteLength` angibt, wird die `byteLength` des referenzierten `ArrayBuffer` oder `SharedArrayBuffer` zurückgegeben.

## Beispiele

### Verwendung der byteLength-Eigenschaft

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteLength; // 8 (entspricht der byteLength des Puffer)

const dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (wie beim Erstellen der DataView angegeben)

const dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (aufgrund des Offsets der erstellten DataView)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
