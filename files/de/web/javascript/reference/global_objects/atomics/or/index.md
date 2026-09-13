---
title: Atomics.or()
short-title: or()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/or
l10n:
  sourceCommit: 3fbc8b2ba17c1cf331fb67ce2e6561b15bf4f197
---

Die statische Methode **`Atomics.or()`** berechnet ein bitweises OR mit einem gegebenen Wert an einer bestimmten Position im Array und gibt den alten Wert an dieser Position zurück. Diese atomare Operation garantiert, dass keine anderen Schreibvorgänge stattfinden, bis der modifizierte Wert zurückgeschrieben wird.

## Syntax

```js-nolint
Atomics.or(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein ganzzahliges typisiertes Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der das bitweise OR berechnet wird.
- `value`
  - : Die Zahl, mit der das bitweise OR berechnet wird.

### Rückgabewert

Der alte Wert an der angegebenen Position (`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Ganzzahltypen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb des Bereichs im `typedArray` liegt.

## Beschreibung

Die bitweise OR-Operation ergibt 1, wenn entweder `a` oder `b` 1 ist. Die Wahrheitstabelle für die OR-Operation lautet:

| `a` | `b` | `a \| b` |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

Zum Beispiel ergibt ein bitweises OR von `5 | 1` `0101`, was 5 im Dezimalsystem ist.

```plain
5  0101
1  0001
   ----
5  0101
```

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt von der Konsole oder einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, seine [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

### Verwendung von Atomics.or()

```js
// Create a SharedArrayBuffer with a size in bytes
const sab = new SharedArrayBuffer(1024);
// Create a view and set the value of the 0 index
const ta = new Uint8Array(sab);
ta[0] = 7;

// 7 (0111) OR 10 (1010) = 15 (1111)
console.log(Atomics.or(ta, 0, 10)); // 7, the old value
console.log(Atomics.load(ta, 0)); // 15, the new/current value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.and()")}}
- {{jsxref("Atomics.xor()")}}
