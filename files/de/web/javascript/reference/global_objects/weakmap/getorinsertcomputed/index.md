---
title: WeakMap.prototype.getOrInsertComputed()
short-title: getOrInsertComputed()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsertComputed
l10n:
  sourceCommit: a1f1a8348bdf6dd80af9e1ac7b5b748ef74df12d
---

{{SeeCompatTable}}

Die Methode **`getOrInsertComputed()`** von {{jsxref("WeakMap")}} Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in diesem `WeakMap` entspricht. Wenn der Schlüssel nicht vorhanden ist, fügt sie einen neuen Eintrag mit dem Schlüssel und einem Standardwert hinzu, der aus einem gegebenen Callback berechnet wird, und gibt den eingefügten Wert zurück.

Verwenden Sie diese Methode anstelle von {{jsxref("WeakMap.prototype.getOrInsert()")}}, wenn die Berechnung des Standardwerts aufwendig ist und Sie vermeiden möchten, ihn zu berechnen, es sei denn, es ist tatsächlich notwendig.

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
  - : Der Schlüssel des Elements, das aus dem `Map`-Objekt zurückgegeben werden soll. Muss entweder ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Objektschlüssel werden nach {{Glossary("Object_reference", "Referenz")}} und nicht nach Wert verglichen.
- `callback`
  - : Eine Funktion, die den Wert zurückgibt, der eingefügt und zurückgegeben werden soll, wenn der Schlüssel im `Map`-Objekt noch nicht vorhanden ist. Die Funktion wird mit folgendem Argument aufgerufen:
    - `key`
      - : Derselbe Schlüssel, der an `getOrInsertComputed()` übergeben wurde.

### Rückgabewert

Der Wert, der dem angegebenen Schlüssel im `WeakMap`-Objekt zugeordnet ist. Wenn der Schlüssel nicht gefunden werden kann, wird das Ergebnis von `callback(key)` eingefügt und zurückgegeben.

## Beispiele

### Caching

Caching beinhaltet den Aufbau einer Zuordnung vom Parameter einer aufwendigen Funktion zu ihrem Rückgabewert, damit zukünftige Aufrufe mit demselben Parameter den zwischengespeicherten Wert zurückgeben können, anstatt ihn neu zu berechnen. Wenn kein zwischengespeicherter Wert vorhanden ist, muss er berechnet und im Cache eingefügt werden.

Wir verwenden hier ein `WeakMap` anstelle eines `Map`, damit die zwischengespeicherten Argumentwerte nicht verhindern, dass sie vom Garbage Collector freigegeben werden, wenn sie an anderer Stelle im Programm nicht mehr benötigt werden. Wenn Ihre zwischengespeicherte Funktion Nicht-Objekt-Argumente akzeptiert, können Sie stattdessen ein `Map` verwenden.

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
