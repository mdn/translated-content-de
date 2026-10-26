---
title: WeakSet()-Konstruktor
short-title: WeakSet()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/WeakSet
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Der **`WeakSet()`**-Konstruktor erstellt {{jsxref("WeakSet")}}-Objekte.

## Syntax

```js-nolint
new WeakSet()
new WeakSet(iterable)
```

> [!NOTE]
> `WeakSet()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `iterable` {{optional_inline}}
  - : Wenn ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Statements/for...of) übergeben wird, werden alle seine Elemente dem neuen `WeakSet` hinzugefügt. `null` wird wie `undefined` behandelt.

## Beispiele

### Das WeakSet-Objekt verwenden

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

Beachten Sie, dass `foo !== bar` gilt. Obwohl es sich um ähnliche Objekte handelt, sind sie _nicht **dasselbe Objekt**_. Daher werden beide dem Set hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `WeakSet` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-weakset)
- {{jsxref("WeakSet")}}
