---
title: Promise.allKeyed()
short-title: allKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allKeyed
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{SeeCompatTable}}

Die statische Methode **`Promise.allKeyed()`** ähnelt {{jsxref("Promise.all()")}}, verwendet jedoch Objekte anstelle von Arrays/Iterables als Eingangs- und Ausgangsdaten. Sie nimmt ein Objekt, bei dem jeder eigene Schlüssel mit einem Promise verknüpft ist, und gibt ein einziges {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises der Eingabe erfüllt sind, und liefert ein Objekt mit denselben Schlüsseln, die auf die entsprechenden Erfüllungswerte gemappt sind. Es wird abgelehnt, wenn eines der Promises der Eingabe abgelehnt wird, mit dem ersten Ablehnungsgrund.

Im Vergleich zu {{jsxref("Promise.all()")}} ermöglicht `Promise.allKeyed()` es Ihnen, Ergebnisse mit semantisch sinnvollen Schlüsseln zu verknüpfen, anstatt mit einer beliebigen Array-Reihenfolge, die schwierig zu pflegen sein kann.

## Syntax

```js-nolint
Promise.allKeyed(object)
```

### Parameter

- `object`
  - : Ein Objekt. Alle eigenen [enumerierbaren Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties), unabhängig davon, ob der Schlüssel ein String oder ein Symbol ist, sollten {{jsxref("Promise")}}-Werte haben. Diese Werte werden [abgewartet](/de/docs/Web/JavaScript/Reference/Operators/await), sodass auch andere [Thenables](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) aufgelöst werden, während Nicht-Thenables unverändert zurückgegeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits erfüllt** ist, wenn das übergebene `object` keine eigenen enumerierbaren Eigenschaften hat.
- **Asynchron erfüllt**, wenn alle Promises im angegebenen `object` erfüllt sind. Der Erfüllungswert ist ein Objekt mit Erfüllungswerten, mit denselben Schlüsseln in derselben Reihenfolge wie das übergebene `object`, unabhängig von der Reihenfolge der Fertigstellung. Wenn das übergebene `object` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (anstelle von synchron) erfüllt.
- **Asynchron abgelehnt**, wenn eines der Promises im angegebenen `object` abgelehnt wird. Der Ablehnungsgrund ist der Ablehnungsgrund des ersten abgelehnten Promises.

## Beschreibung

Die Methode `Promise.allKeyed()` ist eine der Methoden zur [Promise-Konkurrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie führt dieselbe Art von Aufgaben aus wie {{jsxref("Promise.all()")}}. Allerdings haben Sie oft nicht bereits ein Array von Promises, sondern stattdessen nur einige Ad-hoc-Operationen, die Sie bündeln möchten, sodass Sie sie in ein Array packen und dann sofort dekonstruieren:

```js
const [resultA, resultB, resultC] = await Promise.all([getA(), getB(), getC()]);
```

Das Problem dabei ist, dass Sie die Konsistenz der Reihenfolge auf beiden Seiten aufrechterhalten müssen: Wenn Sie versehentlich `[resultA, resultC, resultB]` schreiben, wird Ihr Code nicht funktionieren.

Die keyed-Methode mildert das Problem, indem jede asynchrone Operation mit einem semantischen Schlüssel verknüpft wird:

```js
const {
  a: resultA,
  b: resultB,
  c: resultC,
} = await Promise.allKeyed({
  a: getA(),
  b: getB(),
  c: getC(),
});
```

Auf diese Weise spielt die Reihenfolge keine Rolle mehr, und ein eventuelles Missverständnis bei den Namen ist lokal: das versehentliche Schreiben von `b: resultC` ist nun viel leichter zu erkennen!

## Beispiele

### Verwendung von Promise.allKeyed()

Die Methode `Promise.allKeyed()` nimmt ein Objekt und verarbeitet alle seine eigenen enumerierbaren Eigenschaften.

```js
function delayed(value, timeout) {
  return new Promise((res) => setTimeout(() => res(value), timeout));
}

const sym = Symbol();

const promises = {
  a: delayed("a", 500),
  // Symbol properties are processed
  [sym]: delayed("symbol", 300),
  // Nested properties are not processed; this whole object is treated as
  // an already-resolved value and returned as-is
  nested: {
    b: delayed("b", 100),
  },
};

const result = await Promise.allKeyed(promises);
console.log(result);
// {
//   a: "a",
//   [sym]: "symbol",
//   nested: {
//     b: <Promise>,
//   },
// }
```

Für weitere Beispiele in Bezug auf das Konkurrenzverhalten, das `Promise.all()` und `Promise.allKeyed()` gemeinsam haben, siehe {{jsxref("Promise.all()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.allKeyed` in `core-js`](https://core-js.io/docs/features/proposals/await-dictionary)
- [es-shims polyfill von `Promise.allKeyed`](https://www.npmjs.com/package/promise.allkeyed)
- {{jsxref("Promise")}}
- {{jsxref("Promise.allSettledKeyed()")}}
- {{jsxref("Promise.all()")}}
