---
title: Object.seal()
short-title: seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{JSRef}}

Die statische Methode **`Object.seal()`** _versiegelt_ ein Objekt. Das Versiegeln eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht bestehende Eigenschaften nicht konfigurierbar. Ein versiegeltes Objekt hat einen festen Satz von Eigenschaften: Neue Eigenschaften können nicht hinzugefügt werden, bestehende Eigenschaften können nicht entfernt werden, ihre Aufzählbarkeit und Konfigurierbarkeit können nicht verändert werden, und ihr Prototyp kann nicht neu zugewiesen werden. Die Werte bestehender Eigenschaften können nach wie vor geändert werden, solange sie beschreibbar sind. `seal()` gibt dasselbe Objekt zurück, das übergeben wurde.

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
  - : Das zu versiegelnde Objekt.

### Rückgabewert

Das versiegelte Objekt.

## Beschreibung

Das Versiegeln eines Objekts ist gleichbedeutend mit [Verhinderung von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dem anschließenden Ändern aller bestehenden [Eigenschaftsdeskriptoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) zu `configurable: false`. Dies hat zur Folge, dass der Satz von Eigenschaften des Objekts festgelegt ist. Wenn alle Eigenschaften nicht konfigurierbar sind, verhindert dies auch, dass sie von Dateneigenschaften in Zugriffseigenschaften und umgekehrt umgewandelt werden, es verhindert jedoch nicht, dass die Werte der Dateneigenschaften geändert werden. Der Versuch, Eigenschaften in einem versiegelten Objekt zu löschen oder hinzuzufügen, oder eine Dateneigenschaft in eine Zugriffseigenschaft oder umgekehrt zu ändern, wird fehlschlagen, entweder stillschweigend oder indem ein {{jsxref("TypeError")}} ausgelöst wird (meistens, aber nicht ausschließlich, wenn im {{jsxref("Strict_mode", "Strict-Modus", "", 1)}} Code).

[Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sind keine Eigenschaften und haben nicht das Konzept von Eigenschaftsdeskriptoren. Private Elemente können nicht aus dem Objekt hinzugefügt oder entfernt werden, unabhängig davon, ob das Objekt versiegelt ist oder nicht.

Die Prototypenkette bleibt unberührt. Aufgrund der Wirkung der [Verhinderung von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) kann jedoch `[[Prototype]]` nicht neu zugewiesen werden.

Im Gegensatz zu {{jsxref("Object.freeze()")}} können Objekte, die mit `Object.seal()` versiegelt sind, ihre bestehenden Eigenschaften ändern, solange sie beschreibbar sind.

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

In ES5 führt ein Argument, das keine Objekt (ein Primitive) ist, zu einem {{jsxref("TypeError")}}. In ES2015 wird ein Nicht-Objekt-Argument unverändert zurückgegeben, da Primitive per Definition bereits unveränderlich sind.

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
