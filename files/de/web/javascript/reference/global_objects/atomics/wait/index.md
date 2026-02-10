---
title: Atomics.wait()
short-title: wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

Die statische Methode **`Atomics.wait()`** überprüft, ob ein gemeinsam genutzter Speicherort einen bestimmten Wert enthält, und schläft, falls dies zutrifft, in Erwartung einer Aufwachbenachrichtigung oder eines Timeouts. Sie gibt einen String zurück, der `"not-equal"` ist, wenn der Speicherort nicht dem angegebenen Wert entspricht, `"ok"`, wenn er durch {{jsxref("Atomics.notify()")}} geweckt wurde, oder `"timed-out"`, wenn das Timeout abläuft.

`Atomics.wait()` und {{jsxref("Atomics.notify()")}} werden zusammen verwendet, um die Thread-Synchronisierung basierend auf einem Wert im gemeinsam genutzten Speicher zu ermöglichen. Ein Thread kann sofort fortfahren, wenn sich der Synchronisationswert geändert hat, oder auf eine Benachrichtigung von einem anderen Thread warten, wenn er den Synchronisationspunkt erreicht.

Diese Methode funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} ansieht. Sie ist blockierend und kann nicht im Hauptthread verwendet werden. Für eine nicht blockierende, asynchrone Version dieser Methode siehe {{jsxref("Atomics.waitAsync()")}}.

## Syntax

```js-nolint
Atomics.wait(typedArray, index, value)
Atomics.wait(typedArray, index, value, timeout)
```

### Parameter

- `typedArray`
  - : Ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} ansieht.
- `index`
  - : Die Position im `typedArray`, auf die gewartet werden soll.
- `value`
  - : Der erwartete Wert, der getestet werden soll.
- `timeout` {{optional_inline}}
  - : Wartezeit in Millisekunden. {{jsxref("NaN")}} (und Werte, die in `NaN` umgewandelt werden, wie `undefined`) wird zu {{jsxref("Infinity")}}. Negative Werte werden zu `0`.

### Rückgabewert

Ein String, der entweder `"not-equal"`, `"ok"` oder `"timed-out"` ist.

- `"not-equal"` wird sofort zurückgegeben, wenn der anfängliche `value` nicht dem entspricht, was an `index` gespeichert ist.
- `"ok"` wird zurückgegeben, wenn durch einen Aufruf von `Atomics.notify()` geweckt, **unabhängig davon, ob sich der erwartete Wert geändert hat**.
- `"timed-out"` wird zurückgegeben, wenn eine schlafende Wartezeit das angegebene `timeout` überschreitet, ohne von `Atomics.notify()` geweckt zu werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} ansieht.
    - Wenn der aktuelle Thread nicht blockiert werden kann (zum Beispiel, weil er der Hauptthread ist).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt von der Konsole oder einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, die [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

### Verwendung von Atomics.wait()

Gegeben ein gemeinsam genutztes `Int32Array`:

```js
// Create a SharedArrayBuffer with a size in bytes
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet an Position 0, weil der bereitgestellte `value` dem entspricht, was an dem bereitgestellten `index` gespeichert ist. Der lesende Thread wird nicht weitermachen, bis der schreibende Thread `Atomics.notify()` auf Position 0 des bereitgestellten `typedArray` aufgerufen hat. Beachten Sie, dass der lesende Thread nach dem Aufwachen **nicht** wieder schlafen wird, wenn der Wert an Position 0 nicht vom schreibenden Thread geändert wurde, sondern weitermachen wird.

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

Ein schreibender Thread speichert einen neuen Wert und benachrichtigt den wartenden Thread, sobald er ihn geschrieben hat:

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
