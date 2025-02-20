---
title: Atomics.xor()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/xor
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Atomics.xor()`** führt eine bitweise XOR-Operation mit einem angegebenen Wert an einer gegebenen Position in dem Array durch und gibt den alten Wert an dieser Position zurück. Diese atomare Operation garantiert, dass keine weiteren Schreibvorgänge erfolgen, bis der geänderte Wert zurückgeschrieben wurde.

{{InteractiveExample("JavaScript Demo: Atomics.xor()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 (0111) XOR 2 (0010) = 5 (0101)
console.log(Atomics.xor(uint8, 0, 2));
// Expected output: 7

console.log(Atomics.load(uint8, 0));
// Expected output: 5
```

## Syntax

```js-nolint
Atomics.xor(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein Integer-Typed-Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder
    {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der das bitweise XOR berechnet wird.
- `value`
  - : Die Zahl, mit der das bitweise XOR berechnet wird.

### Rückgabewert

Der alte Wert an der gegebenen Position (`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der zulässigen Integer-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beschreibung

Die bitweise XOR-Operation ergibt 1, wenn `a` und `b` unterschiedlich sind. Die Wahrheitstabelle für die XOR-Operation lautet:

| `a` | `b` | `a ^ b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

Zum Beispiel ergibt ein bitweises XOR von `5 ^ 1` das Ergebnis `0100`, welches im Dezimalsystem 4 ist.

```plain
5  0101
1  0001
   ----
4  0100
```

## Beispiele

### Verwendung von xor

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.xor(ta, 0, 1); // returns 5, the old value
Atomics.load(ta, 0); // 4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.and()")}}
- {{jsxref("Atomics.or()")}}
