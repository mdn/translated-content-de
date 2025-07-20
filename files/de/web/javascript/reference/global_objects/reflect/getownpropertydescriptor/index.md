---
title: Reflect.getOwnPropertyDescriptor()
short-title: getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`Reflect.getOwnPropertyDescriptor()`** statische Methode ist wie {{jsxref("Object.getOwnPropertyDescriptor()")}}. Sie gibt einen Eigenschaftsbezeichner der angegebenen Eigenschaft zurück, wenn sie im Objekt existiert, andernfalls {{jsxref("undefined")}}.

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
  - : Der Name der Eigenschaft, für die ein eigener Eigenschaftsbezeichner erhalten werden soll.

### Rückgabewert

Ein Eigenschaftsbezeichnerobjekt, wenn die Eigenschaft als eigene Eigenschaft von `target` existiert; andernfalls {{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.getOwnPropertyDescriptor()` bietet die reflektierende Semantik zum Abrufen des Eigenschaftsbezeichners eines Objekts. Der einzige Unterschied zu {{jsxref("Object.getOwnPropertyDescriptor()")}} liegt in der Handhabung von Nicht-Objekt-Zielen. `Reflect.getOwnPropertyDescriptor()` löst einen {{jsxref("TypeError")}} aus, wenn das Ziel kein Objekt ist, während `Object.getOwnPropertyDescriptor()` es zu einem Objekt zwingt.

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

Wenn das `target`-Argument dieser Methode kein Objekt ist (ein Primitivwert), wird ein {{jsxref("TypeError")}} ausgelöst. Bei {{jsxref("Object.getOwnPropertyDescriptor")}} wird ein erstes Argument, das kein Objekt ist, zunächst in ein Objekt umgewandelt.

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
