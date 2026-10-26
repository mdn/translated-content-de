---
title: Array.prototype.forEach()
short-title: forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`forEach()`** von {{jsxref("Array")}}-Instanzen führt für jedes Array-Element einmal eine bereitgestellte Funktion aus.

{{InteractiveExample("JavaScript Demo: Array.prototype.forEach()")}}

```js interactive-example
const array = ["a", "b", "c"];

array.forEach((element) => console.log(element));

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Ihr Rückgabewert wird verworfen. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, für das `forEach()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der bei der Ausführung von `callbackFn` als `this` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die Methode `forEach()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft die bereitgestellte Funktion `callbackFn` für jedes Element eines Arrays einmal in aufsteigender Indexreihenfolge auf. Anders als {{jsxref("Array/map", "map()")}} gibt `forEach()` immer {{jsxref("undefined")}} zurück und kann nicht verkettet werden. Typischerweise wird die Methode verwendet, um am Ende einer Methodenkette Seiteneffekte auszuführen. Weitere Informationen zur allgemeinen Funktionsweise dieser Methoden finden Sie im Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen sind. Für leere Einträge in [Arrays mit Lücken](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird die Funktion nicht aufgerufen.

Die Methode `forEach()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

Eine `forEach()`-Schleife lässt sich nur durch Auslösen einer Ausnahme anhalten oder abbrechen. Wenn Sie ein solches Verhalten benötigen, ist `forEach()` nicht die richtige Methode.

Ein vorzeitiger Abbruch ist mit Schleifenanweisungen wie [`for`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) möglich. Auch Array-Methoden wie {{jsxref("Array/every", "every()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/find", "find()")}} und {{jsxref("Array/findIndex", "findIndex()")}} beenden die Iteration sofort, wenn keine weitere Iteration erforderlich ist.

`forEach()` erwartet eine synchrone Funktion – die Methode wartet nicht auf Promises. Beachten Sie die Auswirkungen, wenn Sie Promises (oder asynchrone Funktionen) als Callbacks für `forEach` verwenden.

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

Wie Sie mehrere asynchrone Operationen nacheinander oder gleichzeitig ausführen, erfahren Sie unter [Promise-Komposition](/de/docs/Web/JavaScript/Guide/Using_promises#composition).

## Beispiele

### Eine for-Schleife in forEach umwandeln

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
> Um den Inhalt eines Arrays in der Konsole anzuzeigen, können Sie [`console.table()`](/de/docs/Web/API/console/table_static) verwenden. Die Methode gibt eine formatierte Darstellung des Arrays aus.
>
> Das folgende Beispiel zeigt einen alternativen Ansatz mit `forEach()`.

Der folgende Code gibt für jedes Element eines Arrays eine Zeile aus:

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

### thisArg verwenden

Das folgende (konstruierte) Beispiel aktualisiert die Eigenschaften eines Objekts anhand jedes Eintrags im Array:

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

Da der Parameter `thisArg` (`this`) an `forEach()` übergeben wird, wird er bei jedem Aufruf von `callback` an die Funktion weitergegeben. Der Callback verwendet ihn als Wert für `this`.

> [!NOTE]
> Wenn als Callback-Funktion ein [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwendet würde, könnte der Parameter `thisArg` weggelassen werden, da alle Pfeilfunktionen den Wert von {{jsxref("this")}} lexikalisch binden.

### Eine Funktion zum Kopieren von Objekten

Der folgende Code erstellt eine Kopie eines übergebenen Objekts.

Es gibt verschiedene Möglichkeiten, eine Kopie eines Objekts zu erstellen. Die folgende ist nur eine davon und soll mithilfe von `Object.*`-Hilfsfunktionen veranschaulichen, wie `Array.prototype.forEach()` funktioniert.

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

Das folgende Beispiel dient nur zu Lernzwecken. Wenn Sie ein Array mit integrierten Methoden abflachen möchten, können Sie {{jsxref("Array.prototype.flat()")}} verwenden.

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

### Das dritte Argument von callbackFn verwenden

Das Argument `array` ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn keine Variable vorhanden ist, die auf das Array verweist. Im folgenden Beispiel werden zuerst mit `filter()` die positiven Werte extrahiert. Anschließend werden mit `forEach()` deren Nachbarwerte ausgegeben.

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

### forEach() bei Arrays mit Lücken verwenden

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

Für den fehlenden Wert an Index 2 wird die Callback-Funktion nicht aufgerufen.

### forEach() für Objekte aufrufen, die keine Arrays sind

Die Methode `forEach()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

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

- [Polyfill für `Array.prototype.forEach` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.forEach` von es-shims](https://www.npmjs.com/package/array.prototype.foreach)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
