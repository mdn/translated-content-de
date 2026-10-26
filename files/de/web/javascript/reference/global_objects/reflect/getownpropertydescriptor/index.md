---
title: Reflect.getOwnPropertyDescriptor()
short-title: getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Reflect.getOwnPropertyDescriptor()`** ähnelt {{jsxref("Object.getOwnPropertyDescriptor()")}}. Sie gibt einen Eigenschaftsdeskriptor für die angegebene Eigenschaft zurück, wenn diese auf dem Objekt vorhanden ist, andernfalls {{jsxref("undefined")}}.

{{InteractiveExample("JavaScript Demo: Reflect.getOwnPropertyDescriptor()")}}

```js interactive-example
const object = {
  property1: 42,
};

console.log(Reflect.getOwnPropertyDescriptor(object, "property1").value);
// Expected output: 42

console.log(Reflect.getOwnPropertyDescriptor(object, "property2"));
// Expected output: undefined

console.log(Reflect.getOwnPropertyDescriptor(object, "property1").writable);
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
  - : Der Name der Eigenschaft, deren eigener Eigenschaftsdeskriptor abgerufen werden soll.

### Rückgabewert

Ein Eigenschaftsdeskriptor-Objekt, wenn die Eigenschaft eine eigene Eigenschaft von `target` ist; andernfalls {{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.getOwnPropertyDescriptor()` bietet die reflektive Semantik zum Abrufen des Eigenschaftsdeskriptors eines Objekts. Der einzige Unterschied zu {{jsxref("Object.getOwnPropertyDescriptor()")}} besteht darin, wie mit Zielwerten umgegangen wird, die keine Objekte sind. `Reflect.getOwnPropertyDescriptor()` löst einen {{jsxref("TypeError")}} aus, wenn das Ziel kein Objekt ist, während `Object.getOwnPropertyDescriptor()` den Wert in ein Objekt umwandelt.

`Reflect.getOwnPropertyDescriptor()` ruft die [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[GetOwnProperty]]` von `target` auf.

## Beispiele

### Reflect.getOwnPropertyDescriptor() verwenden

```js
Reflect.getOwnPropertyDescriptor({ x: "hello" }, "x");
// {value: "hello", writable: true, enumerable: true, configurable: true}

Reflect.getOwnPropertyDescriptor({ x: "hello" }, "y");
// undefined

Reflect.getOwnPropertyDescriptor([], "length");
// {value: 0, writable: true, enumerable: false, configurable: false}
```

### Unterschied zu Object.getOwnPropertyDescriptor()

Wenn das Argument `target` dieser Methode kein Objekt ist (sondern ein primitiver Wert), wird ein {{jsxref("TypeError")}} ausgelöst. Bei {{jsxref("Object.getOwnPropertyDescriptor")}} wird ein erstes Argument, das kein Objekt ist, zunächst in ein Objekt umgewandelt.

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

- [Polyfill für `Reflect.getOwnPropertyDescriptor` in `core-js`](https://core-js.io/docs/features/ecmascript/reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- [`handler.getOwnPropertyDescriptor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor)
