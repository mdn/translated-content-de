---
title: Object.prototype.hasOwnProperty()
short-title: hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`hasOwnProperty()`** Methode von {{jsxref("Object")}} Instanzen gibt einen booleschen Wert zurück, der angibt, ob dieses Objekt die angegebene Eigenschaft als eigene Eigenschaft hat (im Gegensatz zum Erben davon).

> [!NOTE]
> {{jsxref("Object.hasOwn()")}} wird über `hasOwnProperty()` empfohlen, in Browsern, die es unterstützen.

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
  - : Der {{jsxref("String")}} Name oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) der zu testenden Eigenschaft.

### Rückgabewert

Gibt `true` zurück, wenn das Objekt die angegebene Eigenschaft als eigene Eigenschaft hat; andernfalls `false`.

## Beschreibung

Die **`hasOwnProperty()`** Methode gibt `true` zurück, wenn die angegebene Eigenschaft eine direkte Eigenschaft des Objekts ist — auch wenn der Wert `null` oder `undefined` ist. Die Methode gibt `false` zurück, wenn die Eigenschaft geerbt oder gar nicht deklariert wurde. Im Gegensatz zum {{jsxref("Operators/in", "in")}} Operator prüft diese Methode nicht die angegebene Eigenschaft in der Prototypen-Kette des Objekts.

Die Methode kann auf _den meisten_ JavaScript-Objekten aufgerufen werden, da die meisten Objekte von {{jsxref("Object")}} abstammen und daher dessen Methoden erben. Zum Beispiel ist {{jsxref("Array")}} ein {{jsxref("Object")}}, sodass Sie die `hasOwnProperty()` Methode verwenden können, um zu prüfen, ob ein Index existiert:

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
fruits.hasOwnProperty(3); // true ('Orange')
fruits.hasOwnProperty(4); // false - not defined
```

Die Methode wird in Objekten, in denen sie neu implementiert wird, oder bei [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) (da diese nicht von `Object.prototype` erben) nicht verfügbar sein. Beispiele für diese Fälle werden unten angegeben.

## Beispiele

### Verwendung von hasOwnProperty zum Testen der Existenz einer eigenen Eigenschaft

Der folgende Code zeigt, wie bestimmt werden kann, ob das `example` Objekt eine Eigenschaft namens `prop` enthält.

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

Das folgende Beispiel unterscheidet zwischen direkten Eigenschaften und Eigenschaften, die über die Prototypen-Kette geerbt werden:

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

### Iteration über die Eigenschaften eines Objekts

Das folgende Beispiel zeigt, wie über die aufzählbaren Eigenschaften eines Objekts iteriert wird, ohne auf geerbte Eigenschaften zuzugreifen.

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

Beachten Sie, dass die {{jsxref("Statements/for...in", "for...in")}} Schleife nur über aufzählbare Elemente iteriert: Das Fehlen von nicht aufzählbaren Eigenschaften im Durchlauf impliziert nicht, dass `hasOwnProperty` selbst strikt auf aufzählbare Elemente beschränkt ist. Sie können über nicht aufzählbare Eigenschaften mit {{jsxref("Object.getOwnPropertyNames()")}} iterieren.

### Verwendung von hasOwnProperty als Eigenschaftenname

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

Der empfohlene Weg, dieses Problem zu umgehen, besteht darin, stattdessen {{jsxref("Object.hasOwn()")}} zu verwenden (in Browsern, die dies unterstützen). Andere Alternativen beinhalten die Verwendung einer _externen_ `hasOwnProperty`:

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

### Objekte, die mit Object.create(null) erstellt wurden

[`null`-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erben nicht von `Object.prototype`, wodurch `hasOwnProperty()` nicht zugänglich ist.

```js
const foo = Object.create(null);
foo.prop = "exists";
foo.hasOwnProperty("prop"); // Uncaught TypeError: foo.hasOwnProperty is not a function
```

Die Lösungen in diesem Fall sind dieselben wie im vorherigen Abschnitt: Verwenden Sie nach Möglichkeit {{jsxref("Object.hasOwn()")}}, andernfalls verwenden Sie die `hasOwnProperty()` eines externen Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.hasOwn()")}}
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Vererbung und die Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
