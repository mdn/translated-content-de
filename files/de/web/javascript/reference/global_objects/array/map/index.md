---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

Die **`map()`** Methode von {{jsxref("Array")}} Instanzen erstellt ein neues Array, das mit den Ergebnissen einer auf jedes Element im aufrufenden Array angewendeten Funktion gefüllt ist.

{{EmbedInteractiveExample("pages/js/array-map.html")}}

## Syntax

```js-nolint
map(callbackFn)
map(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Der Rückgabewert wird als einzelnes Element im neuen Array hinzugefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf das `map()` angewendet wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [Iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Ein neues Array, bei dem jedes Element das Ergebnis der Callback-Funktion ist.

## Beschreibung

Die `map()` Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn` Funktion einmal für jedes Element in einem Array auf und erstellt aus den Ergebnissen ein neues Array. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugeordnet sind. Sie wird nicht für leere Stellen in [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Die `map()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integer-beschriftete Eigenschaften hat.

Da `map` ein neues Array erstellt, ist das Aufrufen ohne Nutzung des zurückgegebenen Arrays ein Anti-Pattern; verwenden Sie stattdessen {{jsxref("Array/forEach", "forEach")}} oder {{jsxref("Statements/for...of", "for...of")}}.

## Beispiele

### Abbilden eines Arrays von Zahlen auf ein Array von Quadratwurzeln

Der folgende Code nimmt ein Array von Zahlen und erstellt ein neues Array, das die Quadratwurzeln der Zahlen im ersten Array enthält.

```js
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots ist jetzt     [1, 2, 3]
// numbers ist immer noch [1, 4, 9]
```

### Verwenden von map zum Umformatieren von Objekten in einem Array

Der folgende Code nimmt ein Array von Objekten und erstellt ein neues Array, das die neu formatierten Objekte enthält.

```js
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]
```

### Verwenden von parseInt() mit map()

Es ist üblich, den Rückruf mit einem Argument (dem durchlaufenden Element) zu verwenden. Bestimmte Funktionen werden auch häufig mit einem Argument verwendet, obwohl sie zusätzliche optionale Argumente annehmen. Diese Gewohnheiten können zu verwirrenden Verhaltensweisen führen. Betrachten Sie:

```js
["1", "2", "3"].map(parseInt);
```

Während man `[1, 2, 3]` erwarten könnte, ist das tatsächliche Ergebnis `[1, NaN, NaN]`.

{{jsxref("parseInt")}} wird oft mit einem Argument verwendet, nimmt aber zwei entgegen. Das erste ist ein Ausdruck und das zweite ist die Basis (Radix) für die Callback-Funktion, `Array.prototype.map` übergibt 3 Argumente: das Element, den Index und das Array. Das dritte Argument wird von {{jsxref("parseInt")}} ignoriert — aber nicht das zweite! Dies ist die Quelle möglicher Verwirrung.

Hier ist ein kurzes Beispiel der Iterationsschritte:

```js
/* erster Durchlauf  (Index ist 0): */ parseInt("1", 0); // 1
/* zweiter Durchlauf (Index ist 1): */ parseInt("2", 1); // NaN
/* dritter Durchlauf  (Index ist 2): */ parseInt("3", 2); // NaN
```

Um dies zu lösen, definieren Sie eine andere Funktion, die nur ein Argument nimmt:

```js
["1", "2", "3"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

Sie können auch die {{jsxref("Number")}} Funktion verwenden, die nur ein Argument nimmt:

```js
["1", "2", "3"].map(Number); // [1, 2, 3]

// Aber im Gegensatz zu parseInt() wird Number() auch eine Gleitkommazahl oder (gelöste) Exponentialnotation zurückgeben:
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]

// Zum Vergleich, wenn wir parseInt() auf das obige Array verwenden:
["1.1", "2.2e2", "3e300"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

Siehe [Eine JavaScript-Optionalargument-Gefahr](https://wirfs-brock.com/allen/posts/166) von Allen Wirfs-Brock für weitere Diskussionen.

### Abgebildetes Array enthält undefined

Wenn {{jsxref("undefined")}} oder nichts zurückgegeben wird, enthält das resultierende Array `undefined`. Wenn Sie das Element stattdessen löschen möchten, verketten Sie eine {{jsxref("Array/filter", "filter()")}} Methode oder verwenden Sie die {{jsxref("Array/flatMap", "flatMap()")}} Methode und geben ein leeres Array zurück, um die Löschung anzuzeigen.

```js
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// der Index beginnt bei 0, die filteredNumbers sind also 1,2,3 und undefined.
// filteredNumbers ist [1, 2, 3, undefined]
// numbers ist immer noch [1, 2, 3, 4]
```

### Wirkungsvoll-seitiges Abbilden

Der Rückruf kann Nebeneffekte haben.

```js
const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});
console.log(withTax); // [6, 18, 30]
console.log(total); // 45
```

Dies wird nicht empfohlen, da Kopiermethoden am besten mit reinen Funktionen verwendet werden. In diesem Fall können wir wählen, das Array zwei Mal zu durchlaufen.

```js
const cart = [5, 15, 25];
const total = cart.reduce((acc, cost) => acc + cost, 0);
const withTax = cart.map((cost) => cost * 1.2);
```

Manchmal geht dieses Muster ins Extreme und das _einzige_ nützliche, was `map()` tut, ist, Nebeneffekte zu verursachen.

```js
const products = [
  { name: "sports car" },
  { name: "laptop" },
  { name: "phone" },
];

