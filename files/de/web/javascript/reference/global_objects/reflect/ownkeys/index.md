---
title: Reflect.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
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

Ein {{jsxref("Array")}} der eigenen Eigenschaften-Schlüssel des `target` Objekts, einschließlich Strings und Symbole. Für die meisten Objekte wird das Array in folgender Reihenfolge sein:

1. Nicht-negative ganzzahlige Indizes in aufsteigender numerischer Reihenfolge (aber als Strings)
2. Andere String-Schlüssel in der Reihenfolge ihrer Erstellung
3. Symbol-Schlüssel in der Reihenfolge ihrer Erstellung.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.ownKeys()` liefert die reflektive Semantik zum Abrufen aller Eigenschaften-Schlüssel eines Objekts. Es ist der einzige Weg, um alle eigenen Eigenschaften – sowohl aufzählbare als auch nicht aufzählbare, Strings und Symbole – in einem Aufruf zu erhalten, ohne zusätzliche Filterlogik zu verwenden. Zum Beispiel nimmt {{jsxref("Object.getOwnPropertyNames()")}} den Rückgabewert von `Reflect.ownKeys()` und filtert nur String-Werte heraus, während {{jsxref("Object.getOwnPropertySymbols()")}} nur Symbolwerte herausfiltert. Da normale Objekte `[[OwnPropertyKeys]]` implementieren, um alle String-Schlüssel vor den Symbol-Schlüsseln zurückzugeben, ist `Reflect.ownKeys(target)` normalerweise gleichbedeutend mit `Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))`. Wenn das Objekt jedoch eine benutzerdefinierte `[[OwnPropertyKeys]]`-Methode hat (z. B. durch den [`ownKeys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys)-Handler eines Proxys), kann die Reihenfolge der Schlüssel abweichen.

`Reflect.ownKeys()` ruft die `[[OwnPropertyKeys]]` [interne Methode eines Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

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
- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- [`handler.ownKeys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys)
