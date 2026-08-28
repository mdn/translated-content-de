---
title: Promise.allKeyed()
short-title: allKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allKeyed
l10n:
  sourceCommit: cbf7f4b55e2c0bc0c096773435b159edcaa8c9e2
---

Die statische Methode **`Promise.allKeyed()`** ist wie {{jsxref("Promise.all()")}}, außer dass anstelle von Arrays/iterables als Ein-/Ausgabe Objekte verwendet werden. Sie nimmt ein Objekt an, bei dem jeder eigene Schlüssel mit einem Promise verknüpft ist, und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises der Eingabe erfüllt werden, mit einem Objekt derselben Schlüssel, die auf die entsprechenden Erfüllungswerte gemappt sind. Es wird abgelehnt, wenn eines der Promises der Eingabe abgelehnt wird, mit dem Grund der ersten Ablehnung.

Im Vergleich zu {{jsxref("Promise.all()")}} ermöglicht `Promise.allKeyed()`, Ergebnisse mit semantisch sinnvollen Schlüsseln zu verknüpfen, anstatt mit einer willkürlichen Array-Reihenfolge, die schwer aufrechtzuerhalten sein kann.

## Syntax

```js-nolint
Promise.allKeyed(object)
```

### Parameter

- `object`
  - : Ein Objekt. Alle seine [eigenen aufzählbaren Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties), egal ob der Schlüssel ein String oder ein Symbol ist, sollten {{jsxref("Promise")}}-Werte haben. Diese Werte werden [abgewartet](/de/docs/Web/JavaScript/Reference/Operators/await), sodass auch andere [thenables](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) aufgelöst werden, während Nicht-thenables unverändert zurückgegeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ist:

- **Bereits erfüllt**, wenn das übergebene `object` keine eigenen aufzählbaren Eigenschaften hat.
- **Asynchron erfüllt**, wenn alle Promises im angegebenen `object` erfüllt werden. Der Erfüllungswert ist ein Objekt der Erfüllungswerte, mit denselben Schlüsseln in derselben Reihenfolge wie das gegebene `object`, unabhängig von der Abschlussreihenfolge. Wenn das übergebene `object` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (anstelle von synchron) erfüllt.
- **Asynchron abgelehnt**, wenn eines der Promises im angegebenen `object` abgelehnt wird. Der Ablehnungsgrund ist der Ablehnungsgrund des ersten Promise, das abgelehnt wurde.

## Beschreibung

Die Methode `Promise.allKeyed()` ist eine der [Promise-Konkurrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) Methoden. Sie führt dieselbe Art von Aufgabe wie {{jsxref("Promise.all()")}} aus. Oftmals hat man jedoch nicht bereits ein Array von Promises, sondern nur einige Ad-hoc-Operationen zum Sammeln, sodass man sie in ein Array steckt und dann sofort destrukturiert:

```js
const [resultA, resultB, resultC] = await Promise.all([getA(), getB(), getC()]);
```

Das Problem hierbei ist, dass Sie die Konsistenz der Reihenfolge auf beiden Seiten beibehalten müssen: Wenn Sie versehentlich `[resultA, resultC, resultB]` schreiben, wird Ihr Code beschädigt.

Die Keyed-Methode mildert das Problem, indem sie jeder asynchronen Operation einen semantischen Schlüssel zuordnet:

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

Auf diese Weise spielt die Reihenfolge keine Rolle mehr, und jede Namensinkonsistenz ist lokal: Es ist jetzt viel einfacher, versehentlich `b: resultC` zu schreiben!

## Beispiele

### Verwendung von Promise.allKeyed()

Die Methode `Promise.allKeyed()` nimmt ein Objekt und verarbeitet alle seine eigenen aufzählbaren Eigenschaften.

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

Für weitere Beispiele im Zusammenhang mit dem Konkurrenzverhalten, das für `Promise.all()` und `Promise.allKeyed()` gemeinsam ist, siehe {{jsxref("Promise.all()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.allKeyed` in `core-js`](https://core-js.io/docs/features/proposals/await-dictionary)
- [es-shims Polyfill von `Promise.allKeyed`](https://www.npmjs.com/package/promise.allkeyed)
- {{jsxref("Promise")}}
- {{jsxref("Promise.allSettledKeyed()")}}
- {{jsxref("Promise.all()")}}
