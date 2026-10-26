---
title: Array.prototype.push()
short-title: push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`push()`** von {{jsxref("Array")}}-Instanzen fügt die angegebenen Elemente am Ende eines Arrays hinzu und gibt die neue Länge des Arrays zurück.

{{InteractiveExample("JavaScript Demo: Array.prototype.push()")}}

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
  - : Die Elemente, die am Ende des Arrays hinzugefügt werden sollen.

### Rückgabewert

Der neue Wert der Eigenschaft {{jsxref("Array/length", "length")}} des Objekts, auf dem die Methode aufgerufen wurde.

## Beschreibung

Die Methode `push()` hängt Werte an ein Array an.

{{jsxref("Array.prototype.unshift()")}} verhält sich ähnlich wie `push()`, fügt Elemente jedoch am Anfang eines Arrays hinzu.

Die Methode `push()` ist eine [verändernde Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert die Länge und den Inhalt von `this`. Wenn `this` unverändert bleiben soll, Sie aber ein neues Array mit angehängten Elementen zurückgeben möchten, können Sie stattdessen [`arr.concat([element0, element1, /* ... ,*/ elementN])`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) verwenden. Beachten Sie, dass die Elemente in ein zusätzliches Array eingeschlossen sind. Andernfalls würde ein Element, das selbst ein Array ist, aufgrund des Verhaltens von `concat()` auf seine einzelnen Elemente verteilt, statt als einzelnes Element angehängt zu werden.

Die Methode `push()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine Eigenschaft `length` und Eigenschaften mit ganzzahligen Schlüsseln hat. Obwohl Strings ebenfalls arrayähnlich sind, eignet sich die Methode nicht für sie, da Strings unveränderlich sind.

## Beispiele

### Elemente zu einem Array hinzufügen

Der folgende Code erstellt das Array `sports` mit zwei Elementen und hängt anschließend zwei weitere Elemente an. Die Variable `total` enthält die neue Länge des Arrays.

```js
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

### Zwei Arrays zusammenführen

Dieses Beispiel verwendet {{jsxref("Operators/Spread_syntax", "Spread-Syntax", "", 1)}}, um alle Elemente eines zweiten Arrays an das erste anzuhängen.

```js
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

Zwei Arrays lassen sich auch mit der Methode {{jsxref("Array/concat", "concat()")}} zusammenführen. Diese erstellt ein neues kombiniertes Array, statt das ursprüngliche zu erweitern. Die Spread-Syntax funktioniert nur, wenn die Anzahl der Elemente im Array unter der maximalen Anzahl an Funktionsargumenten liegt, die die Engine zulässt. Verwenden Sie für längere Arrays `concat()` oder rufen Sie `push()` mehrfach in einer Schleife auf.

### push() für Objekte aufrufen, die keine Arrays sind

Die Methode `push()` liest die Eigenschaft `length` von `this`. Anschließend setzt sie die Eigenschaften von `this` mit Indizes ab `length` auf die an `push()` übergebenen Argumente. Zum Schluss setzt sie `length` auf die bisherige Länge zuzüglich der Anzahl der hinzugefügten Elemente.

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

### Ein Objekt wie ein Array verwenden

Wie oben erwähnt, ist `push` bewusst generisch gestaltet. Das können Sie sich zunutze machen: `Array.prototype.push` funktioniert auch mit einem Objekt, wie dieses Beispiel zeigt.

Beachten Sie, dass hier kein Array erstellt wird, um eine Sammlung von Objekten zu speichern. Stattdessen wird die Sammlung im Objekt selbst gespeichert. Mit `call` auf `Array.prototype.push` wird die Methode so aufgerufen, als würde sie mit einem Array arbeiten. Das funktioniert, weil sich der Ausführungskontext in JavaScript entsprechend festlegen lässt.

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

Obwohl `obj` kein Array ist, hat die Methode `push` die Eigenschaft `length` von `obj` erfolgreich erhöht – genau wie bei einem Array.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Array.prototype.push` in `core-js` mit Korrekturen für diese Methode](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.push` von es-shims](https://www.npmjs.com/package/array.prototype.push)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
