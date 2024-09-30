---
title: RsaHashedKeyGenParams
slug: Web/API/RsaHashedKeyGenParams
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("Web Crypto API") }}

Das **`RsaHashedKeyGenParams`** Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden sollte, wenn ein RSA-basiertes Schlüsselpaar generiert wird: das heißt, wenn der Algorithmus als einer der [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) identifiziert wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `RSASSA-PKCS1-v1_5`, `RSA-PSS` oder `RSA-OAEP` gesetzt werden, abhängig von dem Algorithmus, den Sie verwenden möchten.
- `modulusLength`
  - : Eine `Number`. Die Länge des RSA-Moduls in Bits. Dies sollte mindestens 2048 sein: siehe beispielsweise [SP 800-131A Rev. 2](https://csrc.nist.gov/pubs/sp/800/131/a/r2/final). Einige Organisationen empfehlen jetzt 4096.
- `publicExponent`
  - : Eine {{jsxref("Uint8Array")}}. Der öffentliche Exponent. Sofern Sie keinen triftigen Grund haben, etwas anderes zu verwenden, geben Sie hier 65537 an (`[0x01, 0x00, 0x01]`).
- `hash`

  - : Ein String, der den Namen der zu verwendenden [digest function](/de/docs/Web/API/SubtleCrypto/digest) darstellt. Sie können hier `SHA-256`, `SHA-384` oder `SHA-512` angeben.

    > [!WARNING]
    > Obwohl Sie hier technisch gesehen `SHA-1` als Wert angeben können, wird dies dringend abgeraten, da SHA-1 als anfällig gilt.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die jeden RSA-basierten Algorithmus für die [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey)-Methode unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).
