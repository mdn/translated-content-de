---
title: Set.prototype.clear()
short-title: clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`clear()`**-Methode von {{jsxref("Set")}}-Instanzen entfernt alle Elemente aus diesem Set.

{{InteractiveExample("JavaScript Demo: Set.prototype.clear()")}}

```js interactive-example
const set1 = new Set();
set1.add(1);
set1.add("foo");

console.log(set1.size);
// Expected output: 2

set1.clear();

console.log(set1.size);
// Expected output: 0
```

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung der clear()-Methode

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
