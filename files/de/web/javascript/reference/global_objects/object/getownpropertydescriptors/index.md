---
title: Object.getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyDescriptors()`** gibt alle eigenen Eigenschaftenbeschreibungen eines gegebenen Objekts zurück.

{{EmbedInteractiveExample("pages/js/object-getownpropertydescriptors.html")}}

## Syntax

```js-nolint
Object.getOwnPropertyDescriptors(obj)
```

### Parameter

- `obj`
  - : Das Objekt, für das alle eigenen Eigenschaftenbeschreibungen abgerufen werden sollen.

### Rückgabewert

Ein Objekt, das alle eigenen Eigenschaftenbeschreibungen eines Objekts enthält. Kann ein leeres Objekt sein, wenn keine Eigenschaften vorhanden sind.

## Beschreibung

Diese Methode ermöglicht die Untersuchung der genauen Beschreibung aller eigenen Eigenschaften eines Objekts. Eine _Eigenschaft_ in JavaScript besteht entweder aus einem string-wertigen Namen oder einem {{jsxref("Symbol")}} und einer Eigenschaftenbeschreibung. Weitere Informationen über Arten von Eigenschaftenbeschreibungen und deren Attribute finden Sie in {{jsxref("Object.defineProperty()")}}.

Eine _Eigenschaftenbeschreibung_ ist ein Datensatz mit einigen der folgenden Attribute:

- `value`
  - : Der Wert, der mit der Eigenschaft verknüpft ist (nur Datenbeschreibungen).
- `writable`
  - : `true` genau dann, wenn der mit der Eigenschaft verknüpfte Wert geändert werden darf (nur Datenbeschreibungen).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Getter gibt (nur Zugriffs-Beschreibungen).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Setter gibt (nur Zugriffs-Beschreibungen).
- `configurable`
  - : `true` genau dann, wenn der Typ dieser Eigenschaftenbeschreibung geändert werden darf und wenn die Eigenschaft vom entsprechenden Objekt gelöscht werden darf.
- `enumerable`
  - : `true` genau dann, wenn diese Eigenschaft bei der Aufzählung der Eigenschaften des entsprechenden Objekts angezeigt wird.

## Beispiele

### Erstellen einer flachen Kopie

Während die Methode {{jsxref("Object.assign()")}} nur aufzählbare und eigene Eigenschaften von einem Quellobjekt zu einem Zielobjekt kopiert, können Sie diese Methode und {{jsxref("Object.create()")}} für eine {{Glossary("Shallow_copy", "flache Kopie")}} zwischen zwei unbekannten Objekten verwenden:

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### Erstellen einer Unterklasse

Ein typischer Weg, eine Unterklasse zu erstellen, ist das Definieren der Unterklasse, das Setzen ihres Prototyps auf eine Instanz der Oberklasse und das anschließende Definieren von Eigenschaften auf dieser Instanz. Dies kann besonders für Getter und Setter umständlich werden. Stattdessen können Sie diesen Code verwenden, um den Prototyp festzulegen:

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
