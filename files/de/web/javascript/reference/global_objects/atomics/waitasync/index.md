---
title: Atomics.waitAsync()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`Atomics.waitAsync()`** statische Methode wartet asynchron auf einem gemeinsam genutzten Speicherort und gibt ein {{jsxref("Promise")}} zurück.

Im Gegensatz zu {{jsxref("Atomics.wait()")}} ist `waitAsync` nicht blockierend und kann im Hauptthread verwendet werden.

> [!NOTE]
> Diese Operation funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} ansieht.

## Syntax

```js-nolint
Atomics.waitAsync(typedArray, index, value)
Atomics.waitAsync(typedArray, index, value, timeout)
```

### Parameter

- `typedArray`
  - : Ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} ansieht.
- `index`
  - : Die Position im `typedArray`, auf die gewartet werden soll.
- `value`
  - : Der erwartete Wert zum Testen.
- `timeout` {{optional_inline}}
  - : Zeit in Millisekunden, die gewartet werden soll. {{jsxref("NaN")}} (und Werte, die in `NaN` konvertiert werden, wie `undefined`) wird zu {{jsxref("Infinity")}}. Negative Werte werden zu `0`.

### Rückgabewert

Ein {{jsxref("Object")}} mit den folgenden Eigenschaften:

- `async`
  - : Ein boolescher Wert, der angibt, ob die `value`-Eigenschaft ein {{jsxref("Promise")}} ist oder nicht.
- `value`
  - : Wenn `async` `false` ist, wird es ein String sein, der entweder `"not-equal"` oder `"timed-out"` ist (nur wenn der `timeout`-Parameter `0` ist). Wenn `async` `true` ist, wird es ein {{jsxref("Promise")}} sein, das mit einem String-Wert erfüllt wird, entweder `"ok"` oder `"timed-out"`. Das Versprechen wird niemals abgelehnt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} ansieht.
- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beispiele

### Verwendung von waitAsync()

Gegeben ein gemeinsames `Int32Array`.

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet an Position 0, die 0 erwartet. Der `result.value` wird ein Promise sein.

```js
const result = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise {<pending>} }
```

Im lesenden Thread oder in einem anderen Thread wird der Speicherort 0 aufgerufen und das Promise kann mit `"ok"` aufgelöst werden.

```js
Atomics.notify(int32, 0);
// { async: true, value: Promise {<fulfilled>: 'ok'} }
```

Wenn es sich nicht zu `"ok"` auflöst, war der Wert am gemeinsamen Speicherort nicht der erwartete (der `value` wäre `"not-equal"` anstelle eines Promise) oder das Timeout wurde erreicht (das Promise wird sich zu `"time-out"` auflösen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.notify()")}}
