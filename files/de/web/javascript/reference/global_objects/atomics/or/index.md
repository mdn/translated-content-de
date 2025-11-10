---
title: Atomics.or()
short-title: or()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/or
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Atomics.or()`** statische
Methode berechnet ein bitweises OR mit einem gegebenen Wert an einer bestimmten Position im Array und
gibt den alten Wert an dieser Position zurück. Diese atomare Operation garantiert, dass kein anderer
Schreibvorgang erfolgt, bis der modifizierte Wert zurückgeschrieben wird.

{{InteractiveExample("JavaScript Demo: Atomics.or()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

// 5 (0101) OR 2 (0010) = 7 (0111)
console.log(Atomics.or(uint8, 0, 2));
// Expected output: 5

console.log(Atomics.load(uint8, 0));
// Expected output: 7
```

## Syntax

```js-nolint
Atomics.or(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein Integer-Typ-Array. Eine der folgenden: {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, oder
    {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der das bitweise OR berechnet werden soll.
- `value`
  - : Die Zahl, mit der das bitweise OR berechnet wird.

### Rückgabewert

Der alte Wert an der angegebenen Position
(`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Integertypen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beschreibung

Die bitweise OR-Operation ergibt 1, wenn entweder `a` oder `b` 1 sind.
Die Wahrheitstabelle für die OR-Operation ist:

| `a` | `b` | `a \| b` |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

Ein Beispiel: Ein bitweises OR von `5 | 1` ergibt `0101`, was 5
im Dezimalsystem ist.

```plain
5  0101
1  0001
   ----
5  0101
```

## Beispiele

### Verwendung von or

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 2;

Atomics.or(ta, 0, 1); // returns 2, the old value
Atomics.load(ta, 0); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.and()")}}
- {{jsxref("Atomics.xor()")}}
