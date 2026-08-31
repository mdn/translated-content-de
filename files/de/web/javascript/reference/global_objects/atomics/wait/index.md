---
title: Atomics.wait()
short-title: wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

Die statische Methode **`Atomics.wait()`** überprüft, ob eine gemeinsam genutzte Speicherstelle einen bestimmten Wert enthält und schläft, falls dies der Fall ist, und wartet auf eine Weckbenachrichtigung oder ein Timeout. Sie gibt einen String zurück, der `"not-equal"` ist, wenn die Speicherstelle nicht mit dem angegebenen Wert übereinstimmt, `"ok"` wenn sie durch {{jsxref("Atomics.notify()")}} geweckt wird, oder `"timed-out"` wenn das Timeout abläuft.

`Atomics.wait()` und {{jsxref("Atomics.notify()")}} werden zusammen verwendet, um eine Thread-Synchronisation basierend auf einem Wert im gemeinsamen Speicher zu ermöglichen. Ein Thread kann sofort weitermachen, wenn sich der Synchronisationswert geändert hat, oder er kann auf eine Benachrichtigung eines anderen Threads warten, wenn er die Synchronisationsstelle erreicht.

Diese Methode funktioniert nur mit einer {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, die einen {{jsxref("SharedArrayBuffer")}} betrachtet. Sie ist blockierend und kann nicht im Haupt-Thread verwendet werden. Für eine nicht-blockierende, asynchrone Version dieser Methode siehe {{jsxref("Atomics.waitAsync()")}}.

## Syntax

```js-nolint
Atomics.wait(typedArray, index, value)
Atomics.wait(typedArray, index, value, timeout)
```

### Parameter

- `typedArray`
  - : Eine {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, die einen {{jsxref("SharedArrayBuffer")}} betrachtet.
- `index`
  - : Die Position im `typedArray`, auf die gewartet werden soll.
- `value`
  - : Der erwartete Wert, der getestet werden soll.
- `timeout` {{optional_inline}}
  - : Zeit in Millisekunden, die gewartet werden soll. {{jsxref("NaN")}} (und Werte, die in `NaN` umgewandelt werden, wie `undefined`) wird zu {{jsxref("Infinity")}}. Negative Werte werden zu `0`.

### Rückgabewert

Ein String, der entweder `"not-equal"`, `"ok"` oder `"timed-out"` ist.

- `"not-equal"` wird sofort zurückgegeben, wenn der anfängliche `value` nicht dem entspricht, was an `index` gespeichert ist.
- `"ok"` wird zurückgegeben, wenn durch einen Aufruf von `Atomics.notify()` geweckt wird, **unabhängig davon, ob sich der erwartete Wert geändert hat**.
- `"timed-out"` wird zurückgegeben, wenn ein schlafender Zustand das angegebene `timeout` überschreitet, ohne dass er durch `Atomics.notify()` geweckt wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Wenn `typedArray` keine {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, die einen {{jsxref("SharedArrayBuffer")}} betrachtet.
    - Wenn der aktuelle Thread nicht blockiert werden kann (zum Beispiel, weil es der Haupt-Thread ist).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` nicht im Bereich des `typedArray` liegt.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt von der Konsole oder einer beliebigen Webseite aus ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, die [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) werden erfüllt.

### Verwendung von Atomics.wait()

Gegeben ein gemeinsames `Int32Array`:

```js
// Create a SharedArrayBuffer with a size in bytes
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet an der Stelle 0, weil der bereitgestellte `value` mit dem in dem bereitgestellten `index` gespeicherten Wert übereinstimmt. Der lesende Thread wird nicht weitermachen, bis der schreibende Thread `Atomics.notify()` an Position 0 des bereitgestellten `typedArray` aufgerufen hat. Beachten Sie, dass der lesende Thread, wenn der Wert an der Stelle 0 nach dem Aufwecken vom schreibenden Thread nicht geändert wurde, **nicht** wieder schlafen geht, sondern weitermacht.

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
