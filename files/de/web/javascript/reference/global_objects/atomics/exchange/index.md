---
title: Atomics.exchange()
short-title: exchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/exchange
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Atomics.exchange()`** tauscht einen gegebenen Wert an einer gegebenen Position im Array aus und gibt den alten Wert an dieser Position zurück. Diese atomare Operation gewährleistet, dass zwischen dem Lesen des alten Wertes und dem Schreiben des neuen Wertes kein anderer Schreibvorgang stattfindet.

{{InteractiveExample("JavaScript Demo: Atomics.exchange()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(Atomics.load(uint8, 0));
// Expected output: 5

Atomics.exchange(uint8, 0, 2); // Returns 5
console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## Syntax

```js-nolint
Atomics.exchange(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein Integer-Typed-Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der ein `value` ausgetauscht werden soll.
- `value`
  - : Die Zahl, die ausgetauscht werden soll.

### Rückgabewert

Der alte Wert an der angegebenen Position (`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Integer-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beispiele

### Nutzung von exchange()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.exchange(ta, 0, 12); // returns 0, the old value
Atomics.load(ta, 0); // 12
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.compareExchange()")}}
