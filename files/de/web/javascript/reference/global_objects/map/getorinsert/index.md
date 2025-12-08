---
title: Map.prototype.getOrInsert()
short-title: getOrInsert()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsert
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`getOrInsert()`** Methode von {{jsxref("Map")}} Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` entspricht. Wenn der Schlüssel nicht vorhanden ist, wird ein neuer Eintrag mit dem Schlüssel und einem gegebenen Standardwert eingefügt und der eingefügte Wert zurückgegeben.

Wenn die Berechnung des Standardwerts aufwendig ist, ziehen Sie in Betracht, stattdessen {{jsxref("Map.prototype.getOrInsertComputed()")}} zu verwenden, das einen Callback verwendet, um den Standardwert nur bei Bedarf zu berechnen.

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
  - : Der Schlüssel des Werts, der aus dem `Map` Objekt zurückgegeben werden soll. Objektschlüssel werden nach {{Glossary("Object_reference", "Referenz")}} verglichen, nicht nach Wert.
- `defaultValue`
  - : Der Wert, der eingefügt und zurückgegeben wird, wenn der Schlüssel im `Map`-Objekt noch nicht vorhanden ist.

### Rückgabewert

Der Wert, der dem angegebenen Schlüssel im `Map`-Objekt zugeordnet ist. Wenn der Schlüssel nicht gefunden werden kann, wird `defaultValue` eingefügt und zurückgegeben.

## Beschreibung

Die Methode `getOrInsert()` ist äquivalent zu folgendem:

```js
if (map.has(key)) {
  return map.get(key);
}
map.set(key, defaultValue);
return defaultValue;
```

Sie ähnelt auch folgendem Muster (das etwas weniger verlässlich ist, wenn `null` oder `undefined` gültige Werte in Ihrer Map sind):

```js
map.set(key, map.get(key) ?? defaultValue);
```

## Beispiele

### Anwenden von Standardwerten

Sie können `getOrInsert()` verwenden, um sicherzustellen, dass ein Schlüssel in einer Map existiert, selbst wenn Sie seinen Wert momentan nicht benötigen. Dies wird üblicherweise verwendet, um Benutzereingaben zu normalisieren.

Stellen Sie sich vor, Sie haben eine Map von Benutzervorlieben und möchten sicherstellen, dass eine bestimmte Präferenz immer auf einen Standardwert gesetzt wird, wenn der Benutzer sie nicht angegeben hat:

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
