---
title: Promise.allSettledKeyed()
short-title: allSettledKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettledKeyed
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{SeeCompatTable}}

Die **`Promise.allSettledKeyed()`** statische Methode ähnelt {{jsxref("Promise.allSettled()")}}, außer dass sie anstelle von Arrays/Iterables als Input/Output Objekte verwendet. Sie akzeptiert ein Objekt, bei dem jeder eigene Schlüssel mit einem Promise verknüpft ist, und gibt ein einziges {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises des Inputs abgeschlossen sind, mit einem Objekt der gleichen Schlüssel, die auf Objekte abgebildet sind, die das Ergebnis des jeweiligen Promise beschreiben.

Im Vergleich zu {{jsxref("Promise.allSettled()")}} ermöglicht `Promise.allSettledKeyed()` Ihnen, Ergebnisse mit semantisch sinnvollen Schlüsseln zu verknüpfen, anstatt mit einer beliebigen Array-Reihenfolge, die schwer zu pflegen sein kann.

## Syntax

```js-nolint
Promise.allSettledKeyed(object)
```

### Parameter

- `object`
  - : Ein Objekt. Alle seine [eigenen aufzählbaren Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties), egal ob der Schlüssel ein String oder ein Symbol ist, sollten {{jsxref("Promise")}}-Werte haben. Diese Werte werden [abgewartet](/de/docs/Web/JavaScript/Reference/Operators/await), so dass auch andere [Thenables](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) aufgelöst werden, während Nicht-Thenables unverändert zurückgegeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits erfüllt** ist, wenn das übergebene `object` keine eigenen aufzählbaren Eigenschaften hat.
- **Asynchron erfüllt** ist, wenn alle Promises im gegebenen `object` abgeschlossen sind (entweder erfüllt oder abgelehnt). Der Erfüllungswert ist ein Objekt mit den gleichen Schlüsseln und in derselben Reihenfolge wie das gegebene `object`, und der Wert jeder Eigenschaft ist ein Objekt, das das Ergebnis des entsprechenden Promise in `object` beschreibt, unabhängig von der Abschlussreihenfolge. Jedes Ergebnisobjekt hat die folgenden Eigenschaften:
  - `status`
    - : Ein String, entweder `"fulfilled"` oder `"rejected"`, der den endgültigen Zustand des Promise anzeigt.
  - `value`
    - : Nur vorhanden, wenn `status` `"fulfilled"` ist. Der Wert, mit dem das Promise erfüllt wurde.
  - `reason`
    - : Nur vorhanden, wenn `status` `"rejected"` ist. Der Grund, warum das Promise abgelehnt wurde.

  Wenn das übergebene `object` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise trotzdem asynchron (anstatt synchron) erfüllt.

## Beschreibung

Die `Promise.allSettledKeyed()`-Methode ist eine der Methoden für [Promise-Konkurrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie führt die gleiche Art von Aufgabe aus wie {{jsxref("Promise.allSettled()")}}. `Promise.allSettledKeyed()` wird bevorzugt, wenn Sie nicht bereits ein Array von Promises haben und/oder Sie die Ergebnisse sofort destrukturieren; siehe {{jsxref("Promise.allKeyed()")}} für eine genauere Beschreibung.

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

Für mehr Beispiele, die sich auf das Konkurrenzverhalten beziehen, das `Promise.allSettled()` und `Promise.allSettledKeyed()` gemeinsam haben, siehe {{jsxref("Promise.allSettled()")}}.

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
