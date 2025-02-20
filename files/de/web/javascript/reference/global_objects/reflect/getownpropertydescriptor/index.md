---
title: Reflect.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Reflect.getOwnPropertyDescriptor()`** ist ähnlich wie {{jsxref("Object.getOwnPropertyDescriptor()")}}. Sie gibt eine Eigenschaftsbeschreibung der angegebenen Eigenschaft zurück, falls diese auf dem Objekt vorhanden ist, oder {{jsxref("undefined")}}, falls nicht.

{{InteractiveExample("JavaScript Demo: Reflect.getOwnPropertyDescriptor()")}}

```js interactive-example
const object1 = {
  property1: 42,
};

console.log(Reflect.getOwnPropertyDescriptor(object1, "property1").value);
// Expected output: 42

console.log(Reflect.getOwnPropertyDescriptor(object1, "property2"));
// Expected output: undefined

console.log(Reflect.getOwnPropertyDescriptor(object1, "property1").writable);
// Expected output: true
```

## Syntax

```js-nolint
Reflect.getOwnPropertyDescriptor(target, propertyKey)
```

### Parameter

- `target`
  - : Das Zielobjekt, in dem nach der Eigenschaft gesucht wird.
- `propertyKey`
  - : Der Name der Eigenschaft, für die ein eigener Eigenschaftsbeschreiber abgerufen werden soll.

### Rückgabewert

Ein Eigenschaftsbeschreibeobjekt, falls die Eigenschaft als eigene Eigenschaft von `target` existiert. Andernfalls {{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.getOwnPropertyDescriptor()` bietet die reflexive Semantik zum Abrufen der Eigenschaftsbeschreibung eines Objekts. Der einzige Unterschied zu {{jsxref("Object.getOwnPropertyDescriptor()")}} besteht darin, wie nicht-Objekt-Ziele behandelt werden. `Reflect.getOwnPropertyDescriptor()` löst einen {{jsxref("TypeError")}} aus, wenn das Ziel kein Objekt ist, während `Object.getOwnPropertyDescriptor()` es in ein Objekt umwandelt.

`Reflect.getOwnPropertyDescriptor()` ruft die `[[GetOwnProperty]]` [interne Objekt-Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) des `target` auf.

## Beispiele

### Verwendung von Reflect.getOwnPropertyDescriptor()

```js
Reflect.getOwnPropertyDescriptor({ x: "hello" }, "x");
// {value: "hello", writable: true, enumerable: true, configurable: true}

Reflect.getOwnPropertyDescriptor({ x: "hello" }, "y");
// undefined

Reflect.getOwnPropertyDescriptor([], "length");
// {value: 0, writable: true, enumerable: false, configurable: false}
```

### Unterschied zu Object.getOwnPropertyDescriptor()

Falls das Argument `target` dieser Methode kein Objekt (z. B. ein Primitive) ist, führt dies zu einem {{jsxref("TypeError")}}. Bei {{jsxref("Object.getOwnPropertyDescriptor")}} würde das nicht-Objekt-Argument zuerst in ein Objekt umgewandelt.

```js
Reflect.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" is not non-null object

Object.getOwnPropertyDescriptor("foo", 0);
// { value: "f", writable: false, enumerable: true, configurable: false }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.getOwnPropertyDescriptor` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- [`handler.getOwnPropertyDescriptor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor)
