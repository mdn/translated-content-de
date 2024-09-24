---
title: Atomics.isLockFree()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
l10n:
  sourceCommit: cc91ba6c94aaad4f29133b5446805383a13f6880
---

{{JSRef}}

Die statische Methode **`Atomics.isLockFree()`** wird verwendet, um zu bestimmen, ob die `Atomics`-Methoden Sperren oder atomare Hardwareoperationen verwenden, wenn sie auf typisierte Arrays mit der angegebenen Elementgröße in Bytes angewendet werden. Sie ist als Optimierungsprimitive gedacht, damit Hochleistungsalgorithmen bestimmen können, ob sie Sperren oder atomare Operationen in kritischen Abschnitten verwenden sollen. Wenn eine atomare Primitive nicht sperrfrei ist, ist es oft effizienter für einen Algorithmus, eigene Sperren bereitzustellen.

{{EmbedInteractiveExample("pages/js/atomics-islockfree.html")}}

## Syntax

```js-nolint
Atomics.isLockFree(size)
```

### Parameter

- `size`
  - : Die Größe in Bytes, die überprüft werden soll.

### Rückgabewert

Ein Wert `true` oder `false`, der angibt, ob die Operation sperrfrei ist.

- Immer `true`, wenn `size` 4 ist, da alle bekannten Plattformen 4-Byte-Atomoperationen unterstützen.
- Immer `false`, wenn die angegebene Größe nicht eine der [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Eigenschaften der ganzzahligen Typ-Array-Typen ist.

## Beispiele

### Verwendung von isLockFree

```js
Atomics.isLockFree(1); // true (plattformabhängig)
Atomics.isLockFree(2); // true (plattformabhängig)
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true
Atomics.isLockFree(5); // false
Atomics.isLockFree(6); // false
Atomics.isLockFree(7); // false
Atomics.isLockFree(8); // true (plattformabhängig)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
