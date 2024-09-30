---
title: EcdhKeyDeriveParams
slug: Web/API/EcdhKeyDeriveParams
l10n:
  sourceCommit: 223d903a52fb6a381b7c14f10e956822af38930c
---

{{ APIRef("Web Crypto API") }}

Das **`EcdhKeyDeriveParams`** Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm` Parameter in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) und [`SubtleCrypto.deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits) übergeben werden sollte, wenn die Algorithmen [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) oder [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) verwendet werden.

ECDH ermöglicht es zwei Personen, die jeweils ein Schlüsselpaar bestehend aus einem öffentlichen und einem privaten Schlüssel besitzen, ein gemeinsames Geheimnis abzuleiten. Sie tauschen öffentliche Schlüssel aus und verwenden die Kombination aus ihrem privaten Schlüssel und dem öffentlichen Schlüssel der anderen Entität, um einen geheimen Schlüssel abzuleiten, den nur sie — und niemand sonst — teilen.

Die Parameter für ECDH `deriveKey()` beinhalten daher den öffentlichen Schlüssel der anderen Entität, der mit dem privaten Schlüssel dieser Entität kombiniert wird, um das gemeinsame Geheimnis abzuleiten.

## Instanzeigenschaften

- `name`
  - : Ein String.
    Dieser sollte auf `ECDH` oder `X25519` gesetzt werden, abhängig vom verwendeten Algorithmus.
- `public`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey) Objekt, das den öffentlichen Schlüssel der anderen Entität repräsentiert.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) und [`SubtleCrypto.deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "ECDH" oder "X25519" Algorithmus für die [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) Methode unterstützen, werden diesen Typ ebenfalls unterstützen.

## Siehe auch

- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).
- [`SubtleCrypto.deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits)
