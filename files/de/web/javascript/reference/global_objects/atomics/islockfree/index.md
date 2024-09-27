---
title: Atomics.isLockFree()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
l10n:
  sourceCommit: cc91ba6c94aaad4f29133b5446805383a13f6880
---

{{JSRef}}

Die statische Methode **`Atomics.isLockFree()`** wird verwendet, um festzustellen, ob die `Atomics`-Methoden Sperren oder atomare Hardware-Operationen anwenden, wenn sie auf typisierte Arrays mit der gegebenen Elementbytegröße angewendet werden. Sie ist als Optimierungsprimitive gedacht, sodass Hochleistungsalgorithmen feststellen können, ob in kritischen Abschnitten Sperren oder atomare Operationen verwendet werden sollten. Wenn eine atomare Primitive nicht sperrfrei ist, ist es oft effizienter, wenn ein Algorithmus seine eigene Sperrung bereitstellt.

{{EmbedInteractiveExample("pages/js/atomics-islockfree.html")}}

## Syntax

```js-nolint
Atomics.isLockFree(size)
```

### Parameter

- `size`
  - : Die zu prüfende Größe in Bytes.

### Rückgabewert

Ein `true`- oder `false`-Wert, der angibt, ob der Vorgang sperrfrei ist.

- Immer `true`, wenn `size` 4 ist, da alle bekannten Plattformen 4-Byte-atomare Operationen unterstützen.
- Immer `false`, wenn die angegebene Größe nicht zu den [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Eigenschaften von ganzzahligen TypedArray-Typen gehört.

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
