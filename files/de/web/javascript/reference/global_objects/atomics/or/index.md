---
title: Atomics.or()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/or
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

Die statische Methode **`Atomics.or()`** berechnet ein bitweises OR mit einem gegebenen Wert an einer bestimmten Position im Array und gibt den alten Wert an dieser Position zurück. Diese atomare Operation garantiert, dass kein anderer Schreibvorgang stattfindet, bis der modifizierte Wert zurückgeschrieben wird.

{{EmbedInteractiveExample("pages/js/atomics-or.html")}}

## Syntax

```js-nolint
Atomics.or(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein Ganzzahl-`typedArray`. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder
    {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der das bitweise OR berechnet wird.
- `value`
  - : Die Zahl, mit der das bitweise OR berechnet wird.

### Rückgabewert

Der alte Wert an der angegebenen Position (`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der zulässigen Ganzzahltypen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beschreibung

Die bitweise OR-Operation ergibt 1, wenn entweder `a` oder `b` gleich 1 sind. Die Wahrheitstabelle für die OR-Operation lautet:

| `a` | `b` | `a \| b` |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

Zum Beispiel ergibt ein bitweises OR von `5 | 1` in binärer Form `0101`, was als Dezimalzahl 5 ist.

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
