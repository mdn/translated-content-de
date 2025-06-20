---
title: Atomics.notify()
short-title: notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Atomics.notify()`** benachrichtigt einige Agenten, die in der Wartewarteschlange schlafen.

> [!NOTE]
> Diese Operation funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das eine {{jsxref("SharedArrayBuffer")}} betrachtet.
> Es wird `0` bei nicht-gemeinsamen `ArrayBuffer`-Objekten zurückgeben.

## Syntax

```js-nolint
Atomics.notify(typedArray, index, count)
```

### Parameter

- `typedArray`
  - : Ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das eine {{jsxref("SharedArrayBuffer")}} betrachtet.
- `index`
  - : Die Position im `typedArray`, die geweckt werden soll.
- `count` {{optional_inline}}
  - : Die Anzahl der zu benachrichtigenden schlafenden Agenten. Standardmäßig ist dies {{jsxref("Infinity")}}.

### Rückgabewert

Gibt die Anzahl der aufgeweckten Agenten zurück oder `0`, wenn `typedArray` eine Sicht auf einen nicht-gemeinsamen {{jsxref("ArrayBuffer")}} ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` weder ein {{jsxref("Int32Array")}} noch ein {{jsxref("BigInt64Array")}} ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen im `typedArray` liegt.

## Beispiele

### Verwendung von `notify`

Gegeben ein geteiltes `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet an Position 0, weil der bereitgestellte `value` mit dem am bereitgestellten `index` gespeicherten Wert übereinstimmt. Der lesende Thread wird erst weitermachen, wenn der schreibende Thread `Atomics.notify()` auf Position 0 des bereitgestellten `typedArray` aufgerufen hat. Beachten Sie, dass der lesende Thread, wenn nach dem Aufwachen der Wert an Position 0 nicht vom schreibenden Thread geändert wurde, **nicht** wieder schlafen geht, sondern weitermacht.

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
