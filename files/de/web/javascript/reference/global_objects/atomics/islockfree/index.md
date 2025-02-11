---
title: Atomics.isLockFree()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Atomics.isLockFree()`** wird verwendet, um zu bestimmen, ob die `Atomics`-Methoden Sperren oder atomare Hardware-Operationen verwenden, wenn sie auf typisierte Arrays mit einer bestimmten Byte-Größe angewendet werden. Sie ist als Optimierungsprimitive gedacht, damit leistungsstarke Algorithmen entscheiden können, ob sie Sperren oder atomare Operationen in kritischen Abschnitten verwenden sollen. Wenn ein atomarer Primitive nicht sperrfrei ist, ist es oft effizienter, wenn ein Algorithmus eigene Sperrmechanismen bereitstellt.

{{InteractiveExample("JavaScript Demo: Atomics.isLockFree()")}}

```js interactive-example
console.log(Atomics.isLockFree(3));
// 3 is not one of the BYTES_PER_ELEMENT values
// Expected output: false

console.log(Atomics.isLockFree(4));
// 4 is one of the BYTES_PER_ELEMENT values
// Expected output: true
```

## Syntax

```js-nolint
Atomics.isLockFree(size)
```

### Parameter

- `size`
  - : Die Größe in Bytes, die geprüft werden soll.

### Rückgabewert

Ein `true`- oder `false`-Wert, der angibt, ob die Operation sperrfrei ist.

- Immer `true`, wenn `size` 4 ist, da alle bekannten Plattformen 4-Byte-atomare Operationen unterstützen.
- Immer `false`, wenn die angegebene Größe nicht eine der [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT)-Eigenschaften von Integer-TypedArray-Typen ist.

## Beispiele

### Verwendung von isLockFree

```js
Atomics.isLockFree(1); // true (platform-dependent)
Atomics.isLockFree(2); // true (platform-dependent)
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true
Atomics.isLockFree(5); // false
Atomics.isLockFree(6); // false
Atomics.isLockFree(7); // false
Atomics.isLockFree(8); // true (platform-dependent)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