products.map((product) => {
  product.price = 100;
});
```

Wie bereits erwähnt, ist dies ein Anti-Pattern. Wenn Sie den Rückgabewert von `map()` nicht verwenden, verwenden Sie `forEach()` oder eine `for...of` Schleife stattdessen.

```js
products.forEach((product) => {
  product.price = 100;
});
```

Oder, wenn Sie stattdessen ein neues Array erstellen möchten:

```js
const productsWithPrice = products.map((product) => {
  return { ...product, price: 100 };
});
```

### Verwenden des dritten Arguments von callbackFn

Das `array` Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zuerst `filter()`, um die positiven Werte zu extrahieren, und dann `map()`, um ein neues Array zu erstellen, wobei jedes Element der Durchschnitt seiner Nachbarn und von sich selbst ist.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const averaged = numbers
  .filter((num) => num > 0)
  .map((num, idx, arr) => {
    // Ohne das arr Argument gibt es keinen einfachen Weg, auf das
    // Zwischen-Array zuzugreifen, ohne es in einer Variable zu speichern.
    const prev = arr[idx - 1];
    const next = arr[idx + 1];
    let count = 1;
    let total = num;
    if (prev !== undefined) {
      count++;
      total += prev;
    }
    if (next !== undefined) {
      count++;
      total += next;
    }
    const average = total / count;
    // Halten Sie zwei Dezimalstellen
    return Math.round(average * 100) / 100;
  });
console.log(averaged); // [2, 2.67, 2, 3.33, 5, 5.33, 5.67, 4]
```

Das `array` Argument ist _nicht_ das Array, das erstellt wird — es gibt keine Möglichkeit, aus der Callback-Funktion auf das erstellte Array zuzugreifen.

### Verwenden von map() auf Sparse Arrays

Ein Sparse Array bleibt nach `map()` spärlich. Die Indizes der leeren Stellen bleiben leer im zurückgegebenen Array, und die Callback-Funktion wird nicht auf sie angewendet.

```js
console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  }),
);
// Visit 0
// Visit 2
// [2, empty, 6]
```

### Aufrufen von map() auf Nicht-Array-Objekten

Die `map()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative ganze Zahl ist, die kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignoriert von map(), da Länge 3 ist
};
console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
// [ 4, 9, 16 ]
```

Dieses Beispiel zeigt, wie man durch eine Sammlung von durch `querySelectorAll` gesammelten Objekten iterieren kann. Dies liegt daran, dass `querySelectorAll` eine `NodeList` zurückgibt (was eine Sammlung von Objekten ist). In diesem Fall geben wir alle Werte der ausgewählten `option`s auf dem Bildschirm zurück:

```js
const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);
```

Sie können auch {{jsxref("Array.from()")}} verwenden, um `elems` in ein Array zu transformieren und dann die `map()` Methode zugreifen.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.map` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Leitfaden für indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Map")}}