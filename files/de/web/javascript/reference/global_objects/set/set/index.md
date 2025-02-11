---
title: Set()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Der **`Set()`**-Konstruktor erzeugt {{jsxref("Set")}}-Objekte.

{{InteractiveExample("JavaScript Demo: Set.prototype Constructor")}}

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
new Set()
new Set(iterable)
```

> **Note:** `Set()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `iterable` {{optional_inline}}

  - : Wenn ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Statements/for...of) übergeben wird, werden alle seine Elemente zum neuen `Set` hinzugefügt.

    Falls Sie diesen Parameter nicht angeben oder sein Wert `null` ist, ist das neue `Set` leer.

### Rückgabewert

Ein neues `Set`-Objekt.

## Beispiele

### Verwendung des `Set`-Objekts

```js
const mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 };
mySet.add(o);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Set` in `core-js`](https://github.com/zloirock/core-js#set)
- {{jsxref("Set")}}
