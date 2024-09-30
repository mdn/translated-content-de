---
title: WeakSet()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/WeakSet
l10n:
  sourceCommit: d6f92678c704b5bf4807e69bb7a234446dd33575
---

{{JSRef}}

Der **`WeakSet()`**-Konstruktor erstellt {{jsxref("WeakSet")}}-Objekte.

## Syntax

```js-nolint
new WeakSet()
new WeakSet(iterable)
```

> **Note:** `WeakSet()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `iterable` {{optional_inline}}
  - : Wenn ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Statements/for...of) übergeben wird, werden alle seine Elemente dem neuen `WeakSet` hinzugefügt. `null` wird als `undefined` behandelt.

## Beispiele

### Verwenden des WeakSet-Objekts

```js
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // removes foo from the set
ws.has(foo); // false, foo has been removed
ws.has(bar); // true, bar is retained
```

Beachten Sie, dass `foo !== bar`. Obwohl sie ähnliche Objekte sind, _sind sie nicht **das gleiche Objekt**_. Und so werden sie beide dem Set hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakSet` in `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("WeakSet")}}
