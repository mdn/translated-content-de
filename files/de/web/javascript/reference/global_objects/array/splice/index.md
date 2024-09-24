---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`splice()`** Methode von {{jsxref("Array")}} Instanzen ändert den Inhalt eines Arrays, indem vorhandene Elemente entfernt oder ersetzt und/oder neue Elemente [an Ort und Stelle](https://en.wikipedia.org/wiki/In-place_algorithm) hinzugefügt werden.

Um ein neues Array mit einem entfernten und/oder ersetzten Segment zu erstellen, ohne das ursprüngliche Array zu ändern, verwenden Sie {{jsxref("Array/toSpliced", "toSpliced()")}}. Um auf einen Teil eines Arrays zuzugreifen, ohne es zu verändern, siehe {{jsxref("Array/slice", "slice()")}}.

{{EmbedInteractiveExample("pages/js/array-splice.html")}}

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

  - : Index, basierend auf Null, an dem die Änderung des Arrays beginnt, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length`, wird `0` verwendet.
    - Wenn `start >= array.length`, wird kein Element gelöscht, aber die Methode verhält sich als Hinzufügefunktion und fügt so viele Elemente hinzu, wie angegeben.
    - Wenn `start` weggelassen wird (und `splice()` ohne Argumente aufgerufen wird), wird nichts gelöscht. Dies unterscheidet sich von der Übergabe von `undefined`, welches in `0` umgewandelt wird.

- `deleteCount` {{optional_inline}}

  - : Eine ganze Zahl, die die Anzahl der Elemente im Array angibt, die entfernt werden sollen, beginnend ab `start`.

    Wenn `deleteCount` weggelassen wird oder dessen Wert größer oder gleich der Anzahl der nach `start` folgenden Elemente ist, werden alle Elemente von `start` bis zum Ende des Arrays gelöscht. Wenn Sie jedoch irgendein `itemN`-Parameter übergeben möchten, sollten Sie `Infinity` als `deleteCount` übergeben, um alle Elemente nach `start` zu löschen, da ein ausdrücklich übergebenes `undefined` auf `0` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) wird.

    Wenn `deleteCount` `0` oder negativ ist, werden keine Elemente entfernt. In diesem Fall sollten Sie mindestens ein neues Element angeben (siehe unten).

- `item1`, …, `itemN` {{optional_inline}}

  - : Die dem Array hinzuzufügenden Elemente, beginnend bei `start`.

    Wenn Sie keine Elemente angeben, entfernt `splice()` nur Elemente aus dem Array.

### Rückgabewert

Ein Array, das die entfernten Elemente enthält.

Wenn nur ein Element entfernt wird, wird ein Array mit einem Element zurückgegeben.

Wenn keine Elemente entfernt werden, wird ein leeres Array zurückgegeben.

## Beschreibung

Die `splice()`-Methode ist eine [mutierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie kann den Inhalt von `this` verändern. Wenn die Anzahl der einzufügenden Elemente von der Anzahl der zu entfernenden Elemente abweicht, wird auch die `length` des Arrays verändert. Gleichzeitig verwendet sie [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species), um eine neue Array-Instanz zu erstellen, die zurückgegeben wird.

Wenn der gelöschte Abschnitt [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, ist auch das von `splice()` zurückgegebene Array spärlich, wobei die entsprechenden Indizes leere Plätze sind.

Die `splice()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-basierte Eigenschaften besitzt. Obwohl Strings ebenfalls array-ähnlich sind, ist diese Methode nicht geeignet, um auf sie angewendet zu werden, da Strings unveränderlich sind.

## Beispiele

### Entfernen Sie 0 (null) Elemente vor Index 2 und fügen Sie "drum" ein

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// myFish ist ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed ist [], keine Elemente entfernt
```

### Entfernen Sie 0 (null) Elemente vor Index 2 und fügen Sie "drum" und "guitar" ein

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum", "guitar");

// myFish ist ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed ist [], keine Elemente entfernt
```

### Entfernen Sie 0 (null) Elemente bei Index 0 und fügen Sie "angel" ein

`splice(0, 0, ...elements)` fügt Elemente am Anfang des Arrays ein, ähnlich wie {{jsxref("Array/unshift", "unshift()")}}.

```js
const myFish = ["clown", "mandarin", "sturgeon"];
const removed = myFish.splice(0, 0, "angel");

// myFish ist ["angel", "clown", "mandarin", "sturgeon"]
// keine Elemente entfernt
```

### Entfernen Sie 0 (null) Elemente am letzten Index und fügen Sie "sturgeon" ein

`splice(array.length, 0, ...elements)` fügt Elemente am Ende des Arrays ein, ähnlich wie {{jsxref("Array/push", "push()")}}.

```js
const myFish = ["angel", "clown", "mandarin"];
const removed = myFish.splice(myFish.length, 0, "sturgeon");

// myFish ist ["angel", "clown", "mandarin", "sturgeon"]
// keine Elemente entfernt
```

### Entfernen Sie 1 Element bei Index 3

```js
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1);

// myFish ist ["angel", "clown", "drum", "sturgeon"]
// removed ist ["mandarin"]
```

### Entfernen Sie 1 Element bei Index 2 und fügen Sie "trumpet" ein

```js
const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2, 1, "trumpet");

// myFish ist ["angel", "clown", "trumpet", "sturgeon"]
// removed ist ["drum"]
```

### Entfernen Sie 2 Elemente ab Index 0 und fügen Sie "parrot", "anemone" und "blue" ein

```js
const myFish = ["angel", "clown", "trumpet", "sturgeon"];
const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish ist ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed ist ["angel", "clown"]
```

### Entfernen Sie 2 Elemente ab Index 2

```js
const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const removed = myFish.splice(2, 2);

// myFish ist ["parrot", "anemone", "sturgeon"]
// removed ist ["blue", "trumpet"]
```

### Entfernen Sie 1 Element ab Index -2

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(-2, 1);

// myFish ist ["angel", "clown", "sturgeon"]
// removed ist ["mandarin"]
```

### Entfernen Sie alle Elemente ab Index 2

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2);

// myFish ist ["angel", "clown"]
// removed ist ["mandarin", "sturgeon"]
```

### Verwendung von splice() bei spärlichen Arrays

Die `splice()`-Methode erhält die Spärlichkeit des Arrays.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [empty, 3]
console.log(arr); // [1, 4, empty, 6]
```

### Aufrufen von splice() bei Nicht-Array-Objekten

Die `splice()`-Methode liest die `length` Eigenschaft von `this`. Sie aktualisiert dann die integer-basierten Eigenschaften und die `length`-Eigenschaft nach Bedarf.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Indexed collections](/de/docs/Web/JavaScript/Guide/Indexed_collections) Guide
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.unshift()")}}
