---
title: Map()-Konstruktor
short-title: Map()
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`Map()`**-Konstruktor erstellt {{jsxref("Map")}}-Objekte.

## Syntax

```js-nolint
new Map()
new Map(iterable)
```

> [!NOTE]
> `Map()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `iterable` {{optional_inline}}
  - : Ein {{jsxref("Array")}} oder ein anderes
    [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Objekt,
    dessen Elemente Schlüssel-Wert-Paare sind. (Zum Beispiel Arrays mit zwei Elementen,
    wie `[[ 1, 'one' ],[ 2, 'two' ]]`.) Jedes Schlüssel-Wert-Paar wird der
    neuen `Map` hinzugefügt.

## Beispiele

### Erstellen einer neuen Map

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
- [es-shims Polyfill von `Map`](https://www.npmjs.com/package/es-map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
