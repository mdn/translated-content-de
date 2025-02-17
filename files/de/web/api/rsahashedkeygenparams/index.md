---
title: RsaHashedKeyGenParams
slug: Web/API/RsaHashedKeyGenParams
l10n:
  sourceCommit: 8e49db2182a5ad4ddfcaecdefd3d2d67db20f213
---

{{ APIRef("Web Crypto API") }}

Das **`RsaHashedKeyGenParams`**-Dictionary der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden sollte, wenn ein beliebiges RSA-basiertes Schlüsselpaar generiert wird: Das heißt, wenn der Algorithmus als einer der folgenden identifiziert wird: [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep).

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `RSASSA-PKCS1-v1_5`, `RSA-PSS` oder `RSA-OAEP` gesetzt werden, abhängig von dem Algorithmus, den Sie verwenden möchten.
- `modulusLength`
  - : Eine `Number`. Die Länge in Bits des RSA-Modulus. Dies sollte mindestens 2048 betragen: siehe beispielsweise [SP 800-131A Rev. 2](https://csrc.nist.gov/pubs/sp/800/131/a/r2/final). Einige Organisationen empfehlen inzwischen eine Länge von 4096.
- `publicExponent`
  - : Ein {{jsxref("Uint8Array")}}. Der öffentliche Exponent. Es sei denn, Sie haben einen guten Grund, etwas anderes zu verwenden, geben Sie hier 65537 an (`[0x01, 0x00, 0x01]`).
- `hash`

  - : Ein String oder ein Objekt, das eine einzelne Eigenschaft namens `name` mit einem Stringwert enthält. Dies ist ein Bezeichner für den [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest), der verwendet werden soll. Dies sollte einer der folgenden sein:

    - `SHA-256`: wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-384`: wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-512`: wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.

    > [!WARNING] `SHA-1` wird hier ebenfalls unterstützt, aber der [SHA-1](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus gilt als anfällig und sollte nicht mehr verwendet werden.

## Beispiele

Sehen Sie sich die Beispiele für [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die irgendeinen RSA-basierten Algorithmus für die Methode [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).
