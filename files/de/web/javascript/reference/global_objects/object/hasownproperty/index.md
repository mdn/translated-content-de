---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
l10n:
  sourceCommit: 619eb04efb7c6171fd4385fd4ba926805ee08a35
---

{{JSRef}}

Die **`hasOwnProperty()`** Methode von {{jsxref("Object")}} Instanzen gibt einen boolean zurück, der angibt, ob dieses Objekt die angegebene Eigenschaft als eigene Eigenschaft besitzt (im Gegensatz zum Erben der Eigenschaft).

> **Hinweis:** {{jsxref("Object.hasOwn()")}} wird über `hasOwnProperty()` empfohlen, in Browsern, die es unterstützen.

{{EmbedInteractiveExample("pages/js/object-prototype-hasownproperty.html")}}

## Syntax

```js-nolint
hasOwnProperty(prop)
```

### Parameter

- `prop`
  - : Der {{jsxref("String")}} Name oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) der zu testenden Eigenschaft.

### Rückgabewert

Gibt `true` zurück, wenn das Objekt die angegebene Eigenschaft als eigene Eigenschaft besitzt; `false` ansonsten.

## Beschreibung

Die **`hasOwnProperty()`** Methode gibt `true` zurück, wenn die angegebene Eigenschaft eine direkte Eigenschaft des Objekts ist – selbst wenn der Wert `null` oder `undefined` ist. Die Methode gibt `false` zurück, wenn die Eigenschaft geerbt oder gar nicht deklariert wurde. Im Gegensatz zum {{jsxref("Operators/in", "in")}} Operator überprüft diese Methode nicht die angegebene Eigenschaft in der Prototypenkette des Objekts.

Die Methode kann auf _den meisten_ JavaScript-Objekten aufgerufen werden, weil die meisten Objekte von {{jsxref("Object")}} abstammen und daher seine Methoden erben. Zum Beispiel ist {{jsxref("Array")}} ein {{jsxref("Object")}}, sodass Sie die `hasOwnProperty()` Methode verwenden können, um zu überprüfen, ob ein Index existiert:

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
fruits.hasOwnProperty(3); // true ('Orange')
fruits.hasOwnProperty(4); // false - nicht definiert
```

Die Methode wird in Objekten, wo sie neu implementiert wird, oder bei [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) nicht verfügbar sein (da diese nicht von `Object.prototype` erben). Beispiele für diese Fälle sind unten gegeben.

## Beispiele

### Verwendung von hasOwnProperty zum Testen der Existenz einer eigenen Eigenschaft

Der folgende Code zeigt, wie man feststellt, ob das `example` Objekt eine Eigenschaft namens `prop` enthält.

```js
const example = {};
example.hasOwnProperty("prop"); // false

example.prop = "exists";
example.hasOwnProperty("prop"); // true - 'prop' wurde definiert

example.prop = null;
example.hasOwnProperty("prop"); // true - eigene Eigenschaft existiert mit Wert von null

example.prop = undefined;
example.hasOwnProperty("prop"); // true - eigene Eigenschaft existiert mit Wert von undefined
```

### Direkte vs. geerbte Eigenschaften

Das folgende Beispiel unterscheidet zwischen direkten Eigenschaften und Eigenschaften, die durch die Prototypenkette vererbt werden:

```js
const example = {};
example.prop = "exists";

// `hasOwnProperty` gibt nur für direkte Eigenschaften true zurück:
example.hasOwnProperty("prop"); // true
example.hasOwnProperty("toString"); // false
example.hasOwnProperty("hasOwnProperty"); // false

// Der `in` Operator gibt true für direkte oder geerbte Eigenschaften zurück:
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
    console.log(name); // toString oder etwas anderes
  }
}
```

Beachten Sie, dass die {{jsxref("Statements/for...in", "for...in")}} Schleife nur aufzählbare Elemente durchläuft: das Fehlen von nicht aufzählbaren Eigenschaften, die aus der Schleife ausgeschlossen sind, impliziert nicht, dass `hasOwnProperty` selbst strikt auf aufzählbare Elemente beschränkt ist. Sie können über nicht aufzählbare Eigenschaften iterieren mit {{jsxref("Object.getOwnPropertyNames()")}}.

### Verwendung von hasOwnProperty als Eigenschaftsname

JavaScript schützt den Eigenschaftsnamen `hasOwnProperty` nicht; ein Objekt, das eine Eigenschaft mit diesem Namen hat, kann falsche Ergebnisse zurückgeben:

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "Here be dragons",
};

foo.hasOwnProperty("bar"); // Neuimplementierung gibt immer false zurück
```

Der empfohlene Weg, um dieses Problem zu überwinden, ist statt dessen {{jsxref("Object.hasOwn()")}} zu verwenden (in Browsern, die es unterstützen). Andere Alternativen beinhalten die Verwendung einer _externen_ `hasOwnProperty`:

```js
const foo = { bar: "Here be dragons" };

// Verwenden Sie die Object.hasOwn() Methode - empfohlen
Object.hasOwn(foo, "bar"); // true

// Verwenden Sie die hasOwnProperty Eigenschaft aus dem Object-Prototyp
Object.prototype.hasOwnProperty.call(foo, "bar"); // true

// Verwenden Sie die hasOwnProperty eines anderen Objekts und rufen Sie es mit 'this' auf foo auf
({}).hasOwnProperty.call(foo, "bar"); // true
```

Beachten Sie, dass in den ersten beiden Fällen keine neu erstellten Objekte vorhanden sind.

### Objekte, die mit Object.create(null) erstellt wurden

[`null`-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erben nicht von `Object.prototype`, wodurch `hasOwnProperty()` unzugänglich wird.

```js
const foo = Object.create(null);
foo.prop = "exists";
foo.hasOwnProperty("prop"); // Uncaught TypeError: foo.hasOwnProperty is not a function
```

Die Lösungen in diesem Fall sind die gleichen wie im vorherigen Abschnitt: Verwenden Sie bevorzugt {{jsxref("Object.hasOwn()")}}, andernfalls verwenden Sie ein externes Objekt's `hasOwnProperty()`.

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
- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
