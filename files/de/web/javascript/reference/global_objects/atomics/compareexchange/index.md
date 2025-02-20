---
title: Atomics.compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Atomics.compareExchange()`** statische Methode tauscht einen gegebenen Ersatzwert an einer angegebenen Position im Array aus, wenn ein gegebener Erwartungswert mit dem alten Wert übereinstimmt. Sie gibt den alten Wert an dieser Position zurück, unabhängig davon, ob er dem Erwartungswert entsprach oder nicht. Diese atomare Operation garantiert, dass keine anderen Schreibvorgänge stattfinden, bis der modifizierte Wert zurückgeschrieben wurde.

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
  - : Ein Integer-Typ-Array. Einer von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, bei der ein `replacementValue` ausgetauscht wird.
- `expectedValue`
  - : Der Wert, der auf Gleichheit überprüft wird.
- `replacementValue`
  - : Die Zahl, die ausgetauscht wird.

### Rückgabewert

Der alte Wert an der angegebenen Position (`typedArray[index]`). Wenn der Rückgabewert dem `expectedValue` entspricht, war der Austausch erfolgreich; andernfalls ist der Austausch fehlgeschlagen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Integer-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beispiele

### Verwendung von compareExchange()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // returns 7, the old value
Atomics.load(ta, 0); // 12
```

### Überprüfung des Rückgabewerts

[Compare-and-swap](https://en.wikipedia.org/wiki/Compare-and-swap) garantiert, dass der neue Wert basierend auf aktuellen Informationen berechnet wird; wenn der Wert inzwischen von einem anderen Thread aktualisiert wurde, würde das Schreiben fehlschlagen. Daher sollten Sie den Rückgabewert von `compareExchange()` überprüfen, um festzustellen, ob es fehlgeschlagen ist, und gegebenenfalls erneut versuchen.

Hier ist ein Beispiel für einen atomaren Addierer (gleiche Funktionalität wie {{jsxref("Atomics.add()")}}), angepasst aus dem verlinkten Wikipedia-Artikel:

```js
function add(mem, index, value) {
  let done = false;
  while (!done) {
    const value = Atomics.load(mem, index);
    done = Atomics.compareExchange(p, value, value + a) === value;
  }
  return value + a;
}
```

Zuerst wird der Wert an dem angegebenen Index gelesen, dann wird versucht, ihn mit dem neuen Wert zu aktualisieren. Es wird so lange versucht, bis der Wert erfolgreich aktualisiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}
