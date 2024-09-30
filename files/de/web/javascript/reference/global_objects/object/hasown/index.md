---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Methode **`Object.hasOwn()`** gibt `true` zurück, wenn das angegebene Objekt die angegebene Eigenschaft als seine _eigene_ Eigenschaft hat.
Wenn die Eigenschaft vererbt ist oder nicht existiert, gibt die Methode `false` zurück.

> **Note:** `Object.hasOwn()` ist als Ersatz für {{jsxref("Object.prototype.hasOwnProperty()")}} gedacht.

{{EmbedInteractiveExample("pages/js/object-hasown.html")}}

## Syntax

```js-nolint
Object.hasOwn(obj, prop)
```

### Parameter

- `obj`
  - : Die zu prüfende JavaScript-Objektinstanz.
- `prop`
  - : Der {{jsxref("String")}}-Name oder das [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) der zu prüfenden Eigenschaft.

### Rückgabewert

`true`, wenn das angegebene Objekt die angegebene Eigenschaft direkt definiert hat.
Andernfalls `false`

## Beschreibung

Die Methode **`Object.hasOwn()`** gibt `true` zurück, wenn die angegebene Eigenschaft
eine direkte Eigenschaft des Objekts ist – auch wenn der Eigenschaftswert `null` oder `undefined` ist.
Die Methode gibt `false` zurück, wenn die Eigenschaft geerbt ist oder überhaupt nicht deklariert wurde.
Im Gegensatz zum {{jsxref("Operators/in", "in")}}-Operator prüft diese
Methode nicht, ob die angegebene Eigenschaft in der Prototypkette des Objekts vorhanden ist.

Es wird empfohlen, `Object.hasOwn()` anstelle von {{jsxref("Object.prototype.hasOwnProperty()")}} zu verwenden, da
es mit [`null`-Prototyp Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und mit Objekten funktioniert, die
die geerbte Methode `hasOwnProperty()` überschrieben haben. Obwohl es möglich ist,
diese Probleme zu umgehen, indem `Object.prototype.hasOwnProperty()` auf einem
externen Objekt aufgerufen wird, ist `Object.hasOwn()` intuitiver.

## Beispiele

### Mit hasOwn das Vorhandensein einer Eigenschaft testen

Der folgende Code zeigt, wie zu bestimmen ist, ob das `example`-Objekt eine Eigenschaft namens `prop` enthält.

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

Das folgende Beispiel unterscheidet zwischen direkten Eigenschaften und über die Prototypkette geerbten Eigenschaften:

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

Um über die aufzählbaren Eigenschaften eines Objekts zu iterieren, _sollten_ Sie verwenden:

```js
const example = { foo: true, bar: true };
for (const name of Object.keys(example)) {
  // …
}
```

Aber wenn Sie `for...in` verwenden müssen, können Sie `Object.hasOwn()` verwenden, um geerbte Eigenschaften zu überspringen:

```js
const example = { foo: true, bar: true };
for (const name in example) {
  if (Object.hasOwn(example, name)) {
    // …
  }
}
```

### Prüfen, ob ein Array-Index existiert

Die Elemente eines {{jsxref("Array")}} sind als direkte Eigenschaften definiert, sodass
Sie die `hasOwn()`-Methode verwenden können, um zu prüfen, ob ein bestimmter Index existiert:

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false - not defined
```

### Problematische Fälle für hasOwnProperty

Dieser Abschnitt zeigt, dass `hasOwn()` immun gegen die Probleme ist, die
`hasOwnProperty` betreffen. Erstens kann es mit Objekten verwendet werden, die
`hasOwnProperty()` neu implementiert haben:

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

Es kann auch mit [`null`-Prototyp Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) verwendet werden. Diese erben
nicht von `Object.prototype`, und daher ist `hasOwnProperty()` nicht zugänglich.

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
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
