---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Object.preventExtensions()`** statische Methode verhindert, dass neue Eigenschaften jemals zu einem Objekt hinzugefügt werden können (d.h. sie verhindert zukünftige Erweiterungen des Objekts). Sie verhindert auch, dass das Prototyp-Objekt neu zugewiesen wird.

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
  - : Das Objekt, welches nicht mehr erweiterbar gemacht werden soll.

### Rückgabewert

Das Objekt, das nicht mehr erweiterbar gemacht wird.

## Beschreibung

Ein Objekt ist erweiterbar, wenn neue Eigenschaften hinzugefügt werden können. `Object.preventExtensions()` kennzeichnet ein Objekt als nicht mehr erweiterbar, sodass es nie Eigenschaften über die hinaus haben wird, die es zu dem Zeitpunkt hatte, als es als nicht erweiterbar markiert wurde. Beachten Sie, dass die Eigenschaften eines nicht erweiterbaren Objekts im Allgemeinen weiterhin _gelöscht_ werden können. Der Versuch, neue Eigenschaften zu einem nicht erweiterbaren Objekt hinzuzufügen, wird fehlschlagen, entweder stillschweigend oder, im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode), wird ein {{jsxref("TypeError")}} ausgelöst.

Im Gegensatz zu [`Object.seal()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) und [`Object.freeze()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) ruft `Object.preventExtensions()` ein intrinsisches JavaScript-Verhalten auf und kann nicht durch eine Kombination mehrerer anderer Operationen ersetzt werden. Es hat auch sein `Reflect`-Gegenstück (welches nur für intrinsische Operationen existiert), [`Reflect.preventExtensions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions).

`Object.preventExtensions()` verhindert nur das Hinzufügen eigener Eigenschaften. Eigenschaften können weiterhin zum Prototyp des Objekts hinzugefügt werden.

Diese Methode macht die `[[Prototype]]` des Zielobjekts unveränderbar; jede Neu-Zuweisung der `[[Prototype]]` wird einen `TypeError` auslösen. Dieses Verhalten ist spezifisch für die interne `[[Prototype]]`-Eigenschaft; andere Eigenschaften des Zielobjekts bleiben veränderbar.

Es gibt keine Möglichkeit, ein Objekt wieder erweiterbar zu machen, nachdem es als nicht erweiterbar markiert wurde.

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

Der Prototyp eines nicht erweiterbaren Objekts ist unveränderbar:

```js
const fixed = Object.preventExtensions({});
// throws a 'TypeError'.
fixed.__proto__ = { oh: "hai" };
```

### Nicht-Objekt-Argument

In ES5 führt diese Methode bei einem Argument, das kein Objekt ist (eine Primitive), zu einem {{jsxref("TypeError")}}. In ES2015 wird ein Nicht-Objekt-Argument unverändert zurückgegeben, ohne Fehler auszulösen, da primitive Werte per Definition bereits unveränderlich sind.

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
