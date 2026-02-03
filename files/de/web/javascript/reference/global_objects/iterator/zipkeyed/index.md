---
title: Iterator.zipKeyed()
short-title: zipKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/zipKeyed
l10n:
  sourceCommit: b1cbaa2fd91b9624e8a686d6a7323fbe79254b29
---

{{JSRef}}

Die **`Iterator.zipKeyed()`** statische Methode erstellt ein neues {{jsxref("Iterator")}}-Objekt, das Elemente aus mehreren iterierbaren Objekten aggregiert, indem es Objekte generiert, die Elemente an derselben Position enthalten, wobei die Schlüssel durch die Eingabe spezifiziert werden. Sie "zippt" im Wesentlichen die Eingaben miteinander, um eine gleichzeitige Iteration über sie zu ermöglichen.

Die Methode {{jsxref("Iterator.zip()")}} ist ähnlich, generiert jedoch Arrays anstelle von Objekten.

## Syntax

```js-nolint
Iterator.zipKeyed(iterables)
Iterator.zipKeyed(iterables, options)
```

### Parameter

- `iterables`
  - : Ein Objekt. Jeder Eigenschaftsschlüssel wird als Schlüssel in den resultierenden Objekten verwendet. Der Wert der Eigenschaft muss entweder das [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Protokoll oder, falls dies fehlschlägt, das [iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) Protokoll implementieren. Diese Iterables können unendlich sein. Strings werden abgelehnt: Um Strings zu zippen, müssen sie explizit in Iteratoren umgewandelt werden, indem {{jsxref("Iterator.from()")}} verwendet wird.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten im Fall von inkonsistenten Eingabelängen spezifiziert. Es kann die folgenden Eigenschaften haben:
    - `mode` {{optional_inline}}
      - : Eines der folgenden:
        - `"shortest"` (Standard): Der resultierende Iterator stoppt, wenn ein Eingabe-Iterable erschöpft ist.
        - `"longest"`: Der resultierende Iterator stoppt, wenn alle Eingabe-Iterables erschöpft sind. Fehlende Werte kürzerer Iterables werden gemäß der `padding`-Option gefüllt.
        - `"strict"`: Ein {{jsxref("TypeError")}} wird ausgelöst, wenn nicht alle Eingabe-Iterables gleichzeitig fertig sind.
    - `padding` {{optional_inline}}
      - : Ein Objekt. Wird nur abgerufen und validiert, wenn `mode` `"longest"` ist. Wenn `undefined` oder nicht vorhanden, werden fehlende Werte kürzerer Iterables mit `undefined` gefüllt (was dem Übergeben eines leeren Objekts entspricht). Wenn ein Objekt bereitgestellt wird, wird jeder Schlüssel des `iterables`-Arguments _sofort abgerufen, wenn `Iterator.zipKeyed()` aufgerufen wird_. `padding[key]` wird für fehlende Werte für `iterables[key]` verwendet. Wenn dem `padding` Objekt einige Schlüssel fehlen, werden diese Schlüssel mit `undefined` gefüllt.

### Rückgabewert

Ein neues {{jsxref("Iterator")}}-Objekt. Jedes seiner Elemente ist ein Objekt mit denselben Schlüsseln wie das `iterables`-Argument, das die Elemente von jedem Eingabe-Iterable an der entsprechenden Position enthält.

## Beschreibung

Die Funktion `Iterator.zipKeyed()` verhält sich ähnlich wie {{jsxref("Iterator.zip()")}}; der einzige Unterschied besteht darin, dass Sie die in den resultierenden Objekten verwendeten Schlüssel angeben können, während `Iterator.zip()` immer numerische Indizes verwendet (da es Arrays generiert).

Wenn wir Iterables als Arrays darstellen, könnte die Eingabe so aussehen:

```js
({
  a: [a1, a2, a3, a4],
  b: [b1, b2, b3],
  c: [c1, c2, c3, c4, c5],
});
```

Der resultierende Iterator wird, unabhängig von den Optionen, mit dem Ausgeben der folgenden Arrays beginnen:

```js
({ a: a1, b: b1, c: c1 });
({ a: a2, b: b2, c: c2 });
({ a: a3, b: b3, c: c3 });
```

Nachdem die ersten drei Objekte generiert wurden, ist das Eingabe-Iterable `b` beim vierten `next()` Aufruf erschöpft — es gibt `{ done: true }` zurück. Was als Nächstes passiert, hängt von der `mode`-Option ab. Wenn `mode` `"shortest"` ist (Standard), stoppt der resultierende Iterator hier: die anderen beiden Eingabe-Iteratoren werden [geschlossen](/de/docs/Web/JavaScript/Reference/Iteration_protocols#errors_during_iteration). Wenn `mode` `"strict"` ist, wird ein Fehler ausgelöst, weil die anderen beiden Iterables _nicht_ fertig sind, wenn das zweite `{ done: true }` ergibt. Wenn `mode` `"longest"` ist, setzt der resultierende Iterator das Generieren von Objekten fort und füllt fehlende Werte. Wenn `padding` nicht bereitgestellt wird, wird es standardmäßig auf `undefined` gesetzt:

```js
({ a: a4, b: undefined, c: c4 });
({ a: undefined, b: undefined, c: c5 });
```

Wenn `padding` als Objekt bereitgestellt wird, könnte es wie `{ a: p1, b: p2, c: p3 }` aussehen. Dann wird `p2` verwendet, um den fehlenden Wert aus dem Eingabe-Iterable `b` zu füllen, und `p1` wird verwendet, um den fehlenden Wert aus dem Eingabe-Iterable `a` zu füllen:

```js
({ a: a4, b: p2, c: c4 });
({ a: p1, b: p2, c: c5 });
```

## Beispiele

### Transponieren von tabellarischen Daten

Es gibt zwei gängige Wege, um tabellarische Daten darzustellen: als ein Objekt, bei dem jede Eigenschaft eine Spalte ist, oder als ein Array von Objekten, bei dem jedes Objekt eine Zeile ist. Dieses Beispiel zeigt, wie Sie die spaltenbasierte Darstellung zeilenweise mit `Iterator.zipKeyed()` iterieren können.

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

Die meisten Anwendungsfälle von `Iterator.zipKeyed()` sind identisch mit denen von {{jsxref("Iterator.zip()")}}. Welche verwendet wird, hängt davon ab, ob Sie bereits ein Objekt mit Iterables (verwenden Sie `zipKeyed()`) oder ein Array mit Iterables (verwenden Sie `zip()`) haben. Wir empfehlen, `zipKeyed()` nach Möglichkeit zu verwenden, da das Angeben expliziter Schlüssel es schwieriger macht, die Reihenfolge der Iterables versehentlich zu vertauschen.

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
