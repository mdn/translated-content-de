---
title: Reflect.ownKeys()
short-title: ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Reflect.ownKeys()`** gibt ein Array der eigenen Eigenschaftsschlüssel des `target` Objekts zurück.

{{InteractiveExample("JavaScript Demo: Reflect.ownKeys()")}}

```js interactive-example
const object1 = {
  property1: 42,
  property2: 13,
};

const array1 = [];

console.log(Reflect.ownKeys(object1));
// Expected output: Array ["property1", "property2"]

console.log(Reflect.ownKeys(array1));
// Expected output: Array ["length"]
```

## Syntax

```js-nolint
Reflect.ownKeys(target)
```

### Parameter

- `target`
  - : Das Zielobjekt, von dem die eigenen Schlüssel abgerufen werden sollen.

### Rückgabewert

Ein {{jsxref("Array")}} der eigenen Eigenschaftsschlüssel des `target` Objekts, einschließlich Zeichenfolgen und Symbole. Für die meisten Objekte wird das Array in folgender Reihenfolge sein:

1. Nicht-negative ganze Zahlenindizes in aufsteigender numerischer Reihenfolge (jedoch als Zeichenfolgen)
2. Andere Zeichenfolgenschlüssel in der Reihenfolge der Eigenschaften-Erstellung
3. Symbolschlüssel in der Reihenfolge der Eigenschaften-Erstellung.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.ownKeys()` bietet die reflektive Semantik zum Abrufen aller Eigenschaftsschlüssel eines Objekts. Es ist der einzige Weg, alle eigenen Eigenschaften – aufzählbar und nicht aufzählbar, Zeichenfolgen und Symbole – in einem Aufruf zu erhalten, ohne zusätzliche Filterlogik. Zum Beispiel filtert {{jsxref("Object.getOwnPropertyNames()")}} die Rückgabewerte von `Reflect.ownKeys()`, um nur Zeichenfolgenwerte zu erhalten, während {{jsxref("Object.getOwnPropertySymbols()")}} nur Symbolwerte filtert. Da normale Objekte `[[OwnPropertyKeys]]` implementieren, um zuerst alle Zeichenfolgenschlüssel vor den Symbolschlüsseln zurückzugeben, ist `Reflect.ownKeys(target)` normalerweise äquivalent zu `Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))`. Wenn das Objekt jedoch eine benutzerdefinierte `[[OwnPropertyKeys]]` Methode hat (zum Beispiel durch einen Proxy `ownKeys`-Handler), könnte die Reihenfolge der Schlüssel anders sein.

`Reflect.ownKeys()` ruft die `[[OwnPropertyKeys]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.ownKeys()

```js
Reflect.ownKeys({ z: 3, y: 2, x: 1 }); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]

const sym = Symbol.for("comet");
const sym2 = Symbol.for("meteor");
const obj = {
  [sym]: 0,
  str: 0,
  773: 0,
  0: 0,
  [sym2]: 0,
  "-1": 0,
  8: 0,
  "second str": 0,
};
Reflect.ownKeys(obj);
// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
// Indexes in numeric order,
// strings in insertion order,
// symbols in insertion order
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.ownKeys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- [es-shims Polyfill von `Reflect.ownKeys`](https://www.npmjs.com/package/reflect.ownkeys)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- [`handler.ownKeys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys)
