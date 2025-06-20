---
title: Object.getOwnPropertyDescriptor()
short-title: getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyDescriptor()`** gibt ein Objekt zurück, das die Konfiguration einer bestimmten Eigenschaft auf einem gegebenen Objekt beschreibt (das heißt, eine direkt auf einem Objekt vorhandene und nicht in der Prototypen-Kette des Objekts). Das zurückgegebene Objekt ist veränderbar, aber das Ändern davon hat keinen Einfluss auf die ursprüngliche Eigenschaftskonfiguration.

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

Ein Eigenschaftsdeskriptor der angegebenen Eigenschaft, wenn sie auf dem Objekt existiert, andernfalls {{jsxref("undefined")}}.

## Beschreibung

Diese Methode erlaubt die Untersuchung der genauen Beschreibung einer Eigenschaft. Eine _Eigenschaft_ in JavaScript besteht entweder aus einem string-wertigen Namen oder einem {{jsxref("Symbol")}} und einem Eigenschaftsdeskriptor. Weitere Informationen über Eigenschaftsdeskriptortypen und deren Attribute finden Sie in {{jsxref("Object.defineProperty()")}}.

Ein _Eigenschaftsdeskriptor_ ist ein Eintrag mit einigen der folgenden Attribute:

- `value`
  - : Der Wert, der der Eigenschaft zugeordnet ist (nur Daten-Deskriptoren).
- `writable`
  - : `true` genau dann, wenn der der Eigenschaft zugeordnete Wert geändert werden kann (nur Daten-Deskriptoren).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Getter gibt (nur Zugriffs-Deskriptoren).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Setter gibt (nur Zugriffs-Deskriptoren).
- `configurable`
  - : `true` genau dann, wenn der Typ dieses Eigenschaftsdeskriptors geändert werden kann und die Eigenschaft aus dem entsprechenden Objekt gelöscht werden darf.
- `enumerable`
  - : `true` genau dann, wenn diese Eigenschaft während der Aufzählung der Eigenschaften des entsprechenden Objekts angezeigt wird.

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

### Nicht-Objekt-Konvertierung

In ES5, wenn das erste Argument dieser Methode kein Objekt ist (ein primitiver Wert), wird es einen {{jsxref("TypeError")}} verursachen. In ES2015 wird ein nicht-Objekt als erstes Argument zuerst in ein Objekt umgewandelt.

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
