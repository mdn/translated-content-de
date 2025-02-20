---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Object.hasOwn()`** gibt `true` zurück, wenn das angegebene Objekt die angegebene Eigenschaft als _eigene_ Eigenschaft besitzt. Falls die Eigenschaft geerbt ist oder nicht existiert, gibt die Methode `false` zurück.

> **Hinweis:** `Object.hasOwn()` ist als Ersatz für {{jsxref("Object.prototype.hasOwnProperty()")}} gedacht.

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
  - : Die JavaScript-Objektinstanz, die überprüft werden soll.
- `prop`
  - : Der {{jsxref("String")}}-Name oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) der zu überprüfenden Eigenschaft.

### Rückgabewert

`true`, wenn das angegebene Objekt die angegebene Eigenschaft direkt definiert hat. Andernfalls `false`.

## Beschreibung

Die Methode **`Object.hasOwn()`** gibt `true` zurück, wenn die angegebene Eigenschaft eine direkte Eigenschaft des Objekts ist — selbst wenn der Eigenschaftswert `null` oder `undefined` ist. Die Methode gibt `false` zurück, wenn die Eigenschaft geerbt ist oder überhaupt nicht existiert. Im Gegensatz zum {{jsxref("Operators/in", "in")}}-Operator überprüft diese Methode nicht, ob die angegebene Eigenschaft in der Prototypkette des Objekts vorhanden ist.

Die Methode wird gegenüber {{jsxref("Object.prototype.hasOwnProperty()")}} empfohlen, da sie mit [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und Objekten funktioniert, die die geerbte Methode `hasOwnProperty()` überschrieben haben. Während es möglich ist, diese Probleme zu umgehen, indem `Object.prototype.hasOwnProperty()` auf einem externen Objekt aufgerufen wird, ist `Object.hasOwn()` intuitiver.

## Beispiele

### Verwendung von hasOwn zum Überprüfen auf die Existenz einer Eigenschaft

Der folgende Code zeigt, wie überprüft werden kann, ob das Objekt `example` eine Eigenschaft namens `prop` enthält.

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

### Direkte vs. geerbte Eigenschaften

Das folgende Beispiel unterscheidet zwischen direkten Eigenschaften und Eigenschaften, die über die Prototypkette geerbt wurden:

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

### Iteration über die Eigenschaften eines Objekts

Um über die aufzählbaren Eigenschaften eines Objekts zu iterieren, _sollten_ Sie Folgendes verwenden:

```js
const example = { foo: true, bar: true };
for (const name of Object.keys(example)) {
  // …
}
```

Wenn Sie jedoch `for...in` verwenden müssen, können Sie `Object.hasOwn()` nutzen, um die geerbten Eigenschaften zu überspringen:

```js
const example = { foo: true, bar: true };
for (const name in example) {
  if (Object.hasOwn(example, name)) {
    // …
  }
}
```

### Überprüfen, ob ein Array-Index existiert

Die Elemente eines {{jsxref("Array")}} sind als direkte Eigenschaften definiert, daher können Sie die Methode `hasOwn()` verwenden, um zu überprüfen, ob ein bestimmter Index existiert:

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false - not defined
```

### Problematische Fälle für hasOwnProperty

In diesem Abschnitt wird gezeigt, dass `hasOwn()` immun gegen die Probleme ist, die `hasOwnProperty` betreffen. Erstens kann es mit Objekten verwendet werden, die `hasOwnProperty()` neu implementiert haben:

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

Es kann auch mit [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) verwendet werden. Diese erben nicht von `Object.prototype` und haben daher keinen Zugriff auf `hasOwnProperty()`.

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
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- [Enumerierbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
