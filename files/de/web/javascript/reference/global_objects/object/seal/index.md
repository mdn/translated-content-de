---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Object.seal()`** statische Methode _versiegelt_ ein Objekt. Das Versiegeln eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht bestehende Eigenschaften nicht konfigurierbar. Ein versiegeltes Objekt hat eine feste Menge an Eigenschaften: Neue Eigenschaften können nicht hinzugefügt werden, bestehende Eigenschaften können nicht entfernt werden, ihre Enumerierbarkeit und Konfigurierbarkeit können nicht geändert werden, und sein Prototyp kann nicht neu zugewiesen werden. Die Werte bestehender Eigenschaften können weiterhin geändert werden, solange sie beschreibbar sind. `seal()` gibt dasselbe Objekt zurück, das übergeben wurde.

{{InteractiveExample("JavaScript Demo: Object.seal()")}}

```js interactive-example
const object1 = {
  property1: 42,
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// Expected output: 33

delete object1.property1; // Cannot delete when sealed
console.log(object1.property1);
// Expected output: 33
```

## Syntax

```js-nolint
Object.seal(obj)
```

### Parameter

- `obj`
  - : Das Objekt, das versiegelt werden soll.

### Rückgabewert

Das versiegelte Objekt.

## Beschreibung

Das Versiegeln eines Objekts entspricht dem [Verhindern von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dem anschließenden Ändern aller bestehenden [Eigenschaftsdeskriptoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) zu `configurable: false`. Dies hat zur Folge, dass die Menge der Eigenschaften eines Objekts festgelegt wird. Dadurch, dass alle Eigenschaften nicht konfigurierbar gemacht werden, wird ebenfalls verhindert, dass sie von Daten-Eigenschaften in Zugriffseigenschaften und umgekehrt konvertiert werden. Es wird jedoch nicht verhindert, dass die Werte von Daten-Eigenschaften geändert werden. Der Versuch, Eigenschaften zu löschen oder hinzuzufügen, oder eine Daten-Eigenschaft in eine Zugriffseigenschaft (oder umgekehrt) zu konvertieren, wird entweder stillschweigend scheitern oder eine {{jsxref("TypeError")}} werfen (häufig, aber nicht ausschließlich, wenn der Code im {{jsxref("Strict_mode", "strikten Modus", "", 1)}} geschrieben ist).

[Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) haben kein Konzept von Eigenschaftsdeskriptoren. Private Eigenschaften können weder hinzugefügt noch vom Objekt entfernt werden, unabhängig davon, ob das Objekt versiegelt ist oder nicht.

Die Prototypenkette bleibt unberührt. Aufgrund der Wirkung des [Verhinderns von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) kann jedoch der `[[Prototype]]` nicht neu zugewiesen werden.

Im Gegensatz zu {{jsxref("Object.freeze()")}} können die bestehenden Eigenschaften von Objekten, die mit `Object.seal()` versiegelt wurden, geändert werden, solange sie beschreibbar sind.

## Beispiele

### Verwendung von Object.seal

```js
const obj = {
  prop() {},
  foo: "bar",
};

// New properties may be added, existing properties
// may be changed or removed.
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

const o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // true

// Changing property values on a sealed object
// still works.
obj.foo = "quux";

// But you can't convert data properties to accessors,
// or vice versa.
Object.defineProperty(obj, "foo", {
  get() {
    return "g";
  },
}); // throws a TypeError

// Now any changes, other than to property values,
// will fail.
obj.quaxxor = "the friendly duck";
// silently doesn't add the property
delete obj.foo;
// silently doesn't delete the property

// ...and in strict mode such attempts
// will throw TypeErrors.
function fail() {
  "use strict";
  delete obj.foo; // throws a TypeError
  obj.sparky = "arf"; // throws a TypeError
}
fail();

// Attempted additions through
// Object.defineProperty will also throw.
Object.defineProperty(obj, "ohai", {
  value: 17,
}); // throws a TypeError
Object.defineProperty(obj, "foo", {
  value: "eit",
}); // changes existing property value
```

### Argument ohne Objekt

In ES5 führt ein Argument, das kein Objekt (sondern ein primitiver Wert) ist, zu einer {{jsxref("TypeError")}}. In ES2015 wird ein Argument, das kein Objekt ist, unverändert zurückgegeben, da Primitive per Definition bereits unveränderlich sind.

```js
Object.seal(1);
// TypeError: 1 is not an object (ES5 code)

Object.seal(1);
// 1                             (ES2015 code)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
