---
title: Reflect.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/set
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Reflect.set()`** ähnelt der Syntax für [Property-Zugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) und [Zuweisungen](/de/docs/Web/JavaScript/Reference/Operators/Assignment), ist jedoch eine Funktion.

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
  - : Das Zielobjekt, auf dem die Property gesetzt werden soll.
- `propertyKey`
  - : Der Name der Property, die gesetzt werden soll.
- `value`
  - : Der zu setzende Wert.
- `receiver` {{optional_inline}}
  - : Der Wert von `this`, der beim Aufruf des Setters für `propertyKey` auf `target` verwendet wird. Wenn `receiver` angegeben ist und `target` keinen Setter für `propertyKey` hat, wird die Property stattdessen auf `receiver` gesetzt. Der Standardwert ist `target`.

### Rückgabewert

Ein {{jsxref("Boolean")}}-Wert, der angibt, ob das Setzen der Property erfolgreich war.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.set()` stellt die reflektierende Semantik eines [Property-Zugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) bereit. Das heißt, `Reflect.set(target, propertyKey, value, receiver)` ist semantisch äquivalent zu:

```js
target[propertyKey] = value;
```

Beachten Sie, dass `target` und `receiver` bei einem normalen Property-Zugriff beobachtbar dasselbe Objekt wären.

`Reflect.set()` ruft die [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[Set]]` von `target` auf.

## Beispiele

### Reflect.set() verwenden

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

### Unterschiedliche Werte für target und receiver

Wenn `target` und `receiver` unterschiedlich sind, verwendet `Reflect.set` den Property-Deskriptor von `target`, um den Setter zu finden oder festzustellen, ob die Property beschreibbar ist. Die Property wird jedoch auf `receiver` gesetzt.

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

- [Polyfill für `Reflect.set` in `core-js`](https://core-js.io/docs/features/ecmascript/reflect)
- {{jsxref("Reflect")}}
- [Property-Zugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`handler.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)
