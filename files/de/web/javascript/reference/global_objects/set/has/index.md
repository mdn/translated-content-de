---
title: Set.prototype.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`has()`**-Methode von {{jsxref("Set")}}-Instanzen gibt einen booleschen Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert in diesem Set existiert oder nicht.

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
  - : Der Wert, dessen Vorhandensein im `Set`-Objekt getestet werden soll.

### Rückgabewert

Gibt `true` zurück, wenn ein Element mit dem angegebenen Wert im `Set`-Objekt existiert; andernfalls `false`.

## Beispiele

### Verwendung der has()-Methode

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
