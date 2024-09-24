---
title: Atomics.waitAsync()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`Atomics.waitAsync()`** statische Methode wartet asynchron an einem gemeinsam genutzten Speicherort und gibt ein {{jsxref("Promise")}} zurück.

Im Gegensatz zu {{jsxref("Atomics.wait()")}} ist `waitAsync` nicht blockierend und kann im Haupt-Thread verwendet werden.

> [!NOTE]
> Diese Operation funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.

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
  - : Der erwartete Wert zum Testen.
- `timeout` {{optional_inline}}
  - : Zeit zum Warten in Millisekunden. {{jsxref("NaN")}} (und Werte, die in `NaN` umgewandelt werden, wie `undefined`) werden zu {{jsxref("Infinity")}}. Negative Werte werden `0`.

### Rückgabewert

Ein {{jsxref("Object")}} mit den folgenden Eigenschaften:

- `async`
  - : Ein boolescher Wert, der angibt, ob die `value`-Eigenschaft ein {{jsxref("Promise")}} ist oder nicht.
- `value`
  - : Wenn `async` `false` ist, wird es ein String, der entweder `"not-equal"` oder `"timed-out"` ist (nur wenn der `timeout`-Parameter `0` ist). Wenn `async` `true` ist, wird es ein {{jsxref("Promise")}}, das mit einem String-Wert erfüllt wird, entweder `"ok"` oder `"timed-out"`. Das Versprechen wird nie abgelehnt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen im `typedArray` liegt.

## Beispiele

### Verwendung von waitAsync()

Angenommen, ein gemeinsam genutztes `Int32Array`.

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet auf Position 0, die 0 sein soll. Der `result.value` wird ein Versprechen sein.

```js
const result = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise {<pending>} }
```

Im lesenden Thread oder in einem anderen Thread wird der Speicherort 0 aufgerufen und das Versprechen kann mit `"ok"` aufgelöst werden.

```js
Atomics.notify(int32, 0);
// { async: true, value: Promise {<fulfilled>: 'ok'} }
```

Wenn es nicht mit `"ok"` aufgelöst wird, war der Wert an der gemeinsamen Speicherstelle nicht der erwartete (der `value` wäre `"not-equal"` anstelle eines Versprechens) oder das Timeout wurde erreicht (das Versprechen wird auf `"time-out"` aufgelöst).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.notify()")}}
