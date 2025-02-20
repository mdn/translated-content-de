---
title: RsaHashedImportParams
slug: Web/API/RsaHashedImportParams
l10n:
  sourceCommit: 8e49db2182a5ad4ddfcaecdefd3d2d67db20f213
---

{{ APIRef("Web Crypto API") }}

Das **`RsaHashedImportParams`**-Dictionary der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden soll, wenn ein RSA-basiertes Schlüsselpaar importiert wird, also wenn der Algorithmus als einer der folgenden identifiziert wird: [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep).

## Eigenschaften der Instanz

- `name`
  - : Ein String. Dieser sollte auf `RSASSA-PKCS1-v1_5`, `RSA-PSS` oder `RSA-OAEP` gesetzt werden, abhängig von dem Algorithmus, den Sie verwenden möchten.
- `hash`

  - : Ein String oder ein Objekt, das eine einzelne Eigenschaft mit dem Namen `name` enthält und dessen Wert ein String ist. Es handelt sich dabei um einen Bezeichner für den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest). Dieser sollte einer der folgenden sein:

    - `SHA-256`: Wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-384`: Wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-512`: Wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.

    > **Warning:** `SHA-1` wird hier ebenfalls unterstützt, jedoch wird der [SHA-1](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus als unsicher angesehen und sollte nicht mehr verwendet werden.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die einen RSA-basierten Algorithmus für die Methoden [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey).
