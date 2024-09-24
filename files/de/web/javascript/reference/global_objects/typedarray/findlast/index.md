---
title: TypedArray.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLast
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`findLast()`**-Methode von {{jsxref("TypedArray")}} Instanzen durchläuft das typisierte Array in umgekehrter Reihenfolge und gibt den Wert des ersten Elements zurück, das die bereitgestellte Testfunktion erfüllt. Wenn kein Element die Testfunktion erfüllt, wird {{jsxref("undefined")}} zurückgegeben. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.findLast()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-findlast.html")}}

## Syntax

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt werden soll. Sie sollte einen [truthy](/de/docs/Glossary/Truthy)-Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, und einen [falsy](/de/docs/Glossary/Falsy)-Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf welches `findLast()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet werden soll. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das letzte (höchste Index) Element im typisierten Array, das die bereitgestellte Testfunktion erfüllt; {{jsxref("undefined")}}, wenn kein passendes Element gefunden wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.findLast()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen eines typisierten Arrays aufgerufen werden.

## Beispiele

### Finden der letzten Primzahl in einem typisierten Array

Das folgende Beispiel gibt den Wert des letzten Elements im typisierten Array zurück, das eine Primzahl ist, oder {{jsxref("undefined")}}, wenn es keine Primzahl gibt.

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

let uint8 = new Uint8Array([4, 6, 8, 12]);
console.log(uint8.findLast(isPrime)); // undefined (keine Primzahlen im Array)
uint8 = new Uint8Array([4, 5, 7, 8, 9, 11, 12]);
console.log(uint8.findLast(isPrime)); // 11
```

### Alle Elemente werden besucht und können durch den Callback modifiziert werden

Die folgenden Beispiele zeigen, dass alle Elemente _besucht_ werden und dass der an den Callback übergebene Wert ihr Wert beim Besuch ist:

```js
// Deklariere Array ohne Elemente an den Indizes 2, 3 und 4
// Die fehlenden Elemente werden mit Null initialisiert.
const uint8 = new Uint8Array([0, 1, , , , 5, 6]);

// Durchlaufe die Elemente in umgekehrter Reihenfolge.
// Beachten Sie, dass alle Elemente besucht werden.
uint8.findLast((value, index) => {
  console.log(`Besuchter Index ${index} mit Wert ${value}`);
});

// Zeigt alle Indizes, einschließlich gelöschter
uint8.findLast((value, index) => {
  // Modifiziere Element 3 bei der ersten Iteration
  if (index === 6) {
    console.log("Setze uint8[3] auf 44");
    uint8[3] = 44;
  }
  // Element 3 wird immer noch besucht, aber es hat einen neuen Wert.
  console.log(`Besuchter Index ${index} mit Wert ${value}`);
});
// Besuchter Index 6 mit Wert 6
// Besuchter Index 5 mit Wert 5
// Besuchter Index 4 mit Wert 0
// Besuchter Index 3 mit Wert 0
// Besuchter Index 2 mit Wert 0
// Besuchter Index 1 mit Wert 1
// Besuchter Index 0 mit Wert 0
// Setze uint8[3] auf 44
// Besuchter Index 6 mit Wert 6
// Besuchter Index 5 mit Wert 5
// Besuchter Index 4 mit Wert 0
// Besuchter Index 3 mit Wert 44
// Besuchter Index 2 mit Wert 0
// Besuchter Index 1 mit Wert 1
// Besuchter Index 0 mit Wert 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.findLast` in `core-js`](https://github.com/zloirock/core-js#array-find-from-last)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Anleitung
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.findLast()")}}
