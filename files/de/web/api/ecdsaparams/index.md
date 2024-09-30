---
title: EcdsaParams
slug: Web/API/EcdsaParams
l10n:
  sourceCommit: 049632675ccb83fe2e257c43071d366d3f80ee2b
---

{{ APIRef("Web Crypto API") }}

Das **`EcdsaParams`** Wörterbuch des [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) oder [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify) übergeben werden soll, wenn der [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) Algorithmus verwendet wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `ECDSA` gesetzt sein.
- `hash`

  - : Ein String. Ein Bezeichner für den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest). Dies sollte einer der folgenden sein:

    - `SHA-256`: wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) Algorithmus.
    - `SHA-384`: wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) Algorithmus.
    - `SHA-512`: wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) Algorithmus.

    > **Warning:** `SHA-1` wird hier ebenfalls unterstützt, aber der [SHA-1](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) Algorithmus wird als anfällig angesehen und sollte nicht mehr verwendet werden.

## Beispiele

Sehen Sie die Beispiele für [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) oder [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "ECDSA"-Algorithmus für die Methoden [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) und [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify) unterstützen, werden diesen Typ unterstützen.

{{Compat}}

## Siehe auch

- [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) und [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify).
