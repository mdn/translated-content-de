---
title: Reflect.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/set
l10n:
  sourceCommit: 35a91d51c2082046a0f2702ea31dc94f794aeb0d
---

Die **`Reflect.set()`** statische Methode ist ähnlich der [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)- und [Zuweisungs](/de/docs/Web/JavaScript/Reference/Operators/Assignment)-Syntax, aber als Funktion.

{{InteractiveExample("JavaScript Demo: Reflect.set()")}}

```js interactive-example
const object = {};
Reflect.set(object, "foo", 42);

console.log(object.foo);
// Expected output: 42

const array = ["duck", "duck", "duck"];
Reflect.set(array, 2, "goose");

console.log(array[2]);
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
  - : Der Name der Eigenschaft, die gesetzt werden soll.
- `value`
  - : Der Wert, der gesetzt werden soll.
- `receiver` {{optional_inline}}
  - : Der Wert von `this`, der für den Aufruf des Setters für `propertyKey` auf `target` bereitgestellt wird. Wenn angegeben und `target` keinen Setter für `propertyKey` hat, wird die Eigenschaft stattdessen auf `receiver` gesetzt. Standardmäßig `target`.

### Rückgabewert

Ein {{jsxref("Boolean")}}, das angibt, ob das Setzen der Eigenschaft erfolgreich war oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.set()` bietet die reflektive Semantik eines [Eigenschaftszugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Das heißt, `Reflect.set(target, propertyKey, value, receiver)` ist semantisch äquivalent zu:

```js
target[propertyKey] = value;
```

Beachten Sie, dass bei einem normalen Eigenschaftszugriff `target` und `receiver` beobachtbar dasselbe Objekt wären.

`Reflect.set()` ruft die `[[Set]]`-[Objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

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

Wenn `target` und `receiver` unterschiedlich sind, verwendet `Reflect.set` den Eigenschaftsdeskriptor von `target` (um den Setter zu finden oder zu bestimmen, ob die Eigenschaft schreibbar ist), setzt aber die Eigenschaft auf `receiver`.

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
- [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`handler.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)
