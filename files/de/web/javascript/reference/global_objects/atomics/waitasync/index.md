---
title: Atomics.waitAsync()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
l10n:
  sourceCommit: 41d8fb5509b94beb5808eb6baea6ef62d70fec03
---

{{JSRef}}

Die statische Methode **`Atomics.waitAsync()`** überprüft, ob ein gemeinsamer Speicherort einen bestimmten Wert enthält. Sie gibt sofort ein Objekt mit der Eigenschaft `value` zurück, das den String `"not-equal"` enthält, wenn der Speicherort nicht dem angegebenen Wert entspricht, oder `"timed-out"`, wenn das Timeout auf null gesetzt war. Andernfalls gibt die Methode ein Objekt zurück, bei dem die Eigenschaft `value` ein {{jsxref("Promise")}} ist, das entweder dann mit `"ok"` erfüllt wird, wenn {{jsxref("Atomics.notify()")}} aufgerufen wird, oder mit `"timed-out"`, wenn das Timeout abläuft.

`Atomics.waitAsync()` und {{jsxref("Atomics.notify()")}} werden zusammen verwendet, um die Synchronisierung von Threads basierend auf einem Wert im gemeinsamen Speicher zu ermöglichen. Ein Thread kann sofort fortfahren, wenn sich der Synchronisationswert geändert hat, oder er kann auf eine Benachrichtigung eines anderen Threads warten, wenn dieser den Synchronisationspunkt erreicht.

Diese Methode funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet. Sie ist nicht blockierend und kann im Gegensatz zu {{jsxref("Atomics.wait()")}} im Hauptthread verwendet werden. Da sie den ganzen Thread nicht blockiert, müssen Sie dennoch darauf achten, nicht auf den gemeinsamen Speicher zuzugreifen, bevor das Promise erfüllt ist.

## Syntax

```js-nolint
Atomics.waitAsync(typedArray, index, value)
Atomics.waitAsync(typedArray, index, value, timeout)
```

### Parameter

- `typedArray`
  - : Ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
- `index`
  - : Die Position im `typedArray`, auf die gewartet werden soll.
- `value`
  - : Der erwartete Wert, der getestet werden soll.
- `timeout` {{optional_inline}}
  - : Zeit, die in Millisekunden gewartet werden soll. {{jsxref("NaN")}} (und Werte, die in `NaN` umgewandelt werden, wie `undefined`) wird zu {{jsxref("Infinity")}}. Negative Werte werden zu `0`.

### Rückgabewert

Ein {{jsxref("Object")}} mit den folgenden Eigenschaften:

- `async`
  - : Ein boolescher Wert, der angibt, ob die Eigenschaft `value` ein {{jsxref("Promise")}} ist oder nicht.
- `value`
  - : Wenn `async` `false` ist, wird es ein String sein, der entweder `"not-equal"` oder `"timed-out"` ist (nur wenn der `timeout`-Parameter `0` ist). Wenn `async` `true` ist, wird es ein {{jsxref("Promise")}} sein, das mit einem String-Wert erfüllt wird, entweder `"ok"` oder `"timed-out"`. Das Promise wird niemals abgelehnt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb des Bereichs im `typedArray` liegt.

## Beispiele

### Verwendung von waitAsync()

Gegeben ist ein gemeinsames `Int32Array`.

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet an Position 0, wo ein Wert von 0 erwartet wird.
Der `result.value` ist ein Promise.

```js
const result = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise {<pending>} }
```

Im lesenden Thread oder in einem anderen Thread wird der Speicherort 0 aufgerufen und das Promise kann mit `"ok"` erfüllt werden.

```js
Atomics.notify(int32, 0);
// { async: true, value: Promise {<fulfilled>: 'ok'} }
```

Wenn es nicht mit `"ok"` aufgelöst wird, war der Wert am gemeinsamen Speicherort nicht der erwartete Wert (das `value` wäre `"not-equal"` anstelle eines Promise) oder das Timeout wurde erreicht (das Promise wird mit `"time-out"` aufgelöst).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.notify()")}}
