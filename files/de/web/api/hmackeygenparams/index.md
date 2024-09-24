---
title: HmacKeyGenParams
slug: Web/API/HmacKeyGenParams
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("Web Crypto API") }}

Das **`HmacKeyGenParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.generateKey()")}} übergeben werden sollte, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus generiert wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `HMAC` gesetzt werden.
- `hash`
  - : Ein String, der den Namen der zu verwendenden [Digest-Funktion](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) darstellt. Sie können hier einen der folgenden Werte übergeben: `SHA-1`, `SHA-256`, `SHA-384` oder `SHA-512`.
- `length` {{optional_inline}}
  - : Eine `Nummer` — die Länge in Bits des Schlüssels. Wenn dies ausgelassen wird, entspricht die Länge des Schlüssels der Blockgröße der von Ihnen gewählten Hash-Funktion. Sofern Sie keinen triftigen Grund haben, eine andere Länge zu verwenden, lassen Sie diese Eigenschaft aus und verwenden Sie die Standardeinstellung.

## Beispiele

Siehe die Beispiele für {{domxref("SubtleCrypto.generateKey()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HMAC"-Algorithmus für die {{domxref("SubtleCrypto.generateKey()")}}-Methode unterstützen, unterstützen diesen Typ.

## Siehe auch

- {{domxref("SubtleCrypto.generateKey()")}}.
