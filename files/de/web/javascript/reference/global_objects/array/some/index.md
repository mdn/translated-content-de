---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`some()`**-Methode von {{jsxref("Array")}}-Instanzen prüft, ob mindestens ein Element im Array den Test besteht, der von der bereitgestellten Funktion implementiert wird. Sie gibt `true` zurück, wenn im Array ein Element gefunden wird, für das die bereitgestellte Funktion `true` zurückgibt; andernfalls wird `false` zurückgegeben. Sie verändert das Array nicht.

{{EmbedInteractiveExample("pages/js/array-some.html")}}

## Syntax

```js-nolint
some(callbackFn)
some(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy)-Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen [falsy](/de/docs/Glossary/Falsy)-Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf dem `some()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`false`, es sei denn, `callbackFn` gibt einen {{Glossary("truthy")}}-Wert für ein Array-Element zurück, in diesem Fall wird sofort `true` zurückgegeben.

## Beschreibung

Die `some()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Array auf, bis die `callbackFn`-Funktion einen [truthy](/de/docs/Glossary/Truthy)-Wert zurückgibt. Wenn ein solches Element gefunden wird, gibt `some()` sofort `true` zurück und stoppt die Iteration durch das Array. Andernfalls, wenn `callbackFn` für alle Elemente einen [falsy](/de/docs/Glossary/Falsy)-Wert zurückgibt, gibt `some()` `false` zurück. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`some()` verhält sich wie der "es existiert"-Quantor in der Mathematik. Insbesondere gibt es für ein leeres Array `false` für jede Bedingung zurück.

`callbackFn` wird nur für Array-Indizes aufgerufen, die Werte zugeordnet haben. Es wird nicht für leere Stellen in [sparsely populated arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

`some()` mutiert das Array, auf dem es aufgerufen wird, nicht, aber die als `callbackFn` bereitgestellte Funktion kann dies tun. Beachten Sie jedoch, dass die Länge des Arrays _vor_ dem ersten Aufruf von `callbackFn` gespeichert wird. Daher:

- `callbackFn` wird keine Elemente besuchen, die über die anfängliche Länge des Arrays hinaus hinzugefügt wurden, wenn der Aufruf von `some()` begann.
- Änderungen an bereits besuchten Indizes führen nicht dazu, dass `callbackFn` erneut auf sie angewendet wird.
- Wenn ein bestehendes, aber noch nicht besuchtes Element des Arrays von `callbackFn` geändert wird, wird sein Wert, der an das `callbackFn` übergeben wird, der Wert zu dem Zeitpunkt sein, zu dem dieses Element besucht wird. [Gelöschte](/de/docs/Web/JavaScript/Reference/Operators/delete) Elemente werden nicht besucht.

> [!WARNING]
> Gleichzeitige Änderungen wie die oben beschriebenen führen häufig zu schwer verständlichem Code und sollten im Allgemeinen vermieden werden (außer in speziellen Fällen).

Die `some()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahliger Schlüssigeigenschaften hat.

## Beispiele

### Testen des Wertes von Array-Elementen

Das folgende Beispiel überprüft, ob irgendein Element im Array größer als 10 ist.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### Testen von Array-Elementen mit Arrow-Funktionen

[Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) bieten eine kürzere Syntax für denselben Test.

```js
[2, 5, 8, 1, 4].some((x) => x > 10); // false
[12, 5, 8, 1, 4].some((x) => x > 10); // true
```

### Überprüfen, ob ein Wert im Array vorhanden ist

Um die Funktion der `includes()`-Methode nachzuahmen, gibt diese benutzerdefinierte Funktion `true` zurück, wenn das Element im Array vorhanden ist:

```js
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "kela"); // false
checkAvailability(fruits, "banana"); // true
```

### Konvertieren eines beliebigen Wertes in einen Boolean

```js
const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some((t) => t === value);
}

getBoolean(false); // false
getBoolean("false"); // false
getBoolean(1); // true
getBoolean("true"); // true
```

### Verwenden des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zuerst `filter()`, um die positiven Werte zu extrahieren und verwendet dann `some()`, um zu prüfen, ob das Array streng zunehmend ist.

```js
const numbers = [3, -1, 1, 4, 1, 5];
const isIncreasing = !numbers
  .filter((num) => num > 0)
  .some((num, idx, arr) => {
    // Ohne das arr-Argument gibt es keine Möglichkeit, einfach auf das
    // Zwischenarray zuzugreifen, ohne es in einer Variablen zu speichern.
    if (idx === 0) return false;
    return num <= arr[idx - 1];
  });
console.log(isIncreasing); // false
```

### Verwenden von some() auf sparsely populated arrays

`some()` wird sein Prädikat nicht auf leere Stellen ausführen.

```js
console.log([1, , 3].some((x) => x === undefined)); // false
console.log([1, , 1].some((x) => x !== 1)); // false
console.log([1, undefined, 1].some((x) => x !== 1)); // true
```

### Aufrufen von some() auf Nicht-Array-Objekten

Die `some()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative ganze Zahl kleiner als `length` ist, bis sie alle zugegriffen wurde oder `callbackFn` `true` zurückgibt.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: 3, // von some() ignoriert, da length 3 ist
};
console.log(Array.prototype.some.call(arrayLike, (x) => typeof x === "number"));
// false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.some` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.some()")}}
