---
title: WeakMap.prototype.getOrInsertComputed()
short-title: getOrInsertComputed()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsertComputed
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`getOrInsertComputed()`** von {{jsxref("WeakMap")}}-Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `WeakMap` zugeordnet ist. Ist der Schlüssel nicht vorhanden, fügt sie einen neuen Eintrag mit dem Schlüssel und einem durch eine Callback-Funktion berechneten Standardwert ein und gibt den eingefügten Wert zurück.

Verwenden Sie diese Methode anstelle von {{jsxref("WeakMap.prototype.getOrInsert()")}}, wenn die Berechnung des Standardwerts aufwendig ist und Sie ihn nur dann berechnen möchten, wenn er tatsächlich benötigt wird.

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
  - : Der Schlüssel des Elements, das aus dem `Map`-Objekt zurückgegeben werden soll. Er muss entweder ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Objektschlüssel werden anhand ihrer {{Glossary("Object_reference", "Referenz")}} verglichen, nicht anhand ihres Werts.
- `callback`
  - : Eine Funktion, die den Wert zurückgibt, der eingefügt und zurückgegeben werden soll, wenn der Schlüssel im `Map`-Objekt noch nicht vorhanden ist. Die Funktion wird mit dem folgenden Argument aufgerufen:
    - `key`
      - : Derselbe Schlüssel, der an `getOrInsertComputed()` übergeben wurde.

### Rückgabewert

Der Wert, der dem angegebenen Schlüssel im `WeakMap`-Objekt zugeordnet ist. Wenn der Schlüssel nicht gefunden wird, wird das Ergebnis von `callback(key)` eingefügt und zurückgegeben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `key` ist weder ein Objekt noch ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).
    - `callback` ist nicht aufrufbar.

## Beispiele

### Zwischenspeicherung

Bei der Zwischenspeicherung wird eine Zuordnung zwischen dem Parameter einer aufwendig zu berechnenden Funktion und ihrem Rückgabewert erstellt. So können spätere Aufrufe mit demselben Parameter den zwischengespeicherten Wert zurückgeben, statt ihn erneut zu berechnen. Wenn noch kein zwischengespeicherter Wert vorhanden ist, muss er berechnet und in den Cache eingefügt werden.

Hier verwenden wir eine `WeakMap` anstelle einer `Map`, damit die zwischengespeicherten Argumentwerte nicht verhindern, dass die entsprechenden Objekte von der Garbage Collection erfasst werden, wenn sie an anderer Stelle im Programm nicht mehr benötigt werden. Wenn Ihre zwischengespeicherte Funktion Argumente akzeptiert, die keine Objekte sind, können Sie stattdessen eine `Map` verwenden.

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

- [Polyfill für `WeakMap.prototype.getOrInsertComputed` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-weakmap)
- [Polyfill für `WeakMap.prototype.getOrInsertComputed` von es-shims](https://www.npmjs.com/package/weakmap.prototype.getorinsertcomputed)
- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
- {{jsxref("WeakMap.prototype.getOrInsert()")}}
