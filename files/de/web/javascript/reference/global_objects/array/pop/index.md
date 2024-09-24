---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`pop()`**-Methode von {{jsxref("Array")}}-Instanzen entfernt das **letzte** Element aus einem Array und gibt dieses Element zurück. Diese Methode ändert die Länge des Arrays.

{{EmbedInteractiveExample("pages/js/array-pop.html")}}

## Syntax

```js-nolint
pop()
```

### Parameter

Keine.

### Rückgabewert

Das entfernte Element aus dem Array; {{jsxref("undefined")}}, wenn das Array leer ist.

## Beschreibung

Die `pop()`-Methode entfernt das letzte Element aus einem Array und gibt diesen Wert an den Aufrufer zurück. Wenn Sie `pop()` auf einem leeren Array aufrufen, wird {{jsxref("undefined")}} zurückgegeben.

{{jsxref("Array.prototype.shift()")}} hat ein ähnliches Verhalten wie `pop()`, wird jedoch auf das erste Element eines Arrays angewendet.

Die `pop()`-Methode ist eine mutierende Methode. Sie ändert die Länge und den Inhalt von `this`. Falls Sie den Wert von `this` gleich halten möchten, aber ein neues Array mit dem letzten entfernten Element zurückgeben möchten, können Sie stattdessen [`arr.slice(0, -1)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) verwenden.

Die `pop()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und integer-basierte Eigenschaften hat. Obwohl Strings auch array-ähnlich sind, ist diese Methode nicht geeignet, um auf ihnen angewendet zu werden, da Strings unveränderlich sind.

## Beispiele

### Entfernen des letzten Elements eines Arrays

Der folgende Code erstellt das `myFish` Array mit vier Elementen und entfernt dann dessen letztes Element.

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

### Aufrufen von pop() auf Nicht-Array-Objekten

Die `pop()`-Methode liest die `length`-Eigenschaft von `this`. Wenn die [normalisierte Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#normalization_of_the_length_property) 0 ist, wird `length` wieder auf `0` gesetzt (obwohl sie zuvor negativ oder `undefined` sein könnte). Andernfalls wird die Eigenschaft bei `length - 1` zurückgegeben und [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete).

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
// Es gibt keine length-Eigenschaft, daher ist die Länge 0
Array.prototype.pop.call(plainObj);
console.log(plainObj);
// { length: 0 }
```

### Verwenden eines Objekts in array-ähnlicher Weise

`push` und `pop` sind absichtlich generisch, und das können wir zu unserem Vorteil nutzen – wie das folgende Beispiel zeigt.

In diesem Beispiel erstellen wir kein Array, um eine Sammlung von Objekten zu speichern. Stattdessen speichern wir die Sammlung direkt im Objekt und verwenden `call` auf `Array.prototype.push` und `Array.prototype.pop`, um diese Methoden glauben zu lassen, dass wir es mit einem Array zu tun haben.

```js
const collection = {
  length: 0,
  addElements(...elements) {
    // obj.length wird automatisch inkrementiert
    // jedes Mal, wenn ein Element hinzugefügt wird.

    // Rückgabe dessen, was push zurückgibt; das ist
    // der neue Wert der length-Eigenschaft.
    return [].push.call(this, ...elements);
  },
  removeElement() {
    // obj.length wird automatisch dekrementiert
    // jedes Mal, wenn ein Element entfernt wird.

    // Rückgabe dessen, was pop zurückgibt; das ist
    // das entfernte Element.
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

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Anleitung
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
