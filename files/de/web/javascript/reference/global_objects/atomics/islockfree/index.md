---
title: Atomics.isLockFree()
short-title: isLockFree()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Atomics.isLockFree()`** wird verwendet, um zu bestimmen, ob die `Atomics`-Methoden Sperren oder atomare Hardware-Operationen nutzen, wenn sie auf typisierte Arrays mit der gegebenen Element-Bytegröße angewendet werden. Sie ist als Optimierungsprimitive gedacht, sodass Hochleistungsalgorithmen feststellen können, ob Sperren oder atomare Operationen in kritischen Abschnitten verwendet werden sollen. Wenn eine atomare Primitive nicht sperrfrei ist, ist es oft effizienter, wenn ein Algorithmus seine eigene Sperrung bereitstellt.

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

Ein `true` oder `false` Wert, der angibt, ob die Operation sperrfrei ist.

- Immer `true`, wenn `size` 4 ist, da alle bekannten Plattformen 4-Byte atomare Operationen unterstützen.
- Immer `false`, wenn die angegebene Größe nicht eine der [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Eigenschaften von Integer-TypedArray-Typen ist.

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
