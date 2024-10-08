---
title: Reflect.get()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/get
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`Reflect.get()`** statische Methode ähnelt der [Property Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Syntax, jedoch als Funktion.

{{EmbedInteractiveExample("pages/js/reflect-get.html")}}

## Syntax

```js-nolint
Reflect.get(target, propertyKey)
Reflect.get(target, propertyKey, receiver)
```

### Parameter

- `target`
  - : Das Zielobjekt, von dem die Eigenschaft abgerufen werden soll.
- `propertyKey`
  - : Der Name der abzurufenden Eigenschaft.
- `receiver` {{optional_inline}}
  - : Der Wert von `this`, der für den Aufruf von `target` bereitgestellt wird, wenn auf einen Getter getroffen wird.

### Rückgabewert

Der Wert der Eigenschaft.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.get()` bietet die reflexive Semantik eines [Property-Zugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Das heißt, `Reflect.get(target, propertyKey, receiver)` ist semantisch äquivalent zu:

```js
target[propertyKey];
```

Es ist zu beachten, dass bei einem normalen Property-Zugriff `target` und `receiver` beobachtbar dasselbe Objekt wären.

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
      return k + "bar";
    },
  },
);
Reflect.get(obj2, "foo"); // "foobar"

// Proxy with get handler and receiver
const obj3 = new Proxy(
  { p: 1, foo: 2 },
  {
    get(t, prop, receiver) {
      return receiver[prop] + "bar";
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
- [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`handler.get()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get)
