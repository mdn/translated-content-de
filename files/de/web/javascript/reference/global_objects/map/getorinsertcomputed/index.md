---
title: Map.prototype.getOrInsertComputed()
short-title: getOrInsertComputed()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsertComputed
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`getOrInsertComputed()`** von {{jsxref("Map")}}-Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` zugeordnet ist. Ist der Schlüssel nicht vorhanden, fügt sie einen neuen Eintrag mit diesem Schlüssel und einem Standardwert hinzu, der durch eine übergebene Callback-Funktion berechnet wird, und gibt den eingefügten Wert zurück.

Verwenden Sie diese Methode anstelle von {{jsxref("Map.prototype.getOrInsert()")}}, wenn die Berechnung des Standardwerts aufwendig ist und Sie sie nur bei Bedarf durchführen möchten.

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
  - : Der Schlüssel des Elements, das aus dem `Map`-Objekt zurückgegeben werden soll. Objektschlüssel werden anhand ihrer {{Glossary("Object_reference", "Referenz")}} verglichen, nicht anhand ihres Werts.
- `callback`
  - : Eine Funktion, die den Wert zurückgibt, der eingefügt und zurückgegeben werden soll, wenn der Schlüssel noch nicht im `Map`-Objekt vorhanden ist. Die Funktion wird mit dem folgenden Argument aufgerufen:
    - `key`
      - : Derselbe Schlüssel, der an `getOrInsertComputed()` übergeben wurde.

### Rückgabewert

Der Wert, der dem angegebenen Schlüssel im `Map`-Objekt zugeordnet ist. Wird der Schlüssel nicht gefunden, wird das Ergebnis von `callback(key)` eingefügt und zurückgegeben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `callback` nicht aufrufbar ist.

## Beispiele

### Unnötige Berechnung des Standardwerts vermeiden

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

- [Polyfill für `Map.prototype.getOrInsertComputed` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-map)
- [Polyfill für `Map.prototype.getOrInsertComputed` von es-shims](https://www.npmjs.com/package/map.prototype.getorinsertcomputed)
- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
- {{jsxref("Map.prototype.getOrInsert()")}}
