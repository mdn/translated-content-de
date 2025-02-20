---
title: Map.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`clear()`**-Methode von {{jsxref("Map")}}-Instanzen entfernt alle Elemente aus dieser Map.

{{InteractiveExample("JavaScript Demo: Map.prototype.clear()")}}

```js interactive-example
const map1 = new Map();

map1.set("bar", "baz");
map1.set(1, "foo");

console.log(map1.size);
// Expected output: 2

map1.clear();

console.log(map1.size);
// Expected output: 0
```

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von clear()

```js
const myMap = new Map();
myMap.set("bar", "baz");
myMap.set(1, "foo");

console.log(myMap.size); // 2
console.log(myMap.has("bar")); // true

myMap.clear();

console.log(myMap.size); // 0
console.log(myMap.has("bar")); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
