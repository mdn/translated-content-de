---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`byteLength`** -Zugriffseigenschaft von {{jsxref("ArrayBuffer")}}-Instanzen gibt die Länge (in Bytes) dieses ArrayBuffers zurück.

{{EmbedInteractiveExample("pages/js/arraybuffer-bytelength.html")}}

## Beschreibung

Die `byteLength`-Eigenschaft ist eine Zugriffseigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen des Arrays festgelegt und kann nicht geändert werden. Diese Eigenschaft gibt 0 zurück, wenn dieser `ArrayBuffer` getrennt wurde.

## Beispiele

### Verwendung von byteLength

```js
const buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("ArrayBuffer")}}
