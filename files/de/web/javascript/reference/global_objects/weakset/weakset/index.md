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

> **Note:** `WeakSet()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

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

ws.delete(foo); // entfernt foo aus der Menge
ws.has(foo); // false, foo wurde entfernt
ws.has(bar); // true, bar bleibt erhalten
```

Beachten Sie, dass `foo !== bar`. Obwohl sie ähnliche Objekte sind, _sind sie nicht **dasselbe Objekt**_. Daher werden beide zur Menge hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakSet` in `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("WeakSet")}}
