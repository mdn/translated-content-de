---
title: Atomics.notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
l10n:
  sourceCommit: bdc8bdccee92b67a7ce346af9ceaa247a1687c59
---

{{JSRef}}

Die statische Methode **`Atomics.notify()`** benachrichtigt einige Agenten, die in der Warteschlange schlafen.

> [!NOTE]
> Diese Operation funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} anzeigt.
> Sie gibt `0` zurück, wenn nicht-geteilte `ArrayBuffer`-Objekte verwendet werden.

## Syntax

```js-nolint
Atomics.notify(typedArray, index, count)
```

### Parameter

- `typedArray`
  - : Ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} anzeigt.
- `index`
  - : Die Position im `typedArray`, auf der geweckt werden soll.
- `count` {{optional_inline}}
  - : Die Anzahl der schlafenden Agenten, die benachrichtigt werden sollen. Standardmäßig ist dies {{jsxref("Infinity")}}.

### Rückgabewert

- Gibt die Anzahl der aufgeweckten Agenten zurück.
- Gibt `0` zurück, wenn ein nicht-geteiltes {{jsxref("ArrayBuffer")}}-Objekt verwendet wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist, das einen {{jsxref("SharedArrayBuffer")}} anzeigt.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen im `typedArray` liegt.

## Beispiele

### Verwendung von `notify`

Angenommen, es gibt ein geteiltes `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet an der Position 0, weil der bereitgestellte `value` mit dem Wert an dem bereitgestellten `index` übereinstimmt. Der lesende Thread wird nicht fortfahren, bis der schreibende Thread `Atomics.notify()` für die Position 0 des bereitgestellten `typedArray` aufgerufen hat. Beachten Sie, dass der lesende Thread, nachdem er geweckt wurde, nicht wieder schlafen geht, wenn der Wert an der Position 0 vom schreibenden Thread nicht geändert wurde, sondern weiterläuft.

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
