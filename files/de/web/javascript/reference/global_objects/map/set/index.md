---
title: Map.prototype.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`set()`**-Methode von {{jsxref("Map")}}-Instanzen fügt einen Eintrag zu dieser Map hinzu oder aktualisiert ihn mit einem angegebenen Schlüssel und einem Wert.

{{InteractiveExample("JavaScript Demo: Map.prototype.set()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.get("bar"));
// Expected output: "foo"

console.log(map1.get("baz"));
// Expected output: undefined
```

## Syntax

```js-nolint
set(key, value)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, das dem `Map`-Objekt hinzugefügt werden soll. Der Schlüssel kann jeden [JavaScript-Typ](/de/docs/Web/JavaScript/Guide/Data_structures) (jeden [primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values) oder jeden Typ von [JavaScript-Objekt](/de/docs/Web/JavaScript/Guide/Data_structures#objects)) haben.
- `value`
  - : Der Wert des Elements, das dem `Map`-Objekt hinzugefügt werden soll. Der Wert kann jeden [JavaScript-Typ](/de/docs/Web/JavaScript/Guide/Data_structures) (jeden [primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values) oder jeden Typ von [JavaScript-Objekt](/de/docs/Web/JavaScript/Guide/Data_structures#objects)) haben.

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

Da die `set()`-Methode dasselbe `Map`-Objekt zurückgibt, können Sie den Methodenaufruf wie unten gezeigt verketten:

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
