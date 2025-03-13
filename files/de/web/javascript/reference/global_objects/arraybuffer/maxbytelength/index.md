---
title: ArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`maxByteLength`** Zugriffseigenschaft von {{jsxref("ArrayBuffer")}} Instanzen gibt die maximale Länge (in Bytes) zurück, auf die dieser ArrayBuffer vergrößert werden kann.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.prototype.maxByteLength")}}

```js interactive-example
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

console.log(buffer.byteLength);
// Expected output: 8

console.log(buffer.maxByteLength);
// Expected output: 16
```

## Beschreibung

Die `maxByteLength`-Eigenschaft ist eine Zugriffseigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird bei der Konstruktion des Array gesetzt, über die `maxByteLength`-Option des {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} Konstruktors festgelegt und kann nicht geändert werden.

Diese Eigenschaft gibt 0 zurück, wenn dieser `ArrayBuffer` getrennt wurde. Wenn dieser `ArrayBuffer` ohne Angabe eines `maxByteLength`-Wertes konstruiert wurde, gibt diese Eigenschaft einen Wert zurück, der dem Wert der {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des `ArrayBuffer` entspricht.

## Beispiele

### Verwendung von maxByteLength

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes vergrößert werden kann, und geben dann dessen `maxByteLength` zurück:

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
