---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
l10n:
  sourceCommit: 0c2f10d728d1018f1b21c3e96267c5d586ff0ae3
---

{{JSRef}}

Die statische Methode **`Object.seal()`** _versiegelt_ ein Objekt. Das Versiegeln eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht bestehende Eigenschaften nicht konfigurierbar. Ein versiegeltes Objekt hat einen festen Satz von Eigenschaften: Neue Eigenschaften können nicht hinzugefügt werden, bestehende Eigenschaften können nicht entfernt werden, ihre Enumerierbarkeit und Konfigurierbarkeit können nicht geändert werden, und das Prototyp-Objekt kann nicht neu zugewiesen werden. Die Werte bestehender Eigenschaften können jedoch weiterhin geändert werden, solange sie beschreibbar sind. `seal()` gibt dasselbe Objekt zurück, das übergeben wurde.

{{EmbedInteractiveExample("pages/js/object-seal.html")}}

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

Das Versiegeln eines Objekts ist gleichbedeutend mit dem [Verhindern von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dem anschließenden Ändern aller bestehenden [Eigenschaftsbeschreibungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) auf `configurable: false`. Dies hat zur Folge, dass der Satz der Eigenschaften des Objekts festgelegt wird. Das Festlegen aller Eigenschaften auf nicht konfigurierbar verhindert auch, dass sie von Dateneigenschaften in Zugriffseigenschaften (accessor properties) umgewandelt werden und umgekehrt. Es verhindert jedoch nicht, dass die Werte von Dateneigenschaften geändert werden. Versuche, Eigenschaften zu löschen oder hinzuzufügen oder eine Dateneigenschaft in eine Zugriffseigenschaft oder umgekehrt zu konvertieren, schlagen fehl - entweder stillschweigend oder mit einer {{jsxref("TypeError")}} (am häufigsten, aber nicht ausschließlich, im {{jsxref("Strict_mode", "strict mode", "", 1)}}-Code).

[Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) kennen das Konzept von Eigenschaftsbeschreibungen nicht. Private Eigenschaften können weder hinzugefügt noch vom Objekt entfernt werden, unabhängig davon, ob das Objekt versiegelt ist oder nicht.

Die Prototyp-Kette bleibt unberührt. Aufgrund der Wirkung des [Verhinderns von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) kann das `[[Prototype]]` jedoch nicht neu zugewiesen werden.

Im Gegensatz zu {{jsxref("Object.freeze()")}} können bei Objekten, die mit `Object.seal()` versiegelt sind, deren bestehende Eigenschaften geändert werden, solange sie beschreibbar sind.

## Beispiele

### Verwendung von Object.seal

```js
const obj = {
  prop() {},
  foo: "bar",
};

// Neue Eigenschaften können hinzugefügt, bestehende Eigenschaften
// können geändert oder entfernt werden.
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

const o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // true

// Das Ändern von Eigenschaftswerten auf einem versiegelten Objekt
// funktioniert weiterhin.
obj.foo = "quux";

// Aber Sie können keine Dateneigenschaften in Zugriffe umwandeln,
// oder umgekehrt.
Object.defineProperty(obj, "foo", {
  get() {
    return "g";
  },
}); // wirft einen TypeError

// Nun schlagen alle Änderungen, außer an Eigenschaftswerten, fehl.
obj.quaxxor = "die freundliche Ente";
// fügt die Eigenschaft stillschweigend nicht hinzu
delete obj.foo;
// löscht die Eigenschaft stillschweigend nicht

// ...und im Strict-Modus werden solche Versuche
// TypeErrors auslösen.
function fail() {
  "use strict";
  delete obj.foo; // wirft einen TypeError
  obj.sparky = "arf"; // wirft einen TypeError
}
fail();

// Versuchte Hinzufügungen über
// Object.defineProperty werden ebenfalls fehlschlagen.
Object.defineProperty(obj, "ohai", {
  value: 17,
}); // wirft einen TypeError
Object.defineProperty(obj, "foo", {
  value: "eit",
}); // ändert den bestehenden Eigenschaftswert
```

### Nicht-Objekt-Argument

In ES5 führt das Übergeben eines Nicht-Objekts (eines primitiven Werts) zu einem {{jsxref("TypeError")}}. In ES2015 wird ein Nicht-Objekt-Argument unverändert zurückgegeben, da primitive Werte definitionsgemäß bereits unveränderlich sind.

```js
Object.seal(1);
// TypeError: 1 ist kein Objekt (ES5-Code)

Object.seal(1);
// 1                              (ES2015-Code)
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
