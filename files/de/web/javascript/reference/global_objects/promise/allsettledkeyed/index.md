---
title: Promise.allSettledKeyed()
short-title: allSettledKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettledKeyed
l10n:
  sourceCommit: cbf7f4b55e2c0bc0c096773435b159edcaa8c9e2
---

Die **`Promise.allSettledKeyed()`**-Methode ähnelt {{jsxref("Promise.allSettled()")}}, außer dass sie statt Arrays/Iterables als Eingabe/Ausgabe Objekte verwendet. Sie nimmt ein Objekt, bei dem jeder eigene Schlüssel mit einem Promise verknüpft ist, und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises der Eingabe abgearbeitet sind, mit einem Objekt, das dieselben Schlüssel enthält, abgebildet auf Objekte, die das Ergebnis des entsprechenden Promises beschreiben.

Im Vergleich zu {{jsxref("Promise.allSettled()")}} ermöglicht `Promise.allSettledKeyed()` das Zuweisen von Ergebnissen zu semantisch sinnvollen Schlüsseln, anstatt willkürlicher Array-Reihenfolge, die schwer zu pflegen sein kann.

## Syntax

```js-nolint
Promise.allSettledKeyed(object)
```

### Parameter

- `object`
  - : Ein Objekt. Alle seine [eigenen aufzählbaren Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties), unabhängig davon, ob der Schlüssel ein String oder ein Symbol ist, sollten {{jsxref("Promise")}}-Werte haben. Diese Werte werden [await-ed](/de/docs/Web/JavaScript/Reference/Operators/await), sodass auch andere [thenables](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) aufgelöst werden, während Nicht-thenables unverändert zurückgegeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits erfüllt** ist, wenn das übergebene `object` keine eigenen aufzählbaren Eigenschaften hat.
- **Asynchron erfüllt** ist, wenn alle Promises im übergebenen `object` abgearbeitet sind (entweder erfüllt oder abgelehnt). Der Erfüllungswert ist ein Objekt, mit denselben Schlüsseln in derselben Reihenfolge wie das gegebene `object`, und der Wert jeder Eigenschaft ist ein Objekt, das das Ergebnis des entsprechenden Versprechens in `object` beschreibt, unabhängig von der Reihenfolge der Fertigstellung. Jedes Ergebnisobjekt hat die folgenden Eigenschaften:
  - `status`
    - : Ein String, entweder `"fulfilled"` oder `"rejected"`, der den endgültigen Zustand des Versprechens angibt.
  - `value`
    - : Nur vorhanden, wenn `status` `"fulfilled"` ist. Der Wert, mit dem das Versprechen erfüllt wurde.
  - `reason`
    - : Nur vorhanden, wenn `status` `"rejected"` ist. Der Grund, warum das Versprechen abgelehnt wurde.

  Wenn das übergebene `object` nicht leer ist, aber keine ausstehenden Versprechungen enthält, wird das zurückgegebene Versprechen dennoch asynchron (anstelle von synchron) erfüllt.

## Beschreibung

Die `Promise.allSettledKeyed()`-Methode ist eine der [Konkurrenzmethoden für Versprechungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie erfüllt denselben Zweck wie {{jsxref("Promise.allSettled()")}}. `Promise.allSettledKeyed()` wird bevorzugt, wenn Sie nicht bereits ein Array von Promises haben und/oder Sie die Ergebnisse sofort destrukturieren; siehe {{jsxref("Promise.allKeyed()")}} für weitere Beschreibung.

## Beispiele

### Verwendung von Promise.allSettledKeyed()

Die `Promise.allSettledKeyed()`-Methode nimmt ein Objekt und verarbeitet alle seine eigenen aufzählbaren Eigenschaften.

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

const result = await Promise.allSettledKeyed(promises);
console.log(result);
// {
//   a: { status: "fulfilled", value: "a" },
//   [sym]: { status: "fulfilled", value: "symbol" },
//   nested: {
//     b: <Promise>,
//   },
// }
```

Weitere Beispiele zum Konkurrenzverhalten, das `Promise.allSettled()` und `Promise.allSettledKeyed()` gemeinsam haben, finden Sie unter {{jsxref("Promise.allSettled()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.allSettledKeyed` in `core-js`](https://core-js.io/docs/features/proposals/await-dictionary)
- [es-shims Polyfill von `Promise.allSettledKeyed`](https://www.npmjs.com/package/promise.allsettledkeyed)
- {{jsxref("Promise")}}
- {{jsxref("Promise.allKeyed()")}}
- {{jsxref("Promise.allSettled()")}}
