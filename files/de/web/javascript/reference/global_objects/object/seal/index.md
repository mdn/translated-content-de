---
title: Object.seal()
short-title: seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die statische Methode **`Object.seal()`** _versiegelt_ ein Objekt. Das Versiegeln eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht vorhandene Eigenschaften nicht konfigurierbar. Ein versiegeltes Objekt verfügt über einen festen Satz von Eigenschaften: Neue Eigenschaften können nicht hinzugefügt werden, bestehende Eigenschaften können nicht entfernt werden, ihre Aufzählbarkeit und Konfigurierbarkeit können nicht geändert werden, und sein Prototyp kann nicht neu zugewiesen werden. Die Werte bestehender Eigenschaften können weiterhin geändert werden, solange sie beschreibbar sind. `seal()` gibt dasselbe Objekt zurück, das übergeben wurde.

{{InteractiveExample("JavaScript Demo: Object.seal()")}}

```js interactive-example
const object = {
  foo: 42,
};

Object.seal(object);
object.foo = 33;
console.log(object.foo);
// Expected output: 33

delete object.foo; // Cannot delete when sealed
console.log(object.foo);
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

Das Objekt, das versiegelt wird.

## Beschreibung

Das Versiegeln eines Objekts entspricht dem [Verhindern von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dann dem Ändern aller vorhandenen [Eigenschaftsdescriptoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) zu `configurable: false`. Dies hat zur Folge, dass der Satz von Eigenschaften des Objekts feststeht. Wenn alle Eigenschaften nicht konfigurierbar sind, können sie nicht von Dateneigenschaften zu Accessoreigenschaften und umgekehrt konvertiert werden, aber es wird nicht verhindert, dass die Werte der Dateneigenschaften geändert werden. Der Versuch, Eigenschaften eines versiegelten Objekts zu löschen oder hinzuzufügen oder eine Dateneigenschaft in einen Accessor zu konvertieren oder umgekehrt, schlägt fehl, entweder stillschweigend oder durch das Auslösen eines {{jsxref("TypeError")}} (meistens, aber nicht ausschließlich, wenn Code im {{jsxref("Strict_mode", "strict mode", "", 1)}} ausgeführt wird).

[Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sind keine Eigenschaften und haben kein Konzept von Eigenschaftsdescriptoren. Private Elemente können weder hinzugefügt noch aus dem Objekt entfernt werden, unabhängig davon, ob das Objekt versiegelt ist oder nicht.

Die Prototypenkette bleibt unberührt. Aufgrund der Wirkung des [Verhinderns von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) kann das `[[Prototype]]` jedoch nicht neu zugewiesen werden.

Im Gegensatz zu {{jsxref("Object.freeze()")}} können bei Objekten, die mit `Object.seal()` versiegelt wurden, bestehende Eigenschaften geändert werden, solange sie beschreibbar sind.

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

In ES5 führt das Argument dieser Methode, wenn es sich nicht um ein Objekt (ein primitiver Wert) handelt, zu einem {{jsxref("TypeError")}}. In ES2015 wird ein Nicht-Objekt-Argument unverändert ohne Fehler zurückgegeben, da primitive Werte per Definition bereits unveränderlich sind.

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
