---
title: RsaHashedKeyGenParams
slug: Web/API/RsaHashedKeyGenParams
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("Web Crypto API") }}

Das **`RsaHashedKeyGenParams`** Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter an [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden sollte, wenn ein RSA-basiertes Schlüsselpaar generiert wird: also wenn der Algorithmus als einer von [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) identifiziert wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `RSASSA-PKCS1-v1_5`, `RSA-PSS` oder `RSA-OAEP` gesetzt werden, je nach dem Algorithmus, den Sie verwenden möchten.
- `modulusLength`
  - : Eine `Number`. Die Länge des RSA-Modulus in Bits. Dies sollte mindestens 2048 betragen: siehe zum Beispiel [SP 800-131A Rev. 2](https://csrc.nist.gov/pubs/sp/800/131/a/r2/final). Einige Organisationen empfehlen jetzt, dass es 4096 sein sollte.
- `publicExponent`
  - : Ein {{jsxref("Uint8Array")}}. Der öffentliche Exponent. Es sei denn, Sie haben einen guten Grund, etwas anderes zu verwenden, sollten Sie hier 65537 angeben (`[0x01, 0x00, 0x01]`).
- `hash`

  - : Ein String, der den Namen der zu verwendenden [Digest-Funktion](/de/docs/Web/API/SubtleCrypto/digest) darstellt. Sie können hier einen der folgenden Werte übergeben: `SHA-256`, `SHA-384` oder `SHA-512`.

    > [!WARNING]
    > Obwohl Sie technisch gesehen `SHA-1` hier als Wert übergeben können, wird dies dringend abgeraten, da SHA-1 als anfällig gilt.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die einen RSA-basierten Algorithmus für die Methode [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).
