---
title: Atomics.and()
short-title: and()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/and
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

Die **`Atomics.and()`** statische Methode berechnet ein bitweises UND mit einem gegebenen Wert an einer gegebenen Position im Array und gibt den alten Wert an dieser Position zurück. Diese atomare Operation garantiert, dass kein anderer Schreibvorgang erfolgt, bis der modifizierte Wert zurückgeschrieben wird.

## Syntax

```js-nolint
Atomics.and(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein Integer-Typ-Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der das bitweise UND berechnet werden soll.
- `value`
  - : Die Zahl, mit der das bitweise UND berechnet wird.

### Rückgabewert

Der alte Wert an der gegebenen Position (`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Integer-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb des gültigen Bereichs im `typedArray` liegt.

## Beschreibung

Die bitweise UND-Operation ergibt nur dann eine 1, wenn sowohl `a` als auch `b` gleich 1 sind. Die Wahrheitstabelle für die UND-Operation ist:

| `a` | `b` | `a & b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

Beispielsweise ergibt ein bitweises UND von `5 & 1` `0001`, was dezimal 1 ist.

```plain
5  0101
1  0001
   ----
1  0001
```

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt aus der Konsole oder einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, seine [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

### Verwendung von Atomics.and()

```js
// Create a SharedArrayBuffer with a size in bytes
const sab = new SharedArrayBuffer(1024);
// Create a view and set the value of the 0 index
const ta = new Uint8Array(sab);
ta[0] = 7;

// 7 (0111) AND 10 (1010) = 2 (0010)
console.log(Atomics.and(ta, 0, 10)); // 7, the old value
console.log(Atomics.load(ta, 0)); // 2, the new/current value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.or()")}}
- {{jsxref("Atomics.xor()")}}
