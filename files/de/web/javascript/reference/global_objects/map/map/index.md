---
title: Map()-Konstruktor
short-title: Map()
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Der **`Map()`**-Konstruktor erstellt {{jsxref("Map")}}-Objekte.

## Syntax

```js-nolint
new Map()
new Map(iterable)
```

> [!NOTE]
> `Map()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `iterable` {{optional_inline}}
  - : Wenn ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols) (z. B. ein Array) übergeben wird, werden alle seine Elemente zur neuen `Map` hinzugefügt. Jedes Element muss ein Objekt mit zwei Eigenschaften sein: `0` und `1`. Diese entsprechen dem Schlüssel und dem Wert (z. B. `[[1, "one"],[2, "two"]]`). Wenn Sie diesen Parameter nicht angeben oder sein Wert `null` oder `undefined` ist, ist die neue `Map` leer.

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

- [Polyfill für `Map` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-map)
- [Polyfill für `Map` von es-shims](https://www.npmjs.com/package/es-map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
