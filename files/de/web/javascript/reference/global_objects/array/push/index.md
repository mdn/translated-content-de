---
title: Array.prototype.push()
short-title: push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
l10n:
  sourceCommit: c7b05ac470c1717289df09b999326c76f174e309
---

Die **`push()`**-Methode von {{jsxref("Array")}}-Instanzen fügt die angegebenen Elemente am Ende eines Arrays hinzu und gibt die neue Länge des Arrays zurück.

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
  - : Das oder die Elemente, die am Ende des Arrays hinzugefügt werden sollen.

### Rückgabewert

Die neue {{jsxref("Array/length", "length")}}-Eigenschaft des Objekts, auf dem die Methode aufgerufen wurde.

## Beschreibung

Die `push()`-Methode hängt Werte an ein Array an.

{{jsxref("Array.prototype.unshift()")}} hat ein ähnliches Verhalten wie `push()`, wird aber auf den Beginn eines Arrays angewendet.

Die `push()`-Methode ist eine [mutierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert die Länge und den Inhalt von `this`. Falls Sie möchten, dass der Wert von `this` gleich bleibt, aber ein neues Array mit angehängten Elementen zurückgegeben wird, können Sie stattdessen [`arr.concat([element0, element1, /* ... ,*/ elementN])`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) verwenden. Beachten Sie, dass die Elemente in einem zusätzlichen Array eingeschlossen sind – andernfalls, falls das Element selbst ein Array ist, würde es aufgrund des Verhaltens von `concat()` verbreitet statt als einzelnes Element angehängt.

Die `push()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und mit Integer-Schlüsseln versehene Eigenschaften hat. Obwohl Strings ebenfalls array-ähnlich sind, ist diese Methode nicht geeignet, auf sie angewendet zu werden, da Strings unveränderlich sind.

## Beispiele

### Elemente zu einem Array hinzufügen

Der folgende Code erzeugt das Array `sports` mit zwei Elementen und fügt dann zwei Elemente hinzu. Die Variable `total` enthält die neue Länge des Arrays.

```js
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

### Zwei Arrays zusammenführen

Dieses Beispiel verwendet die {{jsxref("Operators/Spread_syntax", "Spread-Syntax", "", 1)}}, um alle Elemente eines zweiten Arrays in das erste zu pushen.

```js
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

Das Zusammenführen von zwei Arrays kann auch mit der {{jsxref("Array/concat", "concat()")}}-Methode durchgeführt werden, die ein neues kombiniertes Array erstellt, anstatt dem Original hinzuzufügen. Die Spread-Syntax funktioniert nur, wenn die Anzahl der Elemente im Array kleiner als die maximale Anzahl von Funktionsargumenten ist, die vom Engine erlaubt sind. Für längere Arrays verwenden Sie `concat()` oder rufen Sie `push()` mehrfach in einer Schleife auf.

### push() auf Objekte, die keine Arrays sind, anwenden

Die `push()`-Methode liest die `length`-Eigenschaft von `this`. Sie setzt dann jeden Index von `this`, beginnend bei `length`, mit den an `push()` übergebenen Argumenten. Schließlich setzt sie die `length` auf die vorherige Länge plus die Anzahl der hinzugefügten Elemente.

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

### Ein Objekt auf array-ähnliche Weise verwenden

Wie oben erwähnt, ist `push` absichtlich generisch, und das können wir zu unserem Vorteil nutzen. `Array.prototype.push` kann gut auf einem Objekt funktionieren, wie dieses Beispiel zeigt.

Beachten Sie, dass wir kein Array erstellen, um eine Sammlung von Objekten zu speichern. Stattdessen speichern wir die Sammlung im Objekt selbst und verwenden `call` auf `Array.prototype.push`, um die Methode zu täuschen, dass wir es mit einem Array zu tun haben – und es funktioniert einfach, dank der Art und Weise, wie JavaScript uns erlaubt, den Ausführungskontext auf jede gewünschte Weise festzulegen.

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

Beachten Sie, dass `obj` zwar kein Array ist, die `push`-Methode jedoch erfolgreich die `length`-Eigenschaft von `obj` erhöht hat, als ob wir es mit einem echten Array zu tun hätten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.push` in `core-js` mit Korrekturen dieser Methode](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.push`](https://www.npmjs.com/package/array.prototype.push)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)-Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
