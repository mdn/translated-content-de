---
title: Reflect.set()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/set
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Reflect.set()`** ähnelt dem [Property-Zugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) und der [Zuweisungs](/de/docs/Web/JavaScript/Reference/Operators/Assignment)-Syntax, jedoch als Funktion.

{{EmbedInteractiveExample("pages/js/reflect-set.html")}}

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
  - : Der Wert von `this`, der für den Aufruf des Setters für `propertyKey` auf `target` bereitgestellt wird. Wenn bereitgestellt und `target` keinen Setter für `propertyKey` hat, wird die Eigenschaft stattdessen auf `receiver` gesetzt.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das Setzen der Eigenschaft erfolgreich war oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.set()` bietet die reflektive Semantik eines [Property-Zugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Das heißt, `Reflect.set(target, propertyKey, value, receiver)` ist semantisch gleichwertig mit:

```js
target[propertyKey] = value;
```

Beachten Sie, dass bei einem normalen Property-Zugriff `target` und `receiver` beobachtbar dasselbe Objekt wären.

`Reflect.set()` ruft die `[[Set]]` [interne Objekt-Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

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

### Unterschiedlicher Target und Receiver

Wenn `target` und `receiver` unterschiedlich sind, verwendet `Reflect.set` die Eigenschaftsbeschreibung von `target` (um den Setter zu finden oder festzustellen, ob die Eigenschaft beschreibbar ist), setzt jedoch die Eigenschaft auf `receiver`.

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
- [Property-Zugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`handler.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)
