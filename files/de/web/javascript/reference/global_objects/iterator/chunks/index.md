---
title: Iterator.prototype.chunks()
short-title: chunks()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/chunks
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{SeeCompatTable}}

Die **`chunks()`** Methode von {{jsxref("Iterator")}} Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das die Elemente des ursprünglichen Iterators in aufeinanderfolgende Array-Blöcke aufteilt. Jedes Mal, wenn der Hilfsiterator durchlaufen wird, werden die angegebene Anzahl von Elementen aus dem zugrunde liegenden Iterator entnommen und gemeinsam ausgegeben.

Um überlappende Sequenzen (d.h. ein gleitendes Fenster) auszugeben, siehe {{jsxref("Iterator.prototype.windows()")}}.

## Syntax

```js-nolint
chunks(chunkSize)
```

### Parameter

- `chunkSize`
  - : Die Anzahl von Elementen in jedem Block. Muss eine positive ganze Zahl kleiner als 2<sup>32</sup> (die maximale Array-Länge) sein.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Jedes Mal, wenn die `next()`-Methode des zurückgegebenen Iterator-Hilfsobjekts aufgerufen wird, wird der ursprüngliche Iterator um `chunkSize` Elemente vorgerückt und diese Elemente werden gemeinsam als Array ausgegeben.

Wenn der ursprüngliche Iterator einige, aber weniger als `chunkSize` Elemente übrig hat, werden diese Elemente trotzdem als Array ausgegeben (sodass die Länge kleiner als `chunkSize` ist), und der Iterator-Hilfsobjekt wird beim nächsten Aufruf von `next()` sofort abgeschlossen.

Wenn der ursprüngliche Iterator keine Elemente mehr hat, wird der Iterator-Hilfsobjekt sofort abgeschlossen, ohne ein leeres Array auszugeben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `chunkSize` keine ganze Zahl ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `chunkSize` kleiner als 1 oder größer als 2<sup>32</sup>－1 ist.

## Beispiele

### Elemente in einem Raster ausgeben

Das folgende Beispiel erstellt einen Iterator, der die Terme der Fibonacci-Sequenz ausgibt. Dann werden diese in einem Rasterlayout ausgegeben, indem jedes Mal 5 Elemente abgerufen werden.

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
