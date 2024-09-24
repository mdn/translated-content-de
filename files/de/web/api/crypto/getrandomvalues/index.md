---
title: "Crypto: Die Methode getRandomValues()"
short-title: getRandomValues()
slug: Web/API/Crypto/getRandomValues
l10n:
  sourceCommit: e897fbfbefff7a7178af36a57944821dbc49318f
---

{{APIRef("Web Crypto API")}}

Die **`Crypto.getRandomValues()`**-Methode ermöglicht Ihnen den Erhalt kryptografisch starker Zufallswerte. Das Array, das als Parameter übergeben wird, wird mit Zufallszahlen (in ihrem kryptografischen Sinne) gefüllt.

Um ausreichende Leistung zu gewährleisten, verwenden Implementierungen keinen echten Zufallszahlengenerator, sondern einen Pseudozufallszahlengenerator, der mit einem Wert mit genug Entropie _initialisiert_ wird. Der Algorithmus des Pseudozufallszahlengenerators (PRNG) kann zwischen verschiedenen {{Glossary("user agent", "User Agents")}} variieren, ist jedoch für kryptografische Zwecke geeignet.

`getRandomValues()` ist das einzige Mitglied der `Crypto`-Schnittstelle, das in einem unsicheren Kontext verwendet werden kann.

## Syntax

```js-nolint
getRandomValues(typedArray)
```

### Parameter

- `typedArray`
  - : Ein ganzzahliges {{jsxref("TypedArray")}}, das eines der folgenden ist: {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Uint8ClampedArray")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}},
    {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}},
    {{jsxref("BigUint64Array")}} (aber **nicht** `Float32Array` noch `Float64Array`).
    Alle Elemente im Array werden mit Zufallszahlen überschrieben.

### Rückgabewert

Das gleiche Array, das als `typedArray` übergeben wurde, jedoch mit seinen Inhalten, die durch die neu generierten Zufallszahlen ersetzt wurden. Beachten Sie, dass `typedArray` direkt geändert wird und keine Kopie erstellt wird.

### Ausnahmen

- `QuotaExceededError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die {{jsxref("TypedArray.byteLength", "byteLength")}} des `typedArray` 65.536 überschreitet.

## Nutzungshinweise

Bevorzugen Sie die Methode {{domxref("SubtleCrypto.generateKey", "generateKey()")}} zur Schlüsselerzeugung, die garantiert in einem sicheren Kontext ausgeführt wird.

Es gibt keinen minimalen Grad an Entropie, der durch die Web-Kryptographie-Spezifikation vorgeschrieben wird. Stattdessen werden die User Agents aufgefordert, die bestmögliche Entropie bei der Erzeugung von Zufallszahlen bereitzustellen, indem sie einen gut definierten, effizienten Pseudozufallszahlengenerator nutzen, der im User Agent selbst eingebaut ist und mit Werten initialisiert wird, die aus einer externen Quelle für Pseudozufallszahlen stammen, wie z.B. einer plattformspezifischen Zufallszahlfunktion, dem Unix-`/dev/urandom`-Gerät oder einer anderen Quelle für zufällige oder pseudozufällige Daten.

## Beispiele

```js
const array = new Uint32Array(10);
self.crypto.getRandomValues(array);

console.log("Ihre Glückszahlen:");
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
