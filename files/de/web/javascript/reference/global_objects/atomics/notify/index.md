---
title: Atomics.notify()
short-title: notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Atomics.notify()`** statische Methode benachrichtigt einige Agenten, die in der Warteschlange schlafen.

> [!NOTE]
> Diese Operation funktioniert nur mit einer {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, die einen {{jsxref("SharedArrayBuffer")}} anzeigt.
> Es wird `0` bei nicht-geteilten `ArrayBuffer`-Objekten zurückgeben.

## Syntax

```js-nolint
Atomics.notify(typedArray, index, count)
```

### Parameter

- `typedArray`
  - : Eine {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, die einen {{jsxref("SharedArrayBuffer")}} anzeigt.
- `index`
  - : Die Position im `typedArray`, an der aufgeweckt werden soll.
- `count` {{optional_inline}}
  - : Die Anzahl der schlafenden Agenten, die benachrichtigt werden sollen. Standardwert ist {{jsxref("Infinity")}}.

### Rückgabewert

Gibt die Anzahl der aufgeweckten Agenten zurück oder `0`, wenn `typedArray` eine Ansicht auf einen nicht-geteilten {{jsxref("ArrayBuffer")}} ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` keine {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen im `typedArray` liegt.

## Beispiele

### Verwendung von `notify`

Gegeben eine geteilte `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet auf Position 0, weil der angegebene `value` mit dem übereinstimmt, was an dem angegebenen `index` gespeichert ist. Der lesende Thread wird nicht fortfahren, bis der schreibende Thread `Atomics.notify()` auf Position 0 des angegebenen `typedArray` aufgerufen hat. Beachten Sie, dass der lesende Thread, nachdem er aufgeweckt wurde, **nicht** wieder schlafen geht, außer der Wert an Position 0 wurde nicht vom schreibenden Thread geändert, sondern setzt seine Arbeit fort.

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
