---
title: Reflect.has()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/has
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Reflect.has()`** ist wie der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator, jedoch als Funktion.

{{InteractiveExample("JavaScript Demo: Reflect.has()")}}

```js interactive-example
const object1 = {
  property1: 42,
};

console.log(Reflect.has(object1, "property1"));
// Expected output: true

console.log(Reflect.has(object1, "property2"));
// Expected output: false

console.log(Reflect.has(object1, "toString"));
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
  - : Der Name der zu überprüfenden Eigenschaft.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das `target` die Eigenschaft besitzt oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.has()` bietet die reflektierende Semantik zum Überprüfen, ob eine Eigenschaft in einem Objekt vorhanden ist. Das heißt, `Reflect.has(target, propertyKey)` ist semantisch äquivalent zu:

```js
propertyKey in target;
```

`Reflect.has()` ruft die `[[HasProperty]]`-[interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.has()

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

`Reflect.has` gibt `true` für alle geerbten Eigenschaften zurück, wie der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator:

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

- [Polyfill von `Reflect.has` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)
- [`handler.has()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has)
