---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`entries()`** von {{jsxref("Set")}}-Instanzen gibt ein neues _[Set-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_-Objekt zurück. Dieses Objekt enthält **ein Array von `[value, value]`** für jedes Element in diesem Set, in Eingabereihenfolge. Bei `Set`-Objekten gibt es keinen `key` wie bei `Map`-Objekten. Um die API jedoch ähnlich zur `Map`-API zu gestalten, hat jeder _Eintrag_ hier denselben Wert für _key_ und _value_, sodass ein Array `[value, value]` zurückgegeben wird.

{{InteractiveExample("JavaScript Demo: Set.prototype.entries()")}}

```js interactive-example
const set1 = new Set();
set1.add(42);
set1.add("forty two");

const iterator1 = set1.entries();

for (const entry of iterator1) {
  console.log(entry);
  // Expected output: Array [42, 42]
  // Expected output: Array ["forty two", "forty two"]
}
```

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

### Verwendung von entries()

```js
const mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

const setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
