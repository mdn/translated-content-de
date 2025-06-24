---
title: WeakSet()-Konstruktor
short-title: WeakSet()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/WeakSet
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`WeakSet()`**-Konstruktor erstellt {{jsxref("WeakSet")}}-Objekte.

## Syntax

```js-nolint
new WeakSet()
new WeakSet(iterable)
```

> [!NOTE] > `WeakSet()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `iterable` {{optional_inline}}
  - : Wenn ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Statements/for...of) übergeben wird, werden alle seine Elemente dem neuen `WeakSet` hinzugefügt. `null` wird als `undefined` behandelt.

## Beispiele

### Verwendung des WeakSet-Objekts

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

Beachten Sie, dass `foo !== bar`. Obwohl sie ähnliche Objekte sind, _sind sie nicht **dasselbe Objekt**_. Und so werden sie beide dem Set hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakSet` in `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("WeakSet")}}
