---
title: Reflect.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/set
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`Reflect.set()`**-statische Methode funktioniert ähnlich wie die [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) und [Zuweisungs](/de/docs/Web/JavaScript/Reference/Operators/Assignment)-Syntax, jedoch als Funktion.

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
  - : Der Name der zu setzenden Eigenschaft.
- `value`
  - : Der zu setzende Wert.
- `receiver` {{optional_inline}}
  - : Der Wert von `this`, der beim Aufruf des Setters für `propertyKey` auf `target` bereitgestellt wird. Falls angegeben und `target` keinen Setter für `propertyKey` hat, wird die Eigenschaft stattdessen auf `receiver` gesetzt.

### Rückgabewert

Ein {{jsxref("Boolean")}}, das angibt, ob das Setzen der Eigenschaft erfolgreich war oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.set()` bietet die reflektierende Semantik eines [Eigenschaftszugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Das heißt, `Reflect.set(target, propertyKey, value, receiver)` entspricht semantisch:

```js
target[propertyKey] = value;
```

Beachten Sie, dass bei einem normalen Eigenschaftszugriff `target` und `receiver` für gewöhnlich dasselbe Objekt sind.

`Reflect.set()` ruft die `[[Set]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Nutzung von Reflect.set()

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

Wenn `target` und `receiver` unterschiedlich sind, verwendet `Reflect.set` den Eigenschaftsdeskriptor von `target` (um den Setter zu finden oder zu bestimmen, ob die Eigenschaft schreibbar ist), setzt jedoch die Eigenschaft auf `receiver`.

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
- [Eigenschafts-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`handler.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)
