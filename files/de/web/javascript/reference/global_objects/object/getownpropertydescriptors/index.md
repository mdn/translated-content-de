---
title: Objekt.getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die **statische Methode `Object.getOwnPropertyDescriptors()`** gibt alle eigenen
Eigenschaftsbeschreibungen eines gegebenen Objekts zurück.

{{EmbedInteractiveExample("pages/js/object-getownpropertydescriptors.html")}}

## Syntax

```js-nolint
Object.getOwnPropertyDescriptors(obj)
```

### Parameter

- `obj`
  - : Das Objekt, für das alle eigenen Eigenschaftsbeschreibungen erhalten werden sollen.

### Rückgabewert

Ein Objekt, das alle eigenen Eigenschaftsbeschreibungen eines Objekts enthält. Kann ein leeres
Objekt sein, wenn keine Eigenschaften vorhanden sind.

## Beschreibung

Diese Methode erlaubt die genaue Untersuchung der Beschreibung aller eigenen Eigenschaften eines
Objekts. Eine _Eigenschaft_ in JavaScript besteht entweder aus einem string-bewerteten Namen oder einem
{{jsxref("Symbol")}} und einer Eigenschaftsbeschreibung. Weitere Informationen über Typen und Attribute von
Eigenschaftsbeschreibungen finden Sie in
{{jsxref("Object.defineProperty()")}}.

Ein _Eigenschaftsbeschreibung_ ist ein Datensatz mit einigen der folgenden Attribute:

- `value`
  - : Der Wert, der der Eigenschaft zugeordnet ist (nur Datenbeschreibungen).
- `writable`
  - : `true` genau dann, wenn der Wert der Eigenschaft geändert werden kann
    (nur Datenbeschreibungen).
- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn
    kein Getter vorhanden ist (nur Zugriffs-Beschreibungen).
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn
    kein Setter vorhanden ist (nur Zugriffs-Beschreibungen).
- `configurable`
  - : `true` genau dann, wenn der Typ dieser Eigenschaftsbeschreibung geändert
    werden kann und ob die Eigenschaft vom entsprechenden Objekt gelöscht werden kann.
- `enumerable`
  - : `true` genau dann, wenn diese Eigenschaft bei der Aufzählung der
    Eigenschaften des entsprechenden Objekts erscheint.

## Beispiele

### Erstellen einer flachen Kopie

Während die {{jsxref("Object.assign()")}} Methode nur aufzählbare und eigene
Eigenschaften von einem Quellobjekt auf ein Zielobjekt kopiert, können Sie diese Methode und
{{jsxref("Object.create()")}} verwenden, um eine [flache Kopie](/de/docs/Glossary/Shallow_copy) zwischen zwei unbekannten Objekten zu erstellen:

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### Erstellen einer Unterklasse

Eine typische Methode, um eine Unterklasse zu erstellen, besteht darin, die Unterklasse zu definieren, ihr Prototyp zu einer
Instanz der Oberklasse zu machen und dann Eigenschaften auf dieser Instanz zu definieren. Dies kann
umständlich werden, insbesondere bei Gettern und Settern. Stattdessen können Sie diesen Code verwenden, um den
Prototyp festzulegen:

```js
function superclass() {}
superclass.prototype = {
  // Definieren Sie hier den Konstruktor, die Methoden und die Eigenschaften der Oberklasse
};
function subclass() {}
subclass.prototype = Object.create(superclass.prototype, {
  // Definieren Sie hier den Konstruktor, die Methoden und die Eigenschaften der Unterklasse
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
