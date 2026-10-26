---
title: Iterator.zipKeyed()
short-title: zipKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/zipKeyed
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{JSRef}}

Die statische Methode **`Iterator.zipKeyed()`** erstellt ein neues {{jsxref("Iterator")}}-Objekt, das Elemente aus mehreren iterierbaren Objekten zusammenfasst. Dazu liefert sie Objekte, deren Elemente jeweils an derselben Position stehen und deren Schlüssel durch die Eingabe festgelegt werden. Sie „verzahnt“ die iterierbaren Eingaben und ermöglicht so, sie gleichzeitig zu durchlaufen.

Die Methode {{jsxref("Iterator.zip()")}} funktioniert ähnlich, liefert jedoch Arrays statt Objekten.

## Syntax

```js-nolint
Iterator.zipKeyed(iterables)
Iterator.zipKeyed(iterables, options)
```

### Parameter

- `iterables`
  - : Ein Objekt. Der Schlüssel jeder Eigenschaft wird als Schlüssel in den resultierenden Objekten verwendet. Der Wert der Eigenschaft muss entweder das [Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder, falls dies nicht der Fall ist, das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) implementieren. Diese iterierbaren Objekte können unendlich sein. Strings werden nicht akzeptiert: Um Strings zu verzahnen, wandeln Sie sie mit {{jsxref("Iterator.from()")}} ausdrücklich in Iteratoren um.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten bei unterschiedlich langen Eingaben festlegt. Es kann die folgenden Eigenschaften haben:
    - `mode` {{optional_inline}}
      - : Einer der folgenden Werte:
        - `"shortest"` (Standardwert): Der resultierende Iterator endet, sobald eine iterierbare Eingabe erschöpft ist.
        - `"longest"`: Der resultierende Iterator endet, sobald alle iterierbaren Eingaben erschöpft sind. Fehlende Werte aus kürzeren iterierbaren Eingaben werden entsprechend der Option `padding` ergänzt.
        - `"strict"`: Ein {{jsxref("TypeError")}} wird ausgelöst, wenn nicht alle iterierbaren Eingaben gleichzeitig enden.
    - `padding` {{optional_inline}}
      - : Ein Objekt. Es wird nur abgerufen und validiert, wenn `mode` den Wert `"longest"` hat. Ist es `undefined` oder nicht vorhanden, werden fehlende Werte aus kürzeren iterierbaren Eingaben mit `undefined` ergänzt (dies entspricht der Übergabe eines leeren Objekts). Wird ein Objekt angegeben, wird jeder Schlüssel des Arguments `iterables` abgerufen, _sobald `Iterator.zipKeyed()` aufgerufen wird_. `padding[key]` wird für fehlende Werte von `iterables[key]` verwendet. Fehlen im `padding`-Objekt einige Schlüssel, werden die entsprechenden Werte mit `undefined` ergänzt.

### Rückgabewert

Ein neues {{jsxref("Iterator")}}-Objekt. Jedes seiner Elemente ist ein Objekt mit denselben Schlüsseln wie das Argument `iterables` und enthält die Elemente der einzelnen iterierbaren Eingaben an der entsprechenden Position.

## Beschreibung

Die Funktion `Iterator.zipKeyed()` verhält sich wie {{jsxref("Iterator.zip()")}}. Der einzige Unterschied besteht darin, dass Sie die Schlüssel der resultierenden Objekte festlegen können, während `Iterator.zip()` immer numerische Indizes verwendet (indem es Arrays liefert).

Wenn wir iterierbare Objekte als Arrays darstellen, kann die Eingabe so aussehen:

```js
({
  a: [a1, a2, a3, a4],
  b: [b1, b2, b3],
  c: [c1, c2, c3, c4, c5],
});
```

Unabhängig von den Optionen liefert der resultierende Iterator zunächst die folgenden Arrays:

```js
({ a: a1, b: b1, c: c1 });
({ a: a2, b: b2, c: c2 });
({ a: a3, b: b3, c: c3 });
```

Nachdem die ersten drei Objekte geliefert wurden, ist die iterierbare Eingabe `b` beim vierten Aufruf von `next()` erschöpft – sie gibt `{ done: true }` zurück. Was danach geschieht, hängt von der Option `mode` ab. Ist `mode` auf `"shortest"` gesetzt (der Standardwert), endet der resultierende Iterator an dieser Stelle: Die beiden anderen Eingabe-Iteratoren werden [geschlossen](/de/docs/Web/JavaScript/Reference/Iteration_protocols#errors_during_iteration). Ist `mode` auf `"strict"` gesetzt, wird ein Fehler ausgelöst, weil die beiden anderen iterierbaren Eingaben _noch nicht_ beendet sind, wenn die zweite das Ergebnis `{ done: true }` liefert. Ist `mode` auf `"longest"` gesetzt, liefert der resultierende Iterator weitere Objekte und ergänzt fehlende Werte. Wenn beispielsweise `padding` nicht angegeben wird, wird standardmäßig `undefined` verwendet:

```js
({ a: a4, b: undefined, c: c4 });
({ a: undefined, b: undefined, c: c5 });
```

Wird `padding` als Objekt angegeben, kann es beispielsweise so aussehen: `{ a: p1, b: p2, c: p3 }`. Dann wird `p2` verwendet, um den fehlenden Wert der iterierbaren Eingabe `b` zu ergänzen, und `p1`, um den fehlenden Wert der iterierbaren Eingabe `a` zu ergänzen:

```js
({ a: a4, b: p2, c: c4 });
({ a: p1, b: p2, c: c5 });
```

## Beispiele

### Tabellarische Daten transponieren

Es gibt zwei gängige Möglichkeiten, tabellarische Daten darzustellen: als Objekt, bei dem jede Eigenschaft eine Spalte ist, oder als Array von Objekten, bei dem jedes Objekt eine Zeile ist. Dieses Beispiel zeigt, wie Sie mit `Iterator.zipKeyed()` zeilenweise über die spaltenbasierte Darstellung iterieren können.

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

Die meisten Anwendungsfälle von `Iterator.zipKeyed()` sind mit denen von {{jsxref("Iterator.zip()")}} identisch. Welche Methode Sie verwenden, hängt davon ab, ob Ihre iterierbaren Eingaben bereits als Objekt (verwenden Sie `zipKeyed()`) oder als Array (verwenden Sie `zip()`) vorliegen. Wir empfehlen, nach Möglichkeit `zipKeyed()` zu verwenden, da explizite Schlüssel es erschweren, die Reihenfolge der iterierbaren Eingaben versehentlich zu verwechseln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Iterator.zipKeyed` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.zipKeyed` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.zip()")}}
- {{jsxref("Iterator.from()")}}
- {{jsxref("Iterator.concat()")}}
