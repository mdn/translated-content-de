---
title: Atomics.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/add
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Atomics.add()`** statische Methode fügt an einer gegebenen Position im Array einen Wert hinzu und gibt den alten Wert an dieser Position zurück. Diese atomare Operation stellt sicher, dass kein anderer Schreibvorgang stattfindet, bis der geänderte Wert zurückgeschrieben wird.

{{InteractiveExample("JavaScript Demo: Atomics.add()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 + 2 = 9
console.log(Atomics.add(uint8, 0, 2));
// Expected output: 7

console.log(Atomics.load(uint8, 0));
// Expected output: 9
```

## Syntax

```js-nolint
Atomics.add(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein Integer-Typ-Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder
    {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der ein `value` hinzugefügt wird.
- `value`
  - : Die Zahl, die hinzugefügt werden soll.

### Rückgabewert

Der alte Wert an der angegebenen Position (`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Integer-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb des zulässigen Bereichs im `typedArray` liegt.

## Beispiele

### Verwendung von add()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12); // returns 0, the old value
Atomics.load(ta, 0); // 12
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.sub()")}}
