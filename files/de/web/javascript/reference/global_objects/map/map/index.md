---
title: Map()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Der **`Map()`**-Konstruktor erstellt {{jsxref("Map")}}-Objekte.

## Syntax

```js-nolint
new Map()
new Map(iterable)
```

> **Note:** `Map()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `iterable` {{optional_inline}}
  - : Ein {{jsxref("Array")}} oder ein anderes
    [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Objekt,
    dessen Elemente Schlüssel-Wert-Paare sind. (Zum Beispiel Arrays mit zwei Elementen,
    wie `[[ 1, 'one' ],[ 2, 'two' ]]`.) Jedes Schlüssel-Wert-Paar wird der
    neuen `Map` hinzugefügt.

## Beispiele

### Eine neue Map erstellen

```js
const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Map` in `core-js`](https://github.com/zloirock/core-js#map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
