---
title: ArrayBuffer.prototype.byteLength
short-title: byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`byteLength`** Accessor-Eigenschaft von {{jsxref("ArrayBuffer")}} Instanzen gibt die Länge (in Bytes) dieses ArrayBuffers zurück.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.prototype.byteLength")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);

// Use byteLength to check the size
const bytes = buffer.byteLength;

console.log(bytes);
// Expected output: 8
```

## Beschreibung

Die `byteLength` Eigenschaft ist eine Accessor-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn das Array erstellt wird und kann nicht geändert werden. Diese Eigenschaft gibt 0 zurück, wenn dieser `ArrayBuffer` gelöst wurde.

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
