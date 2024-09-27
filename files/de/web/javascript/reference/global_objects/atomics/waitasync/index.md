---
title: Atomics.waitAsync()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Atomics.waitAsync()`** wartet asynchron an einer gemeinsam genutzten Speicherstelle und gibt ein {{jsxref("Promise")}} zurück.

Anders als {{jsxref("Atomics.wait()")}} ist `waitAsync` nicht blockierend und kann im Hauptthread verwendet werden.

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
  - : Die Position im `typedArray`, auf die gewartet wird.
- `value`
  - : Der erwartete Wert, der getestet wird.
- `timeout` {{optional_inline}}
  - : Zeit in Millisekunden, die gewartet wird. {{jsxref("NaN")}} (und Werte, die in `NaN` umgewandelt werden, wie `undefined`) wird zu {{jsxref("Infinity")}}. Negative Werte werden zu `0`.

### Rückgabewert

Ein {{jsxref("Object")}} mit den folgenden Eigenschaften:

- `async`
  - : Ein Boolean, der anzeigt, ob die Eigenschaft `value` ein {{jsxref("Promise")}} ist oder nicht.
- `value`
  - : Wenn `async` `false` ist, wird es ein String sein, entweder `"not-equal"` oder `"timed-out"` (nur wenn der `timeout`-Parameter `0` ist). Wenn `async` `true` ist, wird es ein {{jsxref("Promise")}} sein, das mit einem String-Wert erfüllt wird, entweder `"ok"` oder `"timed-out"`. Das Promise wird niemals abgelehnt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} ansieht.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb des gültigen Bereichs im `typedArray` liegt.

## Beispiele

### Verwendung von waitAsync()

Gegeben ein gemeinsam genutztes `Int32Array`.

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein Lesethread schläft und wartet an der Position 0, die erwartet wird, 0 zu sein. Der `result.value` wird ein Versprechen sein.

```js
const result = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise {<pending>} }
```

Im Lesethread oder in einem anderen Thread wird die Speicherstelle 0 aufgerufen und das Versprechen kann mit `"ok"` aufgelöst werden.

```js
Atomics.notify(int32, 0);
// { async: true, value: Promise {<fulfilled>: 'ok'} }
```

Wenn es sich nicht mit `"ok"` auflöst, war der Wert an der gemeinsam genutzten Speicherstelle nicht wie erwartet (der `value` wäre `"not-equal"` anstelle eines Versprechens) oder die Zeitüberschreitung wurde erreicht (das Versprechen wird mit `"time-out"` aufgelöst).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.notify()")}}
