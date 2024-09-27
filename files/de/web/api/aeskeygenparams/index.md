---
title: AesKeyGenParams
slug: Web/API/AesKeyGenParams
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{ APIRef("Web Crypto API") }}

Das **`AesKeyGenParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden soll, wenn ein AES-Schlüssel generiert wird: das heißt, wenn der Algorithmus als einer der folgenden identifiziert wird: [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) oder [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw).

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `AES-CBC`, `AES-CTR`, `AES-GCM` oder `AES-KW` gesetzt werden, abhängig von dem Algorithmus, den Sie verwenden möchten.
- `length`
  - : Eine `Number` — die Länge in Bits des zu generierenden Schlüssels. Dies muss eine der folgenden sein: 128, 192 oder 256.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die einen der auf AES basierenden Algorithmen für die [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) Methode unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).
