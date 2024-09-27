---
title: DataView.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`buffer`**-Zugriffseigenschaft von {{jsxref("DataView")}}-Instanzen gibt den {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} zurück, auf den dieser View zur Erstellungszeit verweist.

{{EmbedInteractiveExample("pages/js/dataview-buffer.html")}}

## Beschreibung

Die `buffer`-Eigenschaft ist eine Zugriffseigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen des `DataView` festgelegt und kann nicht geändert werden.

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
