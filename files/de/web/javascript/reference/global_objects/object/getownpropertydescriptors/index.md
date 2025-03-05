---
title: Object.getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyDescriptors()`** gibt alle eigenen Property Deskriptoren eines gegebenen Objekts zurück.

{{InteractiveExample("JavaScript Demo: Object.getOwnPropertyDescriptors()")}}

```js interactive-example
const object1 = {
  property1: 42,
};

const descriptors1 = Object.getOwnPropertyDescriptors(object1);

console.log(descriptors1.property1.writable);
// Expected output: true

console.log(descriptors1.property1.value);
// Expected output: 42
```

## Syntax

```js-nolint
Object.getOwnPropertyDescriptors(obj)
```

### Parameter

- `obj`
  - : Das Objekt, für das alle eigenen Property Deskriptoren abgerufen werden sollen.

### Rückgabewert

Ein Objekt, das alle eigenen Property Deskriptoren eines Objekts enthält. Könnte ein leeres Objekt sein, wenn es keine Eigenschaften gibt.

## Beschreibung

Diese Methode ermöglicht die Untersuchung der genauen Beschreibung aller eigenen Eigenschaften eines Objekts. Eine _Eigenschaft_ in JavaScript besteht entweder aus einem Zeichenfolgenwertnamen oder einem {{jsxref("Symbol")}} und einem Property Deskriptor. Weitere Informationen über Property Deskriptor Arten und deren Attribute finden Sie in {{jsxref("Object.defineProperty()")}}.

Ein _Property Deskriptor_ ist ein Datensatz mit einigen der folgenden Attribute:

- `value`
  - : Der mit der Eigenschaft verbundene Wert (nur Datendeskriptoren).
- `writable`
  - : `true` genau dann, wenn der mit der Eigenschaft verbundene Wert geändert werden darf (nur Datendeskriptoren).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Getter gibt (nur Zugriffsbeschreibungen).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Setter gibt (nur Zugriffsbeschreibungen).
- `configurable`
  - : `true` genau dann, wenn der Typ dieses Property Deskriptors geändert werden darf und die Eigenschaft aus dem entsprechenden Objekt gelöscht werden kann.
- `enumerable`
  - : `true` genau dann, wenn diese Eigenschaft während der Aufzählung der Eigenschaften auf dem entsprechenden Objekt erscheint.

## Beispiele

### Erstellen einer flachen Kopie

Während die Methode {{jsxref("Object.assign()")}} nur aufzählbare und eigene Eigenschaften von einem Quellobjekt auf ein Zielobjekt kopiert, können Sie diese Methode und {{jsxref("Object.create()")}} für eine {{Glossary("Shallow_copy", "flache Kopie")}} zwischen zwei unbekannten Objekten verwenden:

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### Erstellen einer Unterklasse

Eine übliche Methode zur Erstellung einer Unterklasse besteht darin, die Unterklasse zu definieren, ihr Prototyp auf eine Instanz der Oberklasse zu setzen und dann Eigenschaften auf dieser Instanz zu definieren. Dies kann besonders bei Gettern und Settern umständlich werden. Stattdessen können Sie diesen Code verwenden, um den Prototypen festzulegen:

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

- [Polyfill von `Object.getOwnPropertyDescriptors` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [es-shims Polyfill von `Object.getOwnPropertyDescriptors`](https://www.npmjs.com/package/object.getownpropertydescriptors)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.defineProperty()")}}
