---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`hasOwnProperty()`**-Methode von {{jsxref("Object")}}-Instanzen gibt einen booleschen Wert zurück, der angibt, ob dieses Objekt die angegebene Eigenschaft als eigene Eigenschaft besitzt (im Gegensatz dazu, sie zu erben).

> **Hinweis:** {{jsxref("Object.hasOwn()")}} wird gegenüber `hasOwnProperty()` empfohlen, in Browsern, die dies unterstützen.

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
  - : Der Name der Eigenschaft als {{jsxref("String")}} oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), die getestet werden soll.

### Rückgabewert

Gibt `true` zurück, wenn das Objekt die angegebene Eigenschaft als eigene Eigenschaft besitzt; andernfalls `false`.

## Beschreibung

Die Methode **`hasOwnProperty()`** gibt `true` zurück, wenn die angegebene Eigenschaft eine direkte Eigenschaft des Objekts ist – selbst wenn der Wert `null` oder `undefined` ist. Die Methode gibt `false` zurück, wenn die Eigenschaft geerbt wurde oder überhaupt nicht deklariert ist. Im Gegensatz zum {{jsxref("Operators/in", "in")}}-Operator überprüft diese Methode nicht auf die angegebene Eigenschaft in der Prototyp-Kette des Objekts.

Die Methode kann auf den _meisten_ JavaScript-Objekten aufgerufen werden, da die meisten Objekte von {{jsxref("Object")}} abstammen und somit dessen Methoden erben. Zum Beispiel ist {{jsxref("Array")}} ein {{jsxref("Object")}}, und Sie können die Methode `hasOwnProperty()` verwenden, um zu überprüfen, ob ein Index existiert:

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
fruits.hasOwnProperty(3); // true ('Orange')
fruits.hasOwnProperty(4); // false - not defined
```

Die Methode ist nicht verfügbar in Objekten, in denen sie neu implementiert wurde, oder in [`null`-Prototype-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) (da diese nicht von `Object.prototype` erben). Beispiele für diese Fälle sind weiter unten gegeben.

## Beispiele

### Verwendung von hasOwnProperty, um das Vorhandensein einer eigenen Eigenschaft zu testen

Der folgende Code zeigt, wie man feststellen kann, ob das Objekt `example` eine Eigenschaft namens `prop` enthält.

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

Das folgende Beispiel unterscheidet zwischen direkten Eigenschaften und Eigenschaften, die über die Prototyp-Kette geerbt wurden:

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

Das folgende Beispiel zeigt, wie über die aufzählbaren Eigenschaften eines Objekts iteriert werden kann, ohne dass dabei auf geerbte Eigenschaften zugegriffen wird.

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

Beachten Sie, dass die {{jsxref("Statements/for...in", "for...in")}}-Schleife nur aufzählbare Elemente iteriert: Das Fehlen von nicht aufzählbaren Eigenschaften in der Schleife bedeutet nicht, dass `hasOwnProperty` an sich streng auf aufzählbare Elemente beschränkt ist. Sie können über nicht aufzählbare Eigenschaften mit {{jsxref("Object.getOwnPropertyNames()")}} iterieren.

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

Der empfohlene Weg, dieses Problem zu überwinden, ist die Verwendung von {{jsxref("Object.hasOwn()")}} (in unterstützenden Browsern). Andere Alternativen sind das Verwenden eines _externen_ `hasOwnProperty`:

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

### Mit Object.create(null) erstellte Objekte

[`null`-Prototype-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erben nicht von `Object.prototype`, wodurch `hasOwnProperty()` nicht verfügbar ist.

```js
const foo = Object.create(null);
foo.prop = "exists";
foo.hasOwnProperty("prop"); // Uncaught TypeError: foo.hasOwnProperty is not a function
```

Die Lösungen in diesem Fall sind die gleichen wie im vorherigen Abschnitt: Verwenden Sie bevorzugt {{jsxref("Object.hasOwn()")}}, andernfalls verwenden Sie ein externes Objekt, um auf `hasOwnProperty()` zuzugreifen.

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
- [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
