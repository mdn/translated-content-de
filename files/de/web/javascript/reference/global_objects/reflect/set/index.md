---
title: Reflect.set()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/set
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Reflect.set()`** statische Methode ist vergleichbar mit dem [Property Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) und der [Zuweisungs](/de/docs/Web/JavaScript/Reference/Operators/Assignment)-Syntax, jedoch in Form einer Funktion.

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
  - : Das Zielobjekt, auf dem die Eigenschaft gesetzt wird.
- `propertyKey`
  - : Der Name der Eigenschaft, die gesetzt werden soll.
- `value`
  - : Der zu setzende Wert.
- `receiver` {{optional_inline}}
  - : Der Wert von `this`, der für den Aufruf des Setters für `propertyKey` auf `target` bereitgestellt wird. Falls angegeben und `target` keinen Setter für `propertyKey` besitzt, wird die Eigenschaft stattdessen auf `receiver` gesetzt.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das Setzen der Eigenschaft erfolgreich war.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.set()` bietet die reflexive Semantik eines [Property Access](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Das heißt, `Reflect.set(target, propertyKey, value, receiver)` ist semantisch äquivalent zu:

```js
target[propertyKey] = value;
```

Beachten Sie, dass bei einem normalen Property Access `target` und `receiver` beobachtbar dasselbe Objekt wären.

`Reflect.set()` ruft die `[[Set]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

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

Wenn `target` und `receiver` unterschiedlich sind, verwendet `Reflect.set` den Property Descriptor von `target` (zum Finden des Setters oder zum Bestimmen, ob die Eigenschaft beschreibbar ist), setzt die Eigenschaft jedoch auf `receiver`.

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
- [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`handler.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)
