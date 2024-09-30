---
title: Atomics.compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
l10n:
  sourceCommit: cc91ba6c94aaad4f29133b5446805383a13f6880
---

{{JSRef}}

Die statische Methode **`Atomics.compareExchange()`** tauscht einen gegebenen Ersatzwert an einer bestimmten Position im Array aus, wenn ein gegebener erwarteter Wert dem alten Wert entspricht. Sie gibt den alten Wert an dieser Position zurück, unabhängig davon, ob er dem erwarteten Wert entsprach oder nicht. Diese atomare Operation garantiert, dass keine andere Schreiboperation erfolgt, bis der geänderte Wert zurückgeschrieben wurde.

{{EmbedInteractiveExample("pages/js/atomics-compareexchange.html")}}

## Syntax

```js-nolint
Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)
```

### Parameter

- `typedArray`
  - : Ein ganzzahliges Typ-Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, oder {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der ein `replacementValue` ausgetauscht werden soll.
- `expectedValue`
  - : Der Wert, um auf Gleichheit zu prüfen.
- `replacementValue`
  - : Die Zahl, die ausgetauscht werden soll.

### Rückgabewert

Der alte Wert an der angegebenen Position (`typedArray[index]`). Wenn der Rückgabewert dem `expectedValue` entspricht, war der Austausch erfolgreich; andernfalls ist der Austausch fehlgeschlagen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Ganzzahltypen ist.
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

### Überprüfen des Rückgabewerts

Das [Compare-and-swap](https://en.wikipedia.org/wiki/Compare-and-swap) garantiert, dass der neue Wert auf Basis aktueller Informationen berechnet wird; wenn der Wert in der Zwischenzeit von einem anderen Thread aktualisiert wurde, würde das Schreiben scheitern. Daher sollten Sie den Rückgabewert von `compareExchange()` überprüfen, um festzustellen, ob es fehlgeschlagen ist, und bei Bedarf erneut versuchen.

Hier ist ein Beispiel eines atomaren Addierers (gleiche Funktionalität wie {{jsxref("Atomics.add()")}}), adaptiert aus dem verlinkten Wikipedia-Artikel:

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

Es liest zunächst den Wert an dem angegebenen Index und versucht dann, ihn mit dem neuen Wert zu aktualisieren. Es versucht es immer wieder, bis es erfolgreich den Wert aktualisiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}
