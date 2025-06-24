---
title: Array.prototype.splice()
short-title: splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die **`splice()`**-Methode von {{jsxref("Array")}} Instanzen ändert den Inhalt eines Arrays, indem vorhandene Elemente entfernt oder ersetzt und/oder neue Elemente [vor Ort](https://en.wikipedia.org/wiki/In-place_algorithm) hinzugefügt werden.

Um ein neues Array mit einem entfernten und/oder ersetzten Segment zu erstellen, ohne das Original-Array zu verändern, verwenden Sie {{jsxref("Array/toSpliced", "toSpliced()")}}. Um auf einen Teil eines Arrays zuzugreifen, ohne es zu ändern, siehe {{jsxref("Array/slice", "slice()")}}.

{{InteractiveExample("JavaScript Demo: Array.prototype.splice()")}}

```js interactive-example
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

## Syntax

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

### Parameter

- `start`

  - : Nullbasierter Index, bei dem die Änderung des Arrays beginnen soll, [umgewandelt in eine ganze Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length`, wird `0` verwendet.
    - Wenn `start >= array.length`, wird kein Element gelöscht, aber die Methode verhält sich wie eine Hinzufügefunktion, die so viele Elemente hinzufügt, wie bereitgestellt werden.
    - Wenn `start` ausgelassen wird (und `splice()` ohne Argumente aufgerufen wird), wird nichts gelöscht. Dies unterscheidet sich davon, `undefined` zu übergeben, was in `0` umgewandelt wird.

- `deleteCount` {{optional_inline}}

  - : Eine ganze Zahl, die die Anzahl der Elemente im Array angibt, die ab `start` entfernt werden sollen.

    Wenn `deleteCount` weggelassen wird oder sein Wert größer oder gleich der Anzahl der Elemente nach der Position ist, die durch `start` angegeben wird, werden alle Elemente von `start` bis zum Ende des Arrays gelöscht. Wenn Sie jedoch einen `itemN`-Parameter übergeben möchten, sollten Sie `Infinity` als `deleteCount` übergeben, um alle Elemente nach `start` zu löschen, da ein explizites `undefined` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) zu `0` wird.

    Wenn `deleteCount` `0` oder negativ ist, werden keine Elemente entfernt.
    In diesem Fall sollten Sie mindestens ein neues Element angeben (siehe unten).

- `item1`, …, `itemN` {{optional_inline}}

  - : Die Elemente, die ab `start` zum Array hinzugefügt werden sollen.

    Wenn Sie keine Elemente angeben, entfernt `splice()` nur Elemente aus dem Array.

### Rückgabewert

Ein Array, das die gelöschten Elemente enthält.

Wenn nur ein Element entfernt wird, wird ein Array mit einem Element zurückgegeben.

Wenn keine Elemente entfernt werden, wird ein leeres Array zurückgegeben.

## Beschreibung

Die `splice()`-Methode ist eine [Mutationsmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie kann den Inhalt von `this` ändern. Wenn sich die Anzahl der einzufügenden Elemente von der Anzahl der zu entfernenden Elemente unterscheidet, wird die `length` des Arrays ebenfalls geändert. Gleichzeitig wird [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) verwendet, um eine neue Array-Instanz zu erstellen, die zurückgegeben wird.

Wenn der gelöschte Abschnitt [dünn besetzt](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, ist das durch `splice()` zurückgegebene Array ebenfalls dünn besetzt, wobei diese entsprechenden Indizes leere Stellen sind.

Die `splice()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-indizierte Eigenschaften hat. Obwohl Zeichenfolgen ebenfalls array-ähnlich sind, ist diese Methode nicht geeignet, um auf sie angewendet zu werden, da Zeichenfolgen unveränderlich sind.

## Beispiele

### Entfernen von 0 (null) Elementen vor Index 2 und Einfügen von "drum"

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

### Entfernen von 0 (null) Elementen vor Index 2 und Einfügen von "drum" und "guitar"

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum", "guitar");

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

### Entfernen von 0 (null) Elementen bei Index 0 und Einfügen von "angel"

`splice(0, 0, ...elements)` fügt Elemente am Anfang des Arrays ein, ähnlich wie {{jsxref("Array/unshift", "unshift()")}}.

```js
const myFish = ["clown", "mandarin", "sturgeon"];
const removed = myFish.splice(0, 0, "angel");

// myFish is ["angel", "clown", "mandarin", "sturgeon"]
// no items removed
```

### Entfernen von 0 (null) Elementen am letzten Index und Einfügen von "sturgeon"

`splice(array.length, 0, ...elements)` fügt Elemente am Ende des Arrays ein, ähnlich wie {{jsxref("Array/push", "push()")}}.

```js
const myFish = ["angel", "clown", "mandarin"];
const removed = myFish.splice(myFish.length, 0, "sturgeon");

// myFish is ["angel", "clown", "mandarin", "sturgeon"]
// no items removed
```

### Entfernen von 1 Element bei Index 3

```js
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1);

// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]
```

### Entfernen von 1 Element bei Index 2 und Einfügen von "trumpet"

```js
const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2, 1, "trumpet");

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
```

### Entfernen von 2 Elementen ab Index 0 und Einfügen von "parrot", "anemone" und "blue"

```js
const myFish = ["angel", "clown", "trumpet", "sturgeon"];
const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
```

### Entfernen von 2 Elementen beginnend bei Index 2

```js
const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const removed = myFish.splice(2, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
```

### Entfernen von 1 Element von Index -2

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
```

### Entfernen aller Elemente beginnend bei Index 2

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2);

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
```

### Verwendung von splice() auf dünn besetzten Arrays

Die `splice()`-Methode erhält die Dünnbesetztheit des Arrays.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [empty, 3]
console.log(arr); // [1, 4, empty, 6]
```

### Aufruf von splice() auf Nicht-Array-Objekten

Die `splice()`-Methode liest die `length`-Eigenschaft von `this`. Sie aktualisiert dann die integer-indizierten Eigenschaften und die `length`-Eigenschaft nach Bedarf.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.splice.call(arrayLike, 0, 1, 2, 3));
// [ 5 ]
console.log(arrayLike);
// { '0': 2, '1': 3, '3': 4, length: 4, unrelated: 'foo' }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.unshift()")}}
