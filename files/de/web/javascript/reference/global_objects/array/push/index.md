---
title: Array.prototype.push()
short-title: push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`push()`** Methode von {{jsxref("Array")}} Instanzen fügt die angegebenen Elemente am Ende eines Arrays hinzu und gibt die neue Länge des Arrays zurück.

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
  - : Das bzw. die Elemente, die am Ende des Arrays hinzugefügt werden sollen.

### Rückgabewert

Die neue {{jsxref("Array/length", "Länge")}} Eigenschaft des Objekts, auf dem die Methode aufgerufen wurde.

## Beschreibung

Die `push()` Methode fügt Werte zu einem Array hinzu.

{{jsxref("Array.prototype.unshift()")}} hat ein ähnliches Verhalten wie `push()`, wird jedoch auf den Anfang eines Arrays angewendet.

Die `push()` Methode ist eine [mutierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert die Länge und den Inhalt von `this`. Falls Sie möchten, dass der Wert von `this` gleich bleibt, aber ein neues Array mit Elementen am Ende zurückgegeben werden soll, können Sie stattdessen [`arr.concat([element0, element1, /* ... ,*/ elementN])`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) verwenden. Beachten Sie, dass die Elemente in ein zusätzliches Array eingepackt werden — andernfalls, wenn das Element selbst ein Array ist, würde es aufgrund des Verhaltens von `concat()` verteilt statt als einzelnes Element angehängt werden.

Die `push()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und Integer-Indexierte Eigenschaften hat. Obwohl Strings auch Array-ähnlich sind, ist diese Methode nicht dafür geeignet, auf ihnen angewendet zu werden, da Strings unveränderlich sind.

## Beispiele

### Hinzufügen von Elementen zu einem Array

Der folgende Code erstellt das `sports` Array, das zwei Elemente enthält, und fügt dann zwei Elemente hinzu. Die `total` Variable enthält die neue Länge des Arrays.

```js
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

### Zusammenführen von zwei Arrays

Dieses Beispiel verwendet die {{jsxref("Operators/Spread_syntax", "Spread-Syntax", "", 1)}}, um alle Elemente eines zweiten Arrays in das erste zu übernehmen.

```js
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

Das Zusammenführen von zwei Arrays kann auch mit der {{jsxref("Array/concat", "concat()")}} Methode durchgeführt werden.

### Aufruf von push() auf Nicht-Array-Objekten

Die `push()` Methode liest die `length` Eigenschaft von `this`. Sie setzt dann jeden Index von `this`, beginnend bei `length`, mit den an `push()` übergebenen Argumenten und schließlich setzt sie die `length` auf die vorherige Länge plus die Anzahl der hinzugefügten Elemente.

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

### Verwenden eines Objekts auf Array-ähnliche Weise

Wie oben erwähnt, ist `push` absichtlich generisch, und wir können das zu unserem Vorteil nutzen. `Array.prototype.push` kann bei einem Objekt genauso gut funktionieren, wie dieses Beispiel zeigt.

Beachten Sie, dass wir kein Array erstellen, um eine Sammlung von Objekten zu speichern. Stattdessen speichern wir die Sammlung direkt auf dem Objekt und verwenden `call` auf `Array.prototype.push`, um die Methode zu täuschen, dass wir es mit einem Array zu tun haben — und es funktioniert einfach, dank der Art und Weise, wie JavaScript es uns ermöglicht, den Ausführungskontext beliebig festzulegen.

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

Beachten Sie, dass, obwohl `obj` kein Array ist, die Methode `push` erfolgreich die `length` Eigenschaft von `obj` inkrementiert hat, als hätten wir es mit einem echten Array zu tun gehabt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.push` in `core-js` mit Korrekturen dieser Methode](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill für `Array.prototype.push`](https://www.npmjs.com/package/array.prototype.push)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
