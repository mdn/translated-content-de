---
title: Atomics.isLockFree()
short-title: isLockFree()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Atomics.isLockFree()`** wird verwendet, um festzustellen, ob die `Atomics`-Methoden Sperren oder atomare Hardware-Operationen verwenden, wenn sie auf typisierte Arrays mit der angegebenen Element-Byte-Größe angewendet werden. Sie ist als Optimierungsprimitive gedacht, damit Hochleistungsalgorithmen feststellen können, ob sie in kritischen Abschnitten Sperren oder atomare Operationen verwenden sollen. Wenn eine atomare Primitive nicht frei von Sperren ist, ist es oft effizienter, dass ein Algorithmus seine eigene Sperre bereitstellt.

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
  - : Die Größe in Bytes, die überprüft werden soll.

### Rückgabewert

Ein `true`- oder `false`-Wert, der angibt, ob die Operation frei von Sperren ist.

- Immer `true`, wenn `size` 4 ist, da alle bekannten Plattformen 4-Byte-atomare Operationen unterstützen.
- Immer `false`, wenn die angegebene Größe nicht eine der [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT)-Eigenschaften der ganzzahligen TypedArray-Typen ist.

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
