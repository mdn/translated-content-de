---
title: Object.getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyDescriptors()`** gibt alle eigenen Property Descriptors eines gegebenen Objekts zurück.

{{EmbedInteractiveExample("pages/js/object-getownpropertydescriptors.html")}}

## Syntax

```js-nolint
Object.getOwnPropertyDescriptors(obj)
```

### Parameter

- `obj`
  - : Das Objekt, für das alle eigenen Property Descriptors abgerufen werden sollen.

### Rückgabewert

Ein Objekt, das alle eigenen Property Descriptors eines Objekts enthält. Es könnte ein leeres
Objekt sein, wenn keine Eigenschaften vorhanden sind.

## Beschreibung

Diese Methode erlaubt die Untersuchung der genauen Beschreibung aller eigenen Eigenschaften eines
Objekts. Eine _Eigenschaft_ in JavaScript besteht entweder aus einem Zeichenkettenwert als Name oder einem
{{jsxref("Symbol")}} und einem Property Descriptor. Weitere Informationen über Typen von Property Descriptors und deren Attribute finden Sie in
{{jsxref("Object.defineProperty()")}}.

Ein _Property Descriptor_ ist ein Datensatz mit einigen der folgenden Attribute:

- `value`
  - : Der der Eigenschaft zugeordnete Wert (nur für Datendeskriptoren).
- `writable`
  - : `true`, wenn und nur wenn der der Eigenschaft zugeordnete Wert
    geändert werden kann (nur für Datendeskriptoren).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn
    es keinen Getter gibt (nur für Accessor-Deskriptoren).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn
    es keinen Setter gibt (nur für Accessor-Deskriptoren).
- `configurable`
  - : `true`, wenn und nur wenn der Typ dieses Property Descriptors geändert
    werden kann und die Eigenschaft aus dem entsprechenden Objekt gelöscht werden kann.
- `enumerable`
  - : `true`, wenn und nur wenn diese Eigenschaft bei der Aufzählung der
    Eigenschaften des entsprechenden Objekts angezeigt wird.

## Beispiele

### Eine flache Kopie erstellen

Während die Methode {{jsxref("Object.assign()")}} nur aufzählbare und eigene
Eigenschaften von einem Quellobjekt in ein Zielobjekt kopiert, können Sie diese Methode und
{{jsxref("Object.create()")}} für eine [flache Kopie](/de/docs/Glossary/Shallow_copy) zwischen zwei unbekannten Objekten verwenden:

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### Eine Unterklasse erstellen

Eine typische Art, eine Unterklasse zu erstellen, besteht darin, die Unterklasse zu definieren, ihr Prototyp auf eine
Instanz der Oberklasse zu setzen und dann Eigenschaften auf dieser Instanz zu definieren. Dies kann
umständlich werden, insbesondere für Getter und Setter. Stattdessen können Sie diesen Code verwenden, um das
Prototyp zu setzen:

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
