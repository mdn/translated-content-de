---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
l10n:
  sourceCommit: 0c2f10d728d1018f1b21c3e96267c5d586ff0ae3
---

{{JSRef}}

Die statische Methode **`Object.seal()`** _versiegelt_ ein Objekt. Das Versiegeln eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht bestehende Eigenschaften nicht konfigurierbar. Ein versiegeltes Objekt hat eine feste Menge an Eigenschaften: Neue Eigenschaften können nicht hinzugefügt werden, bestehende Eigenschaften können nicht entfernt werden, ihre Enumerierbarkeit und Konfigurierbarkeit kann nicht geändert werden und ihr Prototyp kann nicht neu zugewiesen werden. Werte bestehender Eigenschaften können weiterhin geändert werden, solange sie beschreibbar sind. `seal()` gibt das gleiche Objekt zurück, das übergeben wurde.

{{EmbedInteractiveExample("pages/js/object-seal.html")}}

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

Das Versiegeln eines Objekts entspricht dem [Verhindern von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dem anschließenden Ändern aller bestehenden [Eigenschaftsbeschreibungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) zu `configurable: false`. Dies hat zur Folge, dass die Menge der Eigenschaften des Objekts festgelegt wird. Wenn alle Eigenschaften nicht konfigurierbar sind, können sie auch nicht von Dateneigenschaften in Zugriffseigenschaften und umgekehrt umgewandelt werden, aber es verhindert nicht, dass die Werte der Dateneigenschaften geändert werden. Der Versuch, Eigenschaften eines versiegelten Objekts zu löschen oder hinzuzufügen oder eine Dateneigenschaft in eine Zugriffseigenschaft oder umgekehrt zu verwandeln, schlägt fehl, entweder stillschweigend oder durch Werfen eines {{jsxref("TypeError")}} (am häufigsten, aber nicht ausschließlich, im {{jsxref("Strict_mode", "strikten Modus", "", 1)}}).

[Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) haben nicht das Konzept von Eigenschaftsbeschreibungen. Private Eigenschaften können vom Objekt nicht hinzugefügt oder entfernt werden, unabhängig davon, ob das Objekt versiegelt ist oder nicht.

Die Prototypenkette bleibt unberührt. Aufgrund des Effekts des [Verhinderns von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) kann das `[[Prototype]]` jedoch nicht neu zugewiesen werden.

Im Gegensatz zu {{jsxref("Object.freeze()")}} dürfen Objekte, die mit `Object.seal()` versiegelt sind, ihre bestehenden Eigenschaften ändern, solange sie beschreibbar sind.

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

### Nicht-Objekt-Argument

In ES5 führt ein Argument, das kein Objekt ist (ein primitiver Wert), zu einem {{jsxref("TypeError")}}. In ES2015 wird ein Nicht-Objekt-Argument unverändert zurückgegeben, da primitive Werte per Definition bereits unveränderlich sind.

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
