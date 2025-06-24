---
title: EcdsaParams
slug: Web/API/EcdsaParams
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ APIRef("Web Crypto API") }}

Das **`EcdsaParams`**-Wörterbuch des [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) oder [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify) beim Verwenden des [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa)-Algorithmus übergeben werden sollte.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `ECDSA` gesetzt werden.
- `hash`

  - : Ein String oder ein Objekt, das eine einzelne Eigenschaft namens `name` mit einem String-Wert enthält. Es ist ein Identifier für den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest). Dies sollte einer der folgenden sein:

    - `SHA-256`: wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-384`: wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-512`: wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.

    > [!WARNING] > `SHA-1` wird hier auch unterstützt, aber der [SHA-1](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus wird als anfällig betrachtet und sollte nicht mehr verwendet werden.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) oder [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "ECDSA"-Algorithmus für die Methoden [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) und [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify) unterstützen, werden diesen Typ unterstützen.

{{Compat}}

## Siehe auch

- [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) und [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify).
