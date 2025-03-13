---
title: SharedArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die Zugriffs-Eigenschaft **`byteLength`** von {{jsxref("SharedArrayBuffer")}}-Instanzen gibt die Länge (in Bytes) dieses `SharedArrayBuffer` zurück.

{{InteractiveExample("JavaScript Demo: SharedArrayBuffer.prototype.byteLength", "shorter")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## Beschreibung

Die `byteLength`-Eigenschaft ist eine Zugriffs-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen des Shared-Arrays festgelegt und kann nicht geändert werden.

## Beispiele

### Verwendung von byteLength

```js
const sab = new SharedArrayBuffer(1024);
sab.byteLength; // 1024
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("SharedArrayBuffer")}}
