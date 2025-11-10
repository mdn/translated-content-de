---
title: Map.prototype.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

Die **`get()`** Methode von {{jsxref("Map")}} Instanzen gibt den Wert zurück, der dem Schlüssel in dieser `Map` entspricht, oder `undefined`, wenn keiner vorhanden ist. Objektwerte werden als dieselbe Referenz zurückgegeben, die ursprünglich gespeichert wurde, nicht als Kopie, daher werden Änderungen am zurückgegebenen Objekt überall dort reflektiert, wo die Referenz gehalten wird, einschließlich innerhalb der `Map`.

{{InteractiveExample("JavaScript Demo: Map.prototype.get()")}}

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
get(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Wertes, der aus dem `Map` Objekt zurückgegeben werden soll. Objektschlüssel werden durch {{Glossary("Object_reference", "Referenz")}} und nicht durch Wert verglichen.

### Rückgabewert

Der Wert, der dem angegebenen Schlüssel im `Map` Objekt zugeordnet ist. Wenn der Schlüssel nicht gefunden werden kann, wird {{jsxref("undefined")}} zurückgegeben.

## Beispiele

### Verwendung von get()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // Returns "foo"
console.log(myMap.get("baz")); // Returns undefined
```

### Verwendung von get(), um eine Referenz zu einem Objekt abzurufen

```js
const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");

console.log(arr); // ["foo"]
console.log(myMap.get("bar")); // ["foo"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.delete()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
