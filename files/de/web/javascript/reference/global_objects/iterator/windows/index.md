---
title: Iterator.prototype.windows()
short-title: windows()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/windows
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{SeeCompatTable}}

Die **`windows()`** Methode von {{jsxref("Iterator")}} Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das ein gleitendes Fenster von Elementen liefert. Jedes Mal, wenn der Helfer iteriert wird, gibt er ein Array zurück, das das erste Element der vorherigen Iteration entfernt und das nächste Element des ursprünglichen Iterators hinzufügt.

Um unterschiedliche Blöcke zu erhalten, siehe {{jsxref("Iterator.prototype.chunks()")}}.

## Syntax

```js-nolint
windows(windowSize)
windows(windowSize, underSized)
```

### Parameter

- `windowSize`
  - : Die Anzahl der Elemente im gleitenden Fenster. Muss eine positive ganze Zahl kleiner als 2<sup>32</sup> (die maximale Array-Länge) sein.
- `underSized` {{optional_inline}}
  - : Ein String, der angibt, was zu tun ist, wenn die Anzahl der Elemente im Iterator kleiner als `windowSize`, aber größer als 0 ist. Es kann einer der folgenden sein:
    - `"only-full"` (Standard)
      - : Ignoriert das unvollständige Fenster. Der zurückgegebene Iterator wird sofort abgeschlossen, als ob der Eingang leer wäre.
    - `"allow-partial"`
      - : Alle Elemente im unvollständigen Fenster werden als Array (mit Länge kleiner als `windowSize`) geliefert.

    Beachten Sie, dass bei leerem Input der zurückgegebene Iterator immer sofort abgeschlossen wird, ohne ein leeres Array zu liefern.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Beim ersten Aufruf der `next()`-Methode des zurückgegebenen Iterator-Helfers wird der aktuelle Iterator sofort um `windowSize` Elemente vorgerückt. Wenn so viele Elemente verfügbar sind, werden sie zusammen als Array geliefert. Andernfalls hängt das Verhalten vom `underSized`-Argument ab: der Iterator wird entweder ohne Ausgabe sofort abgeschlossen (mit `"only-full"` oder bei vollständig leerem Eingang), oder es wird ein Array mit einer Länge kleiner als `windowSize` geliefert.

Danach besteht das jedes Mal gelieferte Array aus dem vorherigen Array, dem entferntem äußersten linken Element, einem neu aus dem Eingangsiterierbaren abgerufenen Element, das angehängt wird. Wenn das Eingangsiterierbare erschöpft ist, wird auch der Iterator-Helfer abgeschlossen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `limit` keine ganze Zahl ist oder wenn `underSized` nicht einer der erlaubten Werte ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `limit` kleiner als 1 oder größer als 2<sup>32</sup>－1 ist.

## Beispiele

### Gleitender Durchschnitt

Das folgende Beispiel erstellt einen Iterator, der Elemente der Fibonacci-Folge liefert. Dann wird ein neuer Iterator erstellt, der jedes Mal den Durchschnitt von zwei benachbarten Elementen liefert.

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

Dieser Prozess, bekannt als gleitender Durchschnitt, ist in der Signalverarbeitung sehr nützlich.

### Substrings aufzählen

Das folgende Beispiel zählt alle Substrings einer gegebenen Länge in einem String auf. Die `windows()`-Methode wird verwendet, um ein gleitendes Fenster von Zeichen zu erstellen, die dann zusammengefügt werden, um Substrings zu bilden.

> [!NOTE]
> Dies ist wahrscheinlich viel weniger effizient als das manuelle Iterieren eines Indexes und der Aufruf der {{jsxref("String.prototype.substring()")}} Methode.

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
