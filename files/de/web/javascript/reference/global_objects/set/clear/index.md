---
title: Set.prototype.clear()
short-title: clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`clear()`** Methode von {{jsxref("Set")}} Instanzen entfernt alle Elemente aus diesem Set.

{{InteractiveExample("JavaScript Demo: Set.prototype.clear()")}}

```js interactive-example
const set = new Set();
set.add(1);
set.add("foo");

console.log(set.size);
// Expected output: 2

set.clear();

console.log(set.size);
// Expected output: 0
```

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

## Beispiele

### Verwendung der clear() Methode

```js
const mySet = new Set();
mySet.add(1);
mySet.add("foo");

console.log(mySet.size); // 2
console.log(mySet.has("foo")); // true

mySet.clear();

console.log(mySet.size); // 0
console.log(mySet.has("foo")); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
