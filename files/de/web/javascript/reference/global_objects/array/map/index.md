---
title: Array.prototype.map()
short-title: map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`map()`** von {{jsxref("Array")}}-Instanzen erstellt ein neues Array, dessen Elemente die Ergebnisse des Aufrufs einer bereitgestellten Funktion für jedes Element des ursprünglichen Arrays sind.

{{InteractiveExample("JavaScript Demo: Array.prototype.map()")}}

```js interactive-example
const array = [1, 4, 9, 16];

// Pass a function to map
const mapped = array.map((x) => x * 2);

console.log(mapped);
// Expected output: Array [2, 8, 18, 32]
```

## Syntax

```js-nolint
map(callbackFn)
map(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element des Arrays ausgeführt wird. Ihr Rückgabewert wird als einzelnes Element zum neuen Array hinzugefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf dem `map()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der bei der Ausführung von `callbackFn` als `this` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Ein neues Array, in dem jedes Element das Ergebnis der Callback-Funktion ist.

## Beschreibung

Die Methode `map()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft die bereitgestellte Funktion `callbackFn` einmal für jedes Element eines Arrays auf und erstellt aus den Ergebnissen ein neues Array. Weitere Informationen zur allgemeinen Funktionsweise dieser Methoden finden Sie im Abschnitt [Iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen sind. Für leere Positionen in [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird die Funktion nicht aufgerufen.

Die Methode `map()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln hat.

Da `map` ein neues Array erstellt, gilt es als Anti-Pattern, die Methode aufzurufen, ohne das zurückgegebene Array zu verwenden. Verwenden Sie stattdessen {{jsxref("Array/forEach", "forEach")}} oder {{jsxref("Statements/for...of", "for...of")}}.

## Beispiele

### Ein Array von Zahlen auf ein Array von Quadratwurzeln abbilden

Der folgende Code nimmt ein Array von Zahlen und erstellt ein neues Array mit den Quadratwurzeln der Zahlen aus dem ursprünglichen Array.

```js
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
```

### Objekte in einem Array mit map neu formatieren

Der folgende Code nimmt ein Array von Objekten und erstellt ein neues Array mit den neu formatierten Objekten.

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

### parseInt() mit map() verwenden

Häufig wird der Callback mit einem Argument verwendet (dem gerade durchlaufenen Element). Bestimmte Funktionen werden ebenfalls häufig mit einem Argument verwendet, obwohl sie zusätzliche optionale Argumente annehmen. Diese Gewohnheiten können zu verwirrendem Verhalten führen. Betrachten Sie Folgendes:

```js
["1", "2", "3"].map(parseInt);
```

Obwohl man `[1, 2, 3]` erwarten könnte, lautet das tatsächliche Ergebnis `[1, NaN, NaN]`.

{{jsxref("parseInt")}} wird oft mit einem Argument verwendet, nimmt aber zwei entgegen: Das erste ist ein Ausdruck, das zweite die Zahlenbasis. `Array.prototype.map` übergibt der Callback-Funktion drei Argumente: das Element, den Index und das Array. Das dritte Argument wird von {{jsxref("parseInt")}} ignoriert – das zweite jedoch _nicht_! Darin liegt die Ursache für die mögliche Verwirrung.

Hier ist ein kurzes Beispiel für die einzelnen Iterationsschritte:

```js
/* first iteration  (index is 0): */ parseInt("1", 0); // 1
/* second iteration (index is 1): */ parseInt("2", 1); // NaN
/* third iteration  (index is 2): */ parseInt("3", 2); // NaN
```

Um dieses Problem zu lösen, definieren Sie eine weitere Funktion, die nur ein Argument entgegennimmt:

```js
["1", "2", "3"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

Sie können auch die Funktion {{jsxref("Number")}} verwenden, die nur ein Argument entgegennimmt:

```js
["1", "2", "3"].map(Number); // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]

