---
title: "Crypto: Methode getRandomValues()"
short-title: getRandomValues()
slug: Web/API/Crypto/getRandomValues
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{AvailableInWorkers}}

Die **`Crypto.getRandomValues()`**-Methode ermöglicht es Ihnen, kryptographisch starke Zufallswerte zu erhalten.
Das als Parameter übergebene Array wird mit Zufallszahlen (im kryptographischen Sinne zufällig) gefüllt.

Um ausreichende Leistung zu gewährleisten, verwenden Implementierungen keinen echten Zufallszahlengenerator, sondern einen Pseudozufallszahlengenerator, der mit einem ausreichend entropiereichen Wert _gesät_ wird. Der Algorithmus des Pseudozufallszahlengenerators (PRNG) kann zwischen verschiedenen {{Glossary("user_agent", "User Agents")}} variieren, ist jedoch für kryptographische Zwecke geeignet.

`getRandomValues()` ist das einzige Element des `Crypto`-Interfaces, das in einem unsicheren Kontext verwendet werden kann.

## Syntax

```js-nolint
getRandomValues(typedArray)
```

### Parameter

- `typedArray`
  - : Ein ganzzahlig basiertes {{jsxref("TypedArray")}}, das eines der folgenden sein kann: {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Uint8ClampedArray")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}},
    {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}},
    {{jsxref("BigUint64Array")}} (aber **nicht** `Float32Array` noch `Float64Array`).
    Alle Elemente im Array werden mit Zufallszahlen überschrieben.

### Rückgabewert

Das gleiche Array, das als `typedArray` übergeben wurde, aber mit neu generierten Zufallszahlen ersetzt.
Beachten Sie, dass `typedArray` an Ort und Stelle modifiziert wird und keine Kopie erstellt wird.

### Ausnahmen

- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die {{jsxref("TypedArray.byteLength", "byteLength")}} von `typedArray` 65.536 überschreitet.

## Nutzungshinweise

Bevorzugen Sie die Methode [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) zur Schlüsselerzeugung, die garantiert in einem sicheren Kontext ausgeführt wird.

Es gibt keinen minimalen Grad an Entropie, der durch die Web Cryptography-Spezifikation vorgeschrieben wird.
Stattdessen werden User Agents gedrängt, die bestmögliche Entropie zu bieten, die sie können, wenn sie Zufallszahlen generieren,
unter Verwendung eines gut definierten, effizienten Pseudorandom-Zahlengenerators, der in den User Agent selbst eingebaut ist,
jedoch gesät mit Werten, die von einer externen Quelle für Pseudorandom-Zahlen stammen, wie z. B. eine plattformspezifische Zufallszahlen-Funktion,
das Unix-`/dev/urandom`-Gerät oder andere Quellen von zufälligen oder pseudorandom Daten.

## Beispiele

```js
const array = new Uint32Array(10);
self.crypto.getRandomValues(array);

console.log("Your lucky numbers:");
for (const num of array) {
  console.log(num);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- {{jsxref("Math.random")}}, eine nicht-kryptographische Quelle von Zufallszahlen.
