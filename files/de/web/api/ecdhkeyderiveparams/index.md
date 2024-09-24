---
title: EcdhKeyDeriveParams
slug: Web/API/EcdhKeyDeriveParams
l10n:
  sourceCommit: 223d903a52fb6a381b7c14f10e956822af38930c
---

{{ APIRef("Web Crypto API") }}

Das **`EcdhKeyDeriveParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.deriveKey()")}} und {{domxref("SubtleCrypto.deriveBits()")}} übergeben werden sollte, wenn die [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh)- oder [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519)-Algorithmen verwendet werden.

ECDH ermöglicht es zwei Personen, die jeweils ein Schlüsselpaar aus einem öffentlichen und einem privaten Schlüssel haben, ein gemeinsames Geheimnis abzuleiten. Sie tauschen öffentliche Schlüssel aus und verwenden die Kombination ihres privaten Schlüssels mit dem öffentlichen Schlüssel der anderen Partei, um einen geheimen Schlüssel abzuleiten, den nur sie — und niemand sonst — teilen.

Die Parameter für ECDH `deriveKey()` beinhalten daher den öffentlichen Schlüssel der anderen Partei, der mit diesem privaten Schlüssel kombiniert wird, um das gemeinsame Geheimnis abzuleiten.

## Instanz-Eigenschaften

- `name`
  - : Ein String.
    Dieser sollte auf `ECDH` oder `X25519` gesetzt werden, abhängig von dem verwendeten Algorithmus.
- `public`
  - : Ein {{domxref("CryptoKey")}}-Objekt, das den öffentlichen Schlüssel der anderen Partei repräsentiert.

## Beispiele

Siehe die Beispiele für {{domxref("SubtleCrypto.deriveKey()")}} und {{domxref("SubtleCrypto.deriveBits()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "ECDH" oder "X25519"-Algorithmus für die Methode {{domxref("SubtleCrypto.deriveKey()")}} unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- {{domxref("SubtleCrypto.deriveKey()")}}.
- {{domxref("SubtleCrypto.deriveBits()")}}.
