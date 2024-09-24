---
title: DataView.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`byteOffset`** Accessor-Eigenschaft von {{jsxref("DataView")}} Instanzen gibt den Versatz (in Bytes) dieser Ansicht vom Anfang ihres {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} zurück.

{{EmbedInteractiveExample("pages/js/dataview-byteoffset.html")}}

## Beschreibung

Die `byteOffset` Eigenschaft ist eine Accessor-Eigenschaft, deren set Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn ein `DataView` konstruiert wird und kann nicht geändert werden.

## Beispiele

### Verwendung der byteOffset-Eigenschaft

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteOffset; // 0 (kein Versatz angegeben)

const dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (wie beim Erstellen der DataView angegeben)
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
