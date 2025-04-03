---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die **`Object.preventExtensions()`** statische Methode verhindert, dass jemals neue
Eigenschaften zu einem Objekt hinzugefügt werden (d.h. sie verhindert zukünftige Erweiterungen des
Objekts). Sie verhindert auch, dass das Prototyp des Objekts neu zugewiesen wird.

{{InteractiveExample("JavaScript Demo: Object.preventExtensions()")}}

```js interactive-example
const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, "property1", {
    value: 42,
  });
} catch (e) {
  console.log(e);
  // Expected output: TypeError: Cannot define property property1, object is not extensible
}
```

## Syntax

```js-nolint
Object.preventExtensions(obj)
```

### Parameter

- `obj`
  - : Das Objekt, das nicht erweiterbar gemacht werden soll.

### Rückgabewert

Das Objekt, das nicht erweiterbar gemacht wird.

## Beschreibung

Ein Objekt ist erweiterbar, wenn neue Eigenschaften hinzugefügt werden können.
`Object.preventExtensions()` markiert ein Objekt als nicht mehr erweiterbar, so dass
es niemals Eigenschaften haben wird, die über die hinausgehen, die es zu dem Zeitpunkt hatte, als es als
nicht erweiterbar markiert wurde. Beachten Sie, dass die Eigenschaften eines nicht-erweiterbaren Objekts im Allgemeinen immer noch _gelöscht_ werden können. Der Versuch, neue Eigenschaften zu einem nicht-erweiterbaren Objekt hinzuzufügen,
wird entweder fehlschlagen, ohne eine Meldung zu erzeugen, oder im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) einen {{jsxref("TypeError")}} auslösen.

Im Gegensatz zu [`Object.seal()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) und [`Object.freeze()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) ruft `Object.preventExtensions()` ein intrinsisches JavaScript-Verhalten auf und kann nicht durch eine Kombination mehrerer anderer Operationen ersetzt werden. Es hat auch eine `Reflect`-Gegenstück (das nur für intrinsische Operationen existiert), [`Reflect.preventExtensions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions).

`Object.preventExtensions()` verhindert nur das Hinzufügen eigener Eigenschaften. Eigenschaften können immer noch zum Prototyp des Objekts hinzugefügt werden.

Diese Methode macht den `[[Prototype]]` des Ziels unveränderlich; jede `[[Prototype]]`-Neuzuweisung wird einen `TypeError` werfen. Dieses Verhalten ist spezifisch für die interne `[[Prototype]]`-Eigenschaft; andere Eigenschaften des Zielobjekts bleiben veränderlich.

Es gibt keine Möglichkeit, ein Objekt wieder erweiterbar zu machen, sobald es nicht erweiterbar gemacht wurde.

## Beispiele

### Verwenden von Object.preventExtensions

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

### Nicht-Objekt-Argument

In ES5, wenn das Argument dieser Methode kein Objekt ist (ein Primitive), wird dies einen {{jsxref("TypeError")}} verursachen. In ES2015, wird ein Nicht-Objekt-Argument unverändert zurückgegeben, ohne Fehler, da Primitive per Definition bereits unveränderlich sind.

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
