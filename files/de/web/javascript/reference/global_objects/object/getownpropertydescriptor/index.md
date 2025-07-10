---
title: Object.getOwnPropertyDescriptor()
short-title: getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Object.getOwnPropertyDescriptor()`** gibt ein Objekt zurück, das die Konfiguration einer bestimmten Eigenschaft auf einem gegebenen Objekt beschreibt (also einer Eigenschaft, die direkt auf einem Objekt vorhanden ist und nicht in der Prototypenkette des Objekts). Das zurückgegebene Objekt ist veränderbar, aber dessen Veränderung hat keinen Einfluss auf die Konfiguration der Originaleigenschaft.

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
  - : Das Objekt, in dem nach der Eigenschaft gesucht wird.
- `prop`
  - : Der Name oder {{jsxref("Symbol")}} der Eigenschaft, deren Beschreibung abgerufen werden soll.

### Rückgabewert

Ein Property Descriptor der angegebenen Eigenschaft, wenn sie auf dem Objekt existiert, andernfalls {{jsxref("undefined")}}.

## Beschreibung

Diese Methode ermöglicht die genaue Untersuchung der Beschreibung einer Eigenschaft. Eine _Eigenschaft_ in JavaScript besteht aus entweder einem string-bewerteten Namen oder einem {{jsxref("Symbol")}} und einem Property Descriptor. Weitere Informationen zu Property Descriptor-Typen und ihren Attributen finden Sie in {{jsxref("Object.defineProperty()")}}.

Ein _Property Descriptor_ ist ein Datensatz mit einigen der folgenden Attribute:

- `value`
  - : Der mit der Eigenschaft verknüpfte Wert (nur für Datendeskriptoren).
- `writable`
  - : `true` genau dann, wenn der mit der Eigenschaft verknüpfte Wert geändert werden darf (nur für Datendeskriptoren).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Getter gibt (nur für Accessor-Deskriptoren).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Setter gibt (nur für Accessor-Deskriptoren).
- `configurable`
  - : `true` genau dann, wenn der Typ dieses Property Descriptors geändert werden darf und die Eigenschaft aus dem entsprechenden Objekt gelöscht werden darf.
- `enumerable`
  - : `true` genau dann, wenn diese Eigenschaft bei der Enumeration der Eigenschaften auf dem entsprechenden Objekt angezeigt wird.

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

### Nicht-Objekt-Zwangsumwandlung

In ES5 führt das Übergeben eines nicht-Objekts (einer primitiven Datentyp) als erstes Argument dieser Methode zu einem {{jsxref("TypeError")}}. In ES2015 wird ein nicht-Objekt als erstes Argument zuerst in ein Objekt umgewandelt.

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
