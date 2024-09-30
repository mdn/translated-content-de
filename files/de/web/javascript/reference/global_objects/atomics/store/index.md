---
title: Atomics.store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
l10n:
  sourceCommit: a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{JSRef}}

Die statische Methode **`Atomics.store()`** speichert einen gegebenen Wert an der angegebenen Position im Array und gibt diesen Wert zurück.

{{EmbedInteractiveExample("pages/js/atomics-store.html")}}

## Syntax

```js-nolint
Atomics.store(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein Integer-Typ-Array. Eine der {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, oder
    {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der ein
    `value` gespeichert werden soll.
- `value`
  - : Die Zahl, die gespeichert werden soll.

### Rückgabewert

Der Wert, der gespeichert wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Integer-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen im `typedArray` liegt.

## Beispiele

### Verwendung von store()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.store(ta, 0, 12); // 12
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.load()")}}
