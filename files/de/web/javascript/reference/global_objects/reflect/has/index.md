---
title: Reflect.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/has
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`Reflect.has()`** statische Methode ist wie der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator, jedoch als Funktion.

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
  - : Der Name der zu prüfenden Eigenschaft.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das `target` die Eigenschaft hat oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.has()` bietet die reflektive Semantik zur Prüfung, ob eine Eigenschaft in einem Objekt vorhanden ist. Das bedeutet, `Reflect.has(target, propertyKey)` ist semantisch gleichwertig mit:

```js
propertyKey in target;
```

`Reflect.has()` ruft die `[[HasProperty]]` [interne Objekte-Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) des `target` auf.

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

`Reflect.has` gibt `true` für alle geerbten Eigenschaften zurück, wie der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator:

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
