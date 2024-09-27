---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
l10n:
  sourceCommit: 619eb04efb7c6171fd4385fd4ba926805ee08a35
---

{{JSRef}}

Die **`hasOwnProperty()`**-Methode von {{jsxref("Object")}}-Instanzen gibt einen booleschen Wert zurück, der angibt, ob dieses Objekt die angegebene Eigenschaft als eigene Eigenschaft hat (im Gegensatz zu einer geerbten).

> **Note:** {{jsxref("Object.hasOwn()")}} wird gegenüber `hasOwnProperty()` empfohlen, in Browsern, die es unterstützen.

{{EmbedInteractiveExample("pages/js/object-prototype-hasownproperty.html")}}

## Syntax

```js-nolint
hasOwnProperty(prop)
```

### Parameter

- `prop`
  - : Der {{jsxref("String")}}-Name oder das [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) der zu testenden Eigenschaft.

### Rückgabewert

Gibt `true` zurück, wenn das Objekt die angegebene Eigenschaft als eigene Eigenschaft hat; andernfalls `false`.

## Beschreibung

Die **`hasOwnProperty()`**-Methode gibt `true` zurück, wenn die angegebene Eigenschaft eine direkte Eigenschaft des Objekts ist — auch wenn der Wert `null` oder `undefined` ist. Die Methode gibt `false` zurück, wenn die Eigenschaft geerbt oder überhaupt nicht deklariert wurde. Im Gegensatz zum {{jsxref("Operators/in", "in")}}-Operator überprüft diese Methode nicht die angegebene Eigenschaft in der Prototypen-Kette des Objekts.

Die Methode kann auf _den meisten_ JavaScript-Objekten aufgerufen werden, da die meisten Objekte von {{jsxref("Object")}} abstammen und daher seine Methoden erben. Zum Beispiel ist {{jsxref("Array")}} ein {{jsxref("Object")}}, sodass Sie die `hasOwnProperty()`-Methode verwenden können, um zu überprüfen, ob ein Index existiert:

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
fruits.hasOwnProperty(3); // true ('Orange')
fruits.hasOwnProperty(4); // false - not defined
```

Die Methode ist nicht verfügbar in Objekten, in denen sie neu implementiert oder in [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), da diese nicht von `Object.prototype` erben. Beispiele für diese Fälle sind unten angegeben.

## Beispiele

### Verwenden von hasOwnProperty zur Prüfung des Vorhandenseins einer eigenen Eigenschaft

Der folgende Code zeigt, wie festgestellt werden kann, ob das `example`-Objekt eine Eigenschaft mit dem Namen `prop` enthält.

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

Das folgende Beispiel unterscheidet zwischen direkten Eigenschaften und Eigenschaften, die über die Prototypen-Kette geerbt wurden:

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

Das folgende Beispiel zeigt, wie man über die aufzählbaren Eigenschaften eines Objekts iteriert, ohne geerbte Eigenschaften auszuführen.

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

Beachten Sie, dass die {{jsxref("Statements/for...in", "for...in")}}-Schleife nur aufzählbare Elemente durchläuft: Das Fehlen von nicht-aufrufbaren Eigenschaften, die aus der Schleife entfernt werden, impliziert nicht, dass `hasOwnProperty` selbst streng auf aufzählbare Elemente beschränkt ist. Sie können über nicht-aufrufbare Eigenschaften mit {{jsxref("Object.getOwnPropertyNames()")}} iterieren.

### Verwendung von hasOwnProperty als Eigenschaftsname

JavaScript schützt den Eigenschaftsnamen `hasOwnProperty` nicht; ein Objekt, das eine Eigenschaft mit diesem Namen besitzt, kann falsche Ergebnisse zurückgeben:

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "Here be dragons",
};

foo.hasOwnProperty("bar"); // re-implementation always returns false
```

Der empfohlene Weg, dieses Problem zu umgehen, besteht darin, stattdessen {{jsxref("Object.hasOwn()")}} zu verwenden (in Browsern, die es unterstützen). Andere Alternativen sind die Verwendung eines _externen_ `hasOwnProperty`:

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

Beachten Sie, dass in den ersten beiden Fällen keine neu erstellten Objekte vorhanden sind.

### Objekte, die mit Object.create(null) erstellt wurden

[`null`-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erben nicht von `Object.prototype`, wodurch `hasOwnProperty()` nicht zugänglich ist.

```js
const foo = Object.create(null);
foo.prop = "exists";
foo.hasOwnProperty("prop"); // Uncaught TypeError: foo.hasOwnProperty is not a function
```

Die Lösungen in diesem Fall sind die gleichen wie im vorherigen Abschnitt: Verwenden Sie vorzugsweise {{jsxref("Object.hasOwn()")}}, andernfalls verwenden Sie ein externes Objekt mit `hasOwnProperty()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.hasOwn()")}}
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Vererbung und die Prototypen-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
