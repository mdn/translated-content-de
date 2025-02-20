---
title: Object.getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyDescriptors()`** gibt alle eigenen Property-Deskriptoren eines gegebenen Objekts zurück.

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
  - : Das Objekt, für das alle eigenen Property-Deskriptoren abgerufen werden sollen.

### Rückgabewert

Ein Objekt, das alle eigenen Property-Deskriptoren des Objekts enthält. Es kann ein leeres Objekt sein, wenn keine Eigenschaften vorhanden sind.

## Beschreibung

Diese Methode ermöglicht die genaue Untersuchung der Beschreibung aller eigenen Eigenschaften eines Objekts. Eine _Eigenschaft_ in JavaScript besteht entweder aus einem string-basierten Namen oder einem {{jsxref("Symbol")}} und einem Property-Deskriptor. Weitere Informationen über die Typen und Attribute von Property-Deskriptoren finden Sie in {{jsxref("Object.defineProperty()")}}.

Ein _Property-Deskriptor_ ist ein Datensatz mit einigen der folgenden Attribute:

- `value`
  - : Der mit der Eigenschaft verknüpfte Wert (nur Daten-Deskriptoren).
- `writable`
  - : `true`, wenn und nur wenn der Wert, der mit der Eigenschaft verknüpft ist, geändert werden kann (nur Daten-Deskriptoren).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Getter vorhanden ist (nur Accessor-Deskriptoren).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Setter vorhanden ist (nur Accessor-Deskriptoren).
- `configurable`
  - : `true`, wenn und nur wenn der Typ dieses Property-Deskriptors geändert werden kann und die Eigenschaft aus dem entsprechenden Objekt gelöscht werden kann.
- `enumerable`
  - : `true`, wenn und nur wenn diese Eigenschaft bei der Aufzählung der Eigenschaften des entsprechenden Objekts angezeigt wird.

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

Ein typischer Weg, eine Unterklasse zu erstellen, besteht darin, die Unterklasse zu definieren, ihren Prototyp auf eine Instanz der Oberklasse zu setzen und dann Eigenschaften auf dieser Instanz zu definieren. Dies kann insbesondere bei Gettern und Settern umständlich werden. Stattdessen können Sie diesen Code verwenden, um den Prototyp festzulegen:

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
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.defineProperty()")}}
