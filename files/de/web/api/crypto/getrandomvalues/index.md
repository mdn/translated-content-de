---
title: "Crypto: getRandomValues() Methode"
short-title: getRandomValues()
slug: Web/API/Crypto/getRandomValues
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{AvailableInWorkers}}

Die **`Crypto.getRandomValues()`**-Methode ermöglicht es Ihnen, kryptografisch starke Zufallswerte zu erhalten. Das als Parameter angegebene Array wird mit Zufallszahlen gefüllt (im kryptografischen Sinne zufällig).

Um eine ausreichende Leistung zu gewährleisten, verwenden Implementierungen keinen echten Zufallszahlengenerator, sondern einen pseudozufälligen Zahlengenerator, der mit einem ausreichend entropiereichen Wert _initialisiert_ wird. Der Algorithmus des Pseudozufallszahlengenerators (PRNG) kann zwischen [User Agents](/de/docs/Glossary/user_agent) variieren, ist jedoch für kryptografische Zwecke geeignet.

`getRandomValues()` ist das einzige Mitglied der `Crypto`-Schnittstelle, das in einem unsicheren Kontext verwendet werden kann.

## Syntax

```js-nolint
getRandomValues(typedArray)
```

### Parameter

- `typedArray`
  - : Ein integerbasiertes {{jsxref("TypedArray")}}, das eines der folgenden ist: {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Uint8ClampedArray")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}},
    {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}},
    {{jsxref("BigUint64Array")}} (aber **nicht** `Float32Array` noch `Float64Array`).
    Alle Elemente im Array werden mit Zufallszahlen überschrieben.

### Rückgabewert

Dasselbe Array, das als `typedArray` übergeben wurde, jedoch mit den neu generierten Zufallszahlen gefüllt. Beachten Sie, dass `typedArray` direkt verändert wird und keine Kopie erstellt wird.

### Ausnahmen

- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die {{jsxref("TypedArray.byteLength", "byteLength")}} von `typedArray` 65.536 überschreitet.

## Hinweise zur Verwendung

Bevorzugen Sie die Methode [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) zur Schlüsselerzeugung, die sicher in einem geschützten Kontext läuft.

Es gibt keinen Mindestgrad an Entropie, der durch die Spezifikation der Web-Kryptografie vorgeschrieben ist. Stattdessen werden die User Agents aufgefordert, die bestmögliche Entropie bereitzustellen, die sie beim Generieren von Zufallszahlen können, und zwar mit einem klar definierten, effizienten Pseudozufallszahlengenerator, der im User Agent selbst eingebaut ist, aber mit Werten initialisiert wird, die aus einer externen Quelle für Pseudozufallszahlen stammen, wie z.B. einer plattformspezifischen Zufallszahlfunktion, dem Unix- `/dev/urandom`-Gerät oder einer anderen Quelle für Zufalls- oder Pseudozufallsdaten.

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
- {{jsxref("Math.random")}}, eine nicht-kryptografische Quelle für Zufallszahlen.
