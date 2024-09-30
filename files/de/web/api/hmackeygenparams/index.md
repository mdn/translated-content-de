---
title: HmacKeyGenParams
slug: Web/API/HmacKeyGenParams
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("Web Crypto API") }}

Das **`HmacKeyGenParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden sollte, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus generiert wird.

## Instanzeigenschaften

- `name`
  - : Ein String. Dies sollte auf `HMAC` gesetzt werden.
- `hash`
  - : Ein String, der den Namen der zu verwendenden [Verdauungsfunktion](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) repräsentiert. Sie können hier eines der folgenden verwenden: `SHA-1`, `SHA-256`, `SHA-384` oder `SHA-512`.
- `length` {{optional_inline}}
  - : Eine `Number` — die Länge in Bits des Schlüssels. Wenn dies weggelassen wird, ist die Länge des Schlüssels gleich der Blockgröße der von Ihnen gewählten Hash-Funktion. Sofern Sie keinen triftigen Grund haben, eine andere Länge zu verwenden, lassen Sie diese Eigenschaft weg und nutzen Sie den Standardwert.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HMAC"-Algorithmus für die Methode [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).
