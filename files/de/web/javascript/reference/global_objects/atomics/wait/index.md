---
title: Atomics.wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
l10n:
  sourceCommit: bdc8bdccee92b67a7ce346af9ceaa247a1687c59
---

{{JSRef}}

Die **`Atomics.wait()`** statische Methode überprüft, ob eine geteilte Speicherstelle immer noch einen bestimmten Wert enthält und wartet, wenn dies zutrifft, auf eine Weckbenachrichtigung oder läuft ab. Sie gibt einen String zurück, der entweder `"ok"`, `"not-equal"` oder `"timed-out"` ist.

> [!NOTE]
> Diese Operation funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet, und darf möglicherweise nicht im Hauptthread ausgeführt werden.
> Für eine nicht blockierende, asynchrone Version dieser Methode siehe {{jsxref("Atomics.waitAsync()")}}.

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
  - : Wartezeit in Millisekunden. {{jsxref("NaN")}} (und Werte, die in `NaN` umgewandelt werden, wie `undefined`) wird zu {{jsxref("Infinity")}}. Negative Werte werden zu `0`.

### Rückgabewert

Ein String, der entweder `"ok"`, `"not-equal"` oder `"timed-out"` ist.

- `"ok"` wird zurückgegeben, wenn durch einen Aufruf von `Atomics.notify()` aufgeweckt, **unabhängig davon, ob sich der erwartete Wert geändert hat**
- `"not-equal"` wird sofort zurückgegeben, wenn der anfängliche `value` nicht dem im `index` gespeicherten Wert entspricht
- `"timed-out"` wird zurückgegeben, wenn eine schlafende Wartezeit den angegebenen `timeout` überschreitet, ohne durch `Atomics.notify()` aufgeweckt zu werden

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Wenn `typedArray` nicht ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
    - Wenn der aktuelle Thread nicht blockiert werden kann (zum Beispiel, weil es der Hauptthread ist).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beispiele

### Verwendung von wait()

Angenommen, es gibt einen geteilten `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet an der Position 0, weil der angegebene `value` mit dem übereinstimmt, was an dem angegebenen `index` gespeichert ist. Der lesende Thread wird erst fortfahren, wenn der schreibende Thread `Atomics.notify()` an Position 0 des bereitgestellten `typedArray` aufgerufen hat. Beachten Sie, dass wenn der Wert an Position 0 nach dem Aufwachen nicht vom schreibenden Thread geändert wurde, der lesende Thread **nicht** wieder einschlafen wird, sondern fortfahren wird.

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
