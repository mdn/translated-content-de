---
title: Object.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
l10n:
  sourceCommit: 892e4301623f10505dc19e56ba9fb7b505530722
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyDescriptor()`** gibt ein Objekt zurück, das die Konfiguration einer bestimmten Eigenschaft eines angegebenen Objekts beschreibt (d. h. eine, die direkt in einem Objekt und nicht in der Prototypenkette des Objekts vorhanden ist). Das zurückgegebene Objekt ist veränderbar, aber durch das Verändern hat es keinen Einfluss auf die ursprüngliche Konfiguration der Eigenschaft.

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

Ein Eigenschaftsdeskriptor der angegebenen Eigenschaft, falls diese im Objekt existiert, andernfalls {{jsxref("undefined")}}.

## Beschreibung

Diese Methode ermöglicht die Untersuchung der genauen Beschreibung einer Eigenschaft. Eine _Eigenschaft_ in JavaScript besteht aus entweder einem string-bewerteten Namen oder einem {{jsxref("Symbol")}} und einem Eigenschaftsdeskriptor. Weitere Informationen über Typen von Eigenschaftsdeskriptoren und deren Attribute finden Sie in {{jsxref("Object.defineProperty()")}}.

Ein _Eigenschaftsdeskriptor_ ist ein Datensatz mit einigen der folgenden Attribute:

- `value`
  - : Der Wert, der mit der Eigenschaft verknüpft ist (nur Daten-Deskriptoren).
- `writable`
  - : `true` wenn und nur wenn der mit der Eigenschaft verknüpfte Wert geändert werden kann (nur Daten-Deskriptoren).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, falls es keinen Getter gibt (nur Zugriffs-Deskriptoren).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, falls es keinen Setter gibt (nur Zugriffs-Deskriptoren).
- `configurable`
  - : `true` wenn und nur wenn der Typ dieses Eigenschaftsdeskriptors geändert werden kann und die Eigenschaft vom entsprechenden Objekt gelöscht werden kann.
- `enumerable`
  - : `true` wenn und nur wenn diese Eigenschaft bei der Aufzählung der Eigenschaften des entsprechenden Objekts erscheint.

## Beispiele

### Verwenden von Object.getOwnPropertyDescriptor()

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

In ES5 wird, wenn das erste Argument dieser Methode kein Objekt ist (ein primitiver Wert), ein {{jsxref("TypeError")}} erzeugt. In ES2015 wird ein nicht-Objekt-erstes-Argument zunächst in ein Objekt umgewandelt.

```js
Object.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" ist kein Objekt  // ES5-Code

Object.getOwnPropertyDescriptor("foo", 0);
// Objekt, das vom ES2015-Code zurückgegeben wird: {
//   configurable: false,
//   enumerable: true,
//   value: "f",
//   writable: false
// }
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
