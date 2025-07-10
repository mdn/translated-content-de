---
title: Reflect.getOwnPropertyDescriptor()
short-title: getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Reflect.getOwnPropertyDescriptor()`** ist ähnlich wie {{jsxref("Object.getOwnPropertyDescriptor()")}}. Sie gibt einen Property-Descriptor der gegebenen Eigenschaft zurück, wenn sie auf dem Objekt existiert, andernfalls {{jsxref("undefined")}}.

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
  - : Das Zielobjekt, in dem nach der Eigenschaft gesucht werden soll.
- `propertyKey`
  - : Der Name der Eigenschaft, für die ein eigener Eigenschafts-Descriptor abgerufen werden soll.

### Rückgabewert

Ein Eigenschafts-Descriptor-Objekt, wenn die Eigenschaft als eigene Eigenschaft von `target` existiert; andernfalls {{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.getOwnPropertyDescriptor()` bietet die reflektierende Semantik zum Abrufen des Property-Descriptors eines Objekts. Der einzige Unterschied zu {{jsxref("Object.getOwnPropertyDescriptor()")}} besteht darin, wie nicht-Objekt-Ziele behandelt werden. `Reflect.getOwnPropertyDescriptor()` löst einen {{jsxref("TypeError")}} aus, wenn das Ziel kein Objekt ist, während `Object.getOwnPropertyDescriptor()` es zu einem Objekt erzwingt.

`Reflect.getOwnPropertyDescriptor()` ruft die `[[GetOwnProperty]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

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

Wenn das `target`-Argument dieser Methode kein Objekt ist (ein primitiver Wert), wird dies zu einem {{jsxref("TypeError")}} führen. Mit {{jsxref("Object.getOwnPropertyDescriptor")}} wird ein nicht-Objekt erstes Argument zunächst zu einem Objekt umgewandelt.

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
