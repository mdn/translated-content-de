---
title: Reflect.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die statische Methode **`Reflect.ownKeys()`** gibt ein Array der eigenen Eigenschaftsschlüssel des `target`-Objekts zurück.

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

Ein {{jsxref("Array")}} der eigenen Eigenschaftsschlüssel des `target`-Objekts, einschließlich Zeichenfolgen und Symbole. Für die meisten Objekte wird das Array in folgender Reihenfolge vorliegen:

1. Nicht-negative ganzzahlige Indizes in aufsteigender numerischer Reihenfolge (aber als Zeichenfolgen)
2. Andere Zeichenfolgen-Schlüssel in der Reihenfolge ihrer Erstellung
3. Symbol-Schlüssel in der Reihenfolge ihrer Erstellung.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.ownKeys()` bietet die reflektive Semantik, um alle Eigenschaftsschlüssel eines Objekts abzurufen. Es ist der einzige Weg, um alle eigenen Eigenschaften – aufzählbare und nicht aufzählbare, Zeichenfolgen und Symbole – in einem Aufruf abzurufen, ohne zusätzliche Filterlogik. Beispielsweise nimmt {{jsxref("Object.getOwnPropertyNames()")}} den Rückgabewert von `Reflect.ownKeys()` und filtert nur Zeichenfolgenwerte, während {{jsxref("Object.getOwnPropertySymbols()")}} nur Symbolwerte filtert. Da normale Objekte `[[OwnPropertyKeys]]` implementieren, um alle Zeichenfolgen-Schlüssel vor Symbol-Schlüsseln zurückzugeben, ist `Reflect.ownKeys(target)` normalerweise äquivalent zu `Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))`. Wenn das Objekt jedoch über eine benutzerdefinierte `[[OwnPropertyKeys]]`-Methode verfügt (wie zum Beispiel durch einen Proxy-Handler [`ownKeys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys)), kann die Reihenfolge der Schlüssel unterschiedlich sein.

`Reflect.ownKeys()` ruft die `[[OwnPropertyKeys]]`-Methode [interne Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

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
