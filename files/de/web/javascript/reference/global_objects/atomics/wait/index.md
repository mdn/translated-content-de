---
title: Atomics.wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Atomics.wait()`** überprüft, ob eine geteilte Speicherstelle noch einen gegebenen Wert enthält und wartet, wenn dies der Fall ist, auf eine Aufwachbenachrichtigung oder läuft aus. Sie gibt einen String zurück, der entweder `"ok"`, `"not-equal"` oder `"timed-out"` ist.

> [!NOTE]
> Diese Operation funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet, und sie darf möglicherweise nicht im Hauptthread erlaubt sein.
> Für eine nicht-blockierende, asynchrone Version dieser Methode siehe {{jsxref("Atomics.waitAsync()")}}.

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
  - : Zeit in Millisekunden, die gewartet werden soll. {{jsxref("NaN")}} (und Werte, die in `NaN` umgewandelt werden, wie `undefined`) wird zu {{jsxref("Infinity")}}. Negative Werte werden zu `0`.

### Rückgabewert

Ein String, der entweder `"ok"`, `"not-equal"` oder `"timed-out"` ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Wenn `typedArray` nicht ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
    - Wenn der aktuelle Thread nicht blockiert werden kann (zum Beispiel, weil er der Hauptthread ist).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beispiele

### Verwendung von wait()

Gegeben ein geteiltes `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet an Position 0, welche erwartet wird 0 zu sein. Solange dies zutrifft, wird er nicht fortfahren. Sobald jedoch der schreibende Thread einen neuen Wert gespeichert hat, wird er vom schreibenden Thread benachrichtigt und gibt den neuen Wert (123) zurück.

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
