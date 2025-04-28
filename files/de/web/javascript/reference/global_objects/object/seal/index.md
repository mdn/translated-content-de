---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{JSRef}}

Die **`Object.seal()`** statische Methode _versiegelt_ ein Objekt. Das Versiegeln eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht bestehende Eigenschaften nicht konfigurierbar. Ein versiegeltes Objekt hat einen festen Satz an Eigenschaften: Neue Eigenschaften können nicht hinzugefügt werden, bestehende Eigenschaften können nicht entfernt werden, ihre Aufzählbarkeit und Konfigurierbarkeit können nicht geändert werden, und ihr Prototyp kann nicht neu zugewiesen werden. Die Werte bestehender Eigenschaften können weiterhin geändert werden, solange sie beschreibbar sind. `seal()` gibt dasselbe Objekt zurück, das übergeben wurde.

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

Das Versiegeln eines Objekts entspricht dem [Verhindern von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dem Ändern aller bestehenden [Property-Deskriptoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) zu `configurable: false`. Dies hat zur Folge, dass der Satz von Eigenschaften auf dem Objekt fest ist. Das Nicht-Konfigurierbar-Machen aller Eigenschaften verhindert auch, dass sie von Dateneigenschaften in Zugriffseigenschaften umgewandelt werden und umgekehrt, es verhindert jedoch nicht, dass die Werte von Dateneigenschaften geändert werden. Der Versuch, Eigenschaften bei einem versiegelten Objekt zu löschen oder hinzuzufügen oder eine Dateneigenschaft in eine Zugriffseigenschaft umzuwandeln oder umgekehrt, wird scheitern, entweder stillschweigend oder durch Werfen eines {{jsxref("TypeError")}} (meistens, aber nicht ausschließlich, im {{jsxref("Strict_mode", "strict mode", "", 1)}}-Code).

[Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) besitzen nicht das Konzept von Property-Deskriptoren. Private Eigenschaften können weder hinzugefügt noch entfernt werden, unabhängig davon, ob das Objekt versiegelt ist oder nicht.

Die Prototypkette bleibt unberührt. Aufgrund der Wirkung des [Verhinderns von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) kann jedoch das `[[Prototype]]` nicht neu zugewiesen werden.

Im Gegensatz zu {{jsxref("Object.freeze()")}} können Objekte, die mit `Object.seal()` versiegelt wurden, ihre bestehenden Eigenschaften ändern, solange diese beschreibbar sind.

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

// … and in strict mode such attempts
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

### Nicht-Objekt-Argument

In ES5 wird, wenn das Argument dieser Methode kein Objekt (ein primitiver Wert) ist, ein {{jsxref("TypeError")}} ausgelöst. In ES2015 wird ein Nicht-Objekt-Argument unverändert ohne Fehler zurückgegeben, da primitive Werte definitionsgemäß bereits unveränderlich sind.

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
