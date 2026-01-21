---
title: Map.prototype.getOrInsertComputed()
short-title: getOrInsertComputed()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsertComputed
l10n:
  sourceCommit: af88df72d0ee1da6fd1be412f615e8b4caf98e70
---

Die **`getOrInsertComputed()`**-Methode von {{jsxref("Map")}} Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` entspricht. Wenn der Schlüssel nicht vorhanden ist, fügt sie einen neuen Eintrag mit dem Schlüssel und einem Standardwert ein, der aus einem angegebenen Callback berechnet wird, und gibt den eingefügten Wert zurück.

Verwenden Sie diese Methode anstelle von {{jsxref("Map.prototype.getOrInsert()")}}, wenn der Standardwert aufwendig zu berechnen ist und Sie vermeiden möchten, ihn zu berechnen, es sei denn, er wird tatsächlich benötigt.

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
  - : Der Schlüssel des Elements, das aus dem `Map`-Objekt zurückgegeben werden soll. Objektschlüssel werden nach {{Glossary("Object_reference", "Referenz")}} verglichen, nicht nach Wert.
- `callback`
  - : Eine Funktion, die den Wert zurückgibt, der eingefügt und zurückgegeben werden soll, wenn der Schlüssel im `Map`-Objekt noch nicht vorhanden ist. Die Funktion wird mit dem folgenden Argument aufgerufen:
    - `key`
      - : Der gleiche Schlüssel, der an `getOrInsertComputed()` übergeben wurde.

### Rückgabewert

Der mit dem angegebenen Schlüssel im `Map`-Objekt verknüpfte Wert. Wenn der Schlüssel nicht gefunden werden kann, wird das Ergebnis von `callback(key)` eingefügt und zurückgegeben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `callback` nicht aufrufbar ist.

## Beispiele

### Vermeidung unnötiger Standardberechnung

Bei der Verwendung von {{jsxref("Map.prototype.getOrInsert()")}} wird der Standardwert jedes Mal berechnet, auch wenn er nicht benötigt wird. Mit `getOrInsertComputed()` wird der Standardwert nur bei Bedarf berechnet.

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
