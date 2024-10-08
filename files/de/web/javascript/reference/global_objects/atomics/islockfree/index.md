---
title: Atomics.isLockFree()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
l10n:
  sourceCommit: cc91ba6c94aaad4f29133b5446805383a13f6880
---

{{JSRef}}

Die statische Methode **`Atomics.isLockFree()`** wird verwendet, um festzustellen, ob die `Atomics`-Methoden Sperren oder atomare Hardware-Operationen verwenden, wenn sie auf typisierte Arrays mit der angegebenen Element-Byte-Größe angewendet werden. Sie ist als Optimierungsprimitive gedacht, damit Hochleistungsalgorithmen bestimmen können, ob in kritischen Abschnitten Sperren oder atomare Operationen verwendet werden sollen. Wenn eine atomare Primitive nicht sperrfrei ist, ist es oft effizienter, dass ein Algorithmus seine eigenen Sperren bereitstellt.

{{EmbedInteractiveExample("pages/js/atomics-islockfree.html")}}

## Syntax

```js-nolint
Atomics.isLockFree(size)
```

### Parameter

- `size`
  - : Die Größe in Bytes, die überprüft werden soll.

### Rückgabewert

Ein `true` oder `false` Wert, der angibt, ob die Operation sperrfrei ist.

- Immer `true`, wenn `size` 4 ist, da alle bekannten Plattformen 4-Byte-atomische Operationen unterstützen.
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
