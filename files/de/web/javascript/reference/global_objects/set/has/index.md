---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`has()`**-Methode von {{jsxref("Set")}}-Instanzen gibt einen booleschen Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert in diesem Set existiert oder nicht.

{{InteractiveExample("JavaScript Demo: Set.prototype.has()")}}

```js interactive-example
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// Expected output: true

console.log(set1.has(5));
// Expected output: true

console.log(set1.has(6));
// Expected output: false
```

## Syntax

```js-nolint
has(value)
```

### Parameter

- `value`
  - : Der Wert, dessen Vorhandensein im `Set`-Objekt überprüft werden soll.

### Rückgabewert

Gibt `true` zurück, wenn ein Element mit dem angegebenen Wert im `Set`-Objekt existiert; ansonsten `false`.

## Beispiele

### Verwendung der Methode has()

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.has("foo")); // true
console.log(mySet.has("bar")); // false

const set1 = new Set();
const obj1 = { key1: 1 };
set1.add(obj1);

console.log(set1.has(obj1)); // true
console.log(set1.has({ key1: 1 })); // false, because they are different object references
console.log(set1.add({ key1: 1 })); // now set1 contains 2 entries
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
