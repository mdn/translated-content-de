---
title: Set()-Konstruktor
short-title: Set()
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Der **`Set()`**-Konstruktor erstellt {{jsxref("Set")}}-Objekte.

{{InteractiveExample("JavaScript Demo: Set() constructor")}}

```js interactive-example
const set = new Set([1, 2, 3, 4, 5]);

console.log(set.has(1));
// Expected output: true

console.log(set.has(5));
// Expected output: true

console.log(set.has(6));
// Expected output: false
```

## Syntax

```js-nolint
new Set()
new Set(iterable)
```

> [!NOTE]
> `Set()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `iterable` {{optional_inline}}
  - : Wenn ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols) (z. B. ein Array) übergeben wird, werden alle seine Elemente dem neuen `Set` hinzugefügt. Wenn Sie diesen Parameter nicht angeben oder sein Wert `null` oder `undefined` ist, ist das neue `Set` leer.

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

- [Polyfill für `Set` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-set)
- [Polyfill für `Set` von es-shims](https://www.npmjs.com/package/es-set)
- {{jsxref("Set")}}
