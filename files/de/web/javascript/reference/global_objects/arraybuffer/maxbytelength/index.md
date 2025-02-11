---
title: ArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`maxByteLength`** Zugriffs-Eigenschaft von {{jsxref("ArrayBuffer")}}-Instanzen gibt die maximale Länge (in Bytes) zurück, auf die dieser ArrayBuffer geändert werden kann.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.maxByteLength")}}

```js interactive-example
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

console.log(buffer.byteLength);
// Expected output: 8

console.log(buffer.maxByteLength);
// Expected output: 16
```

## Beschreibung

Die `maxByteLength`-Eigenschaft ist eine Zugriffs-Eigenschaft, deren set-Zugriffs-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen des Arrays festgelegt, über die `maxByteLength`-Option des {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}-Konstruktors gesetzt und kann nicht geändert werden.

Diese Eigenschaft gibt 0 zurück, wenn dieser `ArrayBuffer` getrennt wurde. Wenn dieser `ArrayBuffer` ohne Angabe eines `maxByteLength`-Werts erstellt wurde, gibt diese Eigenschaft einen Wert zurück, der dem Wert der {{jsxref("ArrayBuffer/byteLength", "byteLength")}}-Eigenschaft des `ArrayBuffer` entspricht.

## Beispiele

### Verwendung von maxByteLength

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes geändert werden kann, und geben dann seine `maxByteLength` zurück:

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
