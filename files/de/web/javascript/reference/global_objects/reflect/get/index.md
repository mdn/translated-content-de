---
title: Reflect.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/get
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Reflect.get()`** statische Methode ist wie die [Eigenschaftenzugriffssyntax](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), jedoch als Funktion.

{{InteractiveExample("JavaScript Demo: Reflect.get()")}}

```js interactive-example
const object1 = {
  x: 1,
  y: 2,
};

console.log(Reflect.get(object1, "x"));
// Expected output: 1

const array1 = ["zero", "one"];

console.log(Reflect.get(array1, 1));
// Expected output: "one"
```

## Syntax

```js-nolint
Reflect.get(target, propertyKey)
Reflect.get(target, propertyKey, receiver)
```

### Parameter

- `target`
  - : Das Zielobjekt, auf dem die Eigenschaft abgefragt wird.
- `propertyKey`
  - : Der Name der Eigenschaft, die abgefragt werden soll.
- `receiver` {{optional_inline}}
  - : Der Wert von `this`, der bei einem Aufruf von `target` bereitgestellt wird, wenn ein Getter gefunden wird.

### Rückgabewert

Der Wert der Eigenschaft.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.get()` bietet die reflektierende Semantik eines [Eigenschaftenzugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Das bedeutet, `Reflect.get(target, propertyKey, receiver)` ist semantisch äquivalent zu:

```js
target[propertyKey];
```

Beachten Sie, dass bei einem normalen Eigenschaftenzugriff `target` und `receiver` beobachtbar dasselbe Objekt wären.

`Reflect.get()` ruft die `[[Get]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.get()

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

- [Polyfill von `Reflect.get` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [Eigenschaftenzugriffssyntax](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`handler.get()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get)
