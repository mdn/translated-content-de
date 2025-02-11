---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`map()`**-Methode von {{jsxref("Array")}}-Instanzen erstellt ein neues Array, das mit den Ergebnissen der Anwendung einer bereitgestellten Funktion auf jedes Element des aufrufenden Arrays gefüllt ist.

{{InteractiveExample("JavaScript Demo: Array.map()")}}

```js interactive-example
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

## Syntax

```js-nolint
map(callbackFn)
map(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Ihr Rückgabewert wird als einzelnes Element im neuen Array hinzugefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf dem `map()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der beim Ausführen von `callbackFn` als `this` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Ein neues Array, bei dem jedes Element das Ergebnis der `callback`-Funktion ist.

## Beschreibung

Die Methode `map()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft die bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Array auf und erstellt ein neues Array aus den Ergebnissen. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um weitere Informationen darüber zu erhalten, wie diese Methoden allgemein funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen sind. Für leere Plätze in [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird sie nicht aufgerufen.

Die Methode `map()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine Eigenschaft `length` und Integer-Indizes aufweist.

Da `map` ein neues Array erstellt, gilt es als Anti-Pattern, sie aufzurufen, ohne das zurückgegebene Array zu verwenden. Verwenden Sie stattdessen {{jsxref("Array/forEach", "forEach")}} oder {{jsxref("Statements/for...of", "for...of")}}.

## Beispiele

### Abbilden eines Arrays von Zahlen auf ein Array von Quadratwurzeln

Der folgende Code nimmt ein Array von Zahlen und erstellt ein neues Array, das die Quadratwurzeln der Zahlen des ersten Arrays enthält.

```js
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
```

### Verwendung von map zur Umformatierung von Objekten in einem Array

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

### Verwendung von parseInt() mit map()

Es ist üblich, den Callback mit einem Argument zu verwenden (das Element, das traversiert wird). Bestimmte Funktionen werden auch häufig mit einem Argument verwendet, obwohl sie zusätzliche optionale Argumente annehmen. Diese Gewohnheiten können zu verwirrendem Verhalten führen. Betrachten Sie:

```js
["1", "2", "3"].map(parseInt);
```

Während man `[1, 2, 3]` erwarten könnte, ist das tatsächliche Ergebnis `[1, NaN, NaN]`.

{{jsxref("parseInt")}} wird oft mit einem Argument verwendet, nimmt aber zwei. Das erste ist ein Ausdruck und das zweite ist die Basis (Radix). Der Callback-Funktion `Array.prototype.map` werden drei Argumente übergeben: das Element, der Index und das Array. Das dritte Argument wird von {{jsxref("parseInt")}} ignoriert — aber _nicht_ das zweite! Dies ist die Quelle möglicher Verwirrung.

Hier ist ein prägnantes Beispiel der Iterationsschritte:

```js
/* first iteration  (index is 0): */ parseInt("1", 0); // 1
/* second iteration (index is 1): */ parseInt("2", 1); // NaN
/* third iteration  (index is 2): */ parseInt("3", 2); // NaN
```

Um dies zu lösen, definieren Sie eine andere Funktion, die nur ein Argument nimmt:

```js
["1", "2", "3"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

Sie können auch die {{jsxref("Number")}}-Funktion verwenden, die nur ein Argument annimmt:

```js
["1", "2", "3"].map(Number); // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]

// For comparison, if we use parseInt() on the array above:
["1.1", "2.2e2", "3e300"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

Siehe [A JavaScript optional argument hazard](https://wirfs-brock.com/allen/posts/166) von Allen Wirfs-Brock für weitere Diskussionen.

### Gemapptes Array enthält undefined

Wenn {{jsxref("undefined")}} oder nichts zurückgegeben wird, enthält das resultierende Array `undefined`. Wenn Sie das Element stattdessen löschen möchten, verketten Sie eine {{jsxref("Array/filter", "filter()")}}-Methode oder verwenden Sie die {{jsxref("Array/flatMap", "flatMap()")}}-Methode und geben ein leeres Array zurück, um die Löschung zu signalisieren.

```js
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]
```

### Abbildung mit Nebenwirkungen

Der Callback kann Nebenwirkungen haben.

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

Dies wird nicht empfohlen, da kopierende Methoden am besten mit reinen Funktionen verwendet werden. In diesem Fall können wir das Array zweimal durchlaufen.

```js
const cart = [5, 15, 25];
const total = cart.reduce((acc, cost) => acc + cost, 0);
const withTax = cart.map((cost) => cost * 1.2);
```

Manchmal wird dieses Muster übertrieben, und das _Einzige_ Nützliche, das `map()` macht, ist, Nebenwirkungen zu verursachen.

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

Wie bereits erwähnt, ist dies ein Anti-Pattern. Wenn Sie den Rückgabewert von `map()` nicht verwenden, verwenden Sie stattdessen `forEach()` oder eine `for...of`-Schleife.

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

### Verwendung des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zunächst `filter()`, um die positiven Werte zu extrahieren, und dann `map()`, um ein neues Array zu erstellen, bei dem jedes Element der Durchschnitt seiner Nachbarn und es selbst ist.

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

Das `array`-Argument ist _nicht_ das Array, das gerade erstellt wird — es gibt keine Möglichkeit, auf das Array zuzugreifen, das aus der Callback-Funktion heraus erstellt wird.

### Verwendung von map() auf dünn besiedelten Arrays (sparse arrays)

Ein dünn besiedeltes Array bleibt nach Anwendung von `map()` dünn besiedelt. Die Indizes der leeren Plätze bleiben im zurückgegebenen Array leer, und die Callback-Funktion wird nicht aufgerufen.

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

### Aufruf von map() auf Nicht-Array-Objekten

Die `map()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine Nicht-Negativ-Ganzzahl kleiner als `length` ist.

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

Dieses Beispiel zeigt, wie durch eine Sammlung von Objekten iteriert werden kann, die von `querySelectorAll` gesammelt wurden. Dies liegt daran, dass `querySelectorAll` eine `NodeList` zurückgibt (eine Sammlung von Objekten). In diesem Fall geben wir die Werte aller auf dem Bildschirm ausgewählten `option`s zurück:

```js
const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);
```

Sie können auch {{jsxref("Array.from()")}} verwenden, um `elems` in ein Array zu transformieren und dann auf die `map()`-Methode zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.map` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Map")}}
