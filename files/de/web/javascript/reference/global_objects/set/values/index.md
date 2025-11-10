---
title: Set.prototype.values()
short-title: values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`values()`**-Methode von {{jsxref("Set")}} Instanzen gibt ein neues _[Set-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_-Objekt zurück, das die Werte für jedes Element in diesem Set in Einfüge-Reihenfolge enthält.

{{InteractiveExample("JavaScript Demo: Set.prototype.values()")}}

```js interactive-example
const set = new Set();
set.add(42);
set.add("forty two");

const iterator = set.values();

console.log(iterator.next().value);
// Expected output: 42

console.log(iterator.next().value);
// Expected output: "forty two"
```

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

### Verwendung von values()

```js
const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = mySet.values();

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
- {{jsxref("Set.prototype.keys()")}}
