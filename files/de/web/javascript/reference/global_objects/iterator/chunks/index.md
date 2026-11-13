---
title: Iterator.prototype.chunks()
short-title: chunks()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/chunks
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Die Methode **`chunks()`** von {{jsxref("Iterator")}}-Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das die Elemente des ursprünglichen Iterators in aufeinanderfolgende Arrays aufteilt. Bei jedem Iterationsschritt entnimmt das Hilfsobjekt dem zugrunde liegenden Iterator die angegebene Anzahl von Elementen und gibt sie gemeinsam zurück.

Um überlappende Sequenzen (d.h. ein gleitendes Fenster) auszugeben, siehe {{jsxref("Iterator.prototype.windows()")}}.

## Syntax

```js-nolint
chunks(chunkSize)
```

### Parameter

- `chunkSize`
  - : Die Anzahl der Elemente in jedem Array. Muss eine positive ganze Zahl kleiner als 2<sup>32</sup> sein (die maximale Array-Länge).

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Bei jedem Aufruf der Methode `next()` des zurückgegebenen Hilfsobjekts rückt der ursprüngliche Iterator um `chunkSize` Elemente vor, und diese Elemente werden gemeinsam als Array zurückgegeben.

Wenn im ursprünglichen Iterator noch Elemente vorhanden sind, aber weniger als `chunkSize`, werden diese dennoch als Array zurückgegeben (dessen Länge also kleiner als `chunkSize` ist). Beim nächsten Aufruf von `next()` ist das Hilfsobjekt dann abgeschlossen.

Wenn im ursprünglichen Iterator keine Elemente mehr vorhanden sind, ist das Hilfsobjekt sofort abgeschlossen, ohne ein leeres Array zurückzugeben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `chunkSize` keine ganze Zahl ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `chunkSize` kleiner als 1 oder größer als 2<sup>32</sup>－1 ist.

## Beispiele

### Elemente in einem Raster ausgeben

Das folgende Beispiel erstellt einen Iterator, der Glieder der Fibonacci-Folge ausgibt. Anschließend werden diese in einem Raster dargestellt, indem jeweils 5 Elemente abgerufen werden.

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const rows = fibonacci().chunks(5);

for (const row of rows.take(5)) {
  console.log(row.join("\t"));
}
```

Ausgabe:

```plain
1       1       2       3       5
8       13      21      34      55
89      144     233     377     610
987     1597    2584    4181    6765
10946   17711   28657   46368   75025
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Iterator.prototype.chunks` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.prototype.chunks` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.windows()")}}
