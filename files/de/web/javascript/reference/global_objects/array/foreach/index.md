---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`forEach()`**-Methode von {{jsxref("Array")}}-Instanzen führt eine bereitgestellte Funktion einmal für jedes Array-Element aus.

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Der Rückgabewert wird verworfen. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf das `forEach()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `forEach()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Array in aufsteigender Indexreihenfolge auf. Im Gegensatz zu {{jsxref("Array/map", "map()")}} gibt `forEach()` immer {{jsxref("undefined")}} zurück und ist nicht verkettbar. Der typische Anwendungsfall besteht darin, Seiteneffekte am Ende einer Kette auszuführen. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, die zugewiesene Werte haben. Es wird nicht für leere Stellen in [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Die `forEach()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-indizierte Eigenschaften hat.

Es gibt keine Möglichkeit, eine `forEach()`-Schleife zu stoppen oder zu unterbrechen, außer durch Werfen einer Ausnahme. Wenn Sie ein solches Verhalten benötigen, ist die `forEach()`-Methode das falsche Werkzeug.

Eine vorzeitige Beendigung kann mit Schleifenanweisungen wie [`for`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) erreicht werden. Array-Methoden wie {{jsxref("Array/every", "every()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/find", "find()")}}, und {{jsxref("Array/findIndex", "findIndex()")}} stoppen die Iteration ebenfalls sofort, wenn eine weitere Iteration nicht notwendig ist.

`forEach()` erwartet eine synchrone Funktion — es wartet nicht auf Versprechen. Stellen Sie sicher, dass Sie sich der Auswirkungen bewusst sind, wenn Sie Versprechen (oder asynchrone Funktionen) als `forEach`-Callbacks verwenden.

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

Um eine Reihe von asynchronen Operationen nacheinander oder gleichzeitig auszuführen, siehe [Vertrauenszusammensetzung](/de/docs/Web/JavaScript/Guide/Using_promises#composition).

## Beispiele

### Umwandlung einer for-Schleife in forEach

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

### Ausdrucken der Inhalte eines Arrays

> [!NOTE]
> Um den Inhalt eines Arrays in der Konsole anzuzeigen,
> können Sie [`console.table()`](/de/docs/Web/API/Console/table_static) verwenden, das eine formatierte
> Version des Arrays ausgibt.
>
> Das folgende Beispiel veranschaulicht einen alternativen Ansatz mit
> `forEach()`.

Der folgende Code protokolliert eine Zeile für jedes Element in einem Array:

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

Das folgende (konstruiertes) Beispiel aktualisiert die Eigenschaften eines Objekts aus jedem Eintrag im
Array:

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

Da der `thisArg`-Parameter (`this`) für
`forEach()` bereitgestellt wird, wird er jedes Mal, wenn er aufgerufen wird, an `callback` übergeben. Der Callback verwendet ihn als seinen `this`-Wert.

> [!NOTE]
> Wenn die als Callback verwendete Funktion ein
> [Pfeilfunktion-Ausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ist,
> könnte der `thisArg`-Parameter weggelassen werden,
> da alle Pfeilfunktionen das {{jsxref("Operators/this", "this")}}
> lexikalisch binden.

### Eine Objekt-Kopie-Funktion

Der folgende Code erstellt eine Kopie eines gegebenen Objekts.

Es gibt verschiedene Möglichkeiten, eine Kopie eines Objekts zu erstellen. Das folgende ist nur eine Möglichkeit
und wird präsentiert, um zu erklären, wie `Array.prototype.forEach()` funktioniert, indem
`Object.*`-Dienstprogrammfunktionen verwendet werden.

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

Das folgende Beispiel dient nur zu Lernzwecken. Wenn Sie ein Array
mit eingebauten Methoden abflachen möchten, können Sie {{jsxref("Array.prototype.flat()")}} verwenden.

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

### Verwendung des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zunächst `filter()`, um die positiven Werte zu extrahieren, und verwendet dann `forEach()`, um deren Nachbarn zu protokollieren.

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

### Verwendung von forEach() auf dünn besetzten Arrays

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

### Aufruf von forEach() auf Nicht-Array-Objekten

Die `forEach()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
