---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`forEach()`**-Methode von {{jsxref("Array")}} Instanzen führt eine bereitgestellte Funktion einmal für jedes Array-Element aus.

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

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
      - : Das Array, auf das `forEach()` angewendet wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `forEach()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Array in aufsteigender Indexreihenfolge auf. Im Gegensatz zu {{jsxref("Array/map", "map()")}} gibt `forEach()` immer {{jsxref("undefined")}} zurück und kann nicht verkettet werden. Der typische Anwendungsfall ist die Ausführung von Seiteneffekten am Ende einer Kette. Lesen Sie den [Abschnitt über iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um mehr darüber zu erfahren, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen sind. Es wird nicht für leere Slots in [lückenhaften Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Die `forEach()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften hat.

Es gibt keine Möglichkeit, eine `forEach()`-Schleife zu stoppen oder zu unterbrechen, außer durch Auslösen einer Ausnahme. Wenn Sie solches Verhalten benötigen, ist die `forEach()` Methode das falsche Werkzeug.

Eine vorzeitige Beendigung kann mit Schleifenanweisungen wie [`for`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) erreicht werden. Array-Methoden wie {{jsxref("Array/every", "every()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/find", "find()")}}, und {{jsxref("Array/findIndex", "findIndex()")}} beenden die Iteration ebenfalls sofort, wenn eine weitere Iteration nicht erforderlich ist.

`forEach()` erwartet eine synchrone Funktion — es wartet nicht auf Promises. Stellen Sie sicher, dass Sie sich der Konsequenzen bewusst sind, wenn Sie Promises (oder asynchrone Funktionen) als `forEach` Rückrufe verwenden.

```js
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// Naiv erwarteter Ausgabewert: 14
// Tatsächlicher Ausgabewert: 0
```

Um eine Reihe von asynchronen Operationen sequenziell oder gleichzeitig auszuführen, lesen Sie [Promise-Komposition](/de/docs/Web/JavaScript/Guide/Using_promises#composition).

## Beispiele

### Eine For-Schleife in forEach umwandeln

```js
const items = ["item1", "item2", "item3"];
const copyItems = [];

// vorher
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// nachher
items.forEach((item) => {
  copyItems.push(item);
});
```

### Den Inhalt eines Arrays ausgeben

> [!NOTE]
> Um den Inhalt eines Arrays in der Konsole anzuzeigen,
> können Sie {{domxref("console/table_static", "console.table()")}} verwenden, die eine formatierte
> Version des Arrays ausgibt.
>
> Das folgende Beispiel veranschaulicht einen alternativen Ansatz unter Verwendung
> von `forEach()`.

Der folgende Code protokolliert eine Zeile für jedes Element in einem Array:

```js
const logArrayElements = (element, index /*, array */) => {
  console.log(`a[${index}] = ${element}`);
};

// Beachten Sie, dass Index 2 übersprungen wird, da es an dieser Position
// kein Element im Array gibt.
[2, 5, , 9].forEach(logArrayElements);
// Protokolliert:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### thisArg verwenden

Das folgende (konstruierte) Beispiel aktualisiert die Eigenschaften eines Objekts aus jedem Eintrag im Array:

```js
class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    // Nur Funktionsausdrücke haben ihre eigenen this-Bindungen.
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

Da der `thisArg` Parameter (`this`) an `forEach()` übergeben wird, wird er bei jedem Aufruf an `callback` übergeben. Der Rückruf verwendet ihn als seinen `this` Wert.

> [!NOTE]
> Wenn der Rückruffunktion eine [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) übergeben wird, könnte der `thisArg`-Parameter weggelassen werden, da alle Pfeilfunktionen den {{jsxref("Operators/this", "this")}} Wert lexikalisch binden.

### Eine Objektkopierfunktion

Der folgende Code erstellt eine Kopie eines gegebenen Objekts.

Es gibt verschiedene Möglichkeiten, eine Kopie eines Objekts zu erstellen. Das folgende ist nur eine Möglichkeit und soll erklären, wie `Array.prototype.forEach()` durch Nutzung der `Object.*`-Dienstprogrammfunktionen funktioniert.

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
const obj2 = copy(obj1); // obj2 sieht jetzt aus wie obj1
```

### Ein Array abflachen

Das folgende Beispiel dient nur Lernzwecken. Wenn Sie ein Array mit eingebauten Methoden abflachen möchten, können Sie {{jsxref("Array.prototype.flat()")}} verwenden.

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

// Anwendung
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Verwenden des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zuerst `filter()`, um die positiven Werte zu extrahieren, und verwendet dann `forEach()`, um seine Nachbarn zu protokollieren.

```js
const numbers = [3, -1, 1, 4, 1, 5];
numbers
  .filter((num) => num > 0)
  .forEach((num, idx, arr) => {
    // Ohne das arr-Argument gibt es keine einfache Möglichkeit, auf das
    // Zwischenarray zuzugreifen, ohne es in einer Variablen zu speichern.
    console.log(arr[idx - 1], num, arr[idx + 1]);
  });
// undefined 3 1
// 3 1 4
// 1 4 1
// 4 1 5
// 1 5 undefined
```

### Verwenden von forEach() bei lückenhaften Arrays

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

Die Rückruffunktion wird nicht für den fehlenden Wert an Index 2 aufgerufen.

### Aufruf von forEach() für Nicht-Array-Objekte

Die `forEach()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // von forEach() ignoriert, da length 3 ist
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
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
