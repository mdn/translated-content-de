---
title: Set()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
l10n:
  sourceCommit: 84aaeee9a64e1bfe002837468eb798e5d5eb2bbe
---

{{JSRef}}

Der **`Set()`**-Konstruktor erstellt {{jsxref("Set")}}-Objekte.

{{EmbedInteractiveExample("pages/js/set-prototype-constructor.html")}}

## Syntax

```js-nolint
new Set()
new Set(iterable)
```

> **Note:** `Set()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `iterable` {{optional_inline}}

  - : Wenn ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Statements/for...of) übergeben wird, werden alle seine Elemente dem neuen `Set` hinzugefügt.

    Wenn Sie diesen Parameter nicht angeben oder sein Wert `null` ist, ist das neue `Set` leer.

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
