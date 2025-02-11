---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`push()`**-Methode von {{jsxref("Array")}}-Instanzen fügt die angegebenen Elemente am Ende eines Arrays hinzu und gibt die neue Länge des Arrays zurück.

{{InteractiveExample("JavaScript Demo: Array.push()")}}

```js interactive-example
const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

## Syntax

```js-nolint
push()
push(element1)
push(element1, element2)
push(element1, element2, /* …, */ elementN)
```

### Parameter

- `element1`, …, `elementN`
  - : Das/die hinzuzufügende(n) Element(e) am Ende des Arrays.

### Rückgabewert

Die neue {{jsxref("Array/length", "length")}}-Eigenschaft des Objekts, auf dem die Methode aufgerufen wurde.

## Beschreibung

Die `push()`-Methode fügt Werte an ein Array an.

{{jsxref("Array.prototype.unshift()")}} hat ein ähnliches Verhalten wie `push()`, wird jedoch am Anfang eines Arrays angewendet.

Die `push()`-Methode ist eine [manipulierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert die Länge und den Inhalt von `this`. Falls Sie möchten, dass der Wert von `this` gleich bleibt, aber ein neues Array mit angehängten Elementen erstellt wird, können Sie [`arr.concat([element0, element1, /* ... ,*/ elementN])`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) verwenden. Beachten Sie, dass die Elemente in ein zusätzliches Array eingeschlossen sind – andernfalls, falls das Element selbst ein Array ist, würde es aufgrund des Verhaltens von `concat()` anstelle des Anhängens als einzelnes Element "entfaltet" werden.

Die `push()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der Wert von `this` eine `length`-Eigenschaft und integer-indizierte Eigenschaften besitzt. Obwohl Strings ebenfalls array-ähnlich sind, ist diese Methode nicht geeignet, darauf angewendet zu werden, da Strings unveränderlich sind.

## Beispiele

### Hinzufügen von Elementen zu einem Array

Der folgende Code erstellt das Array `sports`, das zwei Elemente enthält, und fügt zwei weitere Elemente hinzu. Die Variable `total` enthält die neue Länge des Arrays.

```js
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

### Zusammenführen von zwei Arrays

In diesem Beispiel wird die {{jsxref("Operators/Spread_syntax", "Spread-Syntax", "", 1)}} verwendet, um alle Elemente eines zweiten Arrays in das erste hinzuzufügen.

```js
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

Das Zusammenführen von zwei Arrays kann auch mit der {{jsxref("Array/concat", "concat()")}}-Methode durchgeführt werden.

### Aufrufen von push() für Nicht-Array-Objekte

Die `push()`-Methode liest die `length`-Eigenschaft von `this`. Anschließend setzt sie jeden Index von `this`, beginnend mit `length`, auf die an `push()` übergebenen Argumente. Schließlich wird die `length`-Eigenschaft auf die vorherige Länge plus die Anzahl der hinzugefügten Elemente gesetzt.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
Array.prototype.push.call(arrayLike, 1, 2);
console.log(arrayLike);
// { '2': 4, '3': 1, '4': 2, length: 5, unrelated: 'foo' }

const plainObj = {};
// There's no length property, so the length is 0
Array.prototype.push.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }
```

### Verwenden eines Objekts auf array-ähnliche Weise

Wie bereits erwähnt, ist `push` absichtlich generisch, und das können wir zu unserem Vorteil nutzen. `Array.prototype.push` kann problemlos mit einem Objekt verwendet werden, wie dieses Beispiel zeigt.

Beachten Sie, dass wir kein Array erstellen, um eine Sammlung von Objekten zu speichern. Stattdessen speichern wir die Sammlung direkt im Objekt selbst und verwenden `call` auf `Array.prototype.push`, um die Methode glauben zu lassen, dass wir mit einem Array arbeiten – und es funktioniert einfach, dank der Art und Weise, wie JavaScript uns erlaubt, den Ausführungskontext nach Belieben festzulegen.

```js
const obj = {
  length: 0,

  addElem(elem) {
    // obj.length is automatically incremented
    // every time an element is added.
    [].push.call(this, elem);
  },
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length); // 2
```

Es ist zu beachten, dass, obwohl `obj` kein Array ist, die Methode `push` die `length`-Eigenschaft von `obj` erfolgreich inkrementiert hat, als ob wir mit einem tatsächlichen Array gearbeitet hätten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.push` in `core-js` mit Korrekturen dieser Methode](https://github.com/zloirock/core-js#ecmascript-array)
- [Leitfaden zu Indexierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
