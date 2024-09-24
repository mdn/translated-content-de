---
title: Set.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Set/keys
l10n:
  sourceCommit: ffd57ae4eaab6cdd12560f60f0dadc119a22303e
---

{{JSRef}}

Die **`keys()`** Methode von {{jsxref("Set")}} Instanzen ist ein Alias für die [`values()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/values) Methode.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

### Verwendung von keys()

Die `keys()` Methode ist genau gleichwertig mit der {{jsxref("Set/values", "values()")}} Methode.

```js
const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = mySet.keys();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.values()")}}
