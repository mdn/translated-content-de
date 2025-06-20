---
title: Atomics.waitAsync()
short-title: waitAsync()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Atomics.waitAsync()`** überprüft, ob eine freigegebene Speicherstelle einen gegebenen Wert enthält. Sie gibt sofort ein Objekt mit der `value`-Eigenschaft zurück, das die Zeichenkette `"not-equal"` enthält, wenn die Speicherstelle nicht mit dem gegebenen Wert übereinstimmt, oder `"timed-out"`, wenn das Timeout auf null gesetzt wurde. Andernfalls gibt die Methode ein Objekt zurück, bei dem die `value`-Eigenschaft ein {{jsxref("Promise")}} ist, das sich erfüllt mit entweder `"ok"`, wenn {{jsxref("Atomics.notify()")}} aufgerufen wird, oder `"timed-out"`, wenn das Timeout abläuft.

`Atomics.waitAsync()` und {{jsxref("Atomics.notify()")}} werden zusammen verwendet, um die Thread-Synchronisation basierend auf einem Wert im freigegebenen Speicher zu ermöglichen. Ein Thread kann sofort fortfahren, wenn sich der Synchronisationswert geändert hat, oder er kann auf eine Benachrichtigung von einem anderen Thread warten, wenn er den Synchronisationspunkt erreicht.

Diese Methode funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das eine {{jsxref("SharedArrayBuffer")}} ansieht. Sie ist nicht blockierend und kann, anders als {{jsxref("Atomics.wait()")}}, im Hauptthread verwendet werden. Da sie den gesamten Thread nicht blockiert, müssen Sie dennoch vorsichtig sein, den freigegebenen Speicher nicht vor der Erfüllung des Promises zuzugreifen.

## Syntax

```js-nolint
Atomics.waitAsync(typedArray, index, value)
Atomics.waitAsync(typedArray, index, value, timeout)
```

### Parameter

- `typedArray`
  - : Ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das eine {{jsxref("SharedArrayBuffer")}} ansieht.
- `index`
  - : Die Position im `typedArray`, auf die gewartet werden soll.
- `value`
  - : Der erwartete Wert, der überprüft werden soll.
- `timeout` {{optional_inline}}
  - : Wartezeit in Millisekunden. {{jsxref("NaN")}} (und Werte, die zu `NaN` konvertiert werden, wie `undefined`) werden zu {{jsxref("Infinity")}}. Negative Werte werden zu `0`.

### Rückgabewert

Ein {{jsxref("Object")}} mit den folgenden Eigenschaften:

- `async`
  - : Ein boolean, der angibt, ob die `value`-Eigenschaft ein {{jsxref("Promise")}} ist oder nicht.
- `value`
  - : Wenn `async` `false` ist, wird es ein Zeichenfolg sein, entweder `"not-equal"` oder `"timed-out"` (nur wenn der `timeout`-Parameter `0` ist). Wenn `async` `true` ist, wird es ein {{jsxref("Promise")}} sein, das sich mit einem Zeichenfolgenwert erfüllt, entweder `"ok"` oder `"timed-out"`. Das Promise wird niemals abgelehnt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das eine {{jsxref("SharedArrayBuffer")}} ansieht.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen im `typedArray` liegt.

## Beispiele

### Verwendung von waitAsync()

Gegeben ein freigegebenes `Int32Array`.

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet auf Standort 0, der erwartungsgemäß 0 sein soll. Das `result.value` wird ein Promise sein.

```js
const result = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise {<pending>} }
```

Im lesenden Thread oder in einem anderen Thread wird der Speicherort 0 aufgerufen und das Promise kann mit `"ok"` aufgelöst werden.

```js
Atomics.notify(int32, 0);
// { async: true, value: Promise {<fulfilled>: 'ok'} }
```

Wenn es nicht zu `"ok"` aufgelöst wird, war der Wert in der freigegebenen Speicherstelle nicht der erwartete (der `value` wäre `"not-equal"` anstelle eines Promises) oder das Timeout wurde erreicht (das Promise wird zu `"timed-out"` aufgelöst).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.notify()")}}
