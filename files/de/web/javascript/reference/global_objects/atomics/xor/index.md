---
title: Atomics.xor()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/xor
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

Die statische Methode **`Atomics.xor()`** führt ein bitweises XOR mit einem gegebenen Wert an einer bestimmten Position im Array aus und gibt den alten Wert an dieser Position zurück. Diese atomare Operation garantiert, dass keine andere Schreiboperation stattfindet, bis der modifizierte Wert zurückgeschrieben wird.

{{EmbedInteractiveExample("pages/js/atomics-xor.html")}}

## Syntax

```js-nolint
Atomics.xor(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein ganzzahliges typisiertes Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, oder
    {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der das bitweise XOR berechnet werden soll.
- `value`
  - : Die Zahl, mit der das bitweise XOR berechnet werden soll.

### Rückgabewert

Der alte Wert an der angegebenen Position (`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn `typedArray` nicht einer der erlaubten Ganzzahltypen ist.
- {{jsxref("RangeError")}}
  - : Wird geworfen, wenn `index` außerhalb der Grenzen im `typedArray` liegt.

## Beschreibung

Die bitweise XOR-Operation ergibt 1, wenn `a` und `b` unterschiedlich sind.
Die Wahrheitstabelle für die XOR-Operation ist:

| `a` | `b` | `a ^ b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

Beispielsweise ergibt ein bitweises XOR von `5 ^ 1` `0100`, was im Dezimalsystem 4 ist.

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
