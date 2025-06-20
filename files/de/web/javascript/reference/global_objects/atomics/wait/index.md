---
title: Atomics.wait()
short-title: wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Atomics.wait()`** überprüft, ob eine Position im gemeinsam genutzten Speicher einen bestimmten Wert enthält und schläft, falls dies zutrifft, um auf eine Weckbenachrichtigung oder ein Timeout zu warten. Sie gibt einen String zurück, der `"not-equal"` ist, wenn die Speicherstelle nicht mit dem angegebenen Wert übereinstimmt, `"ok"`, wenn sie durch {{jsxref("Atomics.notify()")}} geweckt wird, oder `"timed-out"`, wenn das Timeout abläuft.

`Atomics.wait()` und {{jsxref("Atomics.notify()")}} werden zusammen verwendet, um die Thread-Synchronisation basierend auf einem Wert im gemeinsam genutzten Speicher zu ermöglichen. Ein Thread kann sofort fortfahren, wenn sich der Synchronisationswert geändert hat, oder er kann auf eine Benachrichtigung eines anderen Threads warten, wenn er den Synchronisationspunkt erreicht.

Diese Methode funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet. Sie ist blockierend und kann nicht im Hauptthread verwendet werden. Für eine nicht blockierende, asynchrone Version dieser Methode siehe {{jsxref("Atomics.waitAsync()")}}.

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
  - : Der erwartete Wert, der überprüft werden soll.
- `timeout` {{optional_inline}}
  - : Die Wartezeit in Millisekunden. {{jsxref("NaN")}} (und Werte, die in `NaN` umgewandelt werden, wie z.B. `undefined`) wird zu {{jsxref("Infinity")}}. Negative Werte werden zu `0`.

### Rückgabewert

Ein String, der entweder `"not-equal"`, `"ok"` oder `"timed-out"` ist.

- `"not-equal"` wird sofort zurückgegeben, wenn der anfängliche `value` nicht dem entspricht, was an `index` gespeichert ist.
- `"ok"` wird zurückgegeben, wenn durch einen Aufruf von `Atomics.notify()` geweckt wird, **unabhängig davon, ob sich der erwartete Wert geändert hat**.
- `"timed-out"` wird zurückgegeben, wenn eine schlafende Wartezeit das angegebene `timeout` überschreitet, ohne durch `Atomics.notify()` geweckt zu werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
    - Wenn der aktuelle Thread nicht blockiert werden kann (zum Beispiel, weil es der Hauptthread ist).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` im `typedArray` außerhalb des gültigen Bereichs liegt.

## Beispiele

### Verwendung von wait()

Angenommen, es gibt ein gemeinsames `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet auf Position 0, weil der bereitgestellte `value` mit dem übereinstimmt, was an der bereitgestellten `index`-Position gespeichert ist.
Der lesende Thread wird nicht fortfahren, bis der schreibende Thread `Atomics.notify()` auf Position 0 des bereitgestellten `typedArray` aufgerufen hat.
Beachten Sie, dass der lesende Thread **nicht** wieder schlafen geht, wenn nach dem Aufwachen der Wert an Position 0 vom schreibenden Thread nicht geändert wurde, sondern weiter fortfährt.

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

Ein schreibender Thread speichert einen neuen Wert und benachrichtigt den wartenden Thread, nachdem er geschrieben hat:

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
