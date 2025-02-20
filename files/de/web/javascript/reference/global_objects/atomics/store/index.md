---
title: Atomics.store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Atomics.store()`** speichert einen angegebenen Wert an einer angegebenen Position im Array und gibt diesen Wert zurück.

{{InteractiveExample("JavaScript Demo: Atomics.store()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(Atomics.store(uint8, 0, 2));
// Expected output: 2

console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## Syntax

```js-nolint
Atomics.store(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein Integer-Typed-Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder
    {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der der
    `value` gespeichert wird.
- `value`
  - : Die Zahl, die gespeichert werden soll.

### Rückgabewert

Der Wert, der gespeichert wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Integer-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` im `typedArray` außerhalb des gültigen Bereichs liegt.

## Beispiele

### Verwendung von store()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.store(ta, 0, 12); // 12
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.load()")}}
