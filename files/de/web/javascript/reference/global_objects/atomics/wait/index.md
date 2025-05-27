---
title: Atomics.wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
l10n:
  sourceCommit: 41d8fb5509b94beb5808eb6baea6ef62d70fec03
---

{{JSRef}}

Die statische Methode **`Atomics.wait()`** überprüft, ob eine gemeinsame Speicherstelle einen bestimmten Wert enthält, und falls ja, schläft sie, bis sie eine Weckbenachrichtigung oder ein Timeout erhält. Sie gibt einen String zurück, der entweder `"not-equal"` ist, wenn die Speicherstelle nicht mit dem angegebenen Wert übereinstimmt, `"ok"`, wenn sie durch {{jsxref("Atomics.notify()")}} geweckt wird, oder `"timed-out"`, wenn das Timeout abläuft.

`Atomics.wait()` und {{jsxref("Atomics.notify()")}} werden zusammen verwendet, um die Thread-Synchronisation basierend auf einem Wert im gemeinsamen Speicher zu ermöglichen. Ein Thread kann sofort fortfahren, wenn sich der Synchronisationswert geändert hat, oder er kann auf eine Benachrichtigung von einem anderen Thread warten, wenn er den Synchronisationspunkt erreicht hat.

Diese Methode funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet. Sie ist blockierend und kann nicht im Haupt-Thread verwendet werden. Für eine nicht-blockierende, asynchrone Version dieser Methode siehe {{jsxref("Atomics.waitAsync()")}}.

## Syntax

```js-nolint
Atomics.wait(typedArray, index, value)
Atomics.wait(typedArray, index, value, timeout)
```

### Parameter

- `typedArray`
  - : Ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
- `index`
  - : Die Position im `typedArray`, auf die gewartet wird.
- `value`
  - : Der erwartete Wert, der getestet wird.
- `timeout` {{optional_inline}}
  - : Zeit in Millisekunden, die gewartet wird. {{jsxref("NaN")}} (und Werte, die in `NaN` umgewandelt werden, wie `undefined`) wird zu {{jsxref("Infinity")}}. Negative Werte werden zu `0`.

### Rückgabewert

Ein String, der entweder `"not-equal"`, `"ok"` oder `"timed-out"` ist.

- `"not-equal"` wird sofort zurückgegeben, wenn der Anfangswert `value` nicht dem entspricht, was an `index` gespeichert ist.
- `"ok"` wird zurückgegeben, wenn das Wecken durch einen Aufruf von `Atomics.notify()` erfolgt, **unabhängig davon, ob sich der erwartete Wert geändert hat**.
- `"timed-out"` wird zurückgegeben, wenn ein wartender Thread das angegebene `timeout` überschreitet, ohne durch `Atomics.notify()` geweckt zu werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Falls `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
    - Falls der aktuelle Thread nicht blockiert werden kann (z.B. weil es der Haupt-Thread ist).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beispiele

### Verwendung von wait()

Angenommen, ein gemeinsames `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet an Position 0, weil der angegebene `value` mit dem übereinstimmt, was an dem angegebenen `index` gespeichert ist. Der lesende Thread wird nicht weitermachen, bis der schreibende Thread `Atomics.notify()` auf Position 0 des angegebenen `typedArray` aufgerufen hat. Beachten Sie, dass der lesende Thread **nicht** wieder einschläft, nachdem er geweckt wurde, falls der Wert an Position 0 vom schreibenden Thread nicht geändert wurde, sondern weitermacht.

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

Ein schreibender Thread speichert einen neuen Wert und benachrichtigt den wartenden Thread, sobald er geschrieben hat:

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.waitAsync()")}}
- {{jsxref("Atomics.notify()")}}
