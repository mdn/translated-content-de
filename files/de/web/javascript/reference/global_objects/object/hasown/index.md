---
title: Object.hasOwn()
short-title: hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Die statische Methode **`Object.hasOwn()`** gibt `true` zurück, wenn das angegebene Objekt die festgelegte Eigenschaft als _eigene_ Eigenschaft besitzt. Wenn die Eigenschaft geerbt ist oder nicht existiert, gibt die Methode `false` zurück.

> [!NOTE] > `Object.hasOwn()` ist als Ersatz für {{jsxref("Object.prototype.hasOwnProperty()")}} gedacht.

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
  - : Die zu testende JavaScript-Objektinstanz.
- `prop`
  - : Der {{jsxref("String")}}-Name oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) der zu testenden Eigenschaft.

### Rückgabewert

`true`, wenn das angegebene Objekt die angegebene Eigenschaft direkt definiert hat. Andernfalls `false`.

## Beschreibung

Die Methode `Object.hasOwn()` gibt `true` zurück, wenn die angegebene Eigenschaft eine direkte Eigenschaft des Objekts ist — selbst wenn der Eigenschaftswert `null` oder `undefined` ist. Die Methode gibt `false` zurück, wenn die Eigenschaft geerbt ist oder überhaupt nicht deklariert wurde. Im Gegensatz zum {{jsxref("Operators/in", "in")}}-Operator überprüft diese Methode nicht, ob die angegebene Eigenschaft in der Prototypen-Kette des Objekts existiert.

Sie wird gegenüber {{jsxref("Object.prototype.hasOwnProperty()")}} empfohlen, da sie mit [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und mit Objekten funktioniert, die die geerbte Methode `hasOwnProperty()` überschrieben haben. Während es möglich ist, diese Probleme zu umgehen, indem man `Object.prototype.hasOwnProperty()` bei einem anderen Objekt aufruft (wie `Object.prototype.hasOwnProperty.call(obj, prop)`), ist `Object.hasOwn()` intuitiver und prägnanter.

## Beispiele

### Verwendung von Object.hasOwn(), um das Vorhandensein einer Eigenschaft zu testen

Der folgende Code zeigt, wie man bestimmen kann, ob das `example`-Objekt eine Eigenschaft namens `prop` enthält.

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

Das folgende Beispiel unterscheidet zwischen direkten Eigenschaften und Eigenschaften, die durch die Prototypen-Kette geerbt wurden:

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

Um über die aufzählbaren Eigenschaften eines Objekts zu iterieren, _sollten_ Sie verwenden:

```js
const example = { foo: true, bar: true };
for (const name of Object.keys(example)) {
  // …
}
```

Aber wenn Sie `for...in` verwenden müssen, können Sie `Object.hasOwn()` verwenden, um die geerbten Eigenschaften zu überspringen:

```js
const example = { foo: true, bar: true };
for (const name in example) {
  if (Object.hasOwn(example, name)) {
    // …
  }
}
```

### Überprüfung, ob ein Array-Index existiert

Die Elemente eines {{jsxref("Array")}} sind als direkte Eigenschaften definiert, daher können Sie die Methode `hasOwn()` verwenden, um zu überprüfen, ob ein bestimmter Index existiert:

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false - not defined
```

### Problematische Fälle für hasOwnProperty()

Dieser Abschnitt zeigt, dass `Object.hasOwn()` gegen die Probleme immun ist, die `hasOwnProperty()` betreffen. Erstens kann es mit Objekten verwendet werden, die `hasOwnProperty()` neu implementiert haben. Im folgenden Beispiel meldet die neu implementierte Methode `hasOwnProperty()` für _jede_ Eigenschaft false, aber das Verhalten von `Object.hasOwn()` bleibt unbeeinträchtigt:

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "The dragons be out of office",
};

console.log(foo.hasOwnProperty("bar")); // false

console.log(Object.hasOwn(foo, "bar")); // true
```

Es kann auch mit [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) verwendet werden. Diese erben nicht von `Object.prototype`, und daher ist `hasOwnProperty()` unzugänglich.

```js
const foo = Object.create(null);
foo.prop = "exists";

console.log(foo.hasOwnProperty("prop"));
// Uncaught TypeError: foo.hasOwnProperty is not a function

console.log(Object.hasOwn(foo, "prop")); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.hasOwn` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [es-shims Polyfill von `Object.hasOwn`](https://www.npmjs.com/package/object.hasown)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Vererbung und die Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
