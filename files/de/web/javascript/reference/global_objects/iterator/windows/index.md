---
title: Iterator.prototype.windows()
short-title: windows()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/windows
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{SeeCompatTable}}

Die Methode **`windows()`** von {{jsxref("Iterator")}}-Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das ein gleitendes Fenster von Elementen liefert. Bei jeder Iteration des Hilfsobjekts wird ein Array geliefert, das gegenüber dem vorherigen Array das erste Element entfernt und das nächste Element des ursprünglichen Iterators hinzufügt.

Wenn Sie stattdessen getrennte Abschnitte erhalten möchten, verwenden Sie {{jsxref("Iterator.prototype.chunks()")}}.

## Syntax

```js-nolint
windows(windowSize)
windows(windowSize, underSized)
```

### Parameter

- `windowSize`
  - : Die Anzahl der Elemente im gleitenden Fenster. Muss eine positive ganze Zahl kleiner als 2<sup>32</sup> sein (die maximale Array-Länge).
- `underSized` {{optional_inline}}
  - : Ein String, der festlegt, was geschieht, wenn die Anzahl der Elemente im Iterator kleiner als `windowSize`, aber größer als 0 ist. Folgende Werte sind möglich:
    - `"only-full"` (Standard)
      - : Das unvollständige Fenster ignorieren. Der zurückgegebene Iterator ist sofort abgeschlossen, als wäre die Eingabe leer.
    - `"allow-partial"`
      - : Alle Elemente des unvollständigen Fensters als Array liefern (mit einer Länge kleiner als `windowSize`).

    Wenn die Eingabe leer ist, ist der zurückgegebene Iterator immer sofort abgeschlossen, ohne ein leeres Array zu liefern.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Beim ersten Aufruf der Methode `next()` des zurückgegebenen Iterator-Hilfsobjekts wird der aktuelle Iterator sofort um `windowSize` Elemente weiterbewegt. Sind so viele Elemente verfügbar, werden sie gemeinsam als Array geliefert. Andernfalls hängt das Verhalten vom Argument `underSized` ab: Der Iterator ist entweder sofort abgeschlossen, ohne etwas zu liefern (bei `"only-full"` oder einer vollständig leeren Eingabe), oder es wird ein Array mit einer Länge kleiner als `windowSize` geliefert.

Danach besteht jedes gelieferte Array aus den Elementen des vorherigen Arrays ohne dessen erstes Element, ergänzt um das nächste Element aus dem Eingabe-Iterable. Wenn das Eingabe-Iterable erschöpft ist, ist auch das Iterator-Hilfsobjekt abgeschlossen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `limit` keine ganze Zahl ist oder `underSized` keinen der zulässigen Werte hat.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `limit` kleiner als 1 oder größer als 2<sup>32</sup>－1 ist.

## Beispiele

### Gleitender Durchschnitt

Das folgende Beispiel erstellt einen Iterator, der Glieder der Fibonacci-Folge liefert. Anschließend wird ein neuer Iterator erstellt, der jeweils den Durchschnitt zweier benachbarter Elemente liefert.

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

Dieses Verfahren, das als gleitender Durchschnitt bezeichnet wird, ist in der Signalverarbeitung sehr nützlich.

### Teilstrings aufzählen

Das folgende Beispiel zählt alle Teilstrings einer bestimmten Länge in einem String auf. Mit der Methode `windows()` wird ein gleitendes Fenster aus Zeichen erstellt, die anschließend zu Teilstrings zusammengefügt werden.

> [!NOTE]
> Dies ist wahrscheinlich deutlich weniger effizient, als einen numerischen Index manuell zu durchlaufen und die Methode {{jsxref("String.prototype.substring()")}} aufzurufen.

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

- [Polyfill für `Iterator.prototype.windows` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [es-shims-Polyfill für `Iterator.prototype.windows`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.chunks()")}}
