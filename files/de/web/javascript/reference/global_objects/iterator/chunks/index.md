---
title: Iterator.prototype.chunks()
short-title: chunks()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/chunks
l10n:
  sourceCommit: d43ba33e72afa135ce782e2c0ca19fe32a93bb13
---

Die **`chunks()`** Methode von {{jsxref("Iterator")}} Instanzen gibt ein neues [Iterator-Helferobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das die Elemente des ursprünglichen Iterators in aufeinanderfolgende Array-Teile aufteilt. Jedes Mal, wenn der Helfer iteriert wird, erhält er die angegebene Anzahl von Elementen aus dem zugrunde liegenden Iterator und liefert sie zusammen.

Um sich überlappende Sequenzen (d.h. Gleitfenster) zu erzeugen, siehe {{jsxref("Iterator.prototype.windows()")}}.

## Syntax

```js-nolint
chunks(chunkSize)
```

### Parameter

- `chunkSize`
  - : Die Anzahl der Elemente in jedem Chunk. Muss eine positive Ganzzahl kleiner als 2<sup>32</sup> (die maximale Array-Länge) sein.

### Rückgabewert

Ein neues [Iterator-Helferobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Jedes Mal, wenn die `next()`-Methode des zurückgegebenen Iterator-Helfers aufgerufen wird, wird der ursprüngliche Iterator um `chunkSize` Elemente weitergeführt, und diese Elemente werden zusammen als Array geliefert.

Wenn der ursprüngliche Iterator einige, aber weniger als `chunkSize` Elemente übrig hat, werden diese Elemente trotzdem als Array geliefert (die Länge ist also kleiner als `chunkSize`), und der Iterator-Helfer wird sofort abgeschlossen, wenn `next()` das nächste Mal aufgerufen wird.

Wenn der ursprüngliche Iterator keine Elemente mehr übrig hat, wird der Iterator-Helfer sofort ohne ein leeres Array abgeschlossen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `chunkSize` keine Ganzzahl ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `chunkSize` kleiner als 1 oder größer als 2<sup>32</sup>－1 ist.

## Beispiele

### Elemente in einem Raster drucken

Das folgende Beispiel erstellt einen Iterator, der Begriffe der Fibonacci-Folge ausgibt. Dann werden sie in einem Rasterlayout gedruckt, indem jedes Mal 5 Elemente abgerufen werden.

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

- [Polyfill von `Iterator.prototype.chunks` in `core-js`](https://github.com/zloirock/core-js#iterator-chunking)
- [es-shims Polyfill von `Iterator.prototype.chunks`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.windows()")}}
