---
title: Map.prototype.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`set()`** Methode von {{jsxref("Map")}} Instanzen fügt einen Eintrag zu dieser Map hinzu oder aktualisiert diesen mit einem angegebenen Schlüssel und einem Wert.

{{InteractiveExample("JavaScript Demo: Map.prototype.set()")}}

```js interactive-example
const map = new Map();
map.set("bar", "foo");

console.log(map.get("bar"));
// Expected output: "foo"

console.log(map.get("baz"));
// Expected output: undefined
```

## Syntax

```js-nolint
set(key, value)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, das dem `Map`-Objekt hinzugefügt werden soll. Der Schlüssel kann jeden [JavaScript-Typ](/de/docs/Web/JavaScript/Guide/Data_structures) annehmen (jeder [primitive Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values) oder jede Art von [JavaScript-Objekt](/de/docs/Web/JavaScript/Guide/Data_structures#objects)).
- `value`
  - : Der Wert des Elements, das dem `Map`-Objekt hinzugefügt werden soll. Der Wert kann jeden [JavaScript-Typ](/de/docs/Web/JavaScript/Guide/Data_structures) annehmen (jeder [primitive Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values) oder jede Art von [JavaScript-Objekt](/de/docs/Web/JavaScript/Guide/Data_structures#objects)).

### Rückgabewert

Das `Map`-Objekt.

## Beispiele

### Verwendung von set()

```js
const myMap = new Map();

// Add new elements to the map
myMap.set("bar", "foo");
myMap.set(1, "foobar");

// Update an element in the map
myMap.set("bar", "baz");
```

### Verwendung von set() mit Verkettung

Da die `set()` Methode das gleiche `Map`-Objekt zurückgibt, können Sie den
Methodenaufruf wie unten dargestellt verketten:

```js
// Add new elements to the map with chaining.
myMap.set("bar", "foo").set(1, "foobar").set(2, "baz");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}
