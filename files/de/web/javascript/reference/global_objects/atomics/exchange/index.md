---
title: Atomics.exchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/exchange
l10n:
  sourceCommit: ec9fab3524d17932694856be045c9e50168821fd
---

{{JSRef}}

Die statische Methode **`Atomics.exchange()`** tauscht einen gegebenen Wert an einer bestimmten Position im Array aus und gibt den alten Wert an dieser Position zurück. Diese atomare Operation garantiert, dass zwischen dem Auslesen des alten Wertes und dem Schreiben des neuen Wertes keine anderen Schreibvorgänge stattfinden.

{{EmbedInteractiveExample("pages/js/atomics-exchange.html")}}

## Syntax

```js-nolint
Atomics.exchange(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein Integer-Typed-Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der ein `value` ausgetauscht werden soll.
- `value`
  - : Die Zahl, die ausgetauscht werden soll.

### Rückgabewert

Der alte Wert an der angegebenen Position (`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Integer-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beispiele

### Verwendung von exchange()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.exchange(ta, 0, 12); // returns 0, the old value
Atomics.load(ta, 0); // 12
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.compareExchange()")}}
