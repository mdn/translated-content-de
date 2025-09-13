---
title: Set() Konstruktor
short-title: Set()
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
l10n:
  sourceCommit: 1d905454be7d8910d5e3b33f0c22d063fe212816
---

Der **`Set()`** Konstruktor erstellt {{jsxref("Set")}} Objekte.

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
> `Set()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` zu aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `iterable` {{optional_inline}}
  - : Wenn ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols) (wie ein Array) übergeben wird, werden alle seine Elemente dem neuen `Set` hinzugefügt. Wenn Sie diesen Parameter nicht angeben oder sein Wert `null` oder `undefined` ist, ist das neue `Set` leer.

### Rückgabewert

Ein neues `Set` Objekt.

## Beispiele

### Verwenden des `Set` Objekts

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
- [es-shims Polyfill von `Set`](https://www.npmjs.com/package/es-set)
- {{jsxref("Set")}}
