---
title: RsaHashedKeyGenParams
slug: Web/API/RsaHashedKeyGenParams
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ APIRef("Web Crypto API") }}

Das **`RsaHashedKeyGenParams`** Dictionary der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter an [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden sollte, wenn ein RSA-basiertes Schlüsselpaar generiert wird: das heißt, wenn der Algorithmus als einer der folgenden identifiziert wird: [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep).

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `RSASSA-PKCS1-v1_5`, `RSA-PSS` oder `RSA-OAEP` gesetzt werden, abhängig vom Algorithmus, den Sie verwenden möchten.
- `modulusLength`
  - : Eine `Zahl`. Die Länge in Bits des RSA-Modulus. Dies sollte mindestens 2048 betragen: siehe beispielsweise [SP 800-131A Rev. 2](https://csrc.nist.gov/pubs/sp/800/131/a/r2/final). Einige Organisationen empfehlen jetzt, dass es 4096 sein sollte.
- `publicExponent`
  - : Ein {{jsxref("Uint8Array")}}. Der öffentliche Exponent. Wenn Sie keinen triftigen Grund haben, etwas anderes zu verwenden, geben Sie hier 65537 an (`[0x01, 0x00, 0x01]`).
- `hash`

  - : Ein String oder ein Objekt, das eine einzelne Eigenschaft namens `name` mit einem String-Wert enthält. Es ist ein Bezeichner für den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest). Dies sollte einer der folgenden sein:

    - `SHA-256`: Wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) Algorithmus aus.
    - `SHA-384`: Wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) Algorithmus aus.
    - `SHA-512`: Wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) Algorithmus aus.

    > [!WARNING] > `SHA-1` wird hier ebenfalls unterstützt, aber der [SHA-1](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) Algorithmus wird als unsicher betrachtet und sollte nicht mehr verwendet werden.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die einen RSA-basierten Algorithmus für die [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) Methode unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).
