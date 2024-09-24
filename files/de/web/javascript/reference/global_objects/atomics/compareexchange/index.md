---
title: Atomics.compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
l10n:
  sourceCommit: cc91ba6c94aaad4f29133b5446805383a13f6880
---

{{JSRef}}

Die statische Methode **`Atomics.compareExchange()`** tauscht einen angegebenen Ersatzwert an einer gegebenen Position im Array aus, wenn ein gegebener erwarteter Wert dem alten Wert entspricht. Sie gibt den alten Wert an dieser Position zurück, unabhängig davon, ob er gleich dem erwarteten Wert war oder nicht. Diese atomare Operation garantiert, dass kein anderer Schreibvorgang erfolgt, bis der modifizierte Wert zurückgeschrieben wird.

{{EmbedInteractiveExample("pages/js/atomics-compareexchange.html")}}

## Syntax

```js-nolint
Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)
```

### Parameter

- `typedArray`
  - : Ein ganzzahliges typisiertes Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der ein `replacementValue` ausgetauscht werden soll.
- `expectedValue`
  - : Der Wert, der auf Gleichheit überprüft wird.
- `replacementValue`
  - : Die Zahl, die ausgetauscht werden soll.

### Rückgabewert

Der alte Wert an der angegebenen Position (`typedArray[index]`). Wenn der Rückgabewert gleich `expectedValue` ist, war der Austausch erfolgreich; andernfalls ist der Austausch fehlgeschlagen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten ganzzahligen Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb des Bereichs im `typedArray` liegt.

## Beispiele

### Verwendung von compareExchange()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // gibt 7 zurück, den alten Wert
Atomics.load(ta, 0); // 12
```

### Überprüfen des Rückgabewertes

[Compare-and-swap](https://en.wikipedia.org/wiki/Compare-and-swap) garantiert, dass der neue Wert basierend auf aktuellen Informationen berechnet wird; wenn der Wert inzwischen von einem anderen Thread aktualisiert wurde, würde der Schreibvorgang fehlschlagen. Daher sollten Sie den Rückgabewert von `compareExchange()` überprüfen, um zu sehen, ob er fehlgeschlagen ist, und bei Bedarf erneut versuchen.

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

Es liest zuerst den Wert an der angegebenen Position und versucht dann, ihn mit dem neuen Wert zu aktualisieren. Es versucht es so lange, bis der Wert erfolgreich aktualisiert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}
