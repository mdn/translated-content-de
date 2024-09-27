---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Die statische Methode **`Object.preventExtensions()`** verhindert, dass einem Objekt jemals neue Eigenschaften hinzugefügt werden (d. h. sie verhindert zukünftige Erweiterungen des Objekts). Sie verhindert auch, dass das Prototyp-Objekt neu zugewiesen wird.

{{EmbedInteractiveExample("pages/js/object-preventextensions.html")}}

## Syntax

```js-nolint
Object.preventExtensions(obj)
```

### Parameter

- `obj`
  - : Das Objekt, das un-erweiterbar gemacht werden soll.

### Rückgabewert

Das Objekt, das un-erweiterbar gemacht wird.

## Beschreibung

Ein Objekt ist erweiterbar, wenn ihm neue Eigenschaften hinzugefügt werden können. `Object.preventExtensions()` markiert ein Objekt als nicht mehr erweiterbar, sodass es nie mehr Eigenschaften als die hat, die es hatte, als es als nicht-erweiterbar markiert wurde. Beachten Sie, dass die Eigenschaften eines nicht-erweiterbaren Objekts im Allgemeinen immer noch _gelöscht_ werden können. Der Versuch, neue Eigenschaften zu einem nicht-erweiterbaren Objekt hinzuzufügen, wird entweder stillschweigend fehlschlagen oder in [Striktem Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) einen {{jsxref("TypeError")}} werfen.

Im Gegensatz zu [`Object.seal()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) und [`Object.freeze()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) ruft `Object.preventExtensions()` ein intrinsisches Verhalten von JavaScript auf und kann nicht durch eine Komposition mehrerer anderer Operationen ersetzt werden. Es gibt auch sein `Reflect`-Gegenstück (das nur für intrinsische Operationen existiert), [`Reflect.preventExtensions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions).

`Object.preventExtensions()` verhindert nur das Hinzufügen von eigenen Eigenschaften. Eigenschaften können immer noch dem Prototyp des Objekts hinzugefügt werden.

Diese Methode macht den `[[Prototype]]` des Ziels unveränderlich; jede `[[Prototype]]`-Neuzuordnung wird einen `TypeError` werfen. Dieses Verhalten ist spezifisch für die interne `[[Prototype]]`-Eigenschaft; andere Eigenschaften des Zielobjekts bleiben veränderlich.

Es gibt keine Möglichkeit, ein Objekt wieder erweiterbar zu machen, nachdem es nicht-erweiterbar gemacht wurde.

## Beispiele

### Verwendung von Object.preventExtensions

```js
// Object.preventExtensions returns the object
// being made non-extensible.
const obj = {};
const obj2 = Object.preventExtensions(obj);
obj === obj2; // true

// Objects are extensible by default.
const empty = {};
Object.isExtensible(empty); // true

// They can be made un-extensible
Object.preventExtensions(empty);
Object.isExtensible(empty); // false

// Object.defineProperty throws when adding
// a new property to a non-extensible object.
const nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", {
  value: 8675309,
}); // throws a TypeError

// In strict mode, attempting to add new properties
// to a non-extensible object throws a TypeError.
function fail() {
  "use strict";
  // throws a TypeError
  nonExtensible.newProperty = "FAIL";
}
fail();
```

Der Prototyp eines nicht-erweiterbaren Objekts ist unveränderlich:

```js
const fixed = Object.preventExtensions({});
// throws a 'TypeError'.
fixed.__proto__ = { oh: "hai" };
```

### Nicht-Objekt Argument

In ES5, falls das Argument dieser Methode kein Objekt (ein primitiver Wert) ist, wird es einen {{jsxref("TypeError")}} verursachen. In ES2015 wird ein Nicht-Objekt-Argument unverändert zurückgegeben, ohne dass ein Fehler auftritt, da primitive Werte definitionsgemäß bereits unveränderlich sind.

```js
Object.preventExtensions(1);
// TypeError: 1 is not an object (ES5 code)

Object.preventExtensions(1);
// 1                             (ES2015 code)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.preventExtensions()")}}
