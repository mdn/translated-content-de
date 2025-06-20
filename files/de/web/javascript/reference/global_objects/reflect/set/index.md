---
title: Reflect.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/set
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`Reflect.set()`** statische Methode funktioniert ähnlich wie die [Property-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) und [Zuweisungs](/de/docs/Web/JavaScript/Reference/Operators/Assignment) Syntax, jedoch als Funktion.

{{InteractiveExample("JavaScript Demo: Reflect.set()")}}

```js interactive-example
const object1 = {};
Reflect.set(object1, "property1", 42);

console.log(object1.property1);
// Expected output: 42

const array1 = ["duck", "duck", "duck"];
Reflect.set(array1, 2, "goose");

console.log(array1[2]);
// Expected output: "goose"
```

## Syntax

```js-nolint
Reflect.set(target, propertyKey, value)
Reflect.set(target, propertyKey, value, receiver)
```

### Parameter

- `target`
  - : Das Zielobjekt, auf dem die Eigenschaft gesetzt werden soll.
- `propertyKey`
  - : Der Name der zu setzenden Eigenschaft.
- `value`
  - : Der zu setzende Wert.
- `receiver` {{optional_inline}}
  - : Der Wert von `this`, der für den Aufruf des Setters von `propertyKey` auf `target` bereitgestellt wird. Wenn angegeben und `target` keinen Setter für `propertyKey` hat, wird die Eigenschaft stattdessen auf `receiver` gesetzt.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das Setzen der Eigenschaft erfolgreich war oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.set()` stellt die reflexive Semantik eines [Property-Zugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) bereit. Das bedeutet, `Reflect.set(target, propertyKey, value, receiver)` ist semantisch gleichwertig mit:

```js
target[propertyKey] = value;
```

Es ist zu beachten, dass bei einem normalen Property-Zugriff `target` und `receiver` erkennbar dasselbe Objekt sind.

`Reflect.set()` ruft die `[[Set]]` [interne Methoden eines Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.set()

```js
// Object
const obj = {};
Reflect.set(obj, "prop", "value"); // true
obj.prop; // "value"

// Array
const arr = ["duck", "duck", "duck"];
Reflect.set(arr, 2, "goose"); // true
arr[2]; // "goose"

// It can truncate an array.
Reflect.set(arr, "length", 1); // true
arr; // ["duck"]

// With just one argument, propertyKey and value are "undefined".
Reflect.set(obj); // true
Reflect.getOwnPropertyDescriptor(obj, "undefined");
// { value: undefined, writable: true, enumerable: true, configurable: true }
```

### Unterschiedliches Ziel und Empfänger

Wenn `target` und `receiver` unterschiedlich sind, wird `Reflect.set` den Eigenschaftsbeschreiber von `target` verwenden (um den Setter zu finden oder festzustellen, ob die Eigenschaft schreibbar ist), aber die Eigenschaft auf `receiver` setzen.

```js
const target = {};
const receiver = {};
Reflect.set(target, "a", 2, receiver); // true
// target is {}; receiver is { a: 2 }

const target = { a: 1 };
const receiver = {};
Reflect.set(target, "a", 2, receiver); // true
// target is { a: 1 }; receiver is { a: 2 }

const target = {
  set a(v) {
    this.b = v;
  },
};
const receiver = {};
Reflect.set(target, "a", 2, receiver); // true
// target is { a: [Setter] }; receiver is { b: 2 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.set` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [Property-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`handler.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)
