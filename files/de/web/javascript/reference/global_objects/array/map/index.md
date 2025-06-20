---
title: Array.prototype.map()
short-title: map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`map()`**-Methode von {{jsxref("Array")}}-Instanzen erstellt ein neues Array, das mit den Ergebnissen der Ausführung einer bereitgestellten Funktion auf jedem Element des aufrufenden Arrays gefüllt ist.

{{InteractiveExample("JavaScript Demo: Array.prototype.map()")}}

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Ihr Rückgabewert wird als einzelnes Element in das neue Array hinzugefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array bearbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array bearbeitet wird.
    - `array`
      - : Das Array, auf das `map()` angewendet wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Ein neues Array, bei dem jedes Element das Ergebnis der Rückruffunktion ist.

## Beschreibung

Die `map()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Array auf und konstruiert ein neues Array aus den Ergebnissen. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um mehr darüber zu erfahren, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen wurden. Sie wird nicht für leere Stellen in [sparsely besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Die `map()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige Schlüsseleigenschaften hat.

Da `map` ein neues Array erstellt, ist das Aufrufen ohne Verwendung des zurückgegebenen Arrays ein Anti-Pattern; verwenden Sie stattdessen {{jsxref("Array/forEach", "forEach")}} oder {{jsxref("Statements/for...of", "for...of")}}.

## Beispiele

### Abbilden eines Zahlenarrays auf ein Array von Quadratwurzeln

Der folgende Code nimmt ein Array von Zahlen und erstellt ein neues Array, das die Quadratwurzeln der Zahlen im ersten Array enthält.

```js
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
```

### Verwenden von map, um Objekte in einem Array neu zu formatieren

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

Es ist üblich, den Rückruf mit einem Argument zu verwenden (das durchlaufene Element). Bestimmte Funktionen werden häufig auch mit einem Argument verwendet, obwohl sie zusätzliche optionale Argumente akzeptieren. Diese Gewohnheiten können zu verwirrendem Verhalten führen. Betrachten Sie:

```js
["1", "2", "3"].map(parseInt);
```

Während man `[1, 2, 3]` erwarten könnte, ist das tatsächliche Ergebnis `[1, NaN, NaN]`.

{{jsxref("parseInt")}} wird häufig mit einem Argument verwendet, nimmt aber zwei. Das erste ist ein Ausdruck und das zweite ist die Basis für die Rückruffunktion, `Array.prototype.map` übergibt 3 Argumente: das Element, den Index und das Array. Das dritte Argument wird von {{jsxref("parseInt")}} ignoriert — aber _nicht_ das zweite! Das ist die Quelle möglicher Verwirrungen.

Hier ist ein kurzes Beispiel der Iterationsschritte:

```js
/* first iteration  (index is 0): */ parseInt("1", 0); // 1
/* second iteration (index is 1): */ parseInt("2", 1); // NaN
/* third iteration  (index is 2): */ parseInt("3", 2); // NaN
```

Um dies zu lösen, definieren Sie eine andere Funktion, die nur ein Argument akzeptiert:

```js
["1", "2", "3"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

Sie können auch die {{jsxref("Number")}}-Funktion verwenden, die nur ein Argument akzeptiert:

```js
["1", "2", "3"].map(Number); // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]

// For comparison, if we use parseInt() on the array above:
["1.1", "2.2e2", "3e300"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

Siehe [Ein JavaScript optional argument hazard](https://wirfs-brock.com/allen/posts/166) von Allen Wirfs-Brock für weitere Diskussionen.

### Abgebildetes Array enthält undefined

Wenn {{jsxref("undefined")}} oder nichts zurückgegeben wird, enthält das resultierende Array `undefined`. Wenn Sie das Element stattdessen löschen möchten, verketten Sie eine {{jsxref("Array/filter", "filter()")}}-Methode oder verwenden Sie die {{jsxref("Array/flatMap", "flatMap()")}}-Methode und geben Sie ein leeres Array zurück, um die Löschung zu signalisieren.

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

### Seiteneffektbezogenes Mapping

Der Rückruf kann Seiteneffekte haben.

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

Dies wird nicht empfohlen, da Kopiermethoden am besten mit reinen Funktionen verwendet werden. In diesem Fall können wir wählen, das Array zweimal zu durchlaufen.

```js
const cart = [5, 15, 25];
const total = cart.reduce((acc, cost) => acc + cost, 0);
const withTax = cart.map((cost) => cost * 1.2);
```

Manchmal geht dieses Muster bis zum Äußersten und das _einzige_ Nützliche, das `map()` tut, ist, Seiteneffekte zu verursachen.

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

Wie zuvor erwähnt, ist dies ein Anti-Pattern. Wenn Sie den Rückgabewert von `map()` nicht verwenden, verwenden Sie `forEach()` oder eine `for...of`-Schleife stattdessen.

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

### Verwenden des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die sich auf das Array bezieht. Das folgende Beispiel verwendet zuerst `filter()`, um die positiven Werte zu extrahieren, und verwendet dann `map()`, um ein neues Array zu erstellen, bei dem jedes Element der Durchschnitt seiner Nachbarn und von sich selbst ist.

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

Das `array`-Argument ist _nicht_ das Array, das aufgebaut wird — es gibt keine Möglichkeit, auf das im Rückruf aufgebaute Array zuzugreifen.

### Verwenden von map() auf sparsam besetzten Arrays

Ein sparsam besetztes Array bleibt nach `map()` spärlich. Die Indizes leerer Stellen bleiben im zurückgegebenen Array leer, und die Rückruffunktion wird nicht auf sie angewendet.

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

Die `map()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative ganze Zahl ist, die kleiner als `length` ist.

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

Dieses Beispiel zeigt, wie man durch eine Sammlung von Objekten iteriert, die von `querySelectorAll` gesammelt wurden. Dies liegt daran, dass `querySelectorAll` ein `NodeList` zurückgibt (das eine Sammlung von Objekten ist). In diesem Fall geben wir alle ausgewählten `option`-Werte auf dem Bildschirm zurück:

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
- [es-shims Polyfill von `Array.prototype.map`](https://www.npmjs.com/package/array.prototype.map)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Map")}}
