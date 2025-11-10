---
title: Map.prototype.keys()
short-title: keys()
slug: Web/JavaScript/Reference/Global_Objects/Map/keys
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`keys()`** Methode von {{jsxref("Map")}} Instanzen gibt ein neues _[Map-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das die Schlüssel für jedes Element in dieser Map in Einfügereihenfolge enthält.

{{InteractiveExample("JavaScript Demo: Map.prototype.keys()")}}

```js interactive-example
const map = new Map();

map.set("0", "foo");
map.set(1, "bar");

const iterator = map.keys();

console.log(iterator.next().value);
// Expected output: "0"

console.log(iterator.next().value);
// Expected output: 1
```

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

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // {}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.values()")}}
