---
title: Atomics.add()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/add
l10n:
  sourceCommit: a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{JSRef}}

Die statische Methode **`Atomics.add()`** addiert einen gegebenen Wert an einer gegebenen Position im Array und gibt den alten Wert an dieser Position zurück. Diese atomare Operation garantiert, dass kein anderer Schreibvorgang erfolgt, bis der modifizierte Wert zurückgeschrieben wird.

{{EmbedInteractiveExample("pages/js/atomics-add.html")}}

## Syntax

```js-nolint
Atomics.add(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein Integer-getyptes Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, zu dem ein `value` hinzugefügt wird.
- `value`
  - : Die Zahl, die addiert werden soll.

### Rückgabewert

Der alte Wert an der gegebenen Position (`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Integer-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen im `typedArray` liegt.

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
