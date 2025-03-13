---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`byteLength`** Zugriffseigenschaft von {{jsxref("ArrayBuffer")}}-Instanzen gibt die Länge (in Bytes) dieses Arraybuffers zurück.

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

Die `byteLength`-Eigenschaft ist eine Zugriffseigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn der Array erstellt wird und kann nicht geändert werden. Diese Eigenschaft gibt 0 zurück, wenn dieser `ArrayBuffer` getrennt wurde.

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
