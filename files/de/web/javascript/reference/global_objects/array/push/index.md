---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
l10n:
  sourceCommit: 2d337c37fb3ae7d7a32b5c372366bc7f97ff2602
---

{{JSRef}}

Die **`push()`**-Methode von {{jsxref("Array")}}-Instanzen fügt die angegebenen Elemente am Ende eines Arrays hinzu und gibt die neue Länge des Arrays zurück.

{{EmbedInteractiveExample("pages/js/array-push.html")}}

## Syntax

```js-nolint
push()
push(element1)
push(element1, element2)
push(element1, element2, /* …, */ elementN)
```

### Parameter

- `element1`, …, `elementN`
  - : Die zu der Liste hinzuzufügenden Elemente am Ende des Arrays.

### Rückgabewert

Die neue {{jsxref("Array/length", "length")}}-Eigenschaft des Objekts, auf das die Methode aufgerufen wurde.

## Beschreibung

Die `push()`-Methode hängt Werte an ein Array an.

{{jsxref("Array.prototype.unshift()")}} hat ein ähnliches Verhalten wie `push()`, wird aber auf den Anfang eines Arrays angewendet.

Die `push()`-Methode ist eine [mutierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert die Länge und den Inhalt von `this`. Falls Sie möchten, dass der Wert von `this` gleich bleibt, aber ein neues Array mit angehängten Elementen zurückgegeben wird, können Sie stattdessen [`arr.concat([element0, element1, /* ... ,*/ elementN])`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) verwenden. Beachten Sie, dass die Elemente in ein zusätzliches Array eingeschlossen sind – andernfalls, wenn das Element selbst ein Array ist, würde es aufgrund des Verhaltens von `concat()` gestreut, anstatt als einzelnes Element hinzugefügt zu werden.

Die `push()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige Schlüssel-Eigenschaften hat. Obwohl Zeichenketten auch Array-ähnlich sind, ist diese Methode nicht anwendbar, da Zeichenketten unveränderlich sind.

## Beispiele

### Hinzufügen von Elementen zu einem Array

Der folgende Code erstellt das `sports`-Array mit zwei Elementen und fügt dann zwei weitere hinzu. Die Variable `total` enthält die neue Länge des Arrays.

```js
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

### Zusammenführen zweier Arrays

Dieses Beispiel verwendet {{jsxref("Operators/Spread_syntax", "spread syntax", "", 1)}} um alle Elemente eines zweiten Arrays in das erste einzufügen.

```js
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// Fügen Sie das zweite Array in das erste ein
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

Das Zusammenführen zweier Arrays kann auch mit der {{jsxref("Array/concat", "concat()")}}-Methode durchgeführt werden.

### Aufruf von push() auf Objekten, die keine Arrays sind

Die `push()`-Methode liest die `length`-Eigenschaft von `this`. Sie setzt dann jeden Index von `this` beginnend bei `length` mit den an `push()` übergebenen Argumenten. Schließlich setzt sie die `length` auf die vorherige Länge plus die Anzahl der hinzugefügten Elemente.

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
// Es gibt keine length-Eigenschaft, also ist die Länge 0
Array.prototype.push.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }
```

### Verwendung eines Objekts in einer array-ähnlichen Weise

Wie oben erwähnt, ist `push` bewusst generisch, und wir können das zu unserem Vorteil nutzen. `Array.prototype.push` kann auf einem Objekt gut funktionieren, wie dieses Beispiel zeigt.

Beachten Sie, dass wir kein Array erstellen, um eine Sammlung von Objekten zu speichern. Stattdessen speichern wir die Sammlung direkt im Objekt und verwenden `call` auf `Array.prototype.push`, um die Methode glauben zu lassen, dass wir mit einem Array arbeiten – und es funktioniert einfach, dank der Art und Weise, wie JavaScript uns erlaubt, den Ausführungskontext auf jede gewünschte Weise festzulegen.

```js
const obj = {
  length: 0,

  addElem(elem) {
    // obj.length wird automatisch inkrementiert
    // jedes Mal, wenn ein Element hinzugefügt wird.
    [].push.call(this, elem);
  },
};

// Lassen Sie uns einige leere Objekte zum Illustrieren hinzufügen.
obj.addElem({});
obj.addElem({});
console.log(obj.length); // 2
```

Beachten Sie, dass `obj` zwar kein Array ist, die Methode `push` jedoch erfolgreich `obj`'s `length`-Eigenschaft inkrementiert hat, als ob wir tatsächlich mit einem Array gearbeitet hätten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.push` in `core-js` mit Korrekturen dieser Methode](https://github.com/zloirock/core-js#ecmascript-array)
- [Anleitung zu Indexierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
