---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
l10n:
  sourceCommit: 6589a6a25a5d2e9a359c3f02f37c670fb7c74259
---

{{JSRef}}

Die **`find()`**-Methode von {{jsxref("Array")}}-Instanzen gibt das erste Element im bereitgestellten Array zurück, das die bereitgestellte Testfunktion erfüllt.
Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben.

- Wenn Sie den **Index** des gefundenen Elements im Array benötigen, verwenden Sie {{jsxref("Array/findIndex", "findIndex()")}}.
- Wenn Sie den **Index eines Wertes** finden müssen, verwenden Sie {{jsxref("Array/indexOf", "indexOf()")}}.
  (Es ist ähnlich wie {{jsxref("Array/findIndex", "findIndex()")}}, überprüft jedoch jedes Element auf Gleichheit mit dem Wert, anstatt eine Testfunktion zu verwenden.)
- Wenn Sie prüfen müssen, ob ein Wert **existiert** in einem Array, verwenden Sie {{jsxref("Array/includes", "includes()")}}.
  Auch hier wird jedes Element auf Gleichheit mit dem Wert überprüft, anstatt eine Testfunktion zu verwenden.
- Wenn Sie überprüfen müssen, ob ein beliebiges Element die bereitgestellte Testfunktion erfüllt, verwenden Sie {{jsxref("Array/some", "some()")}}.
- Wenn Sie alle Elemente finden müssen, die die bereitgestellte Testfunktion erfüllen, verwenden Sie {{jsxref("Array/filter", "filter()")}}.

{{EmbedInteractiveExample("pages/js/array-find.html", "shorter")}}

## Syntax

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy)-Wert zurückgeben, um anzuzeigen, dass ein übereinstimmendes Element gefunden wurde, und einen [falsy](/de/docs/Glossary/Falsy)-Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf dem `find()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das erste Element im Array, das die bereitgestellte Testfunktion erfüllt.
Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

## Beschreibung

Die `find()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Array in aufsteigender Indexreihenfolge auf, bis `callbackFn` einen [truthy](/de/docs/Glossary/Truthy)-Wert zurückgibt. `find()` gibt dann dieses Element zurück und stoppt die Iteration durch das Array. Wenn `callbackFn` nie einen truthy-Wert zurückgibt, gibt `find()` {{jsxref("undefined")}} zurück. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird für _jeden_ Index des Arrays aufgerufen, nicht nur für diejenigen mit zugewiesenen Werten. Leere Stellen in [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verhalten sich wie `undefined`.

Die `find()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige Schlüssel-Eigenschaften hat.

## Beispiele

### Ein Objekt in einem Array nach einer seiner Eigenschaften finden

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
```

#### Verwendung von Pfeilfunktionen und Destrukturierung

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
```

### Eine Primzahl in einem Array finden

Das folgende Beispiel findet ein Element im Array, das eine Primzahl ist (oder gibt {{jsxref("undefined")}} zurück, wenn keine Primzahl vorhanden ist):

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

### Die dritte Argument von callbackFn verwenden

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zuerst `filter()`, um die positiven Werte zu extrahieren und verwendet dann `find()`, um das erste Element zu finden, das kleiner ist als seine Nachbarn.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = numbers
  .filter((num) => num > 0)
  .find((num, idx, arr) => {
    // Ohne das arr-Argument gibt es keinen einfachen Weg, um auf das
    // Zwischenarray zuzugreifen, ohne es einer Variablen zuzuweisen.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(firstTrough); // 1
```

### Verwendung von find() auf dünn besetzten Arrays

Leere Stellen in dünn besetzten Arrays _werden_ besucht und werden ebenso wie `undefined` behandelt.

```js
// Array mit keinen Elementen an den Indizes 2, 3 und 4 deklarieren
const array = [0, 1, , , , 5, 6];

// Zeigt alle Indizes, nicht nur diejenigen mit zugewiesenen Werten
array.find((value, index) => {
  console.log("Besuchter Index", index, "mit Wert", value);
});
// Besuchter Index 0 mit Wert 0
// Besuchter Index 1 mit Wert 1
// Besuchter Index 2 mit Wert undefined
// Besuchter Index 3 mit Wert undefined
// Besuchter Index 4 mit Wert undefined
// Besuchter Index 5 mit Wert 5
// Besuchter Index 6 mit Wert 6

// Zeigt alle Indizes, einschließlich der gelöschten
array.find((value, index) => {
  // Element 5 beim ersten Durchgang löschen
  if (index === 0) {
    console.log("Löschen von array[5] mit Wert", array[5]);
    delete array[5];
  }
  // Element 5 wird trotz Löschung immer noch besucht
  console.log("Besuchter Index", index, "mit Wert", value);
});
// Löschen von array[5] mit Wert 5
// Besuchter Index 0 mit Wert 0
// Besuchter Index 1 mit Wert 1
// Besuchter Index 2 mit Wert undefined
// Besuchter Index 3 mit Wert undefined
// Besuchter Index 4 mit Wert undefined
// Besuchter Index 5 mit Wert undefined
// Besuchter Index 6 mit Wert 6
```

### Aufrufen von find() auf Nicht-Array-Objekten

Die `find()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  "-1": 0.1, // von find() ignoriert, da -1 < 0
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)));
// 7.3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.find` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed-Kollektionen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
