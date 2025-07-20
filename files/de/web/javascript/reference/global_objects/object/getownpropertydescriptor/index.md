---
title: Object.getOwnPropertyDescriptor()
short-title: getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die statische Methode **`Object.getOwnPropertyDescriptor()`** gibt ein
Objekt zurück, das die Konfiguration einer bestimmten Eigenschaft eines gegebenen Objekts beschreibt (das heißt, direkt auf einem Objekt vorhanden und nicht in der Prototyp-Kette des Objekts). Das zurückgegebene Objekt ist veränderlich, jedoch hat das Verändern keine Auswirkungen auf die ursprüngliche Konfiguration der Eigenschaft.

{{InteractiveExample("JavaScript Demo: Object.getOwnPropertyDescriptor()")}}

```js interactive-example
const object = {
  foo: 42,
};

const descriptor = Object.getOwnPropertyDescriptor(object, "foo");

console.log(descriptor.configurable);
// Expected output: true

console.log(descriptor.value);
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

Ein Eigenschafts-Deskriptor der gegebenen Eigenschaft, falls diese auf dem Objekt existiert, sonst {{jsxref("undefined")}}.

## Beschreibung

Diese Methode ermöglicht die Untersuchung der genauen Beschreibung einer Eigenschaft. Eine _Eigenschaft_ in JavaScript besteht entweder aus einem String-bewerteten Namen oder einem {{jsxref("Symbol")}} und einem Eigenschafts-Deskriptor. Weitere Informationen über Eigenschafts-Deskriptor-Typen und deren Attribute finden Sie in {{jsxref("Object.defineProperty()")}}.

Ein _Eigenschafts-Deskriptor_ ist eine Aufzeichnung mit einigen der folgenden Attribute:

- `value`
  - : Der Wert, der mit der Eigenschaft verbunden ist (nur Daten-Deskriptoren).
- `writable`
  - : `true`, nur wenn der mit der Eigenschaft assoziierte Wert verändert werden kann (nur Daten-Deskriptoren).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, falls kein Getter vorhanden ist (nur Accessor-Deskriptoren).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, falls kein Setter vorhanden ist (nur Accessor-Deskriptoren).
- `configurable`
  - : `true`, nur wenn der Typ dieses Eigenschafts-Deskriptors geändert werden kann und die Eigenschaft aus dem entsprechenden Objekt gelöscht werden kann.
- `enumerable`
  - : `true`, nur wenn diese Eigenschaft bei der Aufzählung der Eigenschaften des entsprechenden Objekts angezeigt wird.

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

In ES5, wenn das erste Argument dieser Methode kein Objekt (ein primitiver Typ) ist, wird ein {{jsxref("TypeError")}} verursacht. In ES2015 wird ein nicht-Objekt erstes Argument zuerst in ein Objekt umgewandelt.

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
