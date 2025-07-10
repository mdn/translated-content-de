---
title: Object.seal()
short-title: seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Object.seal()`** _versiegelt_ ein Objekt. Das Versiegeln eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht bestehende Eigenschaften nicht konfigurierbar. Ein versiegeltes Objekt hat einen festen Satz von Eigenschaften: Neue Eigenschaften können nicht hinzugefügt werden, bestehende Eigenschaften können nicht entfernt werden, ihre Enumerierbarkeit und Konfigurierbarkeit können nicht geändert werden, und ihr Prototyp kann nicht neu zugewiesen werden. Die Werte der bestehenden Eigenschaften können jedoch geändert werden, solange sie beschreibbar sind. `seal()` gibt dasselbe Objekt zurück, das übergeben wurde.

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

Das Versiegeln eines Objekts ist gleichbedeutend mit dem [Verhindern von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dem anschließenden Ändern aller bestehenden [Eigenschafts-Deskriptoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) zu `configurable: false`. Dies hat zur Folge, dass der Satz der Eigenschaften des Objekts festgelegt wird. Wenn alle Eigenschaften nicht konfigurierbar sind, verhindert das außerdem, dass Daten-Eigenschaften in Zugriffseigenschaften und umgekehrt umgewandelt werden, aber es verhindert nicht, dass die Werte von Daten-Eigenschaften geändert werden. Der Versuch, Eigenschaften eines versiegelten Objekts zu löschen oder hinzuzufügen oder eine Daten-Eigenschaft in eine Zugriffseigenschaft oder umgekehrt umzuwandeln, schlägt fehl, entweder stillschweigend oder indem ein {{jsxref("TypeError")}} ausgelöst wird (meistens, aber nicht ausschließlich, wenn im {{jsxref("Strict_mode", "strict mode", "", 1)}} Code).

[Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sind keine Eigenschaften und haben kein Konzept von Eigenschafts-Deskriptoren. Private Elemente können weder hinzugefügt noch entfernt werden, unabhängig davon, ob das Objekt versiegelt ist oder nicht.

Die Prototypen-Kette bleibt unberührt. Aufgrund der Wirkung des [Verhinderns von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) kann der `[[Prototype]]` jedoch nicht neu zugewiesen werden.

Im Gegensatz zu {{jsxref("Object.freeze()")}} können bei Objekten, die mit `Object.seal()` versiegelt wurden, ihre bestehenden Eigenschaften geändert werden, solange sie beschreibbar sind.

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

### Argument, das kein Objekt ist

In ES5, wenn das Argument dieser Methode kein Objekt (ein primitiver Wert) ist, führt dies zu einem {{jsxref("TypeError")}}. In ES2015 wird ein nicht-objekt Argument unverändert zurückgegeben, ohne Fehler, da primitive Werte definitionsgemäß bereits unveränderlich sind.

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
