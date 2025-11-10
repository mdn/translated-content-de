---
title: Map.prototype.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

Die **`set()`** Methode von {{jsxref("Map")}} Instanzen fügt diesem `Map` ein neues Element mit einem angegebenen Schlüssel und Wert hinzu oder aktualisiert ein vorhandenes Element, wenn der Schlüssel bereits existiert.

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
  - : Der Schlüssel des Eintrags, der zum `Map`-Objekt hinzugefügt oder darin geändert werden soll. Kann jeden Wert annehmen. Objekt-Schlüssel werden durch {{Glossary("Object_reference", "Referenz")}} und nicht durch Wert verglichen.
- `value`
  - : Der Wert des Eintrags, der zum `Map`-Objekt hinzugefügt oder darin geändert werden soll. Kann jeden Wert annehmen.

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

### Verwenden von set() mit Verkettung

Da die `set()` Methode dasselbe `Map`-Objekt zurückgibt, können Sie den Methodenaufruf wie unten gezeigt verketten:

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
- {{jsxref("Map.prototype.delete()")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}
