---
title: Reflect.ownKeys()
short-title: ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die statische Methode **`Reflect.ownKeys()`** gibt ein Array der eigenen Eigenschaften-Schlüssel des `target` Objekts zurück.

{{InteractiveExample("JavaScript Demo: Reflect.ownKeys()")}}

```js interactive-example
const object = {
  property1: 42,
  property2: 13,
};

const array = [];

console.log(Reflect.ownKeys(object));
// Expected output: Array ["property1", "property2"]

console.log(Reflect.ownKeys(array));
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

Ein {{jsxref("Array")}} der eigenen Eigenschaften-Schlüssel des `target` Objekts, einschließlich Zeichenketten und Symbole. Für die meisten Objekte wird das Array in folgender Reihenfolge sein:

1. Nicht-negative Integer-Indizes in aufsteigender numerischer Reihenfolge (aber als Zeichenketten)
2. Andere Zeichenkettenschlüssel in der Reihenfolge der Eigenschaftserstellung
3. Symbolschlüssel in der Reihenfolge der Eigenschaftserstellung.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.ownKeys()` bietet die reflektierende Semantik zum Abrufen aller Eigenschaften-Schlüssel eines Objekts. Es ist der einzige Weg, um alle eigenen Eigenschaften – aufzählbar und nicht aufzählbar, Zeichenketten und Symbole – in einem Aufruf zu erhalten, ohne zusätzliche Filterlogik. Zum Beispiel nimmt {{jsxref("Object.getOwnPropertyNames()")}} den Rückgabewert von `Reflect.ownKeys()` und filtert nur zu Zeichenkettenwerten, während {{jsxref("Object.getOwnPropertySymbols()")}} nur zu Symbolwerten filtert. Da normale Objekte `[[OwnPropertyKeys]]` implementieren, um alle Zeichenkettenschlüssel vor Symbolschlüsseln zurückzugeben, ist `Reflect.ownKeys(target)` normalerweise gleichbedeutend mit `Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))`. Wenn das Objekt jedoch eine benutzerdefinierte `[[OwnPropertyKeys]]`-Methode hat (wie zum Beispiel durch den [`ownKeys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys) Handler eines Proxys), kann die Reihenfolge der Schlüssel unterschiedlich sein.

`Reflect.ownKeys()` ruft die `[[OwnPropertyKeys]]` [Objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

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
