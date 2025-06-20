---
title: ArrayBuffer.prototype.maxByteLength
short-title: maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Eigenschaft **`maxByteLength`** der Zugriffs-Property von {{jsxref("ArrayBuffer")}}-Instanzen gibt die maximale Länge (in Bytes) zurück, auf die dieser Array-Puffer vergrößert werden kann.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.prototype.maxByteLength")}}

```js interactive-example
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

console.log(buffer.byteLength);
// Expected output: 8

console.log(buffer.maxByteLength);
// Expected output: 16
```

## Beschreibung

Die `maxByteLength`-Eigenschaft ist eine Zugriffs-Property, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen des Arrays festgelegt, über die `maxByteLength`-Option des {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}-Konstruktors gesetzt und kann nicht geändert werden.

Diese Eigenschaft gibt 0 zurück, wenn dieser `ArrayBuffer` getrennt wurde. Wenn dieser `ArrayBuffer` ohne Angabe eines `maxByteLength`-Wertes erstellt wurde, gibt diese Eigenschaft einen Wert zurück, der dem Wert des {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des `ArrayBuffer` entspricht.

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
