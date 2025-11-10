---
title: Object.getOwnPropertyDescriptors()
short-title: getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`Object.getOwnPropertyDescriptors()`** statische Methode gibt alle
eigenen Property-Deskriptoren eines gegebenen Objekts zurück.

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
  - : Das Objekt, für das alle eigenen Property-Deskriptoren abgerufen werden sollen.

### Rückgabewert

Ein Objekt, das alle eigenen Property-Deskriptoren eines Objekts enthält. Kann ein leeres
Objekt sein, wenn keine Eigenschaften vorhanden sind.

## Beschreibung

Diese Methode ermöglicht die Untersuchung der genauen Beschreibung aller eigenen Eigenschaften eines
Objekts. Eine _Eigenschaft_ in JavaScript besteht entweder aus einem string-wertigen Namen oder einem
{{jsxref("Symbol")}} und einem Property-Deskriptor. Weitere Informationen über Typen und Attribute von Property-Deskriptoren finden Sie in
{{jsxref("Object.defineProperty()")}}.

Ein _Property-Deskriptor_ ist ein Datensatz mit einigen der folgenden Attribute:

- `value`
  - : Der Wert, der mit der Eigenschaft verknüpft ist (nur Daten-Deskriptoren).
- `writable`
  - : `true` wenn und nur wenn der Wert, der mit der Eigenschaft verknüpft ist, geändert werden kann (nur Daten-Deskriptoren).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Getter vorhanden ist (nur Accessor-Deskriptoren).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Setter vorhanden ist (nur Accessor-Deskriptoren).
- `configurable`
  - : `true` wenn und nur wenn die Art dieses Property-Deskriptors geändert werden kann
    und wenn die Eigenschaft aus dem entsprechenden Objekt gelöscht werden darf.
- `enumerable`
  - : `true` wenn und nur wenn diese Eigenschaft während der Aufzählung der
    Eigenschaften auf dem entsprechenden Objekt angezeigt wird.

## Beispiele

### Erstellen einer flachen Kopie

Während die {{jsxref("Object.assign()")}} Methode nur aufzählbare und eigene
Eigenschaften von einem Quellobjekt auf ein Zielobjekt kopiert, können Sie diese Methode und
{{jsxref("Object.create()")}} für eine {{Glossary("Shallow_copy", "flache Kopie")}} zwischen zwei unbekannten Objekten verwenden:

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### Erstellen einer Subklasse

Eine typische Möglichkeit, eine Subklasse zu erstellen, besteht darin, die Subklasse zu definieren, ihren Prototyp zu einer
Instanz der Superklasse zu machen und dann Eigenschaften auf dieser Instanz zu definieren. Dies kann besonders für Getter und Setter umständlich werden. Stattdessen können Sie diesen Code verwenden, um den Prototyp festzulegen:

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
