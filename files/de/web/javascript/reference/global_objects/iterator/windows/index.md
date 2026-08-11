---
title: Iterator.prototype.windows()
short-title: windows()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/windows
l10n:
  sourceCommit: d43ba33e72afa135ce782e2c0ca19fe32a93bb13
---

Die **`windows()`** Methode von {{jsxref("Iterator")}} Instanzen gibt ein neues [Iterator-Helferobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das ein gleitendes Fenster von Elementen liefert. Jedes Mal, wenn der Helfer iteriert wird, liefert er ein Array, das das erste Element der vorherigen Iteration entfernt und das nächste Element des ursprünglichen Iterators hinzufügt.

Um unterschiedliche Abschnitte zu erhalten, siehe {{jsxref("Iterator.prototype.chunks()")}}.

## Syntax

```js-nolint
windows(windowSize)
windows(windowSize, underSized)
```

### Parameter

- `windowSize`
  - : Die Anzahl der Elemente im gleitenden Fenster. Muss eine positive Ganzzahl weniger als 2<sup>32</sup> (die maximale Array-Länge) sein.
- `underSized` {{optional_inline}}
  - : Ein String, der angibt, was zu tun ist, wenn die Anzahl der Elemente im Iterator weniger als `windowSize` aber größer als 0 ist. Es kann einer der folgenden sein:
    - `"only-full"` (Standard)
      - : Ignoriere das teilweise Fenster. Der zurückgegebene Iterator wird sofort abgeschlossen, als ob die Eingabe leer wäre.
    - `"allow-partial"`
      - : Liefert alle Elemente im teilweisen Fenster als ein Array (mit Länge kleiner als `windowSize`).

    Beachten Sie, dass der zurückgegebene Iterator, wenn die Eingabe leer ist, immer sofort ohne Ausgabe eines leeren Arrays abgeschlossen wird.

### Rückgabewert

Ein neues [Iterator-Helferobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Wenn die `next()`-Methode des zurückgegebenen Iterator-Helfers zum ersten Mal aufgerufen wird, wird der aktuelle Iterator sofort um `windowSize` Elemente weitergeschaltet. Wenn so viele Elemente verfügbar sind, werden sie zusammen als Array geliefert. Andernfalls hängt das Verhalten vom `underSized`-Argument ab: Der Iterator wird entweder sofort ohne Ausgabe von etwas abgeschlossen (bei `"only-full"` oder bei einer vollständig leeren Eingabe), oder ein Array mit einer Länge kleiner als `windowSize` wird geliefert.

Danach besteht jedes Mal das gelieferte Array aus dem vorherigen Array, das linkeste Element entfernt, ein neues Element aus dem Eingabeiterable hinzugefügt. Wenn das Eingabeiterable erschöpft ist, wird der Iterator-Helfer auch abgeschlossen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `limit` keine Ganzzahl ist oder wenn `underSized` nicht einer der erlaubten Werte ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `limit` weniger als 1 oder größer als 2<sup>32</sup>－1 ist.

## Beispiele

### Gleitender Durchschnitt

Das folgende Beispiel erzeugt einen Iterator, der Begriffe der Fibonacci-Folge liefert. Dann wird ein neuer Iterator erstellt, der jedes Mal den Durchschnitt von zwei benachbarten Elementen liefert.

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const averaged = fibonacci()
  .windows(2)
  .map((window) => (window[0] + window[1]) / 2);

console.log(averaged.next().value); // 1 (1, 1)
console.log(averaged.next().value); // 1.5 (1, 2)
console.log(averaged.next().value); // 2.5 (2, 3)
console.log(averaged.next().value); // 4 (3, 5)
```

Dieser Prozess, bekannt als gleitender Durchschnitt, ist sehr nützlich in der Signalverarbeitung.

### Aufzählen von Teilstrings

Das folgende Beispiel zählt alle Teilstrings einer gegebenen Länge in einem String auf. Die `windows()`-Methode wird verwendet, um ein gleitendes Fenster von Zeichen zu erstellen, die dann zusammengefügt werden, um Teilstrings zu bilden.

> [!NOTE]
> Dies ist wahrscheinlich viel weniger effizient, als manuell einen Zahlenindex zu iterieren und die Methode {{jsxref("String.prototype.substring()")}} aufzurufen.

```js
const chars = Iterator.from("MASSACHUSETTS");

const substrings = chars.windows(3).map((window) => window.join(""));

for (const substring of substrings) {
  console.log(substring);
}
// MAS
// ASS
// SSA
// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.windows` in `core-js`](https://github.com/zloirock/core-js#iterator-chunking)
- [es-shims Polyfill von `Iterator.prototype.windows`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.chunks()")}}
