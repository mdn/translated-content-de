---
title: RsaHashedKeyGenParams
slug: Web/API/RsaHashedKeyGenParams
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("Web Crypto API") }}

Das **`RsaHashedKeyGenParams`** Dictionary der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.generateKey()")}} übergeben werden sollte, wenn ein auf RSA basierendes Schlüsselpaar generiert wird: das heißt, wenn der Algorithmus als einer von [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) identifiziert wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `RSASSA-PKCS1-v1_5`, `RSA-PSS` oder `RSA-OAEP` gesetzt werden, abhängig von dem Algorithmus, den Sie verwenden möchten.
- `modulusLength`
  - : Eine `Nummer`. Die Länge in Bits des RSA-Modulus. Diese sollte mindestens 2048 sein: siehe zum Beispiel [SP 800-131A Rev. 2](https://csrc.nist.gov/pubs/sp/800/131/a/r2/final). Einige Organisationen empfehlen jetzt, dass sie 4096 sein sollte.
- `publicExponent`
  - : Eine {{jsxref("Uint8Array")}}. Der öffentliche Exponent. Es sei denn, Sie haben einen guten Grund, etwas anderes zu verwenden, geben Sie hier 65537 an (`[0x01, 0x00, 0x01]`).
- `hash`

  - : Ein String, der den Namen der zu verwendenden [Digest-Funktion](/de/docs/Web/API/SubtleCrypto/digest) darstellt. Sie können hier jeden von `SHA-256`, `SHA-384` oder `SHA-512` übergeben.

    > [!WARNING]
    > Obwohl Sie technisch `SHA-1` als Wert hier übergeben können, wird dies stark abgeraten, da SHA-1 als unsicher gilt.

## Beispiele

Siehe die Beispiele für {{domxref("SubtleCrypto.generateKey()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die einen auf RSA basierenden Algorithmus für die {{domxref("SubtleCrypto.generateKey()")}} Methode unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- {{domxref("SubtleCrypto.generateKey()")}}.
