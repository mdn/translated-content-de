---
title: Map.prototype.getOrInsert()
short-title: getOrInsert()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsert
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{SeeCompatTable}}

Die **`getOrInsert()`**-Methode von {{jsxref("Map")}}-Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` entspricht. Ist der Schlüssel nicht vorhanden, fügt sie einen neuen Eintrag mit dem Schlüssel und einem angegebenen Standardwert ein und gibt den eingefügten Wert zurück.

Wenn die Berechnung des Standardwerts aufwendig ist, ziehen Sie stattdessen {{jsxref("Map.prototype.getOrInsertComputed()")}} in Betracht, das einen Callback verwendet, um den Standardwert nur dann zu berechnen, wenn er tatsächlich benötigt wird.

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
  - : Der Schlüssel des Werts, der aus dem `Map`-Objekt zurückgegeben werden soll. Objekt-Schlüssel werden nach {{Glossary("Object_reference", "Referenz")}} und nicht nach Wert verglichen.
- `defaultValue`
  - : Der Wert, der eingefügt und zurückgegeben wird, wenn der Schlüssel im `Map`-Objekt noch nicht vorhanden ist.

### Rückgabewert

Der Wert, der dem angegebenen Schlüssel im `Map`-Objekt zugeordnet ist. Wenn der Schlüssel nicht gefunden werden kann, wird `defaultValue` eingefügt und zurückgegeben.

## Beschreibung

Die `getOrInsert()`-Methode ist äquivalent zu folgendem:

```js
if (map.has(key)) {
  return map.get(key);
}
map.set(key, defaultValue);
return defaultValue;
```

Sie ähnelt auch dem folgenden Muster (das etwas weniger zuverlässig ist, wenn `null` oder `undefined` gültige Werte in Ihrer Map sind):

```js
map.set(key, map.get(key) ?? defaultValue);
```

## Beispiele

### Anwendung von Standardwerten

Sie können `getOrInsert()` verwenden, um sicherzustellen, dass ein Schlüssel in einer Map existiert, auch wenn Sie seinen Wert derzeit nicht benötigen. Dies dient normalerweise zur Normalisierung von Benutzereingaben.

Stellen Sie sich vor, Sie haben eine Map mit Benutzerpräferenzen und möchten sicherstellen, dass eine bestimmte Präferenz immer auf einen Standardwert gesetzt wird, wenn der Benutzer sie nicht angegeben hat:

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
- [es-shims-Polyfill von `Map.prototype.getOrInsert`](https://www.npmjs.com/package/map.prototype.getorinsert)
- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
- {{jsxref("Map.prototype.getOrInsertComputed()")}}
