---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Die **`Object.preventExtensions()`** statische Methode verhindert, dass einem Objekt jemals neue Eigenschaften hinzugefügt werden (d.h. verhindert zukünftige Erweiterungen des Objekts). Sie verhindert auch, dass das Prototyp eines Objekts neu zugewiesen wird.

{{EmbedInteractiveExample("pages/js/object-preventextensions.html")}}

## Syntax

```js-nolint
Object.preventExtensions(obj)
```

### Parameter

- `obj`
  - : Das Objekt, das nicht erweiterbar gemacht werden soll.

### Rückgabewert

Das Objekt, das nicht erweiterbar gemacht wurde.

## Beschreibung

Ein Objekt ist erweiterbar, wenn ihm neue Eigenschaften hinzugefügt werden können. `Object.preventExtensions()` markiert ein Objekt als nicht mehr erweiterbar, so dass es niemals Eigenschaften über die hinaus haben wird, die es zu dem Zeitpunkt hatte, als es als nicht erweiterbar markiert wurde. Beachten Sie, dass die Eigenschaften eines nicht erweiterbaren Objekts in der Regel immer noch _gelöscht_ werden können. Der Versuch, einem nicht erweiterbaren Objekt neue Eigenschaften hinzuzufügen, wird scheitern, entweder stillschweigend oder, im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), durch das Werfen eines {{jsxref("TypeError")}}.

Im Gegensatz zu [`Object.seal()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) und [`Object.freeze()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) ruft `Object.preventExtensions()` ein intrinsisches JavaScript-Verhalten auf und kann nicht durch eine Komposition mehrerer anderer Operationen ersetzt werden. Es hat auch sein `Reflect` Gegenstück (das nur für intrinsische Operationen existiert), [`Reflect.preventExtensions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions).

`Object.preventExtensions()` verhindert nur das Hinzufügen von eigenen Eigenschaften. Eigenschaften können immer noch dem Prototyp des Objekts hinzugefügt werden.

Diese Methode macht das `[[Prototype]]` des Ziels unveränderlich; jede `[[Prototype]]` Neu-Zuweisung wirft einen `TypeError`. Dieses Verhalten ist spezifisch für die interne `[[Prototype]]`-Eigenschaft; andere Eigenschaften des Zielobjekts bleiben veränderlich.

Es gibt keine Möglichkeit, ein Objekt wieder erweiterbar zu machen, nachdem es nicht erweiterbar gemacht wurde.

## Beispiele

### Verwendung von Object.preventExtensions

```js
// Object.preventExtensions gibt das Objekt zurück,
// das nicht erweiterbar gemacht wurde.
const obj = {};
const obj2 = Object.preventExtensions(obj);
obj === obj2; // true

// Objekte sind standardmäßig erweiterbar.
const empty = {};
Object.isExtensible(empty); // true

// Sie können nicht erweiterbar gemacht werden
Object.preventExtensions(empty);
Object.isExtensible(empty); // false

// Object.defineProperty wirft einen Fehler, wenn es versucht,
// eine neue Eigenschaft zu einem nicht erweiterbaren Objekt hinzuzufügen.
const nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", {
  value: 8675309,
}); // wirft einen TypeError

// Im strikten Modus wirft der Versuch, neuen Eigenschaften
// zu einem nicht erweiterbaren Objekt hinzuzufügen, einen TypeError.
function fail() {
  "use strict";
  // wirft einen TypeError
  nonExtensible.newProperty = "FAIL";
}
fail();
```

Das Prototyp eines nicht erweiterbaren Objekts ist unveränderlich:

```js
const fixed = Object.preventExtensions({});
// wirft einen 'TypeError'.
fixed.__proto__ = { oh: "hai" };
```

### Argument ohne Objekt

In ES5, wenn das Argument dieser Methode kein Objekt (ein primitiver Wert) ist, wird es einen {{jsxref("TypeError")}} verursachen. In ES2015 wird ein Argument ohne Objekt ohne Fehler unverändert zurückgegeben, da Primitive per Definition bereits unveränderlich sind.

```js
Object.preventExtensions(1);
// TypeError: 1 is not an object (ES5 Code)

Object.preventExtensions(1);
// 1                             (ES2015 Code)
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
