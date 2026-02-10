---
title: Atomics.waitAsync()
short-title: waitAsync()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

Die statische Methode **`Atomics.waitAsync()`** überprüft, ob eine gemeinsame Speicherstelle einen bestimmten Wert enthält. Sie gibt sofort ein Objekt mit der `value`-Eigenschaft zurück, das den String `"not-equal"` enthält, wenn die Speicherstelle nicht dem angegebenen Wert entspricht, oder `"timed-out"`, wenn das Timeout auf null gesetzt wurde. Andernfalls gibt die Methode ein Objekt zurück, bei dem die `value`-Eigenschaft ein {{jsxref("Promise")}} ist, das entweder mit `"ok"` erfüllt wird, wenn {{jsxref("Atomics.notify()")}} aufgerufen wird, oder mit `"timed-out"`, wenn das Timeout abläuft.

`Atomics.waitAsync()` und {{jsxref("Atomics.notify()")}} werden zusammen verwendet, um die Thread-Synchronisation basierend auf einem Wert im gemeinsamen Speicher zu ermöglichen. Ein Thread kann sofort fortfahren, wenn sich der Synchronisationswert geändert hat, oder er kann auf eine Benachrichtigung von einem anderen Thread warten, wenn der Synchronisationspunkt erreicht wird.

Diese Methode funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet. Sie ist nicht blockierend und kann, im Gegensatz zu {{jsxref("Atomics.wait()")}}, im Haupt-Thread verwendet werden. Da sie den gesamten Thread nicht blockiert, müssen Sie trotzdem darauf achten, den gemeinsamen Speicher nicht zuzugreifen, bevor das Promise abgeschlossen ist.

## Syntax

```js-nolint
Atomics.waitAsync(typedArray, index, value)
Atomics.waitAsync(typedArray, index, value, timeout)
```

### Parameter

- `typedArray`
  - : Ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
- `index`
  - : Die Position im `typedArray`, auf der gewartet werden soll.
- `value`
  - : Der erwartete Wert zum Testen.
- `timeout` {{optional_inline}}
  - : Zeit, um in Millisekunden zu warten. {{jsxref("NaN")}} (und Werte, die in `NaN` umgewandelt werden, wie `undefined`) wird zu {{jsxref("Infinity")}}. Negative Werte werden zu `0`.

### Rückgabewert

Ein {{jsxref("Object")}} mit den folgenden Eigenschaften:

- `async`
  - : Ein Boolean, der anzeigt, ob die `value`-Eigenschaft ein {{jsxref("Promise")}} ist oder nicht.
- `value`
  - : Wenn `async` `false` ist, wird es ein String sein, entweder `"not-equal"` oder `"timed-out"` (nur wenn der `timeout` Parameter `0` ist). Wenn `async` `true` ist, wird es ein {{jsxref("Promise")}} sein, das mit einem Stringwert erfüllt wird, entweder `"ok"` oder `"timed-out"`. Das Promise wird niemals abgelehnt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen im `typedArray` liegt.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt von der Konsole oder einer beliebigen Webseite aus ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, die [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) werden erfüllt.

### Verwendung von Atomics.waitAsync()

Gegeben ein gemeinsames `Int32Array`:

```js
// Create a SharedArrayBuffer with a size in bytes
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet auf die Position 0, die erwartet wird, 0 zu sein.
Das `result.value` wird ein Promise sein.

```js
const result = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise {<pending>} }
```

Im lesenden Thread oder in einem anderen Thread wird die Speicherstelle 0 aufgerufen und das Promise kann mit `"ok"` aufgelöst werden.

```js
Atomics.notify(int32, 0);
// { async: true, value: Promise {<fulfilled>: 'ok'} }
```

Wenn es nicht mit `"ok"` aufgelöst wird, war der Wert an der gemeinsamen Speicherstelle nicht der erwartete (der `value` wäre `"not-equal"` anstelle eines Promise) oder das Timeout wurde erreicht (das Promise wird mit `"time-out"` aufgelöst).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.notify()")}}
