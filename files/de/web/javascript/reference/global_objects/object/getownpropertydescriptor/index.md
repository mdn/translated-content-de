---
title: Object.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
l10n:
  sourceCommit: 892e4301623f10505dc19e56ba9fb7b505530722
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyDescriptor()`** gibt ein
Objekt zurück, das die Konfiguration einer bestimmten Eigenschaft auf einem gegebenen Objekt beschreibt (d.h. eine, die direkt auf einem Objekt vorhanden ist und nicht in der Prototypenkette des Objekts). Das zurückgegebene Objekt ist veränderbar, aber das Verändern hat keinen Einfluss auf die Konfiguration der ursprünglichen Eigenschaft.

{{EmbedInteractiveExample("pages/js/object-getownpropertydescriptor.html")}}

## Syntax

```js-nolint
Object.getOwnPropertyDescriptor(obj, prop)
```

### Parameter

- `obj`
  - : Das Objekt, in dem nach der Eigenschaft gesucht werden soll.
- `prop`
  - : Der Name oder das {{jsxref("Symbol")}} der Eigenschaft, deren Beschreibung abgerufen werden soll.

### Rückgabewert

Ein Eigenschaftsdescriptor der gegebenen Eigenschaft, falls sie auf dem Objekt existiert,
ansonsten {{jsxref("undefined")}}.

## Beschreibung

Diese Methode ermöglicht die Untersuchung der genauen Beschreibung einer Eigenschaft. Eine
_Eigenschaft_ in JavaScript besteht entweder aus einem String-Wert-Namen oder einem
{{jsxref("Symbol")}} und einem Eigenschaftsdescriptor. Weitere Informationen über
Eigenschaftsdescriptor-Typen und deren Attribute finden Sie in
{{jsxref("Object.defineProperty()")}}.

Ein _Eigenschaftsdescriptor_ ist ein Datensatz mit einigen der folgenden Attribute:

- `value`
  - : Der mit der Eigenschaft verbundene Wert (nur Daten-Deskriptoren).
- `writable`
  - : `true`, wenn und nur wenn der mit der Eigenschaft verbundene Wert
    geändert werden kann (nur Daten-Deskriptoren).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn
    es keinen Getter gibt (nur Zugriffs-Deskriptoren).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn
    es keinen Setter gibt (nur Zugriffs-Deskriptoren).
- `configurable`
  - : `true`, wenn und nur wenn die Art dieses Eigenschaftsdescriptors geändert
    und die Eigenschaft aus dem entsprechenden Objekt gelöscht werden kann.
- `enumerable`
  - : `true`, wenn und nur wenn diese Eigenschaft während der Aufzählung der
    Eigenschaften auf dem entsprechenden Objekt erscheint.

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

### Nicht-Objekt-Typumwandlung

In ES5 führt ein nicht-Objekt-Argument (ein primitiver Wert) als erstes Argument dieser Methode zu einem {{jsxref("TypeError")}}. In ES2015 wird ein nicht-Objekt-Argument zuerst in ein Objekt umgewandelt.

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
