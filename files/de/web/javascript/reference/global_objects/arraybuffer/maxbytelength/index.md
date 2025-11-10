---
title: ArrayBuffer.prototype.maxByteLength
short-title: maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Zugriffsproperty **`maxByteLength`** von {{jsxref("ArrayBuffer")}}-Instanzen gibt die maximale Länge (in Bytes) zurück, auf die dieser Array-Buffer vergrößert werden kann.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.prototype.maxByteLength")}}

```js interactive-example
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

console.log(buffer.byteLength);
// Expected output: 8

console.log(buffer.maxByteLength);
// Expected output: 16
```

## Beschreibung

Die `maxByteLength`-Property ist eine Zugriffsproperty, deren Set-Zugriffs-Funktion `undefined` ist, was bedeutet, dass Sie diese Property nur lesen können. Der Wert wird bei der Konstruktion des Arrays festgelegt, wobei die `maxByteLength`-Option des {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}-Konstruktors verwendet wird und nicht geändert werden kann.

Diese Property gibt 0 zurück, wenn dieses `ArrayBuffer` getrennt wurde. Wenn dieses `ArrayBuffer` ohne Angabe eines `maxByteLength`-Werts konstruiert wurde, gibt diese Property einen Wert zurück, der dem Wert der {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des `ArrayBuffer` entspricht.

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
