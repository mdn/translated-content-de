---
title: Object.hasOwn()
short-title: hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Object.hasOwn()`** gibt `true` zurück, wenn das angegebene Objekt die betreffende Eigenschaft als _eigene_ Eigenschaft besitzt. Wenn die Eigenschaft geerbt wurde oder nicht existiert, gibt die Methode `false` zurück.

> [!NOTE]
> `Object.hasOwn()` ist als Ersatz für {{jsxref("Object.prototype.hasOwnProperty()")}} vorgesehen.

{{InteractiveExample("JavaScript Demo: Object.hasOwn()")}}

```js interactive-example
const object = {
  prop: "exists",
};

console.log(Object.hasOwn(object, "prop"));
// Expected output: true

console.log(Object.hasOwn(object, "toString"));
// Expected output: false

console.log(Object.hasOwn(object, "undeclaredPropertyValue"));
// Expected output: false
```

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

`true`, wenn die angegebene Eigenschaft direkt auf dem angegebenen Objekt definiert ist. Andernfalls `false`.

## Beschreibung

Die Methode `Object.hasOwn()` gibt `true` zurück, wenn die angegebene Eigenschaft eine direkte Eigenschaft des Objekts ist – auch wenn ihr Wert `null` oder `undefined` ist. Die Methode gibt `false` zurück, wenn die Eigenschaft geerbt wurde oder überhaupt nicht deklariert ist. Anders als der Operator {{jsxref("Operators/in", "in")}} prüft diese Methode nicht, ob die angegebene Eigenschaft in der Prototypkette des Objekts vorhanden ist.

Sie wird gegenüber {{jsxref("Object.prototype.hasOwnProperty()")}} empfohlen, weil sie mit [Objekten mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und mit Objekten funktioniert, die die geerbte Methode `hasOwnProperty()` überschrieben haben. Diese Probleme lassen sich zwar umgehen, indem `Object.prototype.hasOwnProperty()` über ein anderes Objekt aufgerufen wird (etwa mit `Object.prototype.hasOwnProperty.call(obj, prop)`), aber `Object.hasOwn()` ist intuitiver und kürzer.

## Beispiele

### Mit Object.hasOwn() prüfen, ob eine Eigenschaft existiert

Der folgende Code zeigt, wie Sie feststellen können, ob das Objekt `example` eine Eigenschaft namens `prop` enthält.

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

### Direkte und geerbte Eigenschaften

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

### Über die Eigenschaften eines Objekts iterieren

Um über die aufzählbaren Eigenschaften eines Objekts zu iterieren, _sollten_ Sie Folgendes verwenden:

```js
const example = { foo: true, bar: true };
for (const name of Object.keys(example)) {
  // …
}
```

Wenn Sie jedoch `for...in` verwenden müssen, können Sie mit `Object.hasOwn()` die geerbten Eigenschaften überspringen:

```js
const example = { foo: true, bar: true };
for (const name in example) {
  if (Object.hasOwn(example, name)) {
    // …
  }
}
```

### Prüfen, ob ein Array-Index existiert

Die Elemente eines {{jsxref("Array")}} sind als direkte Eigenschaften definiert. Daher können Sie mit der Methode `hasOwn()` prüfen, ob ein bestimmter Index existiert:

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false - not defined
```

### Problemfälle für hasOwnProperty()

Dieser Abschnitt zeigt, dass `Object.hasOwn()` nicht von den Problemen betroffen ist, die bei `hasOwnProperty()` auftreten. Erstens kann die Methode mit Objekten verwendet werden, die `hasOwnProperty()` neu implementiert haben. Im folgenden Beispiel meldet die neu implementierte Methode `hasOwnProperty()` für _jede_ Eigenschaft `false`, das Verhalten von `Object.hasOwn()` bleibt jedoch unverändert:

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

Die Methode kann auch mit [Objekten mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) verwendet werden. Diese erben nicht von `Object.prototype`, weshalb `hasOwnProperty()` nicht verfügbar ist.

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

- [Polyfill für `Object.hasOwn` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [Polyfill für `Object.hasOwn` von es-shims](https://www.npmjs.com/package/object.hasown)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
