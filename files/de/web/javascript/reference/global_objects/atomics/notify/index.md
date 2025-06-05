---
title: Atomics.notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
l10n:
  sourceCommit: 56ed4a56f70f4e8d03fb54b0cb4ebea64c43da23
---

{{JSRef}}

Die statische Methode **`Atomics.notify()`** benachrichtigt einige Agenten, die in der Warteschlange schlafen.

> [!NOTE]
> Diese Operation funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
> Es wird `0` zurückgeben bei nicht-geteilten `ArrayBuffer` Objekten.

## Syntax

```js-nolint
Atomics.notify(typedArray, index, count)
```

### Parameter

- `typedArray`
  - : Ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
- `index`
  - : Die Position im `typedArray`, auf die gewartet wird.
- `count` {{optional_inline}}
  - : Die Anzahl der schlafenden Agenten, die benachrichtigt werden sollen. Standardmäßig {{jsxref("Infinity")}}.

### Rückgabewert

Gibt die Anzahl der aufgeweckten Agenten zurück, oder `0`, wenn `typedArray` eine Ansicht auf einen nicht-geteilten {{jsxref("ArrayBuffer")}} ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist.
- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn `index` außerhalb des Bereichs im `typedArray` liegt.

## Beispiele

### Verwendung von `notify`

Angenommen, ein geteilter `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet bei Position 0, weil der bereitgestellte `value` dem entspricht, was an dem bereitgestellten `index` gespeichert ist.
Der lesende Thread wird erst dann fortfahren, wenn der schreibende Thread `Atomics.notify()` an Position 0 des bereitgestellten `typedArray` aufgerufen hat.
Beachten Sie, dass der lesende Thread, wenn er aufgeweckt wird und der Wert an Position 0 nicht vom schreibenden Thread geändert wurde, **nicht** wieder einschlafen wird, sondern fortfahren wird.

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
