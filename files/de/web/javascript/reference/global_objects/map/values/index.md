---
title: Map.prototype.values()
short-title: values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`values()`**-Methode von {{jsxref("Map")}} Instanzen gibt ein neues _[Map-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das die Werte für jedes Element in dieser Map in Einfügereihenfolge enthält.

{{InteractiveExample("JavaScript Demo: Map.prototype.values()")}}

```js interactive-example
const map = new Map();

map.set("0", "foo");
map.set(1, "bar");

const iterator = map.values();

console.log(iterator.next().value);
// Expected output: "foo"

console.log(iterator.next().value);
// Expected output: "bar"
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
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
