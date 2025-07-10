---
title: Object.getOwnPropertyDescriptors()
short-title: getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

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

Ein Objekt, das alle eigenen Property Deskriptoren eines Objekts enthält. Kann ein leeres Objekt sein, wenn keine Eigenschaften vorhanden sind.

## Beschreibung

Diese Methode erlaubt die genaue Untersuchung der Beschreibung aller eigenen Eigenschaften eines Objekts. Eine _Property_ in JavaScript besteht entweder aus einem stringwertigen Namen oder einem {{jsxref("Symbol")}} und einem Property Deskriptor. Weitere Informationen über Property Deskriptor-Typen und deren Attribute finden Sie in {{jsxref("Object.defineProperty()")}}.

Ein _Property Deskriptor_ ist ein Datensatz mit einigen der folgenden Attribute:

- `value`
  - : Der mit der Eigenschaft verknüpfte Wert (nur Data Deskriptoren).
- `writable`
  - : `true`, wenn und nur wenn der mit der Eigenschaft verknüpfte Wert geändert werden kann (nur Data Deskriptoren).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}} wenn kein Getter vorhanden ist (nur Accessor Deskriptoren).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}} wenn kein Setter vorhanden ist (nur Accessor Deskriptoren).
- `configurable`
  - : `true`, wenn und nur wenn der Typ dieses Property Deskriptors geändert werden kann und wenn die Eigenschaft aus dem entsprechenden Objekt gelöscht werden darf.
- `enumerable`
  - : `true`, wenn und nur wenn diese Eigenschaft während der Auflistung der Eigenschaften des entsprechenden Objekts angezeigt wird.

## Beispiele

### Erstellen einer flachen Kopie

Während die Methode {{jsxref("Object.assign()")}} nur aufzählbare und eigene Eigenschaften von einem Quellobjekt auf ein Zielobjekt kopiert, können Sie mit dieser Methode und {{jsxref("Object.create()")}} eine {{Glossary("Shallow_copy", "flache Kopie")}} zwischen zwei unbekannten Objekten erstellen:

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### Erstellen einer Unterklasse

Eine typische Methode zur Erstellung einer Unterklasse ist es, die Unterklasse zu definieren, ihr Prototyp auf eine Instanz der Oberklasse zu setzen und dann Eigenschaften auf dieser Instanz zu definieren. Dies kann besonders für Getter und Setter umständlich werden. Stattdessen können Sie diesen Code verwenden, um das Prototyp-Objekt zu setzen:

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
- [es-shims polyfill von `Object.getOwnPropertyDescriptors`](https://www.npmjs.com/package/object.getownpropertydescriptors)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.defineProperty()")}}
