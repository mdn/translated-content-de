---
title: Object.prototype.hasOwnProperty()
short-title: hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Die Methode **`hasOwnProperty()`** von {{jsxref("Object")}} Instanzen gibt einen boolean zurück, der anzeigt, ob dieses
Objekt die angegebene Eigenschaft als eigene Eigenschaft hat (im Gegensatz zu einer geerbten Eigenschaft).

> [!NOTE] > {{jsxref("Object.hasOwn()")}} wird gegenüber
> `hasOwnProperty()` bevorzugt empfohlen, in Browsern, wo es unterstützt wird.

{{InteractiveExample("JavaScript Demo: Object.prototype.hasOwnProperty()")}}

```js interactive-example
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty("property1"));
// Expected output: true

console.log(object1.hasOwnProperty("toString"));
// Expected output: false

console.log(object1.hasOwnProperty("hasOwnProperty"));
// Expected output: false
```

## Syntax

```js-nolint
hasOwnProperty(prop)
```

### Parameter

- `prop`
  - : Der {{jsxref("String")}}-Name oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) der zu testenden Eigenschaft.

### Rückgabewert

Gibt `true` zurück, wenn das Objekt die angegebene Eigenschaft als eigene Eigenschaft hat; andernfalls `false`.

## Beschreibung

Die Methode **`hasOwnProperty()`** gibt `true` zurück, wenn die angegebene Eigenschaft eine
direkte Eigenschaft des Objekts ist — selbst wenn der Wert `null` oder `undefined` ist. Die
Methode gibt `false` zurück, wenn die Eigenschaft geerbt ist oder überhaupt nicht deklariert wurde. Anders als der {{jsxref("Operators/in", "in")}}-Operator,
prüft diese Methode nicht nach der angegebenen Eigenschaft in der Prototypkette des Objekts.

Die Methode kann auf _den meisten_ JavaScript-Objekten aufgerufen werden, da die meisten Objekte
von {{jsxref("Object")}} abstammen und daher ihre Methoden erben. Zum Beispiel ist {{jsxref("Array")}} ein {{jsxref("Object")}}, daher können Sie
die `hasOwnProperty()`-Methode verwenden, um zu überprüfen, ob ein Index existiert:

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
fruits.hasOwnProperty(3); // true ('Orange')
fruits.hasOwnProperty(4); // false - not defined
```

Die Methode ist nicht verfügbar in Objekten, bei denen sie neu implementiert wurde, oder bei
[`null`-Prototype-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) (da diese nicht von
`Object.prototype` erben). Beispiele für diese Fälle werden unten gegeben.

## Beispiele

### Verwendung von hasOwnProperty, um das Vorhandensein einer eigenen Eigenschaft zu testen

Der folgende Code zeigt, wie man feststellt, ob das `example`-Objekt eine Eigenschaft namens `prop` enthält.

```js
const example = {};
example.hasOwnProperty("prop"); // false

example.prop = "exists";
example.hasOwnProperty("prop"); // true - 'prop' has been defined

example.prop = null;
example.hasOwnProperty("prop"); // true - own property exists with value of null

example.prop = undefined;
example.hasOwnProperty("prop"); // true - own property exists with value of undefined
```

### Direkte vs. geerbte Eigenschaften

Das folgende Beispiel unterscheidet zwischen direkten Eigenschaften und durch die Prototypkette geerbten Eigenschaften:

```js
const example = {};
example.prop = "exists";

// `hasOwnProperty` will only return true for direct properties:
example.hasOwnProperty("prop"); // true
example.hasOwnProperty("toString"); // false
example.hasOwnProperty("hasOwnProperty"); // false

// The `in` operator will return true for direct or inherited properties:
"prop" in example; // true
"toString" in example; // true
"hasOwnProperty" in example; // true
```

### Iterieren über die Eigenschaften eines Objekts

Das folgende Beispiel zeigt, wie man über die aufzählbaren Eigenschaften eines
Objekts iteriert, ohne geerbte Eigenschaften auszuführen.

```js
const buz = {
  fog: "stack",
};

for (const name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log(`this is fog (${name}) for sure. Value: ${buz[name]}`);
  } else {
    console.log(name); // toString or something else
  }
}
```

Beachten Sie, dass die {{jsxref("Statements/for...in", "for...in")}}-Schleife
nur aufzählbare Elemente iteriert: Das Fehlen von nicht-auflistbaren Eigenschaften in der Schleife bedeutet nicht, dass `hasOwnProperty` selbst streng auf
aufzählbare Elemente beschränkt ist. Sie können über nicht-auflistbare Eigenschaften mit
{{jsxref("Object.getOwnPropertyNames()")}} iterieren.

### Verwendung von hasOwnProperty als Eigenschaftsname

JavaScript schützt den Eigenschaftsnamen `hasOwnProperty` nicht; ein Objekt, das eine Eigenschaft mit diesem Namen hat, kann falsche Ergebnisse zurückgeben:

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "Here be dragons",
};

foo.hasOwnProperty("bar"); // re-implementation always returns false
```

Die empfohlene Methode, um dieses Problem zu überwinden, ist die Verwendung von
{{jsxref("Object.hasOwn()")}} (in Browsern, die es unterstützen). Andere
Alternativen umfassen die Verwendung eines _externen_ `hasOwnProperty`:

```js
const foo = { bar: "Here be dragons" };

// Use Object.hasOwn() method - recommended
Object.hasOwn(foo, "bar"); // true

// Use the hasOwnProperty property from the Object prototype
Object.prototype.hasOwnProperty.call(foo, "bar"); // true

// Use another Object's hasOwnProperty
// and call it with 'this' set to foo
({}).hasOwnProperty.call(foo, "bar"); // true
```

Beachten Sie, dass in den ersten beiden Fällen keine neuen Objekte erstellt werden.

### Objekte erstellt mit Object.create(null)

[`null`-Prototype-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erben nicht
von `Object.prototype`, wodurch `hasOwnProperty()` unzugänglich wird.

```js
const foo = Object.create(null);
foo.prop = "exists";
foo.hasOwnProperty("prop"); // Uncaught TypeError: foo.hasOwnProperty is not a function
```

Die Lösungen in diesem Fall sind dieselben wie im vorherigen Abschnitt: Verwenden Sie
{{jsxref("Object.hasOwn()")}}, falls verfügbar, andernfalls verwenden Sie eine
externe Objekts `hasOwnProperty()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.hasOwn()")}}
- [Enumerierbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
