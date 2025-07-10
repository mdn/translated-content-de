---
title: Array.prototype.pop()
short-title: pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`pop()`**-Methode von {{jsxref("Array")}}-Instanzen entfernt das **letzte** Element aus einem Array und gibt dieses Element zurück. Diese Methode ändert die Länge des Arrays.

{{InteractiveExample("JavaScript Demo: Array.prototype.pop()")}}

```js interactive-example
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

## Syntax

```js-nolint
pop()
```

### Parameter

Keine.

### Rückgabewert

Das entfernte Element aus dem Array; {{jsxref("undefined")}}, wenn das Array leer ist.

## Beschreibung

Die `pop()`-Methode entfernt das letzte Element aus einem Array und gibt diesen Wert an den Aufrufer zurück. Wenn Sie `pop()` auf ein leeres Array aufrufen, gibt es {{jsxref("undefined")}} zurück.

{{jsxref("Array.prototype.shift()")}} hat ein ähnliches Verhalten wie `pop()`, wird aber auf das erste Element eines Arrays angewendet.

Die `pop()`-Methode ist eine verändernde Methode. Sie ändert die Länge und den Inhalt von `this`. Falls Sie möchten, dass der Wert von `this` gleich bleibt, aber ein neues Array mit dem letzten entfernten Element zurückgeben wollen, können Sie stattdessen [`arr.slice(0, -1)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) verwenden.

Die `pop()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-indizierte Eigenschaften hat. Obwohl Strings auch array-ähnlich sind, ist diese Methode nicht geeignet, auf ihnen angewendet zu werden, da Strings unveränderlich sind.

## Beispiele

### Entfernen des letzten Elements eines Arrays

Der folgende Code erstellt das `myFish`-Array mit vier Elementen und entfernt dann das letzte Element.

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

### Aufrufen von pop() auf Nicht-Array-Objekten

Die `pop()`-Methode liest die `length`-Eigenschaft von `this`. Ist die [normalisierte Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#normalization_of_the_length_property) 0, wird `length` erneut auf `0` gesetzt (wobei sie vorher negativ oder `undefined` sein könnte). Andernfalls wird die Eigenschaft bei `length - 1` zurückgegeben und [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete).

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.pop.call(arrayLike));
// 4
console.log(arrayLike);
// { length: 2, unrelated: 'foo' }

const plainObj = {};
// There's no length property, so the length is 0
Array.prototype.pop.call(plainObj);
console.log(plainObj);
// { length: 0 }
```

### Verwenden eines Objekts in array-ähnlicher Weise

`push` und `pop` sind absichtlich generisch, und wir können uns dies zunutze machen — wie das folgende Beispiel zeigt.

Beachten Sie, dass wir in diesem Beispiel kein Array erstellen, um eine Sammlung von Objekten zu speichern. Stattdessen speichern wir die Sammlung direkt im Objekt und verwenden `call` auf `Array.prototype.push` und `Array.prototype.pop`, um diese Methoden zu überlisten und vorzutäuschen, dass wir es mit einem Array zu tun haben.

```js
const collection = {
  length: 0,
  addElements(...elements) {
    // obj.length will be incremented automatically
    // every time an element is added.

    // Returning what push returns; that is
    // the new value of length property.
    return [].push.call(this, ...elements);
  },
  removeElement() {
    // obj.length will be decremented automatically
    // every time an element is removed.

    // Returning what pop returns; that is
    // the removed element.
    return [].pop.call(this);
  },
};

collection.addElements(10, 20, 30);
console.log(collection.length); // 3
collection.removeElement();
console.log(collection.length); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
