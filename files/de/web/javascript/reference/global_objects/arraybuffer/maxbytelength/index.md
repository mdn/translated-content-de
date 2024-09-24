---
title: ArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`maxByteLength`**-Zugriffseigenschaft von {{jsxref("ArrayBuffer")}}-Instanzen gibt die maximale Länge (in Bytes) zurück, auf die dieser ArrayBuffer vergrößert werden kann.

{{EmbedInteractiveExample("pages/js/arraybuffer-maxbytelength.html")}}

## Beschreibung

Die `maxByteLength`-Eigenschaft ist eine Zugriffseigenschaft, deren Set-Zugriffsfunktionswert `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen des Arrays festgelegt, über die `maxByteLength`-Option des {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}-Konstruktors, und kann nicht geändert werden.

Diese Eigenschaft gibt 0 zurück, wenn dieser `ArrayBuffer` getrennt wurde. Wenn dieser `ArrayBuffer` ohne Angabe eines `maxByteLength`-Wertes erstellt wurde, gibt diese Eigenschaft einen Wert zurück, der dem Wert der {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des `ArrayBuffer` entspricht.

## Beispiele

### Verwendung von maxByteLength

In diesem Beispiel erstellen wir einen 8-Byte-Buffer, der auf eine maximale Länge von 16 Bytes vergrößert werden kann, und geben dann dessen `maxByteLength` zurück:

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
