---
title: EcdsaParams
slug: Web/API/EcdsaParams
l10n:
  sourceCommit: 049632675ccb83fe2e257c43071d366d3f80ee2b
---

{{ APIRef("Web Crypto API") }}

Das **`EcdsaParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.sign()")}} oder {{domxref("SubtleCrypto.verify()")}} übergeben werden sollte, wenn der [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa)-Algorithmus verwendet wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `ECDSA` gesetzt werden.
- `hash`

  - : Ein String. Ein Kennzeichner für den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest). Dies sollte einer der folgenden sein:

    - `SHA-256`: wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-384`: wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-512`: wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.

    > **Warning:** `SHA-1` wird hier ebenfalls unterstützt, aber der [SHA-1](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus gilt als unsicher und sollte nicht mehr verwendet werden.

## Beispiele

Siehe die Beispiele für {{domxref("SubtleCrypto.sign()")}} oder {{domxref("SubtleCrypto.verify()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "ECDSA"-Algorithmus für die Methoden {{domxref("SubtleCrypto.sign()")}} und {{domxref("SubtleCrypto.verify()")}} unterstützen, werden diesen Typ unterstützen.

{{Compat}}

## Siehe auch

- {{domxref("SubtleCrypto.sign()")}} und {{domxref("SubtleCrypto.verify()")}}.
