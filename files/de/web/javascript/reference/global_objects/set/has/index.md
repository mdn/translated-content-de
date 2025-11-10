---
title: Set.prototype.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

Die **`has()`** Methode von {{jsxref("Set")}} Instanzen gibt einen Boolean zurück, der angibt, ob der angegebene Wert in diesem `Set` existiert oder nicht.

{{InteractiveExample("JavaScript Demo: Set.prototype.has()")}}

```js interactive-example
const set = new Set([1, 2, 3, 4, 5]);

console.log(set.has(1));
// Expected output: true

console.log(set.has(5));
// Expected output: true

console.log(set.has(6));
// Expected output: false
```

## Syntax

```js-nolint
has(value)
```

### Parameter

- `value`
  - : Der Wert, dessen Vorhandensein im `Set` Objekt getestet werden soll.

### Rückgabewert

Gibt `true` zurück, wenn der angegebene Wert im `Set` Objekt existiert; andernfalls `false`.

## Beispiele

### Verwendung von has()

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.has("foo")); // true
console.log(mySet.has("bar")); // false

const set = new Set();
const obj = { key1: 1 };
set.add(obj);

console.log(set.has(obj)); // true
console.log(set.has({ key1: 1 })); // false, because they are different object references
console.log(set.add({ key1: 1 })); // now set contains 2 entries
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
