---
title: "Crypto: getRandomValues()-Methode"
short-title: getRandomValues()
slug: Web/API/Crypto/getRandomValues
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("Web Crypto API")}}{{AvailableInWorkers}}

Die **`Crypto.getRandomValues()`**-Methode ermöglicht es Ihnen, kryptografisch starke Zufallswerte zu erhalten. Das als Parameter übergebene Array wird mit Zufallszahlen (im kryptografischen Sinne) gefüllt.

Um ausreichende Leistung zu gewährleisten, verwenden Implementierungen keinen wirklich zufälligen Zahlengenerator, sondern einen Pseudo-Zufallszahlengenerator, der mit einem Wert mit ausreichend Entropie _initialisiert_ ist. Der Algorithmus des Pseudo-Zufallszahlengenerators (PRNG) kann je nach {{Glossary("user_agent", "User Agent")}} variieren, ist aber für kryptografische Zwecke geeignet.

`getRandomValues()` ist das einzige Mitglied des `Crypto`-Interfaces, das in einem unsicheren Kontext verwendet werden kann.

## Syntax

```js-nolint
getRandomValues(typedArray)
```

### Parameter

- `typedArray`
  - : Ein integer-basiertes {{jsxref("TypedArray")}}, das eines der folgenden ist: {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Uint8ClampedArray")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, {{jsxref("BigUint64Array")}} (aber **nicht** `Float16Array`, `Float32Array` oder `Float64Array`). Alle Elemente im Array werden mit Zufallszahlen überschrieben.

### Rückgabewert

Dasselbe Array, das als `typedArray` übergeben wurde, jedoch mit seinem Inhalt ersetzt durch die neu generierten Zufallszahlen. Beachten Sie, dass `typedArray` direkt geändert wird und keine Kopie erstellt wird.

### Ausnahmen

- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Wird ausgelöst, wenn die {{jsxref("TypedArray.byteLength", "byteLength")}} von `typedArray` 65.536 überschreitet.

## Hinweise zur Nutzung

Bevorzugen Sie die [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey)-Methode zur Schlüsselerzeugung, da garantiert wird, dass sie in einem sicheren Kontext ausgeführt wird.

Es gibt keinen Mindestgrad an Entropie, der durch die Web-Cryptography-Spezifikation vorgeschrieben wird. Stattdessen werden User Agents aufgefordert, bei der Generierung von Zufallszahlen die bestmögliche Entropie zu liefern, wobei ein gut definierter, effizienter Pseudo-Zufallszahlengenerator verwendet wird, der im User Agent selbst integriert ist, jedoch mit Werten initialisiert wird, die aus einer externen Quelle von Pseudo-Zufallszahlen stammen, wie einer plattformspezifischen Zufallszahlfunktion, dem Unix-`/dev/urandom`-Gerät oder einer anderen Quelle von Zufalls- oder Pseudo-Zufallsdaten.

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
- {{jsxref("Math.random")}}, eine nicht-kryptografische Quelle von Zufallszahlen.
