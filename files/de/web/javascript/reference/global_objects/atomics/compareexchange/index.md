---
title: Atomics.compareExchange()
short-title: compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Atomics.compareExchange()`** tauscht einen gegebenen Ersatzwert an einer angegebenen Position im Array aus, wenn ein gegebener erwarteter Wert dem alten Wert entspricht. Sie gibt den alten Wert an dieser Position zurück, unabhängig davon, ob er dem erwarteten Wert entsprach oder nicht. Diese atomare Operation garantiert, dass kein anderer Schreibvorgang stattfindet, bis der geänderte Wert zurückgeschrieben wird.

{{InteractiveExample("JavaScript Demo: Atomics.compareExchange()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

Atomics.compareExchange(uint8, 0, 5, 2); // Returns 5
console.log(Atomics.load(uint8, 0));
// Expected output: 2

Atomics.compareExchange(uint8, 0, 5, 4); // Returns 2
console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## Syntax

```js-nolint
Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)
```

### Parameter

- `typedArray`
  - : Ein Integer-basiertes typisiertes Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der ein `replacementValue` ausgetauscht werden soll.
- `expectedValue`
  - : Der Wert, der auf Gleichheit überprüft werden soll.
- `replacementValue`
  - : Die Zahl, die ausgetauscht werden soll.

### Rückgabewert

Der alte Wert an der angegebenen Position (`typedArray[index]`). Wenn der Rückgabewert dem `expectedValue` entspricht, war der Austausch erfolgreich; andernfalls ist der Austausch fehlgeschlagen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Integer-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen im `typedArray` liegt.

## Beispiele

### Verwendung von compareExchange()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // returns 7, the old value
Atomics.load(ta, 0); // 12
```

### Überprüfen des Rückgabewertes

[Compare-and-swap](https://en.wikipedia.org/wiki/Compare-and-swap) garantiert, dass der neue Wert auf Grundlage von aktuellen Informationen berechnet wird; wenn der Wert zwischenzeitlich von einem anderen Thread aktualisiert wurde, würde der Schreibvorgang fehlschlagen. Daher sollten Sie den Rückgabewert von `compareExchange()` überprüfen, um festzustellen, ob er fehlgeschlagen ist, und bei Bedarf erneut versuchen.

Hier ist ein Beispiel für einen atomaren Addierer (gleiche Funktionalität wie {{jsxref("Atomics.add()")}}), angepasst aus dem verlinkten Wikipedia-Artikel:

```js
function add(mem, index, a) {
  let done = false;
  while (!done) {
    const value = Atomics.load(mem, index);
    done = Atomics.compareExchange(mem, index, value, value + a) === value;
  }
  return value + a;
}
```

Es liest zunächst den Wert an dem angegebenen Index aus und versucht dann, ihn mit dem neuen Wert zu aktualisieren. Es versucht es immer wieder, bis es den Wert erfolgreich aktualisiert hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}
