---
title: SharedArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`byteLength`** Accessor-Eigenschaft von Instanzen des {{jsxref("SharedArrayBuffer")}} gibt die Länge (in Bytes) dieses `SharedArrayBuffer` zurück.

{{InteractiveExample("JavaScript Demo: SharedArrayBuffer.byteLength", "shorter")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## Beschreibung

Die Eigenschaft `byteLength` ist eine Accessor-Eigenschaft, deren Set-Accessor-Funktion auf `undefined` gesetzt ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen des Shared Arrays festgelegt und kann nicht geändert werden.

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
