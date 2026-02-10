---
title: Atomics.compareExchange()
short-title: compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

Die **`Atomics.compareExchange()`** statische Methode tauscht einen gegebenen Ersatzwert an einer bestimmten Position im Array aus, wenn ein erwarteter Wert dem alten Wert entspricht. Sie gibt den alten Wert an dieser Position zurück, unabhängig davon, ob er mit dem erwarteten Wert übereinstimmt oder nicht. Diese atomare Operation garantiert, dass keine anderen Schreibvorgänge stattfinden, bis der modifizierte Wert zurückgeschrieben wird.

## Syntax

```js-nolint
Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)
```

### Parameter

- `typedArray`
  - : Ein Ganzzahl-Typ-Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der ein `replacementValue` ausgetauscht wird.
- `expectedValue`
  - : Der Wert, auf den für Gleichheit überprüft wird.
- `replacementValue`
  - : Die Zahl, die ausgetauscht werden soll.

### Rückgabewert

Der alte Wert an der angegebenen Position (`typedArray[index]`). Wenn der Rückgabewert gleich `expectedValue` ist, war der Austausch erfolgreich; andernfalls ist der Austausch fehlgeschlagen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Ganzzahl-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt aus der Konsole oder einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, seine [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

### Verwendung von Atomics.compareExchange()

```js
// Create a SharedArrayBuffer with a size in bytes
const sab = new SharedArrayBuffer(1024);
// Create a view and set the value of the 0 index
const ta = new Uint8Array(sab);
ta[0] = 7;

console.log(Atomics.compareExchange(ta, 0, 7, 12)); // 7, the old value
console.log(Atomics.load(ta, 0)); // 12, the new/current value
```

### Überprüfung des Rückgabewerts

[Compare-and-swap](https://en.wikipedia.org/wiki/Compare-and-swap) garantiert, dass der neue Wert basierend auf aktuellen Informationen berechnet wird; wenn der Wert in der Zwischenzeit von einem anderen Thread aktualisiert wurde, würde der Schreibvorgang fehlschlagen. Daher sollten Sie den Rückgabewert von `compareExchange()` überprüfen, um festzustellen, ob es fehlgeschlagen ist, und bei Bedarf erneut versuchen.

Hier ist ein Beispiel für einen atomaren Addierer (gleiche Funktionalität wie {{jsxref("Atomics.add()")}}), adaptiert aus dem verlinkten Wikipedia-Artikel:

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

Es liest zuerst den Wert an dem gegebenen Index und versucht dann, ihn mit dem neuen Wert zu aktualisieren. Es versucht es weiterhin, bis es den Wert erfolgreich aktualisiert hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}
