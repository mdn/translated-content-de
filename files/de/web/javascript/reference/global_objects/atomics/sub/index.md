---
title: Atomics.sub()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/sub
l10n:
  sourceCommit: a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{JSRef}}

Die statische Methode **`Atomics.sub()`** zieht einen gegebenen Wert an einer bestimmten Position im Array ab und gibt den alten Wert an dieser Position zurück. Diese atomare Operation garantiert, dass keine anderen Schreibvorgänge erfolgen, bis der modifizierte Wert zurückgeschrieben ist.

{{EmbedInteractiveExample("pages/js/atomics-sub.html")}}

## Syntax

```js-nolint
Atomics.sub(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein ganzzahliges typisiertes Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, oder
    {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, von der ein
    `value` abgezogen wird.
- `value`
  - : Die Zahl, die subtrahiert werden soll.

### Rückgabewert

Der alte Wert an der angegebenen Position
(`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten ganzzahligen Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beispiele

### Verwendung von sub

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 48;

Atomics.sub(ta, 0, 12); // gibt 48 zurück, den alten Wert
Atomics.load(ta, 0); // 36
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.add()")}}
