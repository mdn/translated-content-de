---
title: Map.prototype.getOrInsert()
short-title: getOrInsert()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsert
l10n:
  sourceCommit: a1f1a8348bdf6dd80af9e1ac7b5b748ef74df12d
---

{{SeeCompatTable}}

Die **`getOrInsert()`** Methode von {{jsxref("Map")}} Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` entspricht. Wenn der Schlüssel nicht vorhanden ist, fügt sie einen neuen Eintrag mit dem Schlüssel und einem gegebenen Standardwert ein und gibt den eingefügten Wert zurück.

Falls die Berechnung des Standardwerts aufwendig ist, sollten Sie stattdessen {{jsxref("Map.prototype.getOrInsertComputed()")}} in Betracht ziehen, das einen Rückruf verwendet, um den Standardwert nur bei tatsächlichem Bedarf zu berechnen.

{{InteractiveExample("JavaScript Demo: Map.prototype.getOrInsert()")}}

```js interactive-example
const map = new Map([["bar", "foo"]]);
console.log(map.getOrInsert("bar", "default"));
// Expected output: "foo"

console.log(map.getOrInsert("baz", "default"));
// Expected output: "default"
```

## Syntax

```js-nolint
getOrInsert(key, defaultValue)
```

### Parameter

- `key`
  - : Der Schlüssel des Wertes, der aus dem `Map` Objekt zurückgegeben werden soll. Objektschlüssel werden nach {{Glossary("Object_reference", "Referenz")}} und nicht nach Wert verglichen.
- `defaultValue`
  - : Der Wert, der eingefügt und zurückgegeben wird, wenn der Schlüssel im `Map` Objekt noch nicht vorhanden ist.

### Rückgabewert

Der Wert, der dem angegebenen Schlüssel im `Map` Objekt zugeordnet ist. Wenn der Schlüssel nicht gefunden werden kann, wird `defaultValue` eingefügt und zurückgegeben.

## Beschreibung

Die `getOrInsert()` Methode entspricht folgendem:

```js
if (map.has(key)) {
  return map.get(key);
} else {
  map.set(key, defaultValue);
  return defaultValue;
}
```

Sie ist auch ähnlich zum folgenden Muster (das etwas weniger zuverlässig ist, wenn `null` oder `undefined` gültige Werte in Ihrer Map sind):

```js
map.set(key, map.get(key) ?? defaultValue);
```

## Beispiele

### Standardwerte anwenden

Sie können `getOrInsert()` verwenden, um sicherzustellen, dass ein Schlüssel in einer Map existiert, auch wenn Sie dessen Wert derzeit nicht benötigen. Dies dient gewöhnlich der Normalisierung von Benutzereingaben.

Stellen Sie sich vor, Sie haben eine Map von Benutzereinstellungen und möchten sicherstellen, dass eine bestimmte Einstellung immer auf einen Standardwert gesetzt ist, wenn der Benutzer diese nicht angegeben hat:

```js
const options = readConfig();
options.getOrInsert("theme", "light");
options.getOrInsert("fontSize", 14);

// Later in your code, you can safely assume these options exist
document.body.dataset.theme = options.get("theme");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Map.prototype.getOrInsert` in `core-js`](https://github.com/zloirock/core-js#map-upsert)
- [es-shims Polyfill von `Map.prototype.getOrInsert`](https://www.npmjs.com/package/map.prototype.getorinsert)
- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
- {{jsxref("Map.prototype.getOrInsertComputed()")}}
