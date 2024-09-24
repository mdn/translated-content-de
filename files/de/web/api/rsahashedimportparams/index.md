---
title: RsaHashedImportParams
slug: Web/API/RsaHashedImportParams
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{ APIRef("Web Crypto API") }}

Das **`RsaHashedImportParams`** Dictionary des [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm` Parameter in {{domxref("SubtleCrypto.importKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} übergeben werden soll, wenn ein RSA-basiertes Schlüsselpaar importiert wird: Das heißt, wenn der Algorithmus als einer von [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) identifiziert wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `RSASSA-PKCS1-v1_5`, `RSA-PSS` oder `RSA-OAEP` gesetzt werden, je nachdem, welchen Algorithmus Sie verwenden möchten.
- `hash`

  - : Ein String, der den Namen der zu verwendenden [Digest-Funktion](/de/docs/Web/API/SubtleCrypto#supported_algorithms) darstellt. Dies kann eine der folgenden sein: `SHA-256`, `SHA-384` oder `SHA-512`.

    > [!WARNING]
    > Obwohl Sie hier technisch `SHA-1` übergeben können, wird dies stark abgeraten, da es als anfällig gilt.

## Beispiele

Siehe die Beispiele für {{domxref("SubtleCrypto.importKey()")}}.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

Browser, die einen auf RSA basierenden Algorithmus für die Methoden {{domxref("SubtleCrypto.importKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- {{domxref("SubtleCrypto.importKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
