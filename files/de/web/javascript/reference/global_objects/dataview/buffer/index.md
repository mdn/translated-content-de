---
title: DataView.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`buffer`** Accessor-Eigenschaft von {{jsxref("DataView")}} Instanzen gibt den {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} zurück, der bei der Konstruktion dieser Ansicht referenziert wurde.

{{EmbedInteractiveExample("pages/js/dataview-buffer.html")}}

## Beschreibung

Die `buffer`-Eigenschaft ist eine Accessor-Eigenschaft, deren set Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird bei der Konstruktion des `DataView` festgelegt und kann nicht geändert werden.

## Beispiele

### Verwenden der buffer-Eigenschaft

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
