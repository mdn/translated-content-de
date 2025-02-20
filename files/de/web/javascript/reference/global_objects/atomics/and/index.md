---
title: Atomics.and()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/and
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Atomics.and()`** statische Methode führt eine bitweise UND-Operation mit einem angegebenen Wert an einer angegebenen Position im Array aus und gibt den alten Wert an dieser Position zurück. Diese atomare Operation garantiert, dass keine anderen Schreibvorgänge stattfinden, bis der geänderte Wert zurückgeschrieben wird.

{{InteractiveExample("JavaScript Demo: Atomics.and()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 (0111) AND 2 (0010) = 2 (0010)
console.log(Atomics.and(uint8, 0, 2));
// Expected output: 7

console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## Syntax

```js-nolint
Atomics.and(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein Integer-Typed-Array. Einer der folgenden Typen: {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder
    {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der das bitweise UND berechnet wird.
- `value`
  - : Die Zahl, mit der das bitweise UND berechnet wird.

### Rückgabewert

Der alte Wert an der angegebenen Position (`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Integer-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beschreibung

Die bitweise UND-Operation ergibt nur 1, wenn sowohl `a` als auch `b` gleich 1 sind. Die Wahrheitstabelle für die UND-Operation lautet:

| `a` | `b` | `a & b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

Ein Beispiel: Ein bitweises UND von `5 & 1` ergibt `0001`, was in Dezimal 1 entspricht.

```plain
5  0101
1  0001
   ----
1  0001
```

## Beispiele

### Verwendung von and()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.and(ta, 0, 1); // returns 5, the old value
Atomics.load(ta, 0); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.or()")}}
- {{jsxref("Atomics.xor()")}}
