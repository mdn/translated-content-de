---
title: Atomics.and()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/and
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

Die statische Methode **`Atomics.and()`** berechnet ein bitweises UND mit einem gegebenen Wert an einer bestimmten Position im Array und gibt den alten Wert an dieser Position zurück. Diese atomare Operation garantiert, dass kein anderer Schreibvorgang erfolgt, bis der modifizierte Wert zurückgeschrieben wird.

{{EmbedInteractiveExample("pages/js/atomics-and.html")}}

## Syntax

```js-nolint
Atomics.and(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein Integer-Typ-Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, oder
    {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der das bitweise UND berechnet werden soll.
- `value`
  - : Die Zahl, mit der das bitweise UND berechnet werden soll.

### Rückgabewert

Der alte Wert an der angegebenen Position
(`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht eine der erlaubten Integer-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beschreibung

Die bitweise UND-Operation ergibt nur dann 1, wenn sowohl `a` als auch `b`
1 sind. Die Wahrheitstabelle für die UND-Operation lautet:

| `a` | `b` | `a & b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

Zum Beispiel führt ein bitweises UND von `5 & 1` zu `0001`, was
im Dezimalsystem 1 ist.

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
