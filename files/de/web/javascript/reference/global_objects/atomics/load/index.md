---
title: Atomics.load()
short-title: load()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/load
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Atomics.load()`** statische Methode gibt einen Wert an einer gegebenen Position im Array zurück.

{{InteractiveExample("JavaScript Demo: Atomics.load()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

// 5 + 2 = 7
console.log(Atomics.add(uint8, 0, 2));
// Expected output: 5

console.log(Atomics.load(uint8, 0));
// Expected output: 7
```

## Syntax

```js-nolint
Atomics.load(typedArray, index)
```

### Parameter

- `typedArray`
  - : Ein Integer-getyptes Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, oder
    {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, von der geladen werden soll.

### Rückgabewert

Der Wert an der gegebenen Position (`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Integer-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen von `typedArray` liegt.

## Beispiele

### Verwendung von `load`

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12);
Atomics.load(ta, 0); // 12
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.store()")}}
