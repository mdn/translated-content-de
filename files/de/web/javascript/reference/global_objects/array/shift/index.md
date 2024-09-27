---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`shift()`**-Methode von {{jsxref("Array")}}-Instanzen entfernt das **erste**
Element aus einem Array und gibt dieses entfernte Element zurück. Diese Methode ändert die Länge des Arrays.

{{EmbedInteractiveExample("pages/js/array-shift.html")}}

## Syntax

```js-nolint
shift()
```

### Parameter

Keine.

### Rückgabewert

Das entfernte Element aus dem Array; {{jsxref("undefined")}} falls das Array leer ist.

## Beschreibung

Die `shift()`-Methode entfernt das Element an der Null-Position und verschiebt die
Werte an aufeinanderfolgenden Indizes nach unten, und gibt dann den entfernten Wert zurück. Wenn die
{{jsxref("Array/length", "length")}}-Eigenschaft 0 ist, wird {{jsxref("undefined")}} zurückgegeben.

Die {{jsxref("Array/pop", "pop()")}}-Methode hat ein ähnliches Verhalten wie `shift()`, wird jedoch auf das letzte Element in einem Array angewendet.

Die `shift()`-Methode ist eine [mutierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert die Länge und den Inhalt von `this`. Wenn Sie möchten, dass der Wert von `this` gleich bleibt, aber ein neues Array mit dem ersten entfernten Element zurückgegeben wird, können Sie stattdessen [`arr.slice(1)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) verwenden.

Die `shift()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften hat. Auch wenn Zeichenfolgen ebenfalls array-ähnlich sind, ist diese Methode ungeeignet, auf sie angewendet zu werden, da Zeichenfolgen unveränderlich sind.

## Beispiele

### Entfernen eines Elements aus einem Array

Der folgende Code zeigt das `myFish`-Array vor und nach dem Entfernen seines
ersten Elements. Er zeigt auch das entfernte Element:

```js
const myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before:", myFish);
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

console.log("myFish after:", myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log("Removed this element:", shifted);
// Removed this element: angel
```

### Verwendung der shift()-Methode in einer while-Schleife

Die shift()-Methode wird oft in einer Bedingung innerhalb einer while-Schleife verwendet. Im folgenden
Beispiel wird bei jeder Iteration das nächste Element aus einem Array entfernt, bis es leer ist:

```js
const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}
// Andrew, Tyrone, Paul, Maria, Gayatri
```

### Aufrufen von shift() auf Nicht-Array-Objekten

Die `shift()`-Methode liest die `length`-Eigenschaft von `this`. Wenn die [normalisierte Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#normalization_of_the_length_property) 0 ist, wird `length` wieder auf `0` gesetzt (obwohl sie vorher negativ oder `undefined` sein kann). Andernfalls wird die Eigenschaft bei `0` zurückgegeben und die restlichen Eigenschaften um eins nach links verschoben. Die `length`-Eigenschaft wird um eins verringert.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.shift.call(arrayLike));
// undefined, because it is an empty slot
console.log(arrayLike);
// { '1': 4, length: 2, unrelated: 'foo' }

const plainObj = {};
// There's no length property, so the length is 0
Array.prototype.shift.call(plainObj);
console.log(plainObj);
// { length: 0 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
