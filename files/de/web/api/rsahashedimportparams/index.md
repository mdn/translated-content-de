---
title: RsaHashedImportParams
slug: Web/API/RsaHashedImportParams
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{ APIRef("Web Crypto API") }}

Das **`RsaHashedImportParams`** Dictionary der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn ein RSA-basiertes Schlüsselpaar importiert wird: Das heißt, wenn der Algorithmus als einer der folgenden identifiziert wird: [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep).

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `RSASSA-PKCS1-v1_5`, `RSA-PSS` oder `RSA-OAEP` gesetzt werden, abhängig vom gewünschten Algorithmus.
- `hash`

  - : Ein String, der den Namen der zu verwendenden [Digest-Funktion](/de/docs/Web/API/SubtleCrypto#supported_algorithms) darstellt. Dies kann einer der folgenden sein: `SHA-256`, `SHA-384` oder `SHA-512`.

    > [!WARNING]
    > Obwohl Sie hier technisch `SHA-1` übergeben können, wird dies dringend abgeraten, da es als unsicher gilt.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die irgendeinen RSA-basierten Algorithmus für die Methoden [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey).
