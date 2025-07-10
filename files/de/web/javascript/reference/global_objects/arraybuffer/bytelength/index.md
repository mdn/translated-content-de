---
title: ArrayBuffer.prototype.byteLength
short-title: byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Zugriffsselektor-Eigenschaft **`byteLength`** von {{jsxref("ArrayBuffer")}}-Instanzen gibt die Länge (in Bytes) dieses Array-Buffers zurück.

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

Die `byteLength`-Eigenschaft ist eine Zugriffsselektor-Eigenschaft, deren Set-Zugriffsselektor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird festgelegt, wenn das Array erstellt wird und kann nicht geändert werden. Diese Eigenschaft gibt 0 zurück, wenn dieses `ArrayBuffer` abgetrennt wurde.

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
