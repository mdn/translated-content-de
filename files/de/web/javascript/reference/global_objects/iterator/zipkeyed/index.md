---
title: Iterator.zipKeyed()
short-title: zipKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/zipKeyed
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

{{JSRef}}

Die statische Methode **`Iterator.zipKeyed()`** erstellt ein neues {{jsxref("Iterator")}}-Objekt, das Elemente aus mehreren iterierbaren Objekten aggregiert, indem es Objekte mit Elementen an derselben Position und mit den durch die Eingabe angegebenen Schlüsseln liefert. Sie "zippt" im Wesentlichen die Eingabeiterablen zusammen, sodass eine gleichzeitige Iteration über sie möglich ist.

Die Methode {{jsxref("Iterator.zip()")}} ist ähnlich, liefert jedoch Arrays anstelle von Objekten.

## Syntax

```js-nolint
Iterator.zipKeyed(iterables)
Iterator.zipKeyed(iterables, options)
```

### Parameter

- `iterables`
  - : Ein Objekt. Jeder Eigenschaftsschlüssel wird als Schlüssel in den resultierenden Objekten verwendet. Der Eigenschaftswert muss entweder das [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)-Protokoll oder, falls dies fehlschlägt, das [iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Protokoll implementieren. Diese Iterablen können unendlich sein. Zeichenfolgen werden abgelehnt: Um Zeichenfolgen zu zippen, konvertieren Sie sie explizit mit {{jsxref("Iterator.from()")}} in Iteratoren.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten im Falle uneinheitlicher Eingabelängen angibt. Es kann die folgenden Eigenschaften haben:
    - `mode` {{optional_inline}}
      - : Eine der folgenden:
        - `"shortest"` (Standard): Der resultierende Iterator stoppt, wenn eine Eingabeiterable erschöpft ist.
        - `"longest"`: Der resultierende Iterator stoppt, wenn alle Eingabeiterablen erschöpft sind. Fehlende Werte aus kürzeren Iterablen werden entsprechend der `padding`-Option aufgefüllt.
        - `"strict"`: Ein {{jsxref("TypeError")}} wird ausgelöst, wenn nicht alle Eingabeiterablen gleichzeitig beendet werden.
    - `padding` {{optional_inline}}
      - : Ein Objekt. Wird nur abgerufen und validiert, wenn `mode` auf `"longest"` gesetzt ist. Ist es `undefined` oder nicht vorhanden, werden fehlende Werte aus kürzeren Iterablen mit `undefined` gefüllt (was dem Übergeben eines leeren Objekts entspricht). Wenn ein Objekt bereitgestellt wird, wird jeder Schlüssel des `iterables`-Arguments abgerufen, sobald `Iterator.zipKeyed()` aufgerufen wird. `padding[key]` wird für fehlende Werte für `iterables[key]` verwendet. Wenn dem `padding`-Objekt einige Schlüssel fehlen, werden diese Schlüssel mit `undefined` gefüllt.

### Rückgabewert

Ein neues {{jsxref("Iterator")}}-Objekt. Jedes seiner Elemente ist ein Objekt mit denselben Schlüsseln wie das `iterables`-Argument und enthält die Elemente aus jedem Eingabeiterable an der entsprechenden Position.

## Beschreibung

Die Funktion `Iterator.zipKeyed()` verhält sich wie {{jsxref("Iterator.zip()")}}, der einzige Unterschied besteht darin, dass Sie die in den resultierenden Objekten verwendeten Schlüssel angeben können, während `Iterator.zip()` immer numerische Indizes verwendet (indem es Arrays liefert).

Wenn wir Iterablen als Arrays darstellen, könnte die Eingabe so aussehen:

```js
({
  a: [a1, a2, a3, a4],
  b: [b1, b2, b3],
  c: [c1, c2, c3, c4, c5],
});
```

Der resultierende Iterator wird unabhängig von den Optionen die folgenden Arrays liefern:

```js
({ a: a1, b: b1, c: c1 });
({ a: a2, b: b2, c: c2 });
({ a: a3, b: b3, c: c3 });
```

Nachdem die ersten drei Objekte geliefert wurden, ist das Eingabeiterable `b` beim vierten `next()`-Aufruf erschöpft – es liefert `{ done: true }`. Was als Nächstes passiert, hängt von der `mode`-Option ab. Ist `mode` auf `"shortest"` (Standard) gesetzt, stoppt der resultierende Iterator hier: Die anderen beiden Eingabeiteratoren werden [geschlossen](/de/docs/Web/JavaScript/Reference/Iteration_protocols#errors_during_iteration). Ist `mode` auf `"strict"` gesetzt, wird ein Fehler ausgelöst, da die anderen beiden Iterablen _nicht_ beendet sind, wenn die zweite das Ergebnis `{ done: true }` liefert. Ist `mode` auf `"longest"` gesetzt, setzt der resultierende Iterator die Lieferung von Objekten fort, wobei fehlende Werte aufgefüllt werden. Wenn beispielsweise `padding` nicht bereitgestellt wird, ist der Standardwert `undefined`:

```js
({ a: a4, b: undefined, c: c4 });
({ a: undefined, b: undefined, c: c5 });
```

Wird `padding` als Objekt bereitgestellt, könnte es so aussehen: `{ a: p1, b: p2, c: p3 }`. Dann wird `p2` verwendet, um den fehlenden Wert aus dem Eingabeiterable `b` zu füllen, und `p1` wird verwendet, um den fehlenden Wert aus dem Eingabeiterable `a` zu füllen:

```js
({ a: a4, b: p2, c: c4 });
({ a: p1, b: p2, c: c5 });
```

## Beispiele

### Tabellendaten transponieren

Es gibt zwei gebräuchliche Möglichkeiten, Tabellendaten darzustellen: als ein Objekt, bei dem jede Eigenschaft eine Spalte ist, oder als ein Array von Objekten, bei dem jedes Objekt eine Zeile ist. Dieses Beispiel zeigt, wie Sie die spaltenbasierte Darstellung zeilenweise mit `Iterator.zipKeyed()` durchlaufen können.

```js
const table = {
  name: ["Caroline", "Danielle", "Evelyn"],
  age: [30, 25, 35],
  city: ["New York", "London", "Hong Kong"],
};

for (const { name, age, city } of Iterator.zipKeyed(table)) {
  console.log(`${name}, aged ${age}, lives in ${city}.`);
}

// Output:
// Caroline, aged 30, lives in New York.
// Danielle, aged 25, lives in London.
// Evelyn, aged 35, lives in Hong Kong.
```

Die meisten Anwendungsfälle von `Iterator.zipKeyed()` sind identisch mit denen von {{jsxref("Iterator.zip()")}}. Welche Methode genutzt wird, hängt davon ab, ob Sie bereits ein Objekt von Iterablen (verwenden Sie `zipKeyed()`) oder ein Array von Iterablen (verwenden Sie `zip()`) haben. Wir empfehlen die Verwendung von `zipKeyed()`, wann immer möglich, da die explizite Angabe von Schlüsseln es erschwert, die Reihenfolge der Iterablen versehentlich zu verwechseln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.zipKeyed` in `core-js`](https://core-js.io/docs/features/proposals/joint-iteration)
- [es-shims Polyfill von `Iterator.zipKeyed`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.zip()")}}
- {{jsxref("Iterator.from()")}}
- {{jsxref("Iterator.concat()")}}
