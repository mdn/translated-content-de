---
title: Reflect.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Reflect.getOwnPropertyDescriptor()`** ist wie {{jsxref("Object.getOwnPropertyDescriptor()")}}. Sie gibt einen Eigenschaftsdescriptor der angegebenen Eigenschaft zurück, wenn diese auf dem Objekt existiert, ansonsten {{jsxref("undefined")}}.

{{EmbedInteractiveExample("pages/js/reflect-getownpropertydescriptor.html")}}

## Syntax

```js-nolint
Reflect.getOwnPropertyDescriptor(target, propertyKey)
```

### Parameter

- `target`
  - : Das Zielobjekt, in dem nach der Eigenschaft gesucht wird.
- `propertyKey`
  - : Der Name der Eigenschaft, für die ein eigener Eigenschaftsdescriptor abgerufen werden soll.

### Rückgabewert

Ein Eigenschaftsdescriptor-Objekt, wenn die Eigenschaft als eigene Eigenschaft von `target` existiert; andernfalls {{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.getOwnPropertyDescriptor()` bietet die reflexive Semantik des Abrufens des Eigenschaftsdescriptors eines Objekts. Der einzige Unterschied zu {{jsxref("Object.getOwnPropertyDescriptor()")}} besteht darin, wie mit Nicht-Objekt-Zielen umgegangen wird. `Reflect.getOwnPropertyDescriptor()` wirft einen {{jsxref("TypeError")}}, wenn `target` kein Objekt ist, während `Object.getOwnPropertyDescriptor()` es zu einem Objekt zwingt.

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

Wenn das `target`-Argument dieser Methode kein Objekt ist (ein Primärwert), dann führt dies zu einem {{jsxref("TypeError")}}. Bei {{jsxref("Object.getOwnPropertyDescriptor")}} wird ein nicht-objekthaftes erstes Argument zunächst zu einem Objekt umgewandelt.

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
