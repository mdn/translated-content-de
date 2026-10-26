---
title: Reflect.ownKeys()
short-title: ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Reflect.ownKeys()`** gibt ein Array mit den eigenen Property-Keys des Objekts `target` zurück.

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
  - : Das Zielobjekt, dessen eigene Property-Keys abgerufen werden sollen.

### Rückgabewert

Ein {{jsxref("Array")}} mit den eigenen Property-Keys des Objekts `target`, einschließlich Strings und Symbols. Bei den meisten Objekten enthält das Array die Keys in folgender Reihenfolge:

1. Nicht negative ganzzahlige Indizes in aufsteigender numerischer Reihenfolge (als Strings)
2. Andere String-Keys in der Reihenfolge, in der die Properties erstellt wurden
3. Symbol-Keys in der Reihenfolge, in der die Properties erstellt wurden

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.ownKeys()` ermöglicht es, alle Property-Keys eines Objekts durch Reflexion abzurufen. Es ist die einzige Möglichkeit, mit einem einzigen Aufruf und ohne zusätzliche Filterlogik alle eigenen Property-Keys zu erhalten – aufzählbare und nicht aufzählbare, Strings und Symbols. Beispielsweise übernimmt {{jsxref("Object.getOwnPropertyNames()")}} den Rückgabewert von `Reflect.ownKeys()` und filtert daraus nur die String-Werte, während {{jsxref("Object.getOwnPropertySymbols()")}} nur die Symbol-Werte herausfiltert. Da gewöhnliche Objekte `[[OwnPropertyKeys]]` so implementieren, dass alle String-Keys vor den Symbol-Keys zurückgegeben werden, ist `Reflect.ownKeys(target)` normalerweise gleichbedeutend mit `Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))`. Wenn das Objekt jedoch über eine benutzerdefinierte `[[OwnPropertyKeys]]`-Methode verfügt (etwa durch den [`ownKeys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys)-Handler eines Proxys), kann die Reihenfolge der Keys abweichen.

`Reflect.ownKeys()` ruft die [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[OwnPropertyKeys]]` von `target` auf.

## Beispiele

### Reflect.ownKeys() verwenden

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

- [Polyfill für `Reflect.ownKeys` in `core-js`](https://core-js.io/docs/features/ecmascript/reflect)
- [Polyfill für `Reflect.ownKeys` von es-shims](https://www.npmjs.com/package/reflect.ownkeys)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- [`handler.ownKeys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys)
