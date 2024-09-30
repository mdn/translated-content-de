---
title: Atomics.notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Atomics.notify()`** benachrichtigt einige Agenten, die in der Wartewarteschlange schlafen.

> [!NOTE]
> Diese Operation funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
> Sie wird `0` zurückgeben bei nicht-geteilten `ArrayBuffer`-Objekten.

## Syntax

```js-nolint
Atomics.notify(typedArray, index, count)
```

### Parameter

- `typedArray`
  - : Ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
- `index`
  - : Die Position im `typedArray`, bei der aufgeweckt werden soll.
- `count` {{optional_inline}}
  - : Die Anzahl der zu benachrichtigenden schlafenden Agenten. Standardmäßig {{jsxref("Infinity")}}.

### Rückgabewert

- Gibt die Anzahl der aufgeweckten Agenten zurück.
- Gibt `0` zurück, wenn ein nicht-geteiltes {{jsxref("ArrayBuffer")}}-Objekt verwendet wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen im `typedArray` liegt.

## Beispiele

### Verwendung von `notify`

Gegeben ein geteilter `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet an Position 0, die erwartet wird, 0 zu sein. Solange das der Fall ist, wird er nicht weitermachen. Sobald jedoch der schreibende Thread einen neuen Wert gespeichert hat, wird er vom schreibenden Thread benachrichtigt und gibt den neuen Wert (123) zurück.

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
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.waitAsync()")}}
