---
title: HmacKeyGenParams
slug: Web/API/HmacKeyGenParams
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("Web Crypto API") }}

Das **`HmacKeyGenParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter an [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden sollte, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus generiert wird.

## Instanzeigenschaften

- `name`
  - : Ein String. Dies sollte auf `HMAC` gesetzt werden.
- `hash`
  - : Ein String, der den Namen der zu verwendenden [Digest-Funktion](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) darstellt. Sie können hier `SHA-1`, `SHA-256`, `SHA-384` oder `SHA-512` verwenden.
- `length` {{optional_inline}}
  - : Eine `Number` — die Länge des Schlüssels in Bits. Wenn dies ausgelassen wird, entspricht die Schlüssellänge der Blockgröße der gewählten Hash-Funktion. Sofern Sie keinen besonderen Grund haben, eine andere Länge zu verwenden, lassen Sie diese Eigenschaft weg und verwenden Sie die Standardeinstellung.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HMAC"-Algorithmus für die Methode [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).
