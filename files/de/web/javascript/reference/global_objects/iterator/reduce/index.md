---
title: Iterator.prototype.reduce()
short-title: reduce()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/reduce
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`reduce()`** von {{jsxref("Iterator")}}-Instanzen funktioniert ähnlich wie {{jsxref("Array.prototype.reduce")}}: Sie führt für jedes vom Iterator erzeugte Element eine bereitgestellte „Reducer“-Callback-Funktion aus und übergibt ihr den Rückgabewert der Berechnung für das vorherige Element. Das Ergebnis nach der Verarbeitung aller Elemente ist ein einzelner Wert.

## Syntax

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Ihr Rückgabewert wird beim nächsten Aufruf von `callbackFn` zum Wert des Parameters `accumulator`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der sich aus dem vorherigen Aufruf von `callbackFn` ergibt. Beim ersten Aufruf ist sein Wert `initialValue`, falls dieser angegeben wurde; andernfalls ist es das erste Element des Iterators.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist dies das erste Element des Iterators, wenn `initialValue` angegeben wurde; andernfalls ist es das zweite Element.
    - `currentIndex`
      - : Die Indexposition von `currentValue`. Beim ersten Aufruf ist der Wert `0`, wenn `initialValue` angegeben wurde, andernfalls `1`.
- `initialValue` {{optional_inline}}
  - : Ein Wert, mit dem `accumulator` beim ersten Aufruf des Callbacks initialisiert wird. Wenn `initialValue` angegeben wurde, beginnt die Ausführung von `callbackFn` mit dem ersten Element als `currentValue`. Wenn `initialValue` _nicht_ angegeben wurde, wird `accumulator` mit dem ersten Element initialisiert, und die Ausführung von `callbackFn` beginnt mit dem zweiten Element als `currentValue`. Ist der Iterator in diesem Fall leer, wird ein Fehler ausgelöst, da kein erstes Element als `accumulator` zur Verfügung steht.

### Rückgabewert

Der Wert, der sich ergibt, nachdem die „Reducer“-Callback-Funktion über den gesamten Iterator ausgeführt wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Iterator keine Elemente enthält und `initialValue` nicht angegeben wurde.

## Beschreibung

Einzelheiten zur Funktionsweise von `reduce()` finden Sie unter {{jsxref("Array.prototype.reduce()")}}. Anders als die meisten anderen Iterator-Hilfsmethoden eignet sich `reduce()` nicht für unendliche Iteratoren, da die Methode nicht lazy ist.

## Beispiele

### reduce() verwenden

Das folgende Beispiel erstellt einen Iterator, der Glieder der Fibonacci-Folge liefert, und summiert anschließend die ersten zehn Glieder:

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(
  fibonacci()
    .take(10)
    .reduce((a, b) => a + b),
); // 143
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Iterator.prototype.reduce` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.prototype.reduce` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
