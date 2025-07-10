---
title: Atomics.waitAsync()
short-title: waitAsync()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Atomics.waitAsync()`** überprüft, ob sich an einem freigegebenen Speicherort ein bestimmter Wert befindet. Sie gibt sofort ein Objekt mit der Eigenschaft `value` zurück, das den String `"not-equal"` enthält, wenn der Speicherort nicht mit dem angegebenen Wert übereinstimmt, oder `"timed-out"`, wenn das Timeout auf null gesetzt wurde. Andernfalls gibt die Methode ein Objekt zurück, bei dem die Eigenschaft `value` ein {{jsxref("Promise")}} ist, das mit entweder `"ok"` erfüllt wird, wenn {{jsxref("Atomics.notify()")}} aufgerufen wird, oder `"timed-out"`, wenn das Timeout abläuft.

`Atomics.waitAsync()` und {{jsxref("Atomics.notify()")}} werden zusammen verwendet, um Threads auf Grundlage eines Werts im freigegebenen Speicher zu synchronisieren. Ein Thread kann sofort fortfahren, wenn sich der Synchronisationswert geändert hat, oder auf eine Benachrichtigung eines anderen Threads warten, wenn er den Synchronisationspunkt erreicht.

Diese Methode funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} ansieht. Sie ist nicht blockierend und kann, anders als {{jsxref("Atomics.wait()")}}, im Hauptthread verwendet werden. Da sie den gesamten Thread nicht blockiert, müssen Sie dennoch darauf achten, nicht auf den freigegebenen Speicher zuzugreifen, bevor das Promise abgeschlossen ist.

## Syntax

```js-nolint
Atomics.waitAsync(typedArray, index, value)
Atomics.waitAsync(typedArray, index, value, timeout)
```

### Parameter

- `typedArray`
  - : Ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} ansieht.
- `index`
  - : Die Position im `typedArray`, auf die gewartet wird.
- `value`
  - : Der erwartete Wert, der getestet wird.
- `timeout` {{optional_inline}}
  - : Zeit, die in Millisekunden gewartet wird. {{jsxref("NaN")}} (und Werte, die in `NaN` umgewandelt werden, wie `undefined`) werden zu {{jsxref("Infinity")}}. Negative Werte werden zu `0`.

### Rückgabewert

Ein {{jsxref("Object")}} mit den folgenden Eigenschaften:

- `async`
  - : Ein boolescher Wert, der angibt, ob die Eigenschaft `value` ein {{jsxref("Promise")}} ist oder nicht.
- `value`
  - : Wenn `async` `false` ist, wird es ein String sein, entweder `"not-equal"` oder `"timed-out"` (nur wenn der `timeout`-Parameter `0` ist). Wenn `async` `true` ist, wird es ein {{jsxref("Promise")}} sein, das mit einem String-Wert erfüllt wird, entweder `"ok"` oder `"timed-out"`. Das Promise wird niemals abgelehnt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} ansieht.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen im `typedArray` liegt.

## Beispiele

### Verwendung von waitAsync()

Gegeben ein freigegebenes `Int32Array`.

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet auf die Position 0, die 0 sein soll.
`result.value` wird ein Promise sein.

```js
const result = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise {<pending>} }
```

Im lesenden Thread oder in einem anderen Thread wird der Speicherort 0 aufgerufen, und das Promise kann mit `"ok"` aufgelöst werden.

```js
Atomics.notify(int32, 0);
// { async: true, value: Promise {<fulfilled>: 'ok'} }
```

Wenn es nicht mit `"ok"` aufgelöst wird, war der Wert im freigegebenen Speicherort nicht der erwartete (der `value` wäre `"not-equal"` anstelle eines Promises) oder das Timeout wurde erreicht (das Promise wird zu `"time-out"` aufgelöst).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.notify()")}}
