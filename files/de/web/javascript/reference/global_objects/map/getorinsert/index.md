---
title: Map.prototype.getOrInsert()
short-title: getOrInsert()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsert
l10n:
  sourceCommit: 5956b80db199b86203b2cdfafe3e6ce45b6ad3c3
---

Die **`getOrInsert()`** Methode von {{jsxref("Map")}} Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` entspricht. Falls der Schlüssel nicht vorhanden ist, fügt sie einen neuen Eintrag mit dem Schlüssel und einem gegebenen Standardwert ein und gibt den eingefügten Wert zurück.

Falls die Berechnung des Standardwerts aufwendig ist, sollten Sie in Betracht ziehen, anstelle dessen {{jsxref("Map.prototype.getOrInsertComputed()")}} zu verwenden, welche einen Rückruf annimmt, um den Standardwert nur dann zu berechnen, wenn er tatsächlich benötigt wird.

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
  - : Der Schlüssel des Werts, der aus dem `Map` Objekt zurückgegeben werden soll. Objektschlüssel werden durch {{Glossary("Object_reference", "Referenz")}} verglichen, nicht durch den Wert.
- `defaultValue`
  - : Der Wert, der eingefügt und zurückgegeben wird, wenn der Schlüssel im `Map` Objekt noch nicht vorhanden ist.

### Rückgabewert

Der Wert, der dem angegebenen Schlüssel im `Map` Objekt zugeordnet ist. Falls der Schlüssel nicht gefunden werden kann, wird `defaultValue` eingefügt und zurückgegeben.

## Beschreibung

Die `getOrInsert()` Methode ist äquivalent zum Folgenden:

```js
if (map.has(key)) {
  return map.get(key);
}
map.set(key, defaultValue);
return defaultValue;
```

Sie ist auch ähnlich dem folgenden Muster (das etwas weniger zuverlässig ist, falls `null` oder `undefined` gültige Werte in Ihrer Map sind):

```js
map.set(key, map.get(key) ?? defaultValue);
```

## Beispiele

### Multimap

In einer Map, wo jeder Schlüssel auf ein Array von Werten abgebildet ist, können Sie `getOrInsert()` verwenden, um sicherzustellen, dass das Array für einen gegebenen Schlüssel existiert, bevor Sie versuchen, einen neuen Wert in das Array zu schieben.

```js
map.getOrInsert(key, []).push(value);
```

### Anwenden von Standardwerten

Sie können `getOrInsert()` verwenden, um sicherzustellen, dass ein Schlüssel in einer Map existiert, selbst wenn Sie seinen Wert derzeit nicht benötigen. Dies geschieht meistens, um Benutzereingaben zu normalisieren.

Stellen Sie sich vor, Sie haben eine Map mit Benutzerpräferenzen und möchten sicherstellen, dass eine bestimmte Präferenz immer auf einen Standardwert gesetzt ist, wenn der Benutzer sie nicht spezifiziert hat:

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
- [es-shims polyfill von `Map.prototype.getOrInsert`](https://www.npmjs.com/package/map.prototype.getorinsert)
- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
- {{jsxref("Map.prototype.getOrInsertComputed()")}}
