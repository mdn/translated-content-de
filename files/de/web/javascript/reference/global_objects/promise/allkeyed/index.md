---
title: Promise.allKeyed()
short-title: allKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allKeyed
l10n:
  sourceCommit: 9fac65196ac2b9a26afabbcb7f14fd58621916ae
---

{{SeeCompatTable}}

Die statische Methode **`Promise.allKeyed()`** ähnelt {{jsxref("Promise.all()")}}, verwendet jedoch Objekte statt Arrays/Iterables als Eingabe/Ausgabe. Sie nimmt ein Objekt entgegen, bei dem jeder eigene Schlüssel einem Promise zugeordnet ist, und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises der Eingabe erfüllt werden, mit einem Objekt, dessen gleiche Schlüssel den entsprechenden Erfüllungswerten zugeordnet sind. Es wird abgelehnt, wenn eines der Promises der Eingabe abgelehnt wird, mit diesem ersten Ablehnungsgrund.

Im Vergleich zu {{jsxref("Promise.all()")}} ermöglicht `Promise.allKeyed()`, Ergebnisse semantisch aussagekräftigen Schlüsseln zuzuordnen, statt einer beliebigen Array-Reihenfolge, die schwierig zu pflegen sein kann.

## Syntax

```js-nolint
Promise.allKeyed(object)
```

### Parameter

- `object`
  - : Ein Objekt. Alle seine [eigenen aufzählbaren Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties), unabhängig davon, ob der Schlüssel ein String oder ein Symbol ist, sollten {{jsxref("Promise")}}-Werte haben. Diese Werte werden [abgewartet](/de/docs/Web/JavaScript/Reference/Operators/await), sodass auch andere [Thenables](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) aufgelöst werden, während Nicht-Thenables unverändert zurückgegeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits erfüllt** ist, wenn das übergebene `object` keine eigenen aufzählbaren Eigenschaften hat.
- **Asynchron erfüllt** wird, wenn alle Promises im angegebenen `object` erfüllt werden. Der Erfüllungswert ist ein Objekt mit Erfüllungswerten, mit denselben Schlüsseln in derselben Reihenfolge wie das angegebene `object`, unabhängig von der Reihenfolge der Fertigstellung. Wenn das übergebene `object` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (statt synchron) erfüllt.
- **Asynchron abgelehnt** wird, wenn eines der Promises im angegebenen `object` abgelehnt wird. Der Ablehnungsgrund ist der Ablehnungsgrund des ersten Promise, das abgelehnt wurde.

## Beschreibung

Die Methode `Promise.allKeyed()` ist eine der Methoden für [Promise-Nebenläufigkeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie führt dieselbe Art von Aufgabe wie {{jsxref("Promise.all()")}} aus. Häufig haben Sie jedoch nicht bereits ein Array von Promises, sondern nur einige Ad-hoc-Operationen, die gebündelt werden sollen. Daher legen Sie sie in ein Array und destrukturieren es anschließend sofort:

```js
const [resultA, resultB, resultC] = await Promise.all([getA(), getB(), getC()]);
```

Das Problem dabei ist, dass Sie die Konsistenz der Reihenfolge auf beiden Seiten beibehalten müssen: Wenn Sie versehentlich `[resultA, resultC, resultB]` schreiben, wird Ihr Code nicht funktionieren.

Die schlüsselbasierte Methode mildert dieses Problem, indem jede asynchrone Operation einem semantischen Schlüssel zugeordnet wird:

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

Auf diese Weise spielt die Reihenfolge keine Rolle mehr, und jede Namensabweichung ist lokal: Das versehentliche Schreiben von `b: resultC` ist nun viel leichter zu erkennen!

## Beispiele

### Verwendung von Promise.allKeyed()

Die Methode `Promise.allKeyed()` nimmt ein Objekt entgegen und verarbeitet alle seine eigenen aufzählbaren Eigenschaften.

```js
function delayed(value, timeout) {
  return new Promise((res) => setTimeout(() => res(value), timeout));
}

const sym = Symbol("example");

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

Weitere Beispiele zum Nebenläufigkeitsverhalten, das `Promise.all()` und `Promise.allKeyed()` gemeinsam haben, finden Sie unter {{jsxref("Promise.all()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.allKeyed` in `core-js`](https://core-js.io/docs/features/proposals/await-dictionary)
- [es-shims-Polyfill von `Promise.allKeyed`](https://www.npmjs.com/package/promise.allkeyed)
- {{jsxref("Promise")}}
- {{jsxref("Promise.allSettledKeyed()")}}
- {{jsxref("Promise.all()")}}
