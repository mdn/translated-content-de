---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Methode **`Object.hasOwn()`** gibt `true` zurück, wenn das angegebene Objekt die angegebene Eigenschaft als _eigene_ Eigenschaft besitzt.
Wenn die Eigenschaft vererbt wird oder nicht existiert, gibt die Methode `false` zurück.

> **Note:** `Object.hasOwn()` ist als Ersatz für {{jsxref("Object.prototype.hasOwnProperty()")}} gedacht.

{{EmbedInteractiveExample("pages/js/object-hasown.html")}}

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

`true`, wenn das angegebene Objekt die angegebene Eigenschaft direkt definiert hat.
Andernfalls `false`.

## Beschreibung

Die Methode **`Object.hasOwn()`** gibt `true` zurück, wenn die angegebene Eigenschaft eine
direkte Eigenschaft des Objekts ist — selbst wenn der Eigenschaftswert `null` oder `undefined` ist.
Die Methode gibt `false` zurück, wenn die Eigenschaft vererbt wird oder überhaupt nicht deklariert ist.
Im Gegensatz zum {{jsxref("Operators/in", "in")}} Operator überprüft diese
Methode nicht, ob die angegebene Eigenschaft in der Prototypenkette des Objekts vorhanden ist.

Sie wird über {{jsxref("Object.prototype.hasOwnProperty()")}} empfohlen, da
sie mit [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und mit Objekten funktioniert, die die geerbte Methode `hasOwnProperty()` überschrieben haben. Während es möglich ist,
diese Probleme zu umgehen, indem `Object.prototype.hasOwnProperty()` auf einem
externen Objekt aufgerufen wird, ist `Object.hasOwn()` intuitiver.

## Beispiele

### Verwendung von hasOwn zum Testen des Vorhandenseins einer Eigenschaft

Der folgende Code zeigt, wie man bestimmt, ob das `example` Objekt eine Eigenschaft namens `prop` enthält.

```js
const example = {};
Object.hasOwn(example, "prop"); // false - 'prop' wurde nicht definiert

example.prop = "exists";
Object.hasOwn(example, "prop"); // true - 'prop' wurde definiert

example.prop = null;
Object.hasOwn(example, "prop"); // true - eigene Eigenschaft existiert mit Wert null

example.prop = undefined;
Object.hasOwn(example, "prop"); // true - eigene Eigenschaft existiert mit Wert undefined
```

### Direkte vs. vererbte Eigenschaften

Das folgende Beispiel unterscheidet zwischen direkten Eigenschaften und Eigenschaften, die über die Prototypenkette vererbt werden:

```js
const example = {};
example.prop = "exists";

// `hasOwn` gibt nur true für direkte Eigenschaften zurück:
Object.hasOwn(example, "prop"); // true
Object.hasOwn(example, "toString"); // false
Object.hasOwn(example, "hasOwnProperty"); // false

// Der `in` Operator gibt true für direkte oder vererbte Eigenschaften zurück:
"prop" in example; // true
"toString" in example; // true
"hasOwnProperty" in example; // true
```

### Iterieren über die Eigenschaften eines Objekts

Um über die aufzählbaren Eigenschaften eines Objekts zu iterieren, _sollten_ Sie:

```js
const example = { foo: true, bar: true };
for (const name of Object.keys(example)) {
  // …
}
```

Aber wenn Sie `for...in` verwenden müssen, können Sie `Object.hasOwn()` verwenden, um die vererbten Eigenschaften zu überspringen:

```js
const example = { foo: true, bar: true };
for (const name in example) {
  if (Object.hasOwn(example, name)) {
    // …
  }
}
```

### Überprüfen, ob ein Array-Index existiert

Die Elemente eines {{jsxref("Array")}}s sind als direkte Eigenschaften definiert, sodass
Sie die Methode `hasOwn()` verwenden können, um zu überprüfen, ob ein bestimmter Index existiert:

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false - nicht definiert
```

### Problematische Fälle für hasOwnProperty

Dieser Abschnitt zeigt, dass `hasOwn()` gegen die Probleme immun ist, die
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
  console.log(foo.bar); // true - die Neuimplementierung von hasOwnProperty() beeinflusst Object nicht
}
```

Es kann auch mit [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) verwendet werden. Diese erben
nicht von `Object.prototype`, sodass `hasOwnProperty()` nicht zugänglich ist.

```js
const foo = Object.create(null);
foo.prop = "exists";
if (Object.hasOwn(foo, "prop")) {
  console.log(foo.prop); // true - funktioniert unabhängig davon, wie das Objekt erstellt wurde.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.hasOwn` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
