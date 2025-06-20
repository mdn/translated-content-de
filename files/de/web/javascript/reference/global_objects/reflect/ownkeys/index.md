---
title: Reflect.ownKeys()
short-title: ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`Reflect.ownKeys()`** statische Methode gibt ein Array der eigenen Eigenschaften-Schlüssel des `target` Objekts zurück.

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

Ein {{jsxref("Array")}} der eigenen Eigenschaften-Schlüssel des `target` Objekts, einschließlich Zeichenfolgen und Symbole. Für die meisten Objekte wird das Array in folgender Reihenfolge sein:

1. Nicht-negative ganzzahlige Indizes in aufsteigender numerischer Reihenfolge (aber als Zeichenfolgen)
2. Andere Zeichenfolgen-Schlüssel in der Reihenfolge ihrer Erstellung
3. Symbol-Schlüssel in der Reihenfolge ihrer Erstellung.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.ownKeys()` bietet die reflektierende Semantik zum Abrufen aller Eigenschaften-Schlüssel eines Objekts. Es ist die einzige Möglichkeit, um alle eigenen Eigenschaften – aufzählbar und nicht aufzählbar, Zeichenfolgen und Symbole – in einem einzigen Aufruf zu erhalten, ohne zusätzliches Filter-Logik. Zum Beispiel nimmt {{jsxref("Object.getOwnPropertyNames()")}} den Rückgabewert von `Reflect.ownKeys()` und filtert nur die Zeichenfolgenwerte, während {{jsxref("Object.getOwnPropertySymbols()")}} nur die Symbolwerte filtert. Da normale Objekte `[[OwnPropertyKeys]]` implementieren, um zuerst alle Zeichenfolgen-Schlüssel zurückzugeben, bevor Symbol-Schlüssel, ist `Reflect.ownKeys(target)` normalerweise äquivalent zu `Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))`. Wenn jedoch das Objekt eine benutzerdefinierte `[[OwnPropertyKeys]]`-Methode hat (wie zum Beispiel durch einen Proxy's [`ownKeys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys) Handler), kann die Reihenfolge der Schlüssel unterschiedlich sein.

`Reflect.ownKeys()` ruft die `[[OwnPropertyKeys]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) des `target` ab.

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
- [es-shims polyfill von `Reflect.ownKeys`](https://www.npmjs.com/package/reflect.ownkeys)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- [`handler.ownKeys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys)
