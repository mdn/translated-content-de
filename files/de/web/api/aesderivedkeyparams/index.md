---
title: AesDerivedKeyParams
slug: Web/API/AesDerivedKeyParams
l10n:
  sourceCommit: 63774786a6abccda8e70ad62429aa39571aba878
---

{{ APIRef("Web Crypto API") }}

Das **`AesDerivedKeyParams`**-Wörterbuch des [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `derivedKeyType`-Parameter in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden sollte, wenn ein AES-Schlüssel abgeleitet wird: das heißt, wenn der Algorithmus als einer der folgenden identifiziert wird: [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) oder [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw).

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `AES-CBC`, `AES-CTR`, `AES-GCM` oder `AES-KW` gesetzt werden, abhängig von dem Algorithmus, den Sie verwenden möchten.
- `length`
  - : Eine `Nummer` — die Länge des zu generierenden Schlüssels in Bits. Dies muss eine der folgenden sein: 128, 192 oder 256.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die einen der auf AES basierten Algorithmen für die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).
