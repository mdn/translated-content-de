---
title: Object.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyDescriptor()`** gibt ein Objekt zurück, das die Konfiguration einer bestimmten Eigenschaft eines gegebenen Objekts beschreibt (d.h. einer Eigenschaft, die direkt auf dem Objekt und nicht in dessen Prototyp-Kette vorhanden ist). Das zurückgegebene Objekt ist veränderbar, aber Änderungen daran haben keinen Einfluss auf die ursprüngliche Konfiguration der Eigenschaft.

{{InteractiveExample("JavaScript Demo: Object.getOwnPropertyDescriptor()")}}

```js interactive-example
const object1 = {
  property1: 42,
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, "property1");

console.log(descriptor1.configurable);
// Expected output: true

console.log(descriptor1.value);
// Expected output: 42
```

## Syntax

```js-nolint
Object.getOwnPropertyDescriptor(obj, prop)
```

### Parameter

- `obj`
  - : Das Objekt, in dem nach der Eigenschaft gesucht werden soll.
- `prop`
  - : Der Name oder {{jsxref("Symbol")}} der Eigenschaft, deren Beschreibung abgerufen werden soll.

### Rückgabewert

Ein Eigenschafts-Descriptor der angegebenen Eigenschaft, falls diese auf dem Objekt existiert, andernfalls {{jsxref("undefined")}}.

## Beschreibung

Diese Methode ermöglicht die genaue Untersuchung der Beschreibung einer Eigenschaft. Eine _Eigenschaft_ in JavaScript besteht entweder aus einem String-Wert als Namen oder einem {{jsxref("Symbol")}} und einem Eigenschafts-Descriptor. Weitere Informationen zu den Typen von Eigenschafts-Deskriptoren und ihren Attributen finden Sie in {{jsxref("Object.defineProperty()")}}.

Ein _Eigenschafts-Descriptor_ ist ein Datensatz mit einigen der folgenden Attribute:

- `value`
  - : Der mit der Eigenschaft verknüpfte Wert (nur Daten-Deskriptoren).
- `writable`
  - : `true`, wenn und nur wenn der mit der Eigenschaft verknüpfte Wert geändert werden kann (nur Daten-Deskriptoren).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Getter vorhanden ist (nur Zugriff-Deskriptoren).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Setter vorhanden ist (nur Zugriff-Deskriptoren).
- `configurable`
  - : `true`, wenn und nur wenn der Typ dieses Eigenschafts-Descriptors geändert werden kann und die Eigenschaft aus dem entsprechenden Objekt gelöscht werden kann.
- `enumerable`
  - : `true`, wenn und nur wenn diese Eigenschaft während der Enumeration der Eigenschaften des entsprechenden Objekts angezeigt wird.

## Beispiele

### Verwendung von Object.getOwnPropertyDescriptor()

```js
let o, d;

o = {
  get foo() {
    return 17;
  },
};
d = Object.getOwnPropertyDescriptor(o, "foo");
console.log(d);
// {
//   configurable: true,
//   enumerable: true,
//   get: [Function: get foo],
//   set: undefined
// }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
console.log(d);
// {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }

o = { [Symbol.for("baz")]: 73 };
d = Object.getOwnPropertyDescriptor(o, Symbol.for("baz"));
console.log(d);
// {
//   configurable: true,
//   enumerable: true,
//   value: 73,
//   writable: true
// }

o = {};
Object.defineProperty(o, "qux", {
  value: 8675309,
  writable: false,
  enumerable: false,
});
d = Object.getOwnPropertyDescriptor(o, "qux");
console.log(d);
// {
//   value: 8675309,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
```

### Nicht-Objekt-Typen

In ES5 führt ein erster Parameter, der kein Objekt ist (z. B. ein primitiver Wert), zu einem {{jsxref("TypeError")}}. In ES2015 wird ein erster Parameter, der kein Objekt ist, zunächst in ein Objekt umgewandelt.

```js
Object.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" is not an object  // ES5 code

Object.getOwnPropertyDescriptor("foo", 0);
// Object returned by ES2015 code: {
//   configurable: false,
//   enumerable: true,
//   value: "f",
//   writable: false
// }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
