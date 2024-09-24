---
title: RsaOaepParams
slug: Web/API/RsaOaepParams
l10n:
  sourceCommit: 2937558d5ed1e03d7f60b2de71dd9c17f490166e
---

{{ APIRef("Web Crypto API") }}

Das **`RsaOaepParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter an {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} übergeben werden sollte, wenn der [RSA_OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep)-Algorithmus verwendet wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `RSA-OAEP` gesetzt werden.
- `label` {{optional_inline}}

  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}} — ein Array von Bytes, das nicht selbst verschlüsselt werden muss, aber an den Chiffretext gebunden werden sollte. Ein Digest des Labels ist Teil der Eingabe für die Verschlüsselungsoperation.

    Sofern Ihre Anwendung kein Label erfordert, können Sie dieses Argument einfach weglassen, und es wird die Sicherheit der Verschlüsselungsoperation nicht beeinträchtigen.

## Beispiele

Siehe die Beispiele für {{domxref("SubtleCrypto.encrypt()")}} und {{domxref("SubtleCrypto.decrypt()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "RSA-OAEP"-Algorithmus für die Methoden {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- {{domxref("SubtleCrypto.encrypt()")}}.
- {{domxref("SubtleCrypto.decrypt()")}}.
- {{domxref("SubtleCrypto.wrapKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
