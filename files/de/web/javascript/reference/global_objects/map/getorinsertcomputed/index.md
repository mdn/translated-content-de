---
title: Map.prototype.getOrInsertComputed()
short-title: getOrInsertComputed()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsertComputed
l10n:
  sourceCommit: a1f1a8348bdf6dd80af9e1ac7b5b748ef74df12d
---

{{SeeCompatTable}}

Die **`getOrInsertComputed()`** Methode von {{jsxref("Map")}} Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` entspricht. Wenn der Schlüssel nicht vorhanden ist, fügt sie einen neuen Eintrag mit dem Schlüssel und einem Standardwert ein, der von einer angegebenen Rückruffunktion berechnet wird, und gibt den eingefügten Wert zurück.

Verwenden Sie diese Methode anstelle von {{jsxref("Map.prototype.getOrInsert()")}}, wenn der Standardwert aufwendig zu berechnen ist und Sie vermeiden möchten, ihn zu berechnen, es sei denn, es ist wirklich notwendig.

{{InteractiveExample("JavaScript Demo: Map.prototype.getOrInsertComputed()")}}

```js interactive-example
const map = new Map([["bar", "foo"]]);
const defaultCreator = (key) => `default for ${key}`;

console.log(map.getOrInsertComputed("bar", defaultCreator));
// Expected output: "foo"

console.log(map.getOrInsertComputed("baz", defaultCreator));
// Expected output: "default for baz"
```

## Syntax

```js-nolint
getOrInsertComputed(key, callback)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, das aus dem `Map` Objekt zurückgegeben werden soll. Objektschlüssel werden durch {{Glossary("Object_reference", "Referenz")}} verglichen, nicht durch Wert.
- `callback`
  - : Eine Funktion, die den Wert zurückgibt, der eingefügt und zurückgegeben werden soll, wenn der Schlüssel im `Map` Objekt noch nicht vorhanden ist. Die Funktion wird mit folgendem Argument aufgerufen:
    - `key`
      - : Der gleiche Schlüssel, der an `getOrInsertComputed()` übergeben wurde.

### Rückgabewert

Der Wert, der dem angegebenen Schlüssel im `Map` Objekt zugeordnet ist. Wenn der Schlüssel nicht gefunden werden kann, wird das Ergebnis von `callback(key)` eingefügt und zurückgegeben.

## Beispiele

### Vermeidung unnötiger Standardberechnungen

Bei Verwendung von {{jsxref("Map.prototype.getOrInsert()")}} wird der Standardwert jedes Mal berechnet, auch wenn er nicht benötigt wird. Mit `getOrInsertComputed()` wird der Standardwert nur bei Bedarf berechnet.

```js
const map = new Map([["bar", "foo"]]);
const defaultCreator = (key) => {
  console.log(`Creating default for ${key}`);
  return `default for ${key}`;
};

map.getOrInsert("bar", defaultCreator("bar")); // Logs "Creating default for bar"
map.getOrInsertComputed("bar", defaultCreator); // No log
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Map.prototype.getOrInsertComputed` in `core-js`](https://github.com/zloirock/core-js#map-upsert)
- [es-shims Polyfill von `Map.prototype.getOrInsertComputed`](https://www.npmjs.com/package/map.prototype.getorinsertcomputed)
- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
- {{jsxref("Map.prototype.getOrInsert()")}}
