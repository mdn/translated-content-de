---
title: Map.prototype.getOrInsertComputed()
short-title: getOrInsertComputed()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsertComputed
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`getOrInsertComputed()`**-Methode von {{jsxref("Map")}}-Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` entspricht. Ist der Schlüssel nicht vorhanden, wird ein neuer Eintrag mit dem Schlüssel und einem Standardwert, der aus einem gegebenen Callback berechnet wird, eingefügt und der eingefügte Wert zurückgegeben.

Verwenden Sie diese Methode anstelle von {{jsxref("Map.prototype.getOrInsert()")}}, wenn der Standardwert aufwendig zu berechnen ist und Sie vermeiden möchten, ihn zu berechnen, es sei denn, er wird wirklich benötigt.

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
  - : Der Schlüssel des Elements, das aus dem `Map`-Objekt zurückgegeben werden soll. Objektschlüssel werden durch {{Glossary("Object_reference", "Referenz")}}, nicht durch Wert, verglichen.
- `callback`
  - : Eine Funktion, die den Wert zurückgibt, der eingefügt und zurückgegeben werden soll, wenn der Schlüssel im `Map`-Objekt nicht bereits vorhanden ist. Die Funktion wird mit dem folgenden Argument aufgerufen:
    - `key`
      - : Der gleiche Schlüssel, der an `getOrInsertComputed()` übergeben wurde.

### Rückgabewert

Der mit dem angegebenen Schlüssel im `Map`-Objekt verknüpfte Wert. Wenn der Schlüssel nicht gefunden werden kann, wird das Ergebnis von `callback(key)` eingefügt und zurückgegeben.

## Beispiele

### Vermeidung unnötiger Standardberechnung

Bei Verwendung von {{jsxref("Map.prototype.getOrInsert()")}} wird der Standardwert jedes Mal berechnet, auch wenn er nicht benötigt wird. Mit `getOrInsertComputed()` wird der Standardwert nur berechnet, wenn dies erforderlich ist.

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
