---
title: Atomics.waitAsync()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
l10n:
  sourceCommit: b375b7442bc39c6c00a46d5c4ece5a703d94976b
---

{{JSRef}}

Die **`Atomics.waitAsync()`** statische Methode wartet asynchron auf einen gemeinsamen Speicherort und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.

Im Gegensatz zu {{jsxref("Atomics.wait()")}} ist `waitAsync` nicht blockierend und kann im Hauptthread verwendet werden.

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
  - : Die Position im `typedArray`, auf die gewartet wird.
- `value`
  - : Der erwartete Wert zum Testen.
- `timeout` {{optional_inline}}
  - : Wartezeit in Millisekunden. {{jsxref("NaN")}} (und Werte, die in `NaN` umgewandelt werden, wie z.B. `undefined`) wird zu {{jsxref("Infinity")}}. Negative Werte werden zu `0`.

### Rückgabewert

Ein {{jsxref("Object")}} mit den folgenden Eigenschaften:

- `async`
  - : Ein boolean, der angibt, ob die `value` Eigenschaft ein {{jsxref("Promise")}} ist oder nicht.
- `value`
  - : Wenn `async` `false` ist, wird es ein String sein, der entweder `"not-equal"` oder `"timed-out"` (nur wenn der `timeout`-Parameter `0` ist) ist. Wenn `async` `true` ist, wird es ein {{jsxref("Promise")}} sein, das mit einem String-Wert erfüllt wird, entweder `"ok"` oder `"timed-out"`. Das Versprechen wird niemals abgelehnt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen im `typedArray` liegt.

## Beispiele

### Verwendung von waitAsync()

Gegeben ist ein gemeinsames `Int32Array`.

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein Lesethread schläft und wartet auf Ort 0, der erwartet wird 0 zu sein. Der `result.value` wird ein Versprechen sein.

```js
const result = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise {<pending>} }
```

Im Lesethread oder in einem anderen Thread wird der Speicherort 0 aufgerufen und das Versprechen kann mit `"ok"` aufgelöst werden.

```js
Atomics.notify(int32, 0);
// { async: true, value: Promise {<fulfilled>: 'ok'} }
```

Wenn es nicht mit `"ok"` aufgelöst wird, war der Wert im gemeinsamen Speicherort nicht der erwartete (der `value` wäre `"not-equal"` anstelle eines Versprechens) oder das Timeout wurde erreicht (das Versprechen wird mit `"time-out"` aufgelöst).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.notify()")}}
