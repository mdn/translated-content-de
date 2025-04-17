---
title: "Crypto: getRandomValues() Methode"
short-title: getRandomValues()
slug: Web/API/Crypto/getRandomValues
l10n:
  sourceCommit: 4d452724113b3cbe0e5f2e23851bb1f11f2116e6
---

{{APIRef("Web Crypto API")}}{{AvailableInWorkers}}

Die **`Crypto.getRandomValues()`** Methode ermöglicht es Ihnen, kryptographisch starke Zufallswerte zu erhalten. Das als Parameter übergebene Array wird mit Zufallszahlen im kryptographischen Sinn gefüllt.

Um eine ausreichende Leistung sicherzustellen, verwenden Implementierungen keinen echten Zufallszahlengenerator, sondern einen Pseudo-Zufallszahlengenerator, der mit einem Wert mit ausreichend Entropie _initialisiert_ wird. Der Algorithmus für den Pseudo-Zufallszahlengenerator (PRNG) kann bei verschiedenen {{Glossary("user_agent", "User Agents")}} variieren, ist aber für kryptographische Zwecke geeignet.

`getRandomValues()` ist das einzige Mitglied des `Crypto` Interface, das aus einem unsicheren Kontext verwendet werden kann.

## Syntax

```js-nolint
getRandomValues(typedArray)
```

### Parameter

- `typedArray`
  - : Ein integer-basiertes {{jsxref("TypedArray")}}, das eines der folgenden ist: {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Uint8ClampedArray")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}},
    {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}},
    {{jsxref("BigUint64Array")}} (aber **nicht** `Float16Array`, `Float32Array` noch `Float64Array`).
    Alle Elemente im Array werden mit Zufallszahlen überschrieben.

### Rückgabewert

Das gleiche übergebene Array als `typedArray`, jedoch mit seinem Inhalt, der durch die neu generierten Zufallszahlen ersetzt wurde. Beachten Sie, dass `typedArray` direkt verändert wird und keine Kopie erstellt wird.

### Ausnahmen

- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die {{jsxref("TypedArray.byteLength", "byteLength")}} von `typedArray` 65.536 überschreitet.

## Hinweise zur Verwendung

Für die Schlüsselgenerierung bevorzugen Sie die Methode [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), die garantiert in einem sicheren Kontext ausgeführt wird.

Es gibt keinen durch die Web-Kryptographie-Spezifikation vorgeschriebenen Mindestgrad an Entropie. User Agents werden jedoch dazu angehalten, die bestmögliche Entropie beim Generieren von Zufallszahlen bereitzustellen, indem sie einen gut definierten, effizienten Pseudo-Zufallszahlengenerator verwenden, der in den User Agent selbst integriert ist und mit Werten initialisiert wird, die aus einer externen Quelle von Pseudozufallszahlen stammen, wie beispielsweise eine plattformspezifische Zufallszahlenfunktion, das Unix `/dev/urandom` Gerät oder eine andere Quelle von zufälligen oder pseudozufälligen Daten.

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
- {{jsxref("Math.random")}}, eine nicht-kryptographische Quelle für Zufallszahlen.
