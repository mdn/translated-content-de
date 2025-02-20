---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`forEach()`**-Methode von {{jsxref("Array")}}-Instanzen führt eine bereitgestellte Funktion einmal für jedes Element des Arrays aus.

{{InteractiveExample("JavaScript Demo: Array.forEach()")}}

```js interactive-example
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element des Arrays ausgeführt wird. Der Rückgabewert wird verworfen. Die Funktion wird mit folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf dem `forEach()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `forEach()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn`-Funktion in aufsteigender Indexreihenfolge einmal für jedes Element in einem Array auf. Im Gegensatz zu {{jsxref("Array/map", "map()")}} gibt `forEach()` immer {{jsxref("undefined")}} zurück und ist nicht kaskadierbar. Ein typischer Anwendungsfall besteht darin, Nebenwirkungen am Ende einer Kette auszuführen. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um mehr darüber zu erfahren, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen wurden. Sie wird nicht für leere Stellen in [sparsely arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ausgeführt.

Die `forEach()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert über eine `length`-Eigenschaft und integerbasierte Schlüssel-Eigenschaften verfügt.

Es gibt keine Möglichkeit, eine `forEach()`-Schleife zu stoppen oder zu unterbrechen, außer durch das Werfen einer Ausnahme. Wenn Sie ein solches Verhalten benötigen, ist die `forEach()`-Methode das falsche Werkzeug.

Ein vorzeitiger Abbruch kann durch Schleifenanweisungen wie [`for`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) erreicht werden. Array-Methoden wie {{jsxref("Array/every", "every()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/find", "find()")}} und {{jsxref("Array/findIndex", "findIndex()")}} stoppen ebenfalls die Iteration sofort, wenn eine weitere Iteration nicht erforderlich ist.

`forEach()` erwartet eine synchrone Funktion — es wartet nicht auf Promises. Stellen Sie sicher, dass Sie die Konsequenzen kennen, wenn Sie Promises (oder asynchrone Funktionen) als `forEach`-Callbacks verwenden.

```js
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// Naively expected output: 14
// Actual output: 0
```

Um eine Reihe von asynchronen Operationen sequenziell oder gleichzeit auszuführen, siehe [Promise-Zusammensetzung](/de/docs/Web/JavaScript/Guide/Using_promises#composition).

## Beispiele

### Eine Schleife durch forEach ersetzen

```js
const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});
```

### Den Inhalt eines Arrays ausgeben

> [!NOTE]
> Um den Inhalt eines Arrays in der Konsole anzuzeigen,
> können Sie [`console.table()`](/de/docs/Web/API/Console/table_static) verwenden, das eine
> formatierte Version des Arrays ausgibt.
>
> Das folgende Beispiel zeigt einen alternativen Ansatz,
> der die `forEach()`-Methode verwendet.

Das folgende Codebeispiel protokolliert (loggt) eine Zeile für jedes Element in einem Array:

```js
const logArrayElements = (element, index /*, array */) => {
  console.log(`a[${index}] = ${element}`);
};

// Notice that index 2 is skipped, since there is no item at
// that position in the array.
[2, 5, , 9].forEach(logArrayElements);
// Logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### Verwendung von thisArg

Das folgende (konstruiertes) Beispiel aktualisiert die Eigenschaften eines Objekts basierend auf jedem Eintrag im Array:

```js
class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    // Only function expressions have their own this bindings.
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16
```

Da der Parameter `thisArg` (`this`) an `forEach()` übergeben wird, wird er jedes Mal, wenn die Callback-Funktion ausgeführt wird, dieser als `this`-Wert übergeben.

> [!NOTE]
> Wenn die Callback-Funktion als
> [Arrow Function Expression](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) übergeben wird,
> könnte der `thisArg`-Parameter ausgelassen werden,
> da alle Arrow-Funktionen den {{jsxref("Operators/this", "this")}}-Wert lexikalisch binden.

### Eine Funktion zum Kopieren von Objekten

Der folgende Code erstellt eine Kopie eines gegebenen Objekts.

Es gibt unterschiedliche Möglichkeiten, eine Kopie eines Objekts zu erstellen. Die folgende Methode wird hier nur zur Veranschaulichung der Arbeitsweise von `Array.prototype.forEach()` mittels Nutzung der `Object.*`-Utility-Funktionen präsentiert.

```js
const copy = (obj) => {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
};

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1); // obj2 looks like obj1 now
```

### Ein Array abflachen

Das folgende Beispiel ist nur zu Lernzwecken gedacht. Wenn Sie ein Array mit eingebauten Methoden abflachen möchten, können Sie {{jsxref("Array.prototype.flat()")}} verwenden.

```js
const flatten = (arr) => {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Verwenden des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Im folgenden Beispiel wird zunächst `filter()` verwendet, um die positiven Werte zu extrahieren, und dann `forEach()`, um die Nachbarn zu protokollieren.

```js
const numbers = [3, -1, 1, 4, 1, 5];
numbers
  .filter((num) => num > 0)
  .forEach((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    console.log(arr[idx - 1], num, arr[idx + 1]);
  });
// undefined 3 1
// 3 1 4
// 1 4 1
// 4 1 5
// 1 5 undefined
```

### Verwendung von forEach() in sparsen Arrays

```js-nolint
const arraySparse = [1, 3, /* empty */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }
```

Die Callback-Funktion wird nicht für den fehlenden Wert an Index 2 aufgerufen.

### Aufrufen von forEach() auf Nicht-Array-Objekten

Die `forEach()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative ganze Zahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by forEach() since length is 3
};
Array.prototype.forEach.call(arrayLike, (x) => console.log(x));
// 2
// 3
// 4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.forEach` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed Collections](/de/docs/Web/JavaScript/Guide/Indexed_collections)-Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
