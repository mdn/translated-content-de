---
title: Object.getOwnPropertyDescriptors()
short-title: getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Object.getOwnPropertyDescriptors()`** gibt alle eigenen Eigenschaftsdeskriptoren eines angegebenen Objekts zurück.

{{InteractiveExample("JavaScript Demo: Object.getOwnPropertyDescriptors()")}}

```js interactive-example
const object = {
  foo: 42,
};

const descriptors = Object.getOwnPropertyDescriptors(object);

console.log(descriptors.foo.writable);
// Expected output: true

console.log(descriptors.foo.value);
// Expected output: 42
```

## Syntax

```js-nolint
Object.getOwnPropertyDescriptors(obj)
```

### Parameter

- `obj`
  - : Das Objekt, dessen eigene Eigenschaftsdeskriptoren abgerufen werden sollen.

### Rückgabewert

Ein Objekt, das alle eigenen Eigenschaftsdeskriptoren des angegebenen Objekts enthält. Wenn keine Eigenschaften vorhanden sind, kann es leer sein.

## Beschreibung

Mit dieser Methode lässt sich die genaue Beschreibung aller eigenen Eigenschaften eines Objekts untersuchen. Eine _Eigenschaft_ in JavaScript besteht aus einem Namen als Zeichenfolge oder einem {{jsxref("Symbol")}} sowie einem Eigenschaftsdeskriptor. Weitere Informationen über die Typen von Eigenschaftsdeskriptoren und ihre Attribute finden Sie unter {{jsxref("Object.defineProperty()")}}.

Ein _Eigenschaftsdeskriptor_ ist ein Datensatz mit einigen der folgenden Attribute:

- `value`
  - : Der mit der Eigenschaft verknüpfte Wert (nur bei Datendeskriptoren).
- `writable`
  - : `true` genau dann, wenn der mit der Eigenschaft verknüpfte Wert geändert werden kann (nur bei Datendeskriptoren).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Getter vorhanden ist (nur bei Zugriffdeskriptoren).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Setter vorhanden ist (nur bei Zugriffdeskriptoren).
- `configurable`
  - : `true` genau dann, wenn der Typ dieses Eigenschaftsdeskriptors geändert und die Eigenschaft aus dem zugehörigen Objekt gelöscht werden kann.
- `enumerable`
  - : `true` genau dann, wenn diese Eigenschaft bei der Aufzählung der Eigenschaften des zugehörigen Objekts erscheint.

## Beispiele

### Eine flache Kopie erstellen

Während die Methode {{jsxref("Object.assign()")}} nur aufzählbare eigene Eigenschaften von einem Quellobjekt in ein Zielobjekt kopiert, können Sie mit dieser Methode und {{jsxref("Object.create()")}} eine {{Glossary("Shallow_copy", "flache Kopie")}} zwischen zwei beliebigen Objekten erstellen:

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### Eine Unterklasse erstellen

Eine übliche Vorgehensweise zum Erstellen einer Unterklasse besteht darin, die Unterklasse zu definieren, ihren Prototyp auf eine Instanz der Oberklasse zu setzen und anschließend Eigenschaften auf dieser Instanz zu definieren. Das kann insbesondere bei Gettern und Settern umständlich sein. Stattdessen können Sie den Prototyp mit folgendem Code festlegen:

```js
function superclass() {}
superclass.prototype = {
  // Define the superclass constructor, methods, and properties here
};
function subclass() {}
subclass.prototype = Object.create(superclass.prototype, {
  // Define the subclass constructor, methods, and properties here
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Object.getOwnPropertyDescriptors` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [Polyfill für `Object.getOwnPropertyDescriptors` von es-shims](https://www.npmjs.com/package/object.getownpropertydescriptors)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.defineProperty()")}}
