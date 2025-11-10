---
title: Atomics.wait()
short-title: wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Atomics.wait()`** überprüft, ob ein Speicherort im gemeinsam genutzten Speicher einen angegebenen Wert enthält und schläft, falls dies zutrifft, während sie auf eine Weckbenachrichtigung oder einen Timeout wartet. Sie gibt einen String zurück, der `"not-equal"` ist, wenn der Speicherort nicht mit dem angegebenen Wert übereinstimmt, `"ok"`, wenn er von {{jsxref("Atomics.notify()")}} geweckt wurde, oder `"timed-out"`, wenn der Timeout abläuft.

`Atomics.wait()` und {{jsxref("Atomics.notify()")}} werden zusammen verwendet, um eine Thread-Synchronisation basierend auf einem Wert im gemeinsam genutzten Speicher zu ermöglichen. Ein Thread kann sofort fortfahren, wenn sich der Synchronisationswert geändert hat, oder er kann auf eine Benachrichtigung von einem anderen Thread warten, wenn er den Synchronisationspunkt erreicht.

Diese Methode funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet. Sie ist blockierend und kann nicht im Haupt-Thread verwendet werden. Für eine nicht blockierende, asynchrone Version dieser Methode siehe {{jsxref("Atomics.waitAsync()")}}.

## Syntax

```js-nolint
Atomics.wait(typedArray, index, value)
Atomics.wait(typedArray, index, value, timeout)
```

### Parameter

- `typedArray`
  - : Ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
- `index`
  - : Die Position im `typedArray`, auf die gewartet werden soll.
- `value`
  - : Der erwartete Wert zum Testen.
- `timeout` {{optional_inline}}
  - : Wartezeit in Millisekunden. {{jsxref("NaN")}} (und Werte, die in `NaN` umgewandelt werden, wie z.B. `undefined`) wird zu {{jsxref("Infinity")}}. Negative Werte werden zu `0`.

### Rückgabewert

Ein String, der entweder `"not-equal"`, `"ok"` oder `"timed-out"` ist.

- `"not-equal"` wird sofort zurückgegeben, wenn der anfängliche `value` nicht dem entspricht, was bei `index` gespeichert ist.
- `"ok"` wird zurückgegeben, wenn der Aufruf von `Atomics.notify()` geweckt wird, **unabhängig davon, ob sich der erwartete Wert geändert hat**.
- `"timed-out"` wird zurückgegeben, wenn ein schlafender Wartevorgang den angegebenen `timeout` überschreitet, ohne dass er von `Atomics.notify()` geweckt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
    - Wenn der aktuelle Thread nicht blockiert werden kann (zum Beispiel, weil es der Haupt-Thread ist).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beispiele

### Verwendung von wait()

Gegeben ein gemeinsames `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet an Position 0, weil der bereitgestellte `value` mit dem übereinstimmt, was an dem bereitgestellten `index` gespeichert ist.
Der lesende Thread wird nicht weitermachen, bis der schreibende Thread `Atomics.notify()` an Position 0 des bereitgestellten `typedArray` aufgerufen hat.
Beachten Sie, dass der lesende Thread **nicht** wieder einschlafen wird, nachdem er geweckt wurde, wenn der Wert an Position 0 nicht durch den schreibenden Thread geändert wurde, sondern fortfahren wird.

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
