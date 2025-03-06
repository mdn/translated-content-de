---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die **`Object.hasOwn()`** statische Methode gibt `true` zurück, wenn das angegebene Objekt die angegebene Eigenschaft als _eigene_ Eigenschaft besitzt. Wenn die Eigenschaft vererbt wird oder nicht existiert, gibt die Methode `false` zurück.

> **Note:** `Object.hasOwn()` ist als Ersatz für {{jsxref("Object.prototype.hasOwnProperty()")}} gedacht.

{{InteractiveExample("JavaScript Demo: Object.hasOwn()")}}

```js interactive-example
const object1 = {
  prop: "exists",
};

console.log(Object.hasOwn(object1, "prop"));
// Expected output: true

console.log(Object.hasOwn(object1, "toString"));
// Expected output: false

console.log(Object.hasOwn(object1, "undeclaredPropertyValue"));
// Expected output: false
```

## Syntax

```js-nolint
Object.hasOwn(obj, prop)
```

### Parameter

- `obj`
  - : Die JavaScript-Objektinstanz, die getestet werden soll.
- `prop`
  - : Der {{jsxref("String")}}-Name oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) der zu testenden Eigenschaft.

### Rückgabewert

`true`, wenn das angegebene Objekt die angegebene Eigenschaft direkt definiert hat.
Andernfalls `false`.

## Beschreibung

Die **`Object.hasOwn()`** Methode gibt `true` zurück, wenn die angegebene Eigenschaft eine direkte Eigenschaft des Objekts ist — selbst wenn der Eigenschaftswert `null` oder `undefined` ist. Die Methode gibt `false` zurück, wenn die Eigenschaft vererbt wird oder überhaupt nicht deklariert wurde. Im Gegensatz zum {{jsxref("Operators/in", "in")}}-Operator prüft diese Methode nicht die angegebene Eigenschaft in der Prototypenkette des Objekts.

Es wird über {{jsxref("Object.prototype.hasOwnProperty()")}} empfohlen, weil sie für [`null`-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und mit Objekten funktioniert, die die vererbte `hasOwnProperty()` Methode überschrieben haben. Während es möglich ist, diese Probleme durch den Aufruf von `Object.prototype.hasOwnProperty()` auf einem externen Objekt zu umgehen, ist `Object.hasOwn()` intuitiver.

## Beispiele

### Verwendung von hasOwn, um das Vorhandensein einer Eigenschaft zu testen

Der folgende Code zeigt, wie man feststellt, ob das `example` Objekt eine Eigenschaft namens `prop` enthält.

```js
const example = {};
Object.hasOwn(example, "prop"); // false - 'prop' has not been defined

example.prop = "exists";
Object.hasOwn(example, "prop"); // true - 'prop' has been defined

example.prop = null;
Object.hasOwn(example, "prop"); // true - own property exists with value of null

example.prop = undefined;
Object.hasOwn(example, "prop"); // true - own property exists with value of undefined
```

### Direkte vs. vererbte Eigenschaften

Das folgende Beispiel unterscheidet zwischen direkten Eigenschaften und Eigenschaften, die durch die Prototypenkette vererbt werden:

```js
const example = {};
example.prop = "exists";

// `hasOwn` will only return true for direct properties:
Object.hasOwn(example, "prop"); // true
Object.hasOwn(example, "toString"); // false
Object.hasOwn(example, "hasOwnProperty"); // false

// The `in` operator will return true for direct or inherited properties:
"prop" in example; // true
"toString" in example; // true
"hasOwnProperty" in example; // true
```

### Über die Eigenschaften eines Objekts iterieren

Um über die aufzählbaren Eigenschaften eines Objekts zu iterieren, _sollten_ Sie Folgendes verwenden:

```js
const example = { foo: true, bar: true };
for (const name of Object.keys(example)) {
  // …
}
```

Aber wenn Sie `for...in` verwenden müssen, können Sie `Object.hasOwn()` nutzen, um die vererbten Eigenschaften zu überspringen:

```js
const example = { foo: true, bar: true };
for (const name in example) {
  if (Object.hasOwn(example, name)) {
    // …
  }
}
```

### Überprüfen, ob ein Array-Index existiert

Die Elemente eines {{jsxref("Array")}} werden als direkte Eigenschaften definiert, daher können Sie die `hasOwn()` Methode verwenden, um zu überprüfen, ob ein bestimmter Index existiert:

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false - not defined
```

### Problematische Fälle für hasOwnProperty

Dieser Abschnitt zeigt, dass `hasOwn()` unempfindlich gegenüber den Problemen ist, die `hasOwnProperty` betreffen. Erstens kann es mit Objekten verwendet werden, die `hasOwnProperty()` neu implementiert haben:

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "The dragons be out of office",
};

if (Object.hasOwn(foo, "bar")) {
  console.log(foo.bar); // true - re-implementation of hasOwnProperty() does not affect Object
}
```

Es kann auch mit [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) verwendet werden. Diese erben nicht von `Object.prototype` und daher ist `hasOwnProperty()` unzugänglich.

```js
const foo = Object.create(null);
foo.prop = "exists";
if (Object.hasOwn(foo, "prop")) {
  console.log(foo.prop); // true - works irrespective of how the object is created.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.hasOwn` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [es-shims Polyfill von `Object.hasOwn`](https://www.npmjs.com/package/object.hasown)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
