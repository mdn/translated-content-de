---
title: Reflect.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/has
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Reflect.has()`** ähnelt dem [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator, wird aber als Funktion aufgerufen.

{{InteractiveExample("JavaScript Demo: Reflect.has()")}}

```js interactive-example
const object = {
  property1: 42,
};

console.log(Reflect.has(object, "property1"));
// Expected output: true

console.log(Reflect.has(object, "property2"));
// Expected output: false

console.log(Reflect.has(object, "toString"));
// Expected output: true
```

## Syntax

```js-nolint
Reflect.has(target, propertyKey)
```

### Parameter

- `target`
  - : Das Zielobjekt, in dem nach der Eigenschaft gesucht wird.
- `propertyKey`
  - : Der Name der zu prüfenden Eigenschaft.

### Rückgabewert

Ein {{jsxref("Boolean")}}-Wert, der angibt, ob `target` die Eigenschaft besitzt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.has()` ermöglicht die reflektive Prüfung, ob eine Eigenschaft in einem Objekt vorhanden ist. Das heißt, `Reflect.has(target, propertyKey)` ist semantisch gleichbedeutend mit:

```js
propertyKey in target;
```

`Reflect.has()` ruft die [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[HasProperty]]` von `target` auf.

## Beispiele

### Reflect.has() verwenden

```js
Reflect.has({ x: 0 }, "x"); // true
Reflect.has({ x: 0 }, "y"); // false

// returns true for properties in the prototype chain
Reflect.has({ x: 0 }, "toString");

// Proxy with .has() handler method
obj = new Proxy(
  {},
  {
    has(t, k) {
      return k.startsWith("door");
    },
  },
);
Reflect.has(obj, "doorbell"); // true
Reflect.has(obj, "dormitory"); // false
```

Wie der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator gibt `Reflect.has` auch für geerbte Eigenschaften `true` zurück:

```js
const a = { foo: 123 };
const b = { __proto__: a };
const c = { __proto__: b };
// The prototype chain is: c -> b -> a
Reflect.has(c, "foo"); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Reflect.has` in `core-js`](https://core-js.io/docs/features/ecmascript/reflect)
- {{jsxref("Reflect")}}
- [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)
- [`handler.has()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has)
