---
title: WeakMap.prototype.getOrInsertComputed()
short-title: getOrInsertComputed()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsertComputed
l10n:
  sourceCommit: af88df72d0ee1da6fd1be412f615e8b4caf98e70
---

Die **`getOrInsertComputed()`** Methode von {{jsxref("WeakMap")}} Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in diesem `WeakMap` entspricht. Wenn der Schlüssel nicht vorhanden ist, wird ein neuer Eintrag mit dem Schlüssel und einem Standardwert eingefügt, der aus einem gegebenen Callback berechnet wird, und der eingefügte Wert wird zurückgegeben.

Verwenden Sie diese Methode anstelle von {{jsxref("WeakMap.prototype.getOrInsert()")}}, wenn der Standardwert aufwendig zu berechnen ist und Sie vermeiden möchten, ihn zu berechnen, es sei denn, er wird tatsächlich benötigt.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.getOrInsertComputed()")}}

```js interactive-example
const alan = { name: "Alan" };
const map = new WeakMap([[alan, 35]]);
const defaultCreator = (obj) => `${obj.name}'s age is unknown`;

console.log(map.getOrInsertComputed(alan, defaultCreator));
// Expected output: 35

const brett = { name: "Brett" };
console.log(map.getOrInsertComputed(brett, defaultCreator));
// Expected output: "Brett's age is unknown"
```

## Syntax

```js-nolint
getOrInsertComputed(key, callback)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, das aus dem `Map`-Objekt zurückgegeben werden soll. Muss entweder ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Objekt-Schlüssel werden durch {{Glossary("Object_reference", "Referenz")}}, nicht durch Wert, verglichen.
- `callback`
  - : Eine Funktion, die den Wert zurückgibt, der eingefügt und zurückgegeben werden soll, wenn der Schlüssel im `Map`-Objekt noch nicht vorhanden ist. Die Funktion wird mit dem folgenden Argument aufgerufen:
    - `key`
      - : Der gleiche Schlüssel, der an `getOrInsertComputed()` übergeben wurde.

### Rückgabewert

Der Wert, der dem angegebenen Schlüssel im `WeakMap`-Objekt zugeordnet ist. Wenn der Schlüssel nicht gefunden werden kann, werden das Ergebnis von `callback(key)` eingefügt und zurückgegeben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `key` ist kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).
    - `callback` ist nicht aufrufbar.

## Beispiele

### Caching

Caching beinhaltet den Aufbau einer Zuordnung vom Parameter einer aufwendigen Funktion zu ihrem Rückgabewert, sodass zukünftige Aufrufe mit demselben Parameter den zwischengespeicherten Wert zurückgeben können, anstatt ihn neu zu berechnen. Wenn kein zwischengespeicherter Wert existiert, muss er berechnet und im Cache abgelegt werden.

Wir verwenden hier ein `WeakMap` anstelle eines `Map`, damit die zwischengespeicherten Argumentwerte nicht verhindern, dass sie vom Garbage Collector eingesammelt werden, wenn sie im Programm nicht mehr benötigt werden. Wenn Ihre zwischengespeicherte Funktion Nicht-Objekt-Argumente annimmt, können Sie stattdessen ein `Map` verwenden.

```js
// Any expensive function you want to cache
function computeExpensiveValue(requestOptions) {
  // Imagine expensive computation, like fetching data or complex calculations
  console.log(`Fetching from ${requestOptions.url}`);
  return new Response("Fake response");
}

// A higher-order function that adds caching to any function
function withCache(fn) {
  const cache = new WeakMap();
  return (param) => cache.getOrInsertComputed(param, fn);
}

const computeWithCache = withCache(computeExpensiveValue);
const options = { url: "https://example.com/a", method: "GET" };
const value1 = computeWithCache(options); // Logs "Fetching from https://example.com/a"
const value2 = computeWithCache(options); // No log
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakMap.prototype.getOrInsertComputed` in `core-js`](https://github.com/zloirock/core-js#map-upsert)
- [es-shims Polyfill von `WeakMap.prototype.getOrInsertComputed`](https://www.npmjs.com/package/weakmap.prototype.getorinsertcomputed)
- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
- {{jsxref("WeakMap.prototype.getOrInsert()")}}
