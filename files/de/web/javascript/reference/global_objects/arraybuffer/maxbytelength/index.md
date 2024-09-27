---
title: ArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`maxByteLength`** Accessor-Eigenschaft von {{jsxref("ArrayBuffer")}}-Instanzen gibt die maximale Länge (in Bytes) zurück, auf die dieser Array-Puffer skaliert werden kann.

{{EmbedInteractiveExample("pages/js/arraybuffer-maxbytelength.html")}}

## Beschreibung

Die `maxByteLength`-Eigenschaft ist eine Accessor-Eigenschaft, deren Set-Accessor-Funktion auf `undefined` gesetzt ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen des Arrays festgelegt, über die `maxByteLength`-Option des {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} Konstruktors, und kann nicht geändert werden.

Diese Eigenschaft gibt 0 zurück, wenn dieses `ArrayBuffer` getrennt wurde. Wenn dieses `ArrayBuffer` ohne Angabe eines `maxByteLength` Wertes erstellt wurde, dann gibt diese Eigenschaft einen Wert zurück, der dem Wert des {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des `ArrayBuffer` entspricht.

## Beispiele

### Verwendung von maxByteLength

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes skalierbar ist, und geben dann dessen `maxByteLength` zurück:

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
