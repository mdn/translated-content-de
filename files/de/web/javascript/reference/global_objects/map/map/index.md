---
title: Map()-Konstruktor
short-title: Map()
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
l10n:
  sourceCommit: 1d905454be7d8910d5e3b33f0c22d063fe212816
---

Der **`Map()`**-Konstruktor erstellt {{jsxref("Map")}}-Objekte.

## Syntax

```js-nolint
new Map()
new Map(iterable)
```

> [!NOTE]
> `Map()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, ihn ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `iterable` {{optional_inline}}
  - : Wenn ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols) (wie ein Array) übergeben wird, werden alle seine Elemente zur neuen `Map` hinzugefügt. Jedes Element muss ein Objekt mit zwei Eigenschaften sein: `0` und `1`, die dem Schlüssel und dem Wert entsprechen (zum Beispiel `[[1, "one"],[2, "two"]]`). Wenn Sie diesen Parameter nicht angeben oder sein Wert `null` oder `undefined` ist, ist die neue `Map` leer.

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
