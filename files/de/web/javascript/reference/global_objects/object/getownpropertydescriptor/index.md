---
title: Object.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
l10n:
  sourceCommit: 892e4301623f10505dc19e56ba9fb7b505530722
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyDescriptor()`** gibt ein
Objekt zurück, das die Konfiguration einer bestimmten Eigenschaft eines gegebenen Objekts beschreibt (das heißt,
einer, die direkt im Objekt vorhanden ist und nicht in der Prototypen-Kette des Objekts). Das zurückgegebene
Objekt ist veränderbar, aber Änderungen daran haben keinen Einfluss auf die Konfiguration der ursprünglichen
Eigenschaft.

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

Ein Eigenschaftsbeschreiber der angegebenen Eigenschaft, wenn diese auf dem Objekt existiert,
ansonsten {{jsxref("undefined")}}.

## Beschreibung

Diese Methode ermöglicht die Untersuchung der genauen Beschreibung einer Eigenschaft. Eine
_Eigenschaft_ in JavaScript besteht entweder aus einem String-Wert-Namen oder einem
{{jsxref("Symbol")}} und einem Eigenschaftsbeschreiber. Weitere Informationen zu den Typen von Eigenschaftsbeschreibern
und ihren Attributen finden Sie in
{{jsxref("Object.defineProperty()")}}.

Ein _Eigenschaftsbeschreiber_ ist ein Datensatz mit einigen der folgenden Attribute:

- `value`
  - : Der Wert, der mit der Eigenschaft verknüpft ist (nur Datendeskriptoren).
- `writable`
  - : `true`, wenn und nur wenn der Wert, der mit der Eigenschaft verknüpft ist,
    geändert werden kann (nur Datendeskriptoren).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, falls
    kein Getter vorhanden ist (nur Zugriffsbeschreiber).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, falls
    kein Setter vorhanden ist (nur Zugriffsbeschreiber).
- `configurable`
  - : `true`, wenn und nur wenn der Typ dieses Eigenschaftsbeschreibers geändert
    werden kann und wenn die Eigenschaft aus dem entsprechenden Objekt gelöscht werden kann.
- `enumerable`
  - : `true`, wenn und nur wenn diese Eigenschaft bei der Aufzählung der
    Eigenschaften des entsprechenden Objekts erscheint.

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

### Umwandlung nicht-objektartiger Werte

In ES5 wird, wenn das erste Argument dieser Methode kein Objekt (ein primitiver Wert) ist, ein
{{jsxref("TypeError")}} ausgelöst. In ES2015 wird ein nicht-objektartiges erstes Argument zuerst in
ein Objekt umgewandelt.

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
