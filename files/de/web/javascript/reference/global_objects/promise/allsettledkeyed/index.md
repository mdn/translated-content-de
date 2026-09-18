---
title: Promise.allSettledKeyed()
short-title: allSettledKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettledKeyed
l10n:
  sourceCommit: 9fac65196ac2b9a26afabbcb7f14fd58621916ae
---

{{SeeCompatTable}}

Die statische Methode **`Promise.allSettledKeyed()`** ähnelt {{jsxref("Promise.allSettled()")}}, verwendet jedoch Objekte statt Arrays/Iterables als Ein- und Ausgabe. Sie akzeptiert ein Objekt, bei dem jeder eigene Schlüssel mit einem Promise verknüpft ist, und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises der Eingabe abgeschlossen sind, mit einem Objekt, dessen gleiche Schlüssel Objekten zugeordnet sind, die das Ergebnis des entsprechenden Promise beschreiben.

Im Vergleich zu {{jsxref("Promise.allSettled()")}} ermöglicht `Promise.allSettledKeyed()`, Ergebnisse semantisch aussagekräftigen Schlüsseln zuzuordnen, statt einer beliebigen Array-Reihenfolge, die schwer zu verwalten sein kann.

## Syntax

```js-nolint
Promise.allSettledKeyed(object)
```

### Parameter

- `object`
  - : Ein Objekt. Alle seine [eigenen aufzählbaren Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties), unabhängig davon, ob der Schlüssel ein String oder ein Symbol ist, sollten {{jsxref("Promise")}}-Werte haben. Diese Werte werden [abgewartet](/de/docs/Web/JavaScript/Reference/Operators/await), daher werden auch andere [Thenables](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) aufgelöst, während Nicht-Thenables unverändert zurückgegeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits erfüllt** ist, wenn das übergebene `object` keine eigenen aufzählbaren Eigenschaften hat.
- **Asynchron erfüllt** wird, wenn alle Promises im angegebenen `object` abgeschlossen sind (entweder erfüllt oder abgelehnt). Der Erfüllungswert ist ein Objekt mit denselben Schlüsseln in derselben Reihenfolge wie das angegebene `object`. Der Wert jeder Eigenschaft ist ein Objekt, das das Ergebnis des entsprechenden Promise in `object` beschreibt, unabhängig von der Abschlussreihenfolge. Jedes Ergebnisobjekt hat die folgenden Eigenschaften:
  - `status`
    - : Ein String, entweder `"fulfilled"` oder `"rejected"`, der den endgültigen Zustand des Promise angibt.
  - `value`
    - : Nur vorhanden, wenn `status` `"fulfilled"` ist. Der Wert, mit dem das Promise erfüllt wurde.
  - `reason`
    - : Nur vorhanden, wenn `status` `"rejected"` ist. Der Grund, mit dem das Promise abgelehnt wurde.

  Wenn das übergebene `object` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (statt synchron) erfüllt.

## Beschreibung

Die Methode `Promise.allSettledKeyed()` ist eine der Methoden für [Promise-Nebenläufigkeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie führt dieselbe Art von Aufgabe wie {{jsxref("Promise.allSettled()")}} aus. `Promise.allSettledKeyed()` wird bevorzugt, wenn Sie nicht bereits ein Array von Promises haben und/oder die Ergebnisse unmittelbar destrukturieren; weitere Informationen finden Sie unter {{jsxref("Promise.allKeyed()")}}.

## Beispiele

### Promise.allSettledKeyed() verwenden

Die Methode `Promise.allSettledKeyed()` akzeptiert ein Objekt und verarbeitet alle seine eigenen aufzählbaren Eigenschaften.

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

const result = await Promise.allSettledKeyed(promises);
console.log(result);
// {
//   a: { status: "fulfilled", value: "a" },
//   [sym]: { status: "fulfilled", value: "symbol" },
//   nested: { status: "fulfilled", value: { b: <Promise> } },
// }
```

Weitere Beispiele zum Nebenläufigkeitsverhalten, das `Promise.allSettled()` und `Promise.allSettledKeyed()` gemeinsam haben, finden Sie unter {{jsxref("Promise.allSettled()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.allSettledKeyed` in `core-js`](https://core-js.io/docs/features/proposals/await-dictionary)
- [es-shims-Polyfill von `Promise.allSettledKeyed`](https://www.npmjs.com/package/promise.allsettledkeyed)
- {{jsxref("Promise")}}
- {{jsxref("Promise.allKeyed()")}}
- {{jsxref("Promise.allSettled()")}}
