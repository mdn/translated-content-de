---
title: Iterator.prototype.windows()
short-title: windows()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/windows
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Die Methode **`windows()`** von {{jsxref("Iterator")}}-Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das ein gleitendes Fenster von Elementen liefert. Bei jeder Iteration liefert das Hilfsobjekt ein Array, bei dem das erste Element der vorherigen Iteration entfernt und das nächste Element des ursprünglichen Iterators hinzugefügt wurde.

Wenn Sie stattdessen getrennte Blöcke erhalten möchten, verwenden Sie {{jsxref("Iterator.prototype.chunks()")}}.

## Syntax

```js-nolint
windows(windowSize)
windows(windowSize, underSized)
```

### Parameter

- `windowSize`
  - : Die Anzahl der Elemente im gleitenden Fenster. Muss eine positive ganze Zahl kleiner als 2<sup>32</sup> sein (die maximale Array-Länge).
- `underSized` {{optional_inline}}
  - : Ein String, der festlegt, was geschehen soll, wenn der Iterator weniger als `windowSize`, aber mehr als 0 Elemente enthält. Folgende Werte sind möglich:
    - `"only-full"` (Standardwert)
      - : Das unvollständige Fenster ignorieren. Der zurückgegebene Iterator wird sofort beendet, als wäre die Eingabe leer.
    - `"allow-partial"`
      - : Alle Elemente des unvollständigen Fensters als Array liefern (mit einer Länge kleiner als `windowSize`).

    Ist die Eingabe leer, wird der zurückgegebene Iterator stets sofort beendet, ohne ein leeres Array zu liefern.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Beim ersten Aufruf der Methode `next()` des zurückgegebenen Iterator-Hilfsobjekts wird der aktuelle Iterator sofort um `windowSize` Elemente weitergeschaltet. Sind so viele Elemente verfügbar, werden sie gemeinsam als Array geliefert. Andernfalls hängt das Verhalten vom Argument `underSized` ab: Der Iterator wird entweder sofort beendet, ohne etwas zu liefern (bei `"only-full"` oder einer vollständig leeren Eingabe), oder es wird ein Array mit einer Länge kleiner als `windowSize` geliefert.

Danach besteht jedes gelieferte Array aus dem vorherigen Array, aus dem das erste Element entfernt und an das ein neues Element aus dem Eingabe-Iterable angehängt wurde. Sobald das Eingabe-Iterable erschöpft ist, wird auch das Iterator-Hilfsobjekt beendet.

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

Dieses als gleitender Durchschnitt bezeichnete Verfahren ist in der Signalverarbeitung sehr nützlich.

### Teilstrings aufzählen

Das folgende Beispiel zählt alle Teilstrings einer bestimmten Länge in einem String auf. Die Methode `windows()` erstellt dazu ein gleitendes Fenster aus Zeichen, die anschließend zu Teilstrings zusammengefügt werden.

> [!NOTE]
> Dies ist wahrscheinlich deutlich weniger effizient, als manuell über numerische Indizes zu iterieren und die Methode {{jsxref("String.prototype.substring()")}} aufzurufen.

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
- [Polyfill für `Iterator.prototype.windows` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.chunks()")}}