// For comparison, if we use parseInt() on the array above:
["1.1", "2.2e2", "3e300"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

Weitere Erläuterungen finden Sie in [A JavaScript optional argument hazard](https://wirfs-brock.com/allen/posts/166) von Allen Wirfs-Brock.

### Das abgebildete Array enthält undefined

Wenn {{jsxref("undefined")}} oder nichts zurückgegeben wird, enthält das resultierende Array `undefined`. Wenn Sie das Element stattdessen entfernen möchten, verketten Sie die Methode {{jsxref("Array/filter", "filter()")}} oder verwenden Sie die Methode {{jsxref("Array/flatMap", "flatMap()")}} und geben Sie ein leeres Array zurück, um das Entfernen anzuzeigen.

```js
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// index goes from 0, so the filteredNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]
```

### Abbildung mit Seiteneffekten

Der Callback kann Seiteneffekte haben.

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

Dies wird nicht empfohlen, da Methoden, die eine Kopie erstellen, am besten mit reinen Funktionen verwendet werden. In diesem Fall können wir das Array stattdessen zweimal durchlaufen.

```js
const cart = [5, 15, 25];
const total = cart.reduce((acc, cost) => acc + cost, 0);
const withTax = cart.map((cost) => cost * 1.2);
```

Manchmal wird dieses Muster so weit getrieben, dass das _einzige_ Nützliche, was `map()` tut, das Auslösen von Seiteneffekten ist.

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

Wie bereits erwähnt, ist dies ein Anti-Pattern. Wenn Sie den Rückgabewert von `map()` nicht verwenden, nutzen Sie stattdessen `forEach()` oder eine `for...of`-Schleife.

```js
products.forEach((product) => {
  product.price = 100;
});
```

Oder, wenn Sie stattdessen ein neues Array erstellen möchten:

```js
const productsWithPrice = products.map((product) => ({
  ...product,
  price: 100,
}));
```

### Das dritte Argument von callbackFn verwenden

Das Argument `array` ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Im folgenden Beispiel werden zunächst mit `filter()` die positiven Werte extrahiert. Anschließend wird mit `map()` ein neues Array erstellt, in dem jedes Element der Durchschnitt seiner Nachbarelemente und seiner selbst ist.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const averaged = numbers
  .filter((num) => num > 0)
  .map((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
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
    // Keep two decimal places
    return Math.round(average * 100) / 100;
  });
console.log(averaged); // [2, 2.67, 2, 3.33, 5, 5.33, 5.67, 4]
```

Das Argument `array` ist _nicht_ das Array, das gerade erstellt wird – von der Callback-Funktion aus gibt es keine Möglichkeit, auf dieses Array zuzugreifen.

### map() bei dünn besetzten Arrays verwenden

Ein dünn besetztes Array bleibt auch nach `map()` dünn besetzt. Die Indizes leerer Positionen bleiben im zurückgegebenen Array leer, und die Callback-Funktion wird für diese Positionen nicht aufgerufen.

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

### map() für Objekte aufrufen, die keine Arrays sind

Die Methode `map()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by map() since length is 3
};
console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
// [ 4, 9, 16 ]
```

Dieses Beispiel zeigt, wie Sie eine mit `querySelectorAll()` erfasste Sammlung von Objekten durchlaufen und ein Array mit den Werten aller ausgewählten `option`-Elemente zurückgeben. Da `querySelectorAll()` eine `NodeList` zurückgibt – ein Array-ähnliches Objekt ohne die Methode `map()` –, verwenden wir `Array.prototype.map.call()` und übergeben `elems` als `this`-Wert sowie den Callback als zweites Argument.

```js
const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);
```

Sie können auch {{jsxref("Array.from()")}} verwenden, um `elems` in ein Array umzuwandeln, und anschließend auf die Methode `map()` zugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Array.prototype.map` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.map` von es-shims](https://www.npmjs.com/package/array.prototype.map)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Map")}}
