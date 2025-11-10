---
title: Set.prototype.entries()
short-title: entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`entries()`** Methode von {{jsxref("Set")}} Instanzen gibt ein neues _[Set-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element in diesem Set in Einfügereihenfolge enthält. Bei `Set` Objekten gibt es keinen `key` wie bei `Map` Objekten. Um jedoch die API dem `Map` Objekt ähnlich zu halten, hat hier jeder _Eintrag_ denselben Wert für seinen _Key_ und _Value_, so dass ein Array `[value, value]` zurückgegeben wird.

{{InteractiveExample("JavaScript Demo: Set.prototype.entries()")}}

```js interactive-example
const set = new Set();
set.add(42);
set.add("forty two");

const iterator = set.entries();

for (const entry of iterator) {
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
