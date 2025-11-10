---
title: Object.preventExtensions()
short-title: preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die statische Methode **`Object.preventExtensions()`** verhindert, dass einem Objekt jemals neue Eigenschaften hinzugefügt werden (d.h. sie verhindert zukünftige Erweiterungen des Objekts). Außerdem wird verhindert, dass das Prototype des Objekts neu zugewiesen wird.

{{InteractiveExample("JavaScript Demo: Object.preventExtensions()")}}

```js interactive-example
const object = {};

Object.preventExtensions(object);

try {
  Object.defineProperty(object, "foo", {
    value: 42,
  });
} catch (e) {
  console.log(e);
  // Expected output: TypeError: Cannot define property foo, object is not extensible
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

Ein Objekt ist erweiterbar, wenn ihm neue Eigenschaften hinzugefügt werden können. `Object.preventExtensions()` markiert ein Objekt als nicht mehr erweiterbar, sodass es nie mehr Eigenschaften über die hinaus haben wird, die es hatte, als es als nicht erweiterbar markiert wurde. Beachten Sie, dass die Eigenschaften eines nicht erweiterbaren Objekts im Allgemeinen trotzdem gelöscht werden können. Der Versuch, neue Eigenschaften zu einem nicht erweiterbaren Objekt hinzuzufügen, wird entweder stillschweigend fehlschlagen oder, im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode), ein {{jsxref("TypeError")}} werfen.

Im Gegensatz zu [`Object.seal()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) und [`Object.freeze()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) ruft `Object.preventExtensions()` ein intrinsisches JavaScript-Verhalten auf und kann nicht durch eine Zusammensetzung mehrerer anderer Operationen ersetzt werden. Es hat auch das `Reflect`-Gegenstück (das nur für intrinsische Operationen existiert), [`Reflect.preventExtensions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions).

`Object.preventExtensions()` verhindert nur die Hinzufügung von eigenen Eigenschaften. Eigenschaften können immer noch zum Objektprototyp hinzugefügt werden.

Diese Methode macht das `[[Prototype]]` des Ziels unveränderlich; jede `[[Prototype]]`-Neuzuweisung wird einen `TypeError` werfen. Dieses Verhalten ist spezifisch für die interne `[[Prototype]]`-Eigenschaft; andere Eigenschaften des Zielobjekts bleiben veränderbar.

Es gibt keine Möglichkeit, ein Objekt wieder erweiterbar zu machen, wenn es einmal als nicht erweiterbar gemacht wurde.

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

Das Prototyp eines nicht erweiterbaren Objekts ist unveränderlich:

```js
const fixed = Object.preventExtensions({});
// throws a 'TypeError'.
fixed.__proto__ = { oh: "hai" };
```

### Argument kein Objekt

In ES5 wird, wenn das Argument dieser Methode kein Objekt (ein primitiver Wert) ist, ein {{jsxref("TypeError")}} verursacht. In ES2015 wird ein nicht-Objekt-Argument unverändert und fehlerfrei zurückgegeben, da primitive Werte per Definition bereits unveränderlich sind.

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
