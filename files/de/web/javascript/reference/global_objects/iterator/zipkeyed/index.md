---
title: Iterator.zipKeyed()
short-title: zipKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/zipKeyed
l10n:
  sourceCommit: c534ba0cb925657de5e99ab8c540eae31afd9382
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Iterator.zipKeyed()`** erstellt ein neues {{jsxref("Iterator")}}-Objekt, das Elemente aus mehreren iterierbaren Objekten aggregiert, indem es Objekte zurückgibt, die Elemente an derselben Position enthalten, mit den in der Eingabe angegebenen Schlüsseln. Es „verbindet“ im Wesentlichen die Eingabe-Iterables, was eine gleichzeitige Iteration über diese ermöglicht.

Die Methode {{jsxref("Iterator.zip()")}} ist ähnlich, gibt jedoch Arrays anstelle von Objekten zurück.

## Syntax

```js-nolint
Iterator.zipKeyed(iterables)
Iterator.zipKeyed(iterables, options)
```

### Parameter

- `iterables`
  - : Ein Objekt. Der Schlüssel jeder Eigenschaft wird als Schlüssel in den resultierenden Objekten verwendet. Der Wert der Eigenschaft muss entweder das [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Protokoll oder, falls nicht, das [iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) Protokoll implementieren. Diese Iterables können unendlich sein. Zeichenfolgen werden abgelehnt: Um Zeichenfolgen zu verbinden, konvertieren Sie sie explizit in Iteratoren mit {{jsxref("Iterator.from()")}}.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten im Fall inkonsistenter Eingabelängen spezifiziert. Es kann die folgenden Eigenschaften haben:
    - `mode` {{optional_inline}}
      - : Eine der folgenden Möglichkeiten:
        - `"shortest"` (Standard): Der resultierende Iterator stoppt, wenn ein Eingabe-Iterable erschöpft ist.
        - `"longest"`: Der resultierende Iterator stoppt, wenn alle Eingabe-Iterables erschöpft sind. Fehlende Werte von kürzeren Iterables werden gemäß der `padding`-Option ausgefüllt.
        - `"strict"`: Ein {{jsxref("TypeError")}} wird ausgelöst, wenn nicht alle Eingabe-Iterables gleichzeitig enden.
    - `padding` {{optional_inline}}
      - : Ein Objekt. Wird nur abgerufen und validiert, wenn `mode` auf `"longest"` gesetzt ist. Wenn nicht angegeben oder `undefined`, werden fehlende Werte bei kürzeren Iterables mit `undefined` gefüllt (was der Übergabe eines leeren Objekts entspricht). Wenn ein Objekt bereitgestellt wird, wird jeder Schlüssel des `iterables`-Arguments _sobald `Iterator.zipKeyed()` aufgerufen wird_ abgerufen. `padding[key]` wird für fehlende Werte von `iterables[key]` verwendet. Wenn im `padding`-Objekt einige Schlüssel fehlen, werden diese Schlüssel mit `undefined` gefüllt.

### Rückgabewert

Ein neues {{jsxref("Iterator")}}-Objekt. Jedes seiner Elemente ist ein Objekt mit denselben Schlüsseln wie das `iterables`-Argument, welches die Elemente der jeweiligen Eingabe-Iterables an der entsprechenden Position enthält.

## Beschreibung

Die Funktion `Iterator.zipKeyed()` verhält sich wie {{jsxref("Iterator.zip()")}}; der einzige Unterschied besteht darin, dass Sie die Schlüssel, die in den resultierenden Objekten verwendet werden, angeben können, während `Iterator.zip()` immer numerische Indizes verwendet (indem Arrays zurückgegeben werden).

Wenn wir Iterables als Arrays darstellen, könnte die Eingabe folgendermaßen aussehen:

```js
({
  a: [a1, a2, a3, a4],
  b: [b1, b2, b3],
  c: [c1, c2, c3, c4, c5],
});
```

Der resultierende Iterator gibt unabhängig von den Optionen die folgenden Arrays zurück:

```js
({ a: a1, b: b1, c: c1 });
({ a: a2, b: b2, c: c2 });
({ a: a3, b: b3, c: c3 });
```

Nachdem die ersten drei Objekte zurückgegeben wurden, ist das Eingabe-Iterable `b` beim vierten Aufruf von `next()` erschöpft—it returns `{ done: true }`. Was als nächstes passiert, hängt von der `mode`-Option ab. Wenn `mode` auf `"shortest"` (Standard) gesetzt ist, stoppt der resultierende Iterator hier: die anderen beiden Eingabe-Iteratoren werden [geschlossen](/de/docs/Web/JavaScript/Reference/Iteration_protocols#errors_during_iteration). Wenn `mode` `"strict"` ist, wird ein Fehler ausgelöst, weil die anderen beiden Iterables _nicht_ fertig sind, wenn das zweite das Ergebnis `{ done: true }` liefert. Wenn `mode` auf `"longest"` gesetzt ist, setzt der resultierende Iterator das Zurückgeben von Objekten fort und füllt fehlende Werte aus. Beispielsweise, wenn `padding` nicht bereitgestellt wird, wird `undefined` als Standardwert verwendet:

```js
({ a: a4, b: undefined, c: c4 });
({ a: undefined, b: undefined, c: c5 });
```

Wenn `padding` als Objekt bereitgestellt wird, könnte es wie `{ a: p1, b: p2, c: p3 }` aussehen. Dann wird `p2` verwendet, um den fehlenden Wert aus dem Eingabe-Iterable `b` zu füllen, und `p1`, um den fehlenden Wert aus dem Eingabe-Iterable `a` zu füllen:

```js
({ a: a4, b: p2, c: c4 });
({ a: p1, b: p2, c: c5 });
```

## Beispiele

### Transponieren von tabellarischen Daten

Es gibt zwei gängige Arten, tabellarische Daten darzustellen: als Objekt, bei dem jede Eigenschaft eine Spalte darstellt, oder als Array von Objekten, bei dem jedes Objekt eine Zeile darstellt. Dieses Beispiel zeigt, wie Sie mittels `Iterator.zipKeyed()` die spaltenbasierte Darstellung zeilenweise durchlaufen können.

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

Die meisten Anwendungsfälle von `Iterator.zipKeyed()` sind identisch mit denen von {{jsxref("Iterator.zip()")}}. Welche genutzt wird, hängt davon ab, ob Sie bereits ein Objekt von Iterables (nutzen Sie `zipKeyed()`) oder ein Array von Iterables (nutzen Sie `zip()`) haben. Wir empfehlen, wenn möglich `zipKeyed()` zu verwenden, da die Angabe expliziter Schlüssel das versehentliche Vertauschen der Reihenfolge von Iterables erschwert.

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
