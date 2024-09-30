---
title: ArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`maxByteLength`** Zugriffseigenschaft von {{jsxref("ArrayBuffer")}} Instanzen gibt die maximale Länge (in Bytes) zurück, auf die dieser Array-Puffer geändert werden kann.

{{EmbedInteractiveExample("pages/js/arraybuffer-maxbytelength.html")}}

## Beschreibung

Die `maxByteLength` Eigenschaft ist eine Zugriffseigenschaft, deren set-Zugriffsfunktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn der Array erstellt wird, durch die Option `maxByteLength` des {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} Konstruktors festgelegt und kann nicht geändert werden.

Diese Eigenschaft gibt 0 zurück, wenn dieser `ArrayBuffer` abgetrennt wurde. Wenn dieser `ArrayBuffer` erstellt wurde, ohne einen `maxByteLength` Wert anzugeben, gibt diese Eigenschaft einen Wert zurück, der dem Wert der {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des `ArrayBuffer`'s entspricht.

## Beispiele

### Verwendung von maxByteLength

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes geändert werden kann, und geben dann dessen `maxByteLength` zurück:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.maxByteLength; // 16
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.byteLength")}}
- {{jsxref("ArrayBuffer.prototype.resize()")}}
