---
title: Reflect.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/get
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Reflect.get()`** funktioniert wie die Syntax für den [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), ist jedoch eine Funktion.

{{InteractiveExample("JavaScript Demo: Reflect.get()")}}

```js interactive-example
const object = {
  x: 1,
  y: 2,
};

console.log(Reflect.get(object, "x"));
// Expected output: 1

const array = ["zero", "one"];

console.log(Reflect.get(array, 1));
// Expected output: "one"
```

## Syntax

```js-nolint
Reflect.get(target, propertyKey)
Reflect.get(target, propertyKey, receiver)
```

### Parameter

- `target`
  - : Das Zielobjekt, dessen Eigenschaft abgerufen werden soll.
- `propertyKey`
  - : Der Name der abzurufenden Eigenschaft.
- `receiver` {{optional_inline}}
  - : Der Wert von `this`, der beim Aufruf für `target` bereitgestellt wird, wenn ein Getter aufgerufen wird. Standardmäßig ist dies `target`.

### Rückgabewert

Der Wert der Eigenschaft.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.get()` stellt die reflektive Semantik eines [Eigenschaftszugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) bereit. Das heißt, `Reflect.get(target, propertyKey, receiver)` ist semantisch äquivalent zu:

```js
target[propertyKey];
```

Beachten Sie, dass bei einem normalen Eigenschaftszugriff `target` und `receiver` dasselbe Objekt wären.

`Reflect.get()` ruft die [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[Get]]` von `target` auf.

## Beispiele

### Reflect.get() verwenden

```js
// Object
const obj1 = { x: 1, y: 2 };
Reflect.get(obj1, "x"); // 1

// Array
Reflect.get(["zero", "one"], 1); // "one"

// Proxy with a get handler
const obj2 = new Proxy(
  { p: 1 },
  {
    get(t, k, r) {
      return `${k}bar`;
    },
  },
);
Reflect.get(obj2, "foo"); // "foobar"

// Proxy with get handler and receiver
const obj3 = new Proxy(
  { p: 1, foo: 2 },
  {
    get(t, prop, receiver) {
      return `${receiver[prop]}bar`;
    },
  },
);
Reflect.get(obj3, "foo", { foo: 3 }); // "3bar"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Reflect.get` in `core-js`](https://core-js.io/docs/features/ecmascript/reflect)
- {{jsxref("Reflect")}}
- [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`handler.get()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get)
