---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`byteLength`**-Zugriffseigenschaft von {{jsxref("ArrayBuffer")}}-Instanzen gibt die Länge (in Bytes) dieses ArrayBuffers zurück.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.byteLength")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);

// Use byteLength to check the size
const bytes = buffer.byteLength;

console.log(bytes);
// Expected output: 8
```

## Beschreibung

Die Eigenschaft `byteLength` ist eine Zugriffseigenschaft, deren Set-Accessor-Funktion `undefined` ist. Das bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn der ArrayBuffer erstellt wird, und kann nicht geändert werden. Diese Eigenschaft gibt 0 zurück, wenn dieser `ArrayBuffer` vom Speicher getrennt wurde.

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
