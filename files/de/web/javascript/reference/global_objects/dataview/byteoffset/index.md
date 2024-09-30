---
title: DataView.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`byteOffset`** Zugriffseigenschaft von {{jsxref("DataView")}} Instanzen gibt den Offset (in Bytes) dieser Ansicht vom Anfang ihres {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} zurück.

{{EmbedInteractiveExample("pages/js/dataview-byteoffset.html")}}

## Beschreibung

Die Eigenschaft `byteOffset` ist eine Zugriffseigenschaft, deren Set-Accessor-Funktion `undefined` ist. Das bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn ein `DataView` erstellt wird und kann nicht geändert werden.

## Beispiele

### Verwendung der byteOffset-Eigenschaft

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteOffset; // 0 (no offset specified)

const dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (as specified when constructing the DataView)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
