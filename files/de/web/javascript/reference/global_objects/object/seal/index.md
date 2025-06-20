---
title: Object.seal()
short-title: seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Object.seal()`** _versiegelt_ ein Objekt. Das Versiegeln eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht bestehende Eigenschaften nicht konfigurierbar. Ein versiegeltes Objekt hat eine feste Menge an Eigenschaften: Neue Eigenschaften können nicht hinzugefügt werden, bestehende Eigenschaften können nicht entfernt werden, ihre Aufzählbarkeit und Konfigurierbarkeit können nicht geändert werden und ihr Prototyp kann nicht neu zugewiesen werden. Die Werte bestehender Eigenschaften können weiterhin geändert werden, solange sie schreibbar sind. `seal()` gibt das gleiche Objekt zurück, das übergeben wurde.

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

Das Versiegeln eines Objekts entspricht dem [Verhindern von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dem anschließenden Ändern aller vorhandenen [Eigenschafts-Deskriptoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) zu `configurable: false`. Dies hat den Effekt, dass die Menge der Eigenschaften des Objekts festgelegt wird. Alle Eigenschaften nicht konfigurierbar zu machen, verhindert auch, dass sie von Dateneigenschaften in Zugriffseigenschaften und umgekehrt umgewandelt werden, aber es verhindert nicht, dass die Werte von Dateneigenschaften geändert werden können. Der Versuch, Eigenschaften zu löschen oder hinzuzufügen oder eine Dateneigenschaft in eine Zugriffseigenschaft oder umgekehrt umzuwandeln, wird fehlschlagen, entweder stillschweigend oder indem ein {{jsxref("TypeError")}} ausgelöst wird (meistens, aber nicht ausschließlich, im {{jsxref("Strict_mode", "Strict Mode", "", 1)}}-Code).

[Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) haben nicht das Konzept von Eigenschafts-Deskriptoren. Private Eigenschaften können nicht zum Objekt hinzugefügt oder daraus entfernt werden, unabhängig davon, ob das Objekt versiegelt ist oder nicht.

Die Prototyp-Kette bleibt unberührt. Aufgrund des Effekts des [Verhinderns von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) kann jedoch der `[[Prototype]]` nicht neu zugewiesen werden.

Im Gegensatz zu {{jsxref("Object.freeze()")}} können bei mit `Object.seal()` versiegelten Objekten bestehende Eigenschaften geändert werden, solange diese schreibbar sind.

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

In ES5 führt das Übergeben eines Nicht-Objekts (einer primitiven Wert) an diese Methode zu einem {{jsxref("TypeError")}}. In ES2015 wird ein Nicht-Objekt-Argument unverändert zurückgegeben, ohne dass Fehler geworfen werden, da primitive Werte per Definition bereits unveränderlich sind.

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
